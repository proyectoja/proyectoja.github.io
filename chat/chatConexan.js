(async function () {

  // ============================
  // SISTEMA DE NOTIFICACIONES
  // ============================
  const notificacionesBase = [
    {
      id: 101,
      imagen: "//proyectoja.github.io/images/arcan-player-bannerUno.png",
      titulo: "ARCAN PLAYER",
      descripcion: "Reproductor de audio y video con interfaz moderna, ecualizador, listas de reproduccion y mas.",
      fecha: "2026-08-18",
      categoria: "promo-app",
      enlace: "arcan.html",
      leida: false,
    },
    {
      id: 102,
      imagen: "//proyectoja.github.io/images/arcan-player-bannerVerticalPublicidad.png",
      titulo: "ARCAN PLAYER - PUBLICIDAD",
      descripcion: "Mira nuestro contenido promocional y descubre todas las funciones del reproductor.",
      fecha: "2026-08-18",
      categoria: "promo-app",
      enlace: "arcan.html",
      leida: false,
    },
    {
      id: 100,
      imagen: "//proyectoja.github.io/images/himnario-banner.png",
      titulo: "HIMNARIO ADVENTISTA PRO",
      descripcion: "Descarga la ultima version del Himnario Adventista PRO con todas las canciones, acordes, buscador avanzado y mas.",
      fecha: "2026-08-18",
      categoria: "promo-app",
      enlace: "himnario.html",
      leida: false,
    },
    {
      id: 3,
      titulo: "Apoyo al proyecto",
      descripcion: "Querida comunidad, queremos compartirles algo con total transparencia y respeto. Por el momento, las actualizaciones quedarán en pausa hasta alcanzar las 100 suscripciones activas. Este proyecto se mantiene gracias al apoyo real de quienes creen en él. Cada mejora, corrección y nueva función requiere tiempo, recursos y compromiso, y llegar a esa meta nos permitirá seguir avanzando con la calidad y dedicación que ustedes merecen. No es una despedida, es una pausa consciente. Una invitación a reflexionar, a valorar el trabajo detrás de cada actualización y, si este proyecto ha sido de bendición para ti, a considerar apoyarlo para que pueda seguir creciendo. Gracias por estar, por usarlo y por creer. Con su apoyo, esto no se detiene, se fortalece",
      fecha: "2026-01-14",
      categoria: "anuncio",
      leida: false,
    },
    {
      id: 2,
      imagen: "//proyectoja.github.io/promocionUno.png",
      titulo: "PROMOCIÓN EN NUESTRAS REDES SOCIALES",
      descripcion:
        "Puedes ir a nuestra página de Facebook y encontrar la información de nuestra promoción para obtener un código premium durante un año.",
      fecha: "2026-01-01",
      categoria: "promocion",
      leida: false,
    },
    {
      id: 1,
      titulo: "Recordatorio de actualización",
      descripcion:
        "Mantén tu aplicación actualizada para disfrutar de todas las funciones y correcciones de seguridad. Este software está en constante actualización, cada semana se actualiza para mejorar la estabilización, optimización, diseño, características y funcionalidades potentes. No es un error que te lleguen actualizaciones, es bueno que te lleguen, y puedas actualizar a la última versión siempre.",
      fecha: "2026-01-01",
      leida: false,
    },
  ];

  // Cargar estado de notificaciones desde localStorage
  function cargarNotificaciones() {
    const notificacionesGuardadas = localStorage.getItem(
      "HIMNARIO_NOTIFICACIONES"
    );

    if (notificacionesGuardadas) {
      try {
        const parsed = JSON.parse(notificacionesGuardadas);
        // Combinar con las notificaciones base, manteniendo el estado leído
        return notificacionesBase.map((notifBase) => {
          const guardada = parsed.find((n) => n.id === notifBase.id);
          return guardada ? { ...notifBase, leida: guardada.leida } : notifBase;
        });
      } catch (e) {
        console.error("Error al cargar notificaciones:", e);
        return notificacionesBase;
      }
    }

    return notificacionesBase;
  }

  // Guardar estado de notificaciones en localStorage
  function guardarNotificaciones() {
    try {
      localStorage.setItem(
        "HIMNARIO_NOTIFICACIONES",
        JSON.stringify(notificaciones)
      );
    } catch (e) {
      console.error("Error al guardar notificaciones:", e);
    }
  }

  // Inicializar notificaciones
  const notificaciones = cargarNotificaciones();

  // Crear overlay de notificaciones
  const notificacionesOverlay = document.createElement("div");
  notificacionesOverlay.id = "notificaciones-himnario";
  notificacionesOverlay.style.cssText = `
      position: fixed;
      top: 0;
      right: 0;
      width: 380px;
      max-height: 100vh;
      background: #0a0a0a;
      color: #fff;
      z-index: 9999998;
      display: none;
      flex-direction: column;
      font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif;
      box-shadow: -8px 0 40px rgba(0,0,0,0.6);
      overflow: hidden;
  `;

  notificacionesOverlay.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: #111; border-bottom: 1px solid #1a1a1a;">
          <span style="font-size: 11px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: #ccc;">Avisos</span>
          <button id="cerrarNotificaciones" style="
              background: none;
              border: 1px solid #444;
              color: #aaa;
              width: 24px;
              height: 24px;
              border-radius: 4px;
              cursor: pointer;
              font-size: 14px;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.15s ease;
              line-height: 1;
          ">X</button>
      </div>
      <div id="listaNotificaciones" style="
          flex: 1;
          overflow-y: auto;
          padding: 8px;
          max-height: calc(100vh - 44px);
      "></div>
      <div style="padding: 8px 16px; border-top: 1px solid #1a1a1a; display: flex; gap: 6px;">
          <button id="marcarTodasLeidas" style="
              flex: 1;
              background: #161616;
              border: 1px solid #333;
              color: #aaa;
              padding: 7px 0;
              border-radius: 4px;
              cursor: pointer;
              font-size: 11px;
              font-weight: 500;
              letter-spacing: 0.5px;
              transition: all 0.15s ease;
          ">Marcar leidas</button>
      </div>
  `;

  document.body.appendChild(notificacionesOverlay);

  // Función para mostrar notificaciones
  function mostrarNotificaciones() {
    const lista = document.getElementById("listaNotificaciones");
    if (!lista) return;

    lista.innerHTML = "";

    notificaciones.forEach((notif) => {
      const notifElement = document.createElement("div");
      notifElement.style.cssText = `
          background: ${notif.leida ? "#111" : "#141414"};
          border-radius: 6px;
          padding: ${notif.imagen ? "0" : "10px 12px"};
          margin-bottom: 4px;
          border: 1px solid ${notif.leida ? "#1a1a1a" : "#1f1f1f"};
          cursor: pointer;
          transition: background 0.15s ease;
      `;
      notifElement.onmouseenter = () => {
        notifElement.style.background = "#1a1a1a";
      };
      notifElement.onmouseleave = () => {
        notifElement.style.background = notif.leida ? "#111" : "#141414";
      };
      notifElement.onclick = () => {
        notif.leida = true;
        guardarNotificaciones();
        actualizarContadorNotificaciones();
        if (notif.enlace) {
          window.location.href = notif.enlace;
        } else {
          mostrarNotificaciones();
        }
      };

      let contenidoNotificacion = "";

      if (notif.imagen) {
        contenidoNotificacion += `
          <div style="overflow: hidden;">
            <img src="${notif.imagen}" alt="${notif.titulo}" style="width: 100%; display: block; object-fit: cover;">
          </div>
        `;
      }

      contenidoNotificacion += `
          <div style="padding: ${notif.imagen ? "8px 12px 10px" : "0"};">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 3px;">
                  <span style="font-size: 15px; font-weight: 700; color: #fff; line-height: 1.3;">${notif.titulo}</span>
                  ${!notif.leida ? '<span style="width: 6px; height: 6px; border-radius: 50%; background: #c0392b; flex-shrink: 0; margin-left: 6px;"></span>' : ""}
              </div>
              <p style="margin: 0; font-size: 13px; line-height: 1.4; color: #bbb;">${notif.descripcion}</p>
              <span style="font-size: 12px; color: #888; margin-top: 4px; display: block;">${notif.fecha}</span>
          </div>
      `;

      notifElement.innerHTML = contenidoNotificacion;
      lista.appendChild(notifElement);
    });

    notificacionesOverlay.style.display = "flex";
    notificacionesOverlay.style.animation = "notifSlideIn 0.25s ease-out";
  }

  // Función para ocultar notificaciones
  function ocultarNotificaciones() {
    notificacionesOverlay.style.animation = "notifSlideOut 0.2s ease-in";
    setTimeout(() => {
      notificacionesOverlay.style.display = "none";
    }, 200);
  }

  // Función para marcar todas como leídas
  function marcarTodasLeidas() {
    notificaciones.forEach((notif) => (notif.leida = true));
    guardarNotificaciones(); // Guardar en localStorage
    mostrarNotificaciones();
  }

  // Configurar eventos
  setTimeout(() => {
    const btnCerrar = document.getElementById("cerrarNotificaciones");
    const btnMarcarTodas = document.getElementById("marcarTodasLeidas");

    if (btnCerrar) {
      btnCerrar.onclick = ocultarNotificaciones;
      btnCerrar.onmouseenter = () => {
        btnCerrar.style.borderColor = "#444";
        btnCerrar.style.color = "#aaa";
      };
      btnCerrar.onmouseleave = () => {
        btnCerrar.style.borderColor = "#333";
        btnCerrar.style.color = "#666";
      };
    }

    if (btnMarcarTodas) {
      btnMarcarTodas.onclick = marcarTodasLeidas;
      btnMarcarTodas.onmouseenter = () => {
        btnMarcarTodas.style.borderColor = "#555";
        btnMarcarTodas.style.color = "#ddd";
      };
      btnMarcarTodas.onmouseleave = () => {
        btnMarcarTodas.style.borderColor = "#333";
        btnMarcarTodas.style.color = "#aaa";
      };
    }
  }, 100);

  // Agregar estilos de animación
  const estiloAnimaciones = document.createElement("style");
  estiloAnimaciones.textContent = `
      @keyframes notifSlideIn {
          from { opacity: 0; transform: translateX(100%); }
          to { opacity: 1; transform: translateX(0); }
      }
      
      @keyframes notifSlideOut {
          from { opacity: 1; transform: translateX(0); }
          to { opacity: 0; transform: translateX(100%); }
      }

      @keyframes chatRTSlideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
      }
      
      #notificaciones-himnario::-webkit-scrollbar {
          width: 4px;
      }
      
      #notificaciones-himnario::-webkit-scrollbar-track {
          background: transparent;
      }
      
      #notificaciones-himnario::-webkit-scrollbar-thumb {
          background: #222;
          border-radius: 2px;
      }
      
      #notificaciones-himnario::-webkit-scrollbar-thumb:hover {
          background: #333;
      }
      
      #notificaciones-himnario::-webkit-scrollbar-corner {
          background: transparent;
      }
      
      #notificaciones-himnario {
          scrollbar-width: thin;
          scrollbar-color: #222 transparent;
      }

      @keyframes chatEntrar {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
      }

      @keyframes chatPulse {
          0%, 80%, 100% { opacity: 0.25; transform: scale(0.85); }
          40% { opacity: 1; transform: scale(1); }
      }

      @keyframes chatRTSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
      }

      @keyframes chatRTShimmer {
          from { background-position: -200px 0; }
          to { background-position: calc(200px + 100%) 0; }
      }

      @keyframes chatRTEmojiSlide {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
      }

      @keyframes chatRTEmojiSlideOut {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(100%); opacity: 0; }
      }

      #chat-ia-overlay::-webkit-scrollbar { width: 4px; }
      #chat-ia-overlay::-webkit-scrollbar-track { background: transparent; }
      #chat-ia-overlay::-webkit-scrollbar-thumb { background: #222; border-radius: 2px; }
      #chat-ia-overlay::-webkit-scrollbar-thumb:hover { background: #333; }
      #chat-ia-overlay { scrollbar-width: thin; scrollbar-color: #222 transparent; }

      #chat-rt-overlay::-webkit-scrollbar { width: 4px; }
      #chat-rt-overlay::-webkit-scrollbar-track { background: transparent; }
      #chat-rt-overlay::-webkit-scrollbar-thumb { background: #222; border-radius: 2px; }
      #chat-rt-overlay::-webkit-scrollbar-thumb:hover { background: #333; }
      #chat-rt-overlay { scrollbar-width: thin; scrollbar-color: #222 transparent; }
  `;
  document.head.appendChild(estiloAnimaciones);

  // Mostrar notificaciones automáticamente después de 60 segundos (1 minuto) SOLO si hay no leídas
  setTimeout(() => {
    const hayNoLeidas = notificaciones.some((n) => !n.leida);
    if (hayNoLeidas) {
      mostrarNotificaciones();
    }
  }, 60000);

  // Crear botón flotante para abrir notificaciones manualmente
  const botonNotificaciones = document.createElement("button");
  botonNotificaciones.id = "botonAbrirNotificaciones";
  botonNotificaciones.style.cssText = `
      position: fixed;
      bottom: 15px;
      right: 15px;
      width: 32px;
      height: 32px;
      background: rgba(30, 30, 50, 0.85);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 50%;
      cursor: pointer;
      z-index: 9999997;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      transition: all 0.25s ease;
      padding: 0;
      backdrop-filter: blur(10px);
  `;

  // Crear botón flotante de IA
  const botonIA = document.createElement("button");
  botonIA.id = "botonIA";
  botonIA.style.cssText = `
      position: fixed;
      bottom: 15px;
      right: 55px;
      width: 32px;
      height: 32px;
      background: rgba(30, 30, 50, 0.85);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 50%;
      cursor: pointer;
      z-index: 9999997;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      transition: all 0.25s ease;
      padding: 0;
      backdrop-filter: blur(10px);
      overflow: hidden;
  `;
  botonIA.innerHTML = '<svg width="18" height="18" viewBox="0 0 256 208" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M205.28,31.36 C219.376,46.24 225.296,66.56 227.792,95.04 C234.417867,95.04 240.5968,96.5093333 244.768,102.192 L252.56,112.752 C254.8,115.792 256,119.424 256,123.2 L256,151.888 C255.992,155.592267 254.1568,159.203467 251.168,161.392 C215.885333,187.222133 172.3496,208 128,208 C78.9344,208 29.8098667,179.726667 4.832,161.392 C1.84330667,159.203467 0.00722666667,155.592267 0,151.888 L0,123.2 C0,119.424 1.2,115.776 3.424,112.736 L11.216,102.192 C15.3891733,96.5349333 21.5953067,95.04 28.208,95.04 C30.704,66.56 36.608,46.24 50.72,31.36 C77.3312,3.1648 112.56728,0.06016 127.552142,0.00088672 L128,0 C142.72,0 178.4,2.88 205.28,31.36 Z M128.016,78.736 C124.976,78.736 121.472,78.912 117.744,79.28 C116.432,84.176 114.496,88.592 111.664,91.408 C100.464,102.608 86.96,104.336 79.728,104.336 C72.9258667,104.336 65.8005333,102.915733 59.984,99.248 C54.4816,101.056 49.1978667,103.6632 48.848,110.16 C48.2621333,122.440533 48.2112,134.709333 48.1602667,146.984 C48.1336,153.144533 48.1093333,159.3064 48.016,165.472 C48.04,169.050667 50.1978667,172.3752 53.456,173.856 C79.936,185.92 104.976,192 128.016,192 C151.024,192 176.064,185.92 202.528,173.856 C205.786133,172.3752 207.9432,169.050667 207.968,165.472 C208.285333,147.0536 208.029867,128.560267 207.152,110.16 C206.826133,103.625867 201.520267,101.061867 196,99.248 C190.179467,102.899733 183.072533,104.336 176.272,104.336 C169.04,104.336 155.552,102.608 144.336,91.408 C141.504,88.592 139.568,84.176 138.256,79.28 C134.853333,78.9338667 131.436,78.7525333 128.016,78.736 Z M101.074933,122.666667 C106.8232,122.666667 111.4832,127.326667 111.4832,133.074933 L111.4832,152.2584 C111.4832,158.006667 106.8232,162.666667 101.074933,162.666667 C95.3266667,162.666667 90.6666667,158.006667 90.6666667,152.2584 L90.6666667,133.074933 C90.6666667,127.326667 95.3266667,122.666667 101.074933,122.666667 Z M154.408267,122.666667 C160.156533,122.666667 164.816533,127.326667 164.816533,133.074933 L164.816533,152.2584 C164.816533,158.006667 160.156533,162.666667 154.408267,162.666667 C148.66,162.666667 144,158.006667 144,152.2584 L144,133.074933 C144,127.326667 148.66,122.666667 154.408267,122.666667 Z M81.44,28.32 C70.24,29.44 60.8,33.12 56,38.24 C45.6,49.6 47.84,78.4 53.76,84.48 C58.08,88.8 66.24,91.68 75.04,91.68 C81.76,91.68 94.56,90.24 105.12,79.52 C109.76,75.04 112.64,63.84 112.32,52.48 C112,43.36 109.44,35.84 105.6,32.64 C101.44,28.96 92,27.36 81.44,28.32 Z M150.4,32.64 C146.56,35.84 144,43.36 143.68,52.48 C143.36,63.84 146.24,75.04 150.88,79.52 C161.44,90.24 174.24,91.68 180.96,91.68 C189.76,91.68 197.92,88.8 202.24,84.48 C208.16,78.4 210.4,49.6 200,38.24 C195.2,33.12 185.76,29.44 174.56,28.32 C164,27.36 154.56,28.96 150.4,32.64 Z M128,56 C125.44,56 122.4,56.16 119.04,56.48 C119.36,58.24 119.52,60.16 119.68,62.24 C119.68,63.68 119.68,65.12 119.52,66.72 C122.72,66.4 125.44,66.4 128,66.4 C130.559733,66.4 133.28,66.4 136.48,66.72 C136.32,65.12 136.32,63.68 136.32,62.24 C136.48,60.16 136.64,58.24 136.96,56.48 C133.6,56.16 130.56,56 128,56 Z" fill="#ffffff"></path></svg>';

  botonIA.addEventListener("mouseenter", () => {
    botonIA.style.transform = "scale(1.15)";
    botonIA.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.4)";
  });

  botonIA.addEventListener("mouseleave", () => {
    botonIA.style.transform = "none";
    botonIA.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
  });

  // ============================
  //  SISTEMA DE CHAT IA (Vercel Backend)
  // ============================
  const CHAT_API_URL = location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? "https://proyectoja-github-io.vercel.app/api/chat"
    : "/api/chat";
  const CONTEXTO_MAX_TOKENS = 1200;
  const CONTEXTO_MAX_MENSAJES = 30;

  const chatSession = localStorage.getItem("ia_session") || ("web_" + Date.now().toString(36));
  localStorage.setItem("ia_session", chatSession);

  let chatHistorial = {};
  try {
    const guardado = localStorage.getItem("ia_historial");
    if (guardado) chatHistorial = JSON.parse(guardado);
  } catch (e) { chatHistorial = {}; }

  function guardarHistorialChat() {
    try { localStorage.setItem("ia_historial", JSON.stringify(chatHistorial)); } catch (e) {}
  }

  function estimarTokens(texto) {
    return Math.ceil(String(texto || "").length / 4);
  }

  function construirMensajes(senderId, nuevoTexto, sistema) {
    const key = senderId + "_esperancita";
    const entrada = chatHistorial[key] || { msgs: [] };
    entrada.msgs.push({ role: "user", text: nuevoTexto, ts: Date.now() });
    chatHistorial[key] = entrada;
    guardarHistorialChat();

    let tokensUsados = 0;
    const seleccionados = [];
    for (let i = entrada.msgs.length - 1; i >= 0; i--) {
      if (seleccionados.length >= CONTEXTO_MAX_MENSAJES) break;
      const m = entrada.msgs[i];
      const t = estimarTokens(m.text);
      if (seleccionados.length > 0 && tokensUsados + t > CONTEXTO_MAX_TOKENS) break;
      seleccionados.unshift(m);
      tokensUsados += t;
    }

    const mensajes = [{ role: "system", content: sistema }];
    for (const m of seleccionados) {
      mensajes.push({ role: m.role, content: m.text });
    }
    return mensajes;
  }

  function guardarRespuesta(senderId, respuesta) {
    const key = senderId + "_esperancita";
    const entrada = chatHistorial[key] || { msgs: [] };
    entrada.msgs.push({ role: "assistant", text: respuesta, ts: Date.now() });
    chatHistorial[key] = entrada;
    guardarHistorialChat();
  }

  function detectarIdioma(texto) {
    if (/[ñáéíóúü]/.test(texto)) return "español";
    const t = texto.toLowerCase();
    const ptsEsp = (t.match(/\b(el|la|los|las|que|por|para|hola|gracias|muy|pero|porque|entonces|eres|somos|soy|días|señor|mundo|dios|iglesia|fe|amor|paz|biblia|familia|trabajo|escuela|amigo|tiempo|hoy|mañana|ayer|semana|año|si|no|ya|bien|mal|más|todo|nada|algo|otro|cuando|donde|como|quien|este|esta|estos|estas|ese|esa|esos|esas|nuestro|nuestra|yo|tú|él|ella|usted|nosotros|ellos|ellas|me|te|se|nos|lo|la|le|los|las|les|mi|tu|su|mis|tus|sus|vamos|voy|vas|va|van)\b/g) || []).length;
    const ptsEng = (t.match(/\b(the|a|an|and|or|for|with|hello|hi|thanks|you|please|help|what|where|when|why|how|who|which|this|that|these|those|is|am|are|was|were|have|has|had|do|does|did|will|would|can|could|god|jesus|lord|bible|faith|love|hope|peace|church|life|time|today|tomorrow|yes|no|not|very|just|good|bad|big|small|new|old|great|more|most|other|here|there|in|out|on|off|over|under|before|after|from|about|because|while|then|than)\b/g) || []).length;
    if (ptsEsp > ptsEng && ptsEsp > 0) return "español";
    if (ptsEng > ptsEsp && ptsEng > 0) return "inglés";
    if (ptsEsp > 0) return "español";
    return null;
  }

  async function enviarAlServidor(mensajes) {
    try {
      const res = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: mensajes }),
      });
      const data = await res.json();
      if (!res.ok) {
        return { error: data.error || "Error del servidor" };
      }
      return data.respuesta || null;
    } catch (e) {
      return { error: "Sin conexion al servidor" };
    }
  }

  async function responderChat(textoDetectar) {
    const idioma = detectarIdioma(textoDetectar);
    let instruccionIdioma = "";
    if (idioma === "inglés") {
      instruccionIdioma = "\nRESPOND EXACTLY IN ENGLISH. Do not translate.";
    } else if (idioma === "español") {
      instruccionIdioma = "\nRESPONDE EXACTAMENTE EN ESPAÑOL. NO traduzcas.";
    }

    const sistema = idioma === "inglés"
      ? "You are a helpful, natural, and friendly AI assistant. Be direct and concise. Never use vulgar words. When the user asks about Himnario Adventista PRO or Arcan Player, answer with the available information. If the user asks biblical or ministry questions, answer with love and wisdom. Never share websites, source code, links, or anything unrelated to the ministry or these applications. Your focus is serving the church." + instruccionIdioma
      : "Eres un asistente IA util, natural y amigable. Habla directo, con buena onda. Nunca uses palabras vulgares. Cuando el usuario pregunte sobre Himnario Adventista PRO o Arcan Player, responde con la informacion que tengas disponible. Explica que hace, como se usa, y que opciones tiene. Si el usuario hace preguntas biblicas o del ministerio, responde con amor y sabiduria. Nunca compartas paginas web, codigo fuente, enlaces, ni nada que no este relacionado con el ministerio o estas aplicaciones. Tu enfoque es servir a la iglesia." + instruccionIdioma;

    const mensajes = construirMensajes(chatSession, textoDetectar, sistema);

    const resultado = await enviarAlServidor(mensajes);

    if (typeof resultado === "object" && resultado.error) {
      return { error: resultado.error };
    }

    if (resultado && resultado.trim().length > 0) {
      guardarRespuesta(chatSession, resultado.trim());
      return { respuesta: resultado.trim() };
    }

    return { error: "Sin respuesta del asistente" };
  }

  // ============================
  //  PANEL DE CHAT
  // ============================
  const chatOverlay = document.createElement("div");
  chatOverlay.id = "chat-ia-overlay";
  chatOverlay.style.cssText = "position:fixed;top:0;right:0;width:380px;height:100vh;background:#0a0a0a;color:#fff;z-index:9999998;display:none;flex-direction:column;font-family:-apple-system,BlinkMacSystemFont,'Inter','Segoe UI',sans-serif;box-shadow:-8px 0 40px rgba(0,0,0,0.6);overflow:hidden;";
  chatOverlay.innerHTML = `
    <div id="chatResizeHandle" style="position:absolute;left:0;top:0;width:5px;height:100%;cursor:ew-resize;z-index:10;transition:background 0.15s;"></div>
    <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:#111;border-bottom:1px solid #1a1a1a;">
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="width:28px;height:28px;border-radius:8px;background:#A52A2A;display:flex;align-items:center;justify-content:center;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 0 1 5 5v1a5 5 0 0 1-10 0V7a5 5 0 0 1 5-5z"/><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4.5C7 3 9.5 2 12 2s5 1 5 2.5"/></svg>
        </div>
        <div>
          <div style="font-size:13px;font-weight:700;color:#fff;">Cortana</div>
          <div style="font-size:10px;color:#666;">Asistente IA</div>
        </div>
      </div>
      <button id="cerrarChatIA" style="background:none;border:1px solid #333;color:#888;width:24px;height:24px;border-radius:4px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;transition:all 0.15s ease;line-height:1;">X</button>
    </div>
    <div id="chatMensajes" style="flex:1;overflow-y:auto;padding:10px;display:flex;flex-direction:column;position:relative;"></div>
    <div style="padding:10px;border-top:1px solid #1a1a1a;background:#111;">
      <div style="display:flex;gap:8px;align-items:flex-end;">
        <textarea id="chatInput" rows="1" placeholder="Escribe tu mensaje..." style="flex:1;background:#161616;border:1px solid #222;color:#e8edf9;font-family:inherit;font-size:13px;line-height:1.5;padding:8px 12px;border-radius:8px;resize:none;max-height:100px;outline:none;transition:border-color 0.2s;"></textarea>
        <button id="chatEnviar" style="width:36px;height:36px;border:none;border-radius:8px;background:#A52A2A;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all 0.15s ease;" disabled>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/></svg>
        </button>
      </div>
      <div style="text-align:center;color:#444;font-size:10px;margin-top:6px;">Enter para enviar - Shift+Enter nueva linea</div>
    </div>
  `;
  document.body.appendChild(chatOverlay);

  (function() {
    let scrollRAF = null;
    const chatM = document.getElementById("chatMensajes");
    if (chatM) chatM.addEventListener("scroll", function() {
      if (scrollRAF) return;
      scrollRAF = requestAnimationFrame(function() {
        chatReconstruirConectores();
        scrollRAF = null;
      });
    });
  })();

  function mostrarChat() {
    chatOverlay.style.display = "flex";
    chatOverlay.style.animation = "notifSlideIn 0.25s ease-out";
    botonIA.style.display = "none";
    botonNotificaciones.style.display = "none";
    botonChatRT.style.display = "none";
    const chatMensajes = document.getElementById("chatMensajes");
    if (chatMensajes) chatMensajes.scrollTop = chatMensajes.scrollHeight;
    setTimeout(() => {
      chatReconstruirConectores();
      const inp = document.getElementById("chatInput");
      if (inp) inp.focus();
    }, 300);
  }

  function ocultarChat() {
    chatOverlay.style.animation = "notifSlideOut 0.2s ease-in";
    setTimeout(() => {
      chatOverlay.style.display = "none";
      botonIA.style.display = "flex";
      botonNotificaciones.style.display = "flex";
      botonChatRT.style.display = "flex";
    }, 200);
  }

  function chatParsearMarkdown(texto) {
    const lineas = texto.split("\n");
    let html = "";
    let enLista = false;
    let enTabla = false;

    for (let i = 0; i < lineas.length; i++) {
      let l = lineas[i];

      // Separar: si empieza con "> ", es blockquote
      if (/^>\s?/.test(l)) {
        if (enLista) { html += enLista === "ol" ? "</ol>" : "</ul>"; enLista = false; }
        if (enTabla) { html += "</table>"; enTabla = false; }
        l = l.replace(/^>\s?/, "");
        html += '<blockquote style="border-left:3px solid #A52A2A;padding-left:10px;margin:6px 0;color:#aaa;font-style:italic;">' + l + '</blockquote>';
        continue;
      }

      // Linea horizontal: "---" o "***"
      if (/^[-*]{3,}$/.test(l.trim())) {
        if (enLista) { html += enLista === "ol" ? "</ol>" : "</ul>"; enLista = false; }
        if (enTabla) { html += "</table>"; enTabla = false; }
        html += '<hr style="border:none;border-top:1px solid #333;margin:8px 0;">';
        continue;
      }

      // Tabla markdown: "| col1 | col2 |"
      if (/^\|(.+)\|$/.test(l.trim())) {
        if (enLista) { html += enLista === "ol" ? "</ol>" : "</ul>"; enLista = false; }

        // Separador de tabla: "|---|---|"
        if (/^\|[\s\-:|]+\|$/.test(l.trim())) continue;

        const celdas = l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(c => c.trim());

        if (!enTabla) {
          html += '<div style="margin:8px 0;">';
          html += '<table style="width:100%;border-collapse:collapse;font-size:12px;table-layout:auto;">';
          html += '<thead><tr>';
          for (const c of celdas) html += '<th style="background:#1a1a2e;border:1px solid #333;padding:5px 8px;text-align:left;color:#ddd;">' + c + '</th>';
          html += '</tr></thead><tbody>';
          enTabla = true;
        } else {
          html += '<tr>';
          for (const c of celdas) html += '<td style="border:1px solid #333;padding:4px 8px;color:#ccc;">' + c + '</td>';
          html += '</tr>';
        }
        continue;
      }

      // Cerrar tabla si la linea no es de tabla
        if (enTabla) { html += "</tbody></table></div>"; enTabla = false; }

      // Escapes HTML
      l = l.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

      // Headers: ### ? h5, ## ? h4, # ? h3
      const h3 = l.match(/^###\s+(.+)/);
      const h4 = l.match(/^##\s+(.+)/);
      const h5 = l.match(/^#\s+(.+)/);
      if (h3) {
        if (enLista) { html += enLista === "ol" ? "</ol>" : "</ul>"; enLista = false; }
        html += '<div style="font-size:14px;font-weight:bold;color:#ddd;margin:8px 0 4px 0;">' + h3[1] + '</div>';
        continue;
      } else if (h4) {
        if (enLista) { html += enLista === "ol" ? "</ol>" : "</ul>"; enLista = false; }
        html += '<div style="font-size:13px;font-weight:bold;color:#ccc;margin:6px 0 3px 0;">' + h4[1] + '</div>';
        continue;
      } else if (h5) {
        if (enLista) { html += enLista === "ol" ? "</ol>" : "</ul>"; enLista = false; }
        html += '<div style="font-size:12px;font-weight:bold;color:#bbb;margin:4px 0 2px 0;">' + h5[1] + '</div>';
        continue;
      }

      // Lista numerada: "1. texto" o "1- texto"
      const numMatch = l.match(/^(\d+)[.\-]\s+(.+)/);
      // Lista con guion: "- texto"
      const guionMatch = l.match(/^[-*]\s+(.+)/);

      if (numMatch) {
        if (enLista !== "ol") { if (enLista) html += "</ul>"; html += "<ol>"; enLista = "ol"; }
        html += "<li>" + numMatch[2] + "</li>";
      } else if (guionMatch) {
        if (enLista !== "ul") { if (enLista) html += "</ol>"; html += "<ul>"; enLista = "ul"; }
        html += "<li>" + guionMatch[1] + "</li>";
      } else {
        if (enLista) { html += enLista === "ol" ? "</ol>" : "</ul>"; enLista = false; }
        html += l + "<br>";
      }
    }
    if (enLista) html += enLista === "ol" ? "</ol>" : "</ul>";
    if (enTabla) html += "</tbody></table></div>";

    html = html.replace(/<br>$/, "");
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
    return html;
  }

  function chatReconstruirConectores() {
    const chatMensajes = document.getElementById("chatMensajes");
    if (!chatMensajes) return;
    function offsetHasta(el, limit) {
      let t = 0, l = 0;
      while (el && el !== limit) { t += el.offsetTop; l += el.offsetLeft; el = el.offsetParent; }
      return { top: t, left: l };
    }
    function dibujarLinea(id, selector) {
      let linea = document.getElementById(id);
      if (!linea) {
        linea = document.createElement("div");
        linea.id = id;
        linea.style.cssText = "position:absolute;width:1px;background:#222233;pointer-events:none;z-index:0;";
        chatMensajes.appendChild(linea);
      }
      const items = chatMensajes.querySelectorAll(selector);
      if (items.length < 2) { linea.style.display = "none"; return; }
      linea.style.display = "";
      const avFirst = items[0].children[0].children[0];
      const avLast = items[items.length - 1].children[0].children[0];
      if (!avFirst || !avLast) { linea.style.display = "none"; return; }
      const pFirst = offsetHasta(avFirst, chatMensajes);
      const pLast = offsetHasta(avLast, chatMensajes);
      linea.style.left = (pFirst.left + 14) + "px";
      linea.style.top = (pFirst.top + 14) + "px";
      linea.style.height = Math.max(0, (pLast.top + 14) - (pFirst.top + 14)) + "px";
    }
    dibujarLinea("chatThreadLine", '[data-role="usuario"]');
    dibujarLinea("chatThreadLineIA", '[data-role="ia"]');
  }

  function chatAgregarMensaje(rol, texto) {
    const chatMensajes = document.getElementById("chatMensajes");
    if (!chatMensajes) return;
    const esUsuario = rol === "usuario";

    const wrapper = document.createElement("div");
    wrapper.style.cssText = "padding:3px 0;animation:chatEntrar 0.2s ease;position:relative;width:100%;";
    if (esUsuario) wrapper.setAttribute("data-role", "usuario");
    else wrapper.setAttribute("data-role", "ia");

    const row = document.createElement("div");
    row.style.cssText = "display:flex;gap:8px;max-width:92%;position:relative;" + (esUsuario ? "margin-left:auto;flex-direction:row-reverse;" : "");

    const avatarSvg = esUsuario
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.8"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 256 208" fill="#ddd"><path d="M205.28,31.36C219.376,46.24 225.296,66.56 227.792,95.04C234.418,95.04 240.597,96.509 244.768,102.192L252.56,112.752C254.8,115.792 256,119.424 256,123.2L256,151.888C255.992,155.592 254.157,159.203 251.168,161.392C215.885,187.222 172.35,208 128,208C78.934,208 29.81,179.727 4.832,161.392C1.843,159.203 0.007,155.592 0,151.888L0,123.2C0,119.424 1.2,115.776 3.424,112.736L11.216,102.192C15.389,96.509 21.595,95.04 28.208,95.04C30.704,66.56 36.608,46.24 50.72,31.36C77.331,3.165 112.567,0.06 127.552,0.001L128,0C142.72,0 178.4,2.88 205.28,31.36ZM128.016,78.736C124.976,78.736 121.472,78.912 117.744,79.28C116.432,84.176 114.496,88.592 111.664,91.408C100.464,102.608 86.96,104.336 79.728,104.336C72.926,104.336 65.801,102.916 59.984,99.248C54.482,101.056 49.198,103.663 48.848,110.16C48.262,122.441 48.211,134.709 48.16,146.984C48.134,153.145 48.109,159.306 48.016,165.472C48.04,169.051 50.198,172.375 53.456,173.856C79.936,185.92 104.976,192 128.016,192C151.024,192 176.064,185.92 202.528,173.856C205.786,172.375 207.943,169.051 207.968,165.472C208.285,147.054 208.03,128.56 207.152,110.16C206.826,103.626 201.52,101.062 196,99.248C190.179,102.9 183.073,104.336 176.272,104.336C169.04,104.336 155.552,102.608 144.336,91.408C141.504,88.592 139.568,84.176 138.256,79.28C134.853,78.934 131.436,78.753 128.016,78.736ZM101.075,122.667C106.823,122.667 111.483,127.327 111.483,133.075L111.483,152.258C111.483,158.007 106.823,162.667 101.075,162.667C95.327,162.667 90.667,158.007 90.667,152.258L90.667,133.075C90.667,127.327 95.327,122.667 101.075,122.667ZM154.408,122.667C160.156,122.667 164.816,127.327 164.816,133.075L164.816,152.258C164.816,158.007 160.156,162.667 154.408,162.667C148.66,162.667 144,158.007 144,152.258L144,133.075C144,127.327 148.66,122.667 154.408,122.667Z"/></svg>';

    const avatarBg = esUsuario ? "background:#161620;border:1px solid #222233;" : "background:#A52A2A;";
    const burbujaBg = esUsuario ? "background:#1a1a2e;border:1px solid #252540;border-top-right-radius:4px;color:#ccc;" : "background:#111118;border:1px solid #1a1a24;border-top-left-radius:4px;color:#ccc;";

    const textoRenderizado = "<em>" + chatParsearMarkdown(texto) + "</em>";

    const conectorPos = esUsuario ? "right:30px;" : "left:28px;";
    const conectorHTML = '<div style="position:absolute;top:14px;' + conectorPos + 'width:8px;height:1px;background:#222233;pointer-events:none;"></div>';
    row.innerHTML = '<div style="width:28px;height:28px;border-radius:8px;flex-shrink:0;display:flex;align-items:center;justify-content:center;' + avatarBg + '">' + avatarSvg + '</div>' + conectorHTML + '<div style="padding:9px 13px;border-radius:12px;font-size:13px;line-height:1.5;overflow-wrap:break-word;white-space:normal;max-width:calc(100vw - 120px);' + burbujaBg + '">' + textoRenderizado + '</div>';

    wrapper.appendChild(row);
    chatMensajes.appendChild(wrapper);
    chatMensajes.scrollTop = chatMensajes.scrollHeight;
    chatReconstruirConectores();
  }

  function chatMostrarTyping() {
    const chatMensajes = document.getElementById("chatMensajes");
    if (!chatMensajes) return;
    const div = document.createElement("div");
    div.id = "chatTyping";
    div.style.cssText = "display:flex;gap:8px;align-self:flex-start;animation:chatEntrar 0.2s ease;";
    div.innerHTML = '<div style="width:28px;height:28px;border-radius:8px;background:#A52A2A;flex-shrink:0;display:flex;align-items:center;justify-content:center;"><svg width="16" height="16" viewBox="0 0 256 208" fill="#ddd"><path d="M205.28,31.36C219.376,46.24 225.296,66.56 227.792,95.04C234.418,95.04 240.597,96.509 244.768,102.192L252.56,112.752C254.8,115.792 256,119.424 256,123.2L256,151.888C255.992,155.592 254.157,159.203 251.168,161.392C215.885,187.222 172.35,208 128,208C78.934,208 29.81,179.727 4.832,161.392C1.843,159.203 0.007,155.592 0,151.888L0,123.2C0,119.424 1.2,115.776 3.424,112.736L11.216,102.192C15.389,96.535 21.595,95.04 28.208,95.04C30.704,66.56 36.608,46.24 50.72,31.36C77.331,3.165 112.567,0.06 127.552,0.001L128,0C142.72,0 178.4,2.88 205.28,31.36ZM128.016,78.736C124.976,78.736 121.472,78.912 117.744,79.28C116.432,84.176 114.496,88.592 111.664,91.408C100.464,102.608 86.96,104.336 79.728,104.336C72.926,104.336 65.801,102.916 59.984,99.248C54.482,101.056 49.198,103.663 48.848,110.16C48.262,122.441 48.211,134.709 48.16,146.984C48.134,153.145 48.109,159.306 48.016,165.472C48.04,169.051 50.198,172.375 53.456,173.856C79.936,185.92 104.976,192 128.016,192C151.024,192 176.064,185.92 202.528,173.856C205.786,172.375 207.943,169.051 207.968,165.472C208.285,147.054 208.03,128.56 207.152,110.16C206.826,103.626 201.52,101.062 196,99.248C190.179,102.9 183.073,104.336 176.272,104.336C169.04,104.336 155.552,102.608 144.336,91.408C141.504,88.592 139.568,84.176 138.256,79.28C134.853,78.934 131.436,78.753 128.016,78.736ZM101.075,122.667C106.823,122.667 111.483,127.327 111.483,133.075L111.483,152.258C111.483,158.007 106.823,162.667 101.075,162.667C95.327,162.667 90.667,158.007 90.667,152.258L90.667,133.075C90.667,127.327 95.327,122.667 101.075,122.667ZM154.408,122.667C160.156,122.667 164.816,127.327 164.816,133.075L164.816,152.258C164.816,158.007 160.156,162.667 154.408,162.667C148.66,162.667 144,158.007 144,152.258L144,133.075C144,127.327 148.66,122.667 154.408,122.667Z"/></svg></div><div style="display:flex;align-items:center;gap:6px;color:#555;font-size:12px;">Escribiendo<span style="display:inline-flex;gap:3px;"><span style="width:5px;height:5px;border-radius:50%;background:#A52A2A;animation:chatPulse 1.2s infinite ease-in-out;"></span><span style="width:5px;height:5px;border-radius:50%;background:#A52A2A;animation:chatPulse 1.2s 0.15s infinite ease-in-out;"></span><span style="width:5px;height:5px;border-radius:50%;background:#A52A2A;animation:chatPulse 1.2s 0.3s infinite ease-in-out;"></span></span></div>';
    chatMensajes.appendChild(div);
    chatMensajes.scrollTop = chatMensajes.scrollHeight;
  }

  function chatQuitarTyping() {
    const t = document.getElementById("chatTyping");
    if (t) t.remove();
  }

  async function chatEnviar() {
    const inp = document.getElementById("chatInput");
    const btn = document.getElementById("chatEnviar");
    if (!inp) return;
    const texto = inp.value.trim();
    if (!texto) return;

    chatAgregarMensaje("usuario", texto);
    inp.value = "";
    inp.style.height = "auto";
    btn.disabled = true;

    chatMostrarTyping();

    const [resultado] = await Promise.all([
      responderChat(texto),
      new Promise(r => setTimeout(r, 3000))
    ]);
    chatQuitarTyping();

    if (resultado.error) {
      chatAgregarMensaje("ia", resultado.error);
    } else {
      chatAgregarMensaje("ia", resultado.respuesta);
    }
  }

  setTimeout(() => {
    const btnCerrar = document.getElementById("cerrarChatIA");
    const btnEnviar = document.getElementById("chatEnviar");
    const chatInput = document.getElementById("chatInput");

    if (btnCerrar) btnCerrar.onclick = ocultarChat;

    if (btnEnviar) {
      btnEnviar.onclick = chatEnviar;
      btnEnviar.onmouseenter = () => { if (!btnEnviar.disabled) btnEnviar.style.transform = "translateY(-1px)"; };
      btnEnviar.onmouseleave = () => { btnEnviar.style.transform = "none"; };
    }

    if (chatInput) {
      chatInput.addEventListener("input", () => {
        chatInput.style.height = "auto";
        chatInput.style.height = Math.min(chatInput.scrollHeight, 100) + "px";
        if (btnEnviar) btnEnviar.disabled = !chatInput.value.trim();
      });
      chatInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          chatEnviar();
        }
      });
      chatInput.onfocus = () => { chatInput.style.borderColor = "#A52A2A"; };
      chatInput.onblur = () => { chatInput.style.borderColor = "#222"; };
    }

    // Resize handle
    const resizeHandle = document.getElementById("chatResizeHandle");
    if (resizeHandle) {
      let resizing = false, startX, startW;
      resizeHandle.addEventListener("mousedown", (e) => {
        resizing = true;
        startX = e.clientX;
        startW = chatOverlay.offsetWidth;
        document.body.style.cursor = "ew-resize";
        document.body.style.userSelect = "none";
        resizeHandle.style.background = "#A52A2A";
        e.preventDefault();
      });
      document.addEventListener("mousemove", (e) => {
        if (!resizing) return;
        const diff = startX - e.clientX;
        const newW = Math.max(280, Math.min(700, startW + diff));
        chatOverlay.style.width = newW + "px";
      });
      document.addEventListener("mouseup", () => {
        if (!resizing) return;
        resizing = false;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        resizeHandle.style.background = "";
      });
      resizeHandle.addEventListener("mouseenter", () => { if (!resizing) resizeHandle.style.background = "rgba(165,42,42,0.3)"; });
      resizeHandle.addEventListener("mouseleave", () => { if (!resizing) resizeHandle.style.background = ""; });
    }

    // Cargar historial previo
    const chatMensajes = document.getElementById("chatMensajes");
    if (chatMensajes) {
      const key = chatSession + "_esperancita";
      const entrada = chatHistorial[key];
      if (entrada && entrada.msgs.length > 0) {
        for (const m of entrada.msgs) {
          chatAgregarMensaje(m.role === "user" ? "usuario" : "ia", m.text);
        }
      }
    }
  }, 100);

  botonIA.addEventListener("click", () => {
    if (chatOverlay.style.display === "flex") {
      ocultarChat();
    } else {
      mostrarChat();
    }
  });

  function actualizarContadorNotificaciones() {
    const noLeidas = notificaciones.filter((n) => !n.leida).length;
    const bellSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>';
    botonNotificaciones.innerHTML =
      noLeidas > 0
        ? bellSvg + `<span style="position: absolute; top: -4px; right: -4px; background: #22c55e; color: #fff; width: 16px; height: 16px; border-radius: 50%; font-size: 10px; display: flex; align-items: center; justify-content: center; font-weight: 700; border: 2px solid rgba(30,30,50,0.85);">${noLeidas}</span>`
        : bellSvg;

    if (noLeidas > 0) {
      botonNotificaciones.style.background = "rgba(30, 30, 50, 0.9)";
      botonNotificaciones.style.borderColor = "#4ade80";
    } else {
      botonNotificaciones.style.background = "rgba(30, 30, 50, 0.85)";
      botonNotificaciones.style.borderColor = "rgba(255, 255, 255, 0.15)";
    }
  }

  // Inicializar contador
  actualizarContadorNotificaciones();


  // Click para abrir notificaciones
  botonNotificaciones.addEventListener("click", () => {
    mostrarNotificaciones();
  });

  botonNotificaciones.addEventListener("mouseenter", () => {
    botonNotificaciones.style.transform = "scale(1.15)";
    botonNotificaciones.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.4)";
  });

  botonNotificaciones.addEventListener("mouseleave", () => {
    botonNotificaciones.style.transform = "none";
    botonNotificaciones.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
  });

  // ============================
  //  BOTON CHAT EN TIEMPO REAL
  // ============================
  const botonChatRT = document.createElement("button");
  botonChatRT.id = "botonChatRT";
  botonChatRT.style.cssText = `
      position: fixed;
      bottom: 15px;
      right: 95px;
      width: 32px;
      height: 32px;
      background: rgba(30, 30, 50, 0.85);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 50%;
      cursor: pointer;
      z-index: 9999997;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      transition: all 0.25s ease;
      padding: 0;
      backdrop-filter: blur(10px);
  `;
  botonChatRT.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
  botonChatRT.addEventListener("mouseenter", () => { botonChatRT.style.transform = "scale(1.15)"; botonChatRT.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)"; });
  botonChatRT.addEventListener("mouseleave", () => { botonChatRT.style.transform = "none"; botonChatRT.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)"; });

  // Panel de chat RT (estructura completa igual a Cortana)
  const chatRTOverlay = document.createElement("div");
  chatRTOverlay.id = "chat-rt-overlay";
  chatRTOverlay.style.cssText = "position:fixed;top:0;right:0;width:380px;height:100vh;background:#0a0a0a;color:#fff;z-index:9999998;display:none;flex-direction:column;font-family:-apple-system,BlinkMacSystemFont,'Inter','Segoe UI',sans-serif;box-shadow:-8px 0 40px rgba(0,0,0,0.6);overflow:hidden;";

  // SVG icons reutilizables
  const _iconChat = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
  const _iconChatLg = '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';
  const _iconUser = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.8"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
  const _iconUserLg = '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#555" stroke-width="1.2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>';
  const _iconBack = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>';
  const _iconDots = '<svg width="18" height="18" viewBox="0 0 24 24" fill="#888"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>';
  const _iconCam = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>';
  const _iconPlus = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>';
  const _iconUserPlus = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>';
  const _iconGroup = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>';
  const _iconSearch = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  const _iconCheck = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

  // Default profile photo (data URI SVG)
  const _defaultPhoto = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#111"/><path stroke="#666" stroke-width="1.8" d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle stroke="#666" stroke-width="1.8" cx="12" cy="7" r="4"/></svg>');

  // Estado del usuario (persistencia en localStorage)
  function cargarPerfilRT() {
    try {
      const guardado = localStorage.getItem("rt_perfil");
      if (guardado) return JSON.parse(guardado);
    } catch(e) {}
    return { nombre: "", info: "", usuario: "", contrasena: "", foto: "" };
  }
  function guardarPerfilRT(perfil) {
    try { localStorage.setItem("rt_perfil", JSON.stringify(perfil)); } catch(e) {}
  }

  // Superadmin: unico que puede crear grupos
  const _SUPERADMIN_USERNAME = "proyectoja";
  const _SUPERADMIN_EMAIL = "kendall.torres.17@gmail.com";
  function esSuperadmin() {
    const p = cargarPerfilRT();
    if (p && p.usuario === _SUPERADMIN_USERNAME) return true;
    if (p && p.email && p.email.toLowerCase() === _SUPERADMIN_EMAIL) return true;
    return false;
  }

  function actualizarEstadoNuevoGrupo() {
    const btnNuevoGrupo = document.getElementById("chatRTNuevoGrupoBtn");
    const btnNuevoGrupoSub = document.getElementById("chatRTNuevoGrupoSub");
    const esSA = esSuperadmin();
    if (btnNuevoGrupo) {
      btnNuevoGrupo.style.cursor = esSA ? "pointer" : "not-allowed";
      btnNuevoGrupo.style.opacity = esSA ? "1" : "0.4";
      const circulo = btnNuevoGrupo.children[0];
      if (circulo) {
        circulo.style.background = esSA ? "#2563eb" : "#1a1a2e";
        circulo.style.border = esSA ? "none" : "1px solid #222";
      }
      if (esSA) btnNuevoGrupo.onclick = () => { chatRTResetCrearGrupo(); chatRTMostrarVista("creargrupo"); };
      else btnNuevoGrupo.onclick = null;
    }
    if (btnNuevoGrupoSub) btnNuevoGrupoSub.textContent = esSA ? "Disponible" : "Solo superadmin";
  }

  // Obtener foto de perfil (para usar en burbujas de chat)
  function obtenerFotoRT() {
    const p = cargarPerfilRT();
    return p.foto || _defaultPhoto;
  }

  // Subir foto a Supabase Storage, retorna URL publica
  async function chatRTSubirFoto(file) {
    const sb = getSupabase();
    if (!sb) return null;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return null;
    // Validar tamano maximo 1MB
    if (file.size > 1048576) {
      console.warn("Foto excede 1MB (" + file.size + " bytes). Reduciendo...");
      // Si es Blob grande, intentar comprimir mas
      if (file.type && file.type.startsWith("image/")) {
        const compressed = await chatRTComprimirFoto(file);
        if (compressed) file = compressed;
      }
      if (file.size > 1048576) return null;
    }
    const userId = session.user.id;
    const filePath = userId + "/avatar.jpg";
    // Subir (upsert para reemplazar si ya existe)
    const { error } = await sb.storage.from("avatars").upload(filePath, file, {
      contentType: "image/jpeg",
      upsert: true,
    });
    if (error) { console.error("Error subiendo foto:", error.message); return null; }
    // Obtener URL publica
    const { data: urlData } = sb.storage.from("avatars").getPublicUrl(filePath);
    return urlData ? urlData.publicUrl + "?t=" + Date.now() : null;
  }

  // Subir foto pendiente del registro (guardada en sessionStorage por confirmacion de correo)
  async function chatRTSubirFotoPendiente() {
    const pending = sessionStorage.getItem("rt_pending_foto");
    if (!pending) return;
    sessionStorage.removeItem("rt_pending_foto");
    const sb = getSupabase();
    if (!sb) return;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return;
    // Convertir dataURL a Blob
    const res = await fetch(pending);
    const blob = await res.blob();
    const fotoURL = await chatRTSubirFoto(blob);
    if (fotoURL) {
      await sb.from("profiles").update({ photo_url: fotoURL }).eq("user_id", session.user.id);
      const perfil = cargarPerfilRT();
      perfil.foto = fotoURL;
      guardarPerfilRT(perfil);
      const fotoMini = document.getElementById("chatRTFotoMini");
      if (fotoMini) fotoMini.src = fotoURL;
    }
  }

  // Comprimir foto si exede 1MB
  function chatRTComprimirFoto(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let quality = 0.7;
          canvas.width = 200;
          canvas.height = 200;
          const ctx = canvas.getContext("2d");
          const ratio = Math.max(200 / img.width, 200 / img.height);
          const w = img.width * ratio;
          const h = img.height * ratio;
          ctx.drawImage(img, (200 - w) / 2, (200 - h) / 2, w, h);
          // Reducir calidad hasta que pase de 1MB
          const intentar = () => {
            canvas.toBlob((blob) => {
              if (!blob) { resolve(null); return; }
              if (blob.size <= 1048576 || quality <= 0.1) {
                resolve(blob);
              } else {
                quality -= 0.1;
                intentar();
              }
            }, "image/jpeg", quality);
          };
          intentar();
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  // === SUPABASE CLIENT (carga dinamica) ===
  const _SUPABASE_URL = "https://hgangxlyytnxdndwjvgf.supabase.co";
  const _SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnYW5neGx5eXRueGRuZHdqdmdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzNDgyNTksImV4cCI6MjA4MDkyNDI1OX0.VL5GgpkfV102lJc_NEi0Ga15gDiNSV92jSIRMuH-5hI";
  let _supabase = null;

  function getSupabase() {
    if (_supabase) return _supabase;
    if (window.supabase && window.supabase.createClient) {
      _supabase = window.supabase.createClient(_SUPABASE_URL, _SUPABASE_KEY);
      return _supabase;
    }
    return null;
  }

  // Cargar SDK de Supabase si no esta
  function cargarSupabaseSDK() {
    return new Promise((resolve) => {
      if (window.supabase && window.supabase.createClient) { resolve(true); return; }
      const s = document.createElement("script");
      s.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
      s.onload = () => resolve(true);
      s.onerror = () => resolve(false);
      document.head.appendChild(s);
    });
  }

  // === VALIDACIONES ===
  function normalizarTexto(texto) {
    return texto.toLowerCase()
      .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "")
      .trim();
  }

  function validarEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validarUsername(user) {
    const n = normalizarTexto(user);
    if (n.length < 1) return "Minimo 1 caracter";
    if (n.length > 100) return "Maximo 100 caracteres";
    if (!/^[a-z0-9_]+$/.test(n)) return "Solo minusculas, numeros y guion bajo";
    return null;
  }

  function validarNombre(nombre) {
    if (nombre.length < 1) return "Minimo 1 caracter";
    if (nombre.length > 100) return "Maximo 100 caracteres";
    return null;
  }

  function validarPassword(pass) {
    if (pass.length < 10) return "Minimo 10 caracteres";
    if (pass.length > 100) return "Maximo 100 caracteres";
    if (!/[A-Z]/.test(pass)) return "Requiere al menos 1 mayuscula";
    if (!/[a-z]/.test(pass)) return "Requiere al menos 1 minuscula";
    if (!/[0-9]/.test(pass)) return "Requiere al menos 1 numero";
    if (!/[^A-Za-z0-9]/.test(pass)) return "Requiere al menos 1 caracter especial";
    return null;
  }

  function mostrarErrorRT(id, msg) {
    const el = document.getElementById(id);
    if (el) { el.textContent = msg; el.style.display = "block"; }
  }
  function ocultarErrorRT(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  }
  function ocultarTodosErroresRT() {
    ["chatRTRegUserError", "chatRTRegNombreError", "chatRTLoginEmailError",
     "chatRTLoginPassError", "chatRTLoginGeneralError", "chatRTRecEmailError",
     "chatRTRecGeneralError"].forEach(ocultarErrorRT);
  }

  // === AUTH: Login ===
  async function chatRTLogin() {
    ocultarTodosErroresRT();
    const email = document.getElementById("chatRTLoginEmail")?.value?.trim().toLowerCase() || "";
    const pass = document.getElementById("chatRTLoginPass")?.value || "";

    if (!email) { mostrarErrorRT("chatRTLoginEmailError", "Ingresa tu correo"); return; }
    if (!validarEmail(email)) { mostrarErrorRT("chatRTLoginEmailError", "Correo no valido"); return; }
    if (!pass) { mostrarErrorRT("chatRTLoginPassError", "Ingresa tu contrasena"); return; }

    const sb = getSupabase();
    if (!sb) { mostrarErrorRT("chatRTLoginGeneralError", "Servicio no disponible"); return; }

    const btn = document.getElementById("chatRTBtnSubmit");
    if (btn) { btn.textContent = "Iniciando..."; btn.disabled = true; }

    const { data, error } = await sb.auth.signInWithPassword({ email, password: pass });

    if (btn) { btn.textContent = "Iniciar sesion"; btn.disabled = false; }

    if (error) {
      let msg = "No se pudo iniciar sesion. Intenta de nuevo.";
      if (error.message.includes("Invalid login")) msg = "Correo o contrasena incorrectos";
      else if (error.message.includes("Email not confirmed")) msg = "Confirma tu correo electronico primero";
      mostrarErrorRT("chatRTLoginGeneralError", msg);
      return;
    }

    await chatRTPostAuth(data.user);
    await chatRTSubirFotoPendiente();
    // Guardar contrasena en localStorage para mostrarla en perfil
    localStorage.setItem("rt_pass", pass);
  }

  // === AUTH: Registro ===
  async function chatRTRegistrar() {
    ocultarTodosErroresRT();
    const username = normalizarTexto(document.getElementById("chatRTRegUser")?.value || "");
    const nombre = document.getElementById("chatRTRegNombre")?.value?.trim() || "";
    const email = document.getElementById("chatRTLoginEmail")?.value?.trim().toLowerCase() || "";
    const pass = document.getElementById("chatRTLoginPass")?.value || "";

    // Validar username
    const errUser = validarUsername(username);
    if (errUser) { mostrarErrorRT("chatRTRegUserError", errUser); return; }
    const errNombre = validarNombre(nombre);
    if (errNombre) { mostrarErrorRT("chatRTRegNombreError", errNombre); return; }
    if (!email) { mostrarErrorRT("chatRTLoginEmailError", "Ingresa tu correo"); return; }
    if (!validarEmail(email)) { mostrarErrorRT("chatRTLoginEmailError", "Correo no valido"); return; }
    const errPass = validarPassword(pass);
    if (errPass) { mostrarErrorRT("chatRTLoginPassError", errPass); return; }

    const sb = getSupabase();
    if (!sb) { mostrarErrorRT("chatRTLoginGeneralError", "Servicio no disponible"); return; }

    // Verificar si el username ya existe
    const { data: existe } = await sb.from("profiles").select("user_id").eq("username", username).maybeSingle();
    if (existe) { mostrarErrorRT("chatRTRegUserError", "Este usuario ya existe"); return; }

    const btn = document.getElementById("chatRTBtnSubmit");
    if (btn) { btn.textContent = "Registrando..."; btn.disabled = true; }

    const { data, error } = await sb.auth.signUp({
      email,
      password: pass,
      options: { data: { username, display_name: nombre } }
    });

    if (btn) { btn.textContent = "Registrate"; btn.disabled = false; }

    if (error) {
      let msg = "No se pudo crear la cuenta. Intenta de nuevo.";
      if (error.message.includes("already registered")) msg = "Este correo ya esta registrado";
      else if (error.message.includes("Password")) msg = "La contrasena no cumple requisitos";
      else if (error.message.includes("Database error") || error.code === "unexpected_failure") msg = "Error interno. Intenta de nuevo en unos minutos.";
      mostrarErrorRT("chatRTLoginGeneralError", msg);
      return;
    }

    // Si need_email_confirmation, mostrar aviso y guardar foto pendiente
    if (data.user && !data.session) {
      if (_chatRTRegFotoFile) {
        const reader = new FileReader();
        reader.onload = () => {
          sessionStorage.setItem("rt_pending_foto", reader.result);
        };
        reader.readAsDataURL(_chatRTRegFotoFile);
      }
      mostrarErrorRT("chatRTLoginGeneralError", "Correo de verificacion enviado. Revisa tu bandeja.");
      localStorage.setItem("rt_pass", pass);
      chatRTToggleModoAuth(false);
      chatRTResetFotoRegistro();
      return;
    }

    await chatRTPostAuth(data.user);
    await chatRTSubirFotoPendiente();
    localStorage.setItem("rt_pass", pass);
    chatRTResetFotoRegistro();
  }

  // === AUTH: Post-login (cargar perfil y entrar) ===
  async function chatRTPostAuth(user) {
    const sb = getSupabase();
    if (!sb || !user) return;
    chatRTSolicitarPermisoNotificaciones();

    // 1. Verificar si ya tenemos el perfil en localStorage
    const local = cargarPerfilRT();
    if (local.user_id === user.id && local.username) {
      // Ya tenemos datos locales, usarlos inmediatamente
      localStorage.setItem("rt_session", "active");
      const fotoMini = document.getElementById("chatRTFotoMini");
      if (fotoMini) fotoMini.src = local.foto || _defaultPhoto;
      chatRTMostrarVista("main");
      chatRTCargarContactos();
      chatRTSuscribirMensajes();
      chatRTVerificarContactosNuevos();
      chatRTIniciarHeartbeat();
      chatRTRefrescarPerfilSilencioso(user.id);
      return;
    }

    // 2. No hay datos locales, cargar desde Supabase
    let { data: perfil } = await sb.from("profiles").select("*").eq("user_id", user.id).maybeSingle();

    if (!perfil) {
      const meta = user.user_metadata || {};
      const nuevoPerfil = {
        user_id: user.id,
        username: meta.username || normalizarTexto(user.email.split("@")[0]),
        display_name: meta.display_name || "",
        info: "",
        photo_url: _chatRTRegFotoDataURL || "",
      };
      const { error: insertErr } = await sb.from("profiles").insert(nuevoPerfil);
      if (insertErr) {
        // Race condition: el trigger ya creo el perfil, recargar
        const { data: reloaded } = await sb.from("profiles").select("*").eq("user_id", user.id).maybeSingle();
        if (reloaded) perfil = reloaded;
        else perfil = nuevoPerfil;
      } else {
        perfil = nuevoPerfil;
      }
    }

    // Guardar en localStorage
    const localData = {
      user_id: user.id,
      email: user.email,
      username: perfil.username,
      nombre: perfil.display_name,
      info: perfil.info || "",
      usuario: perfil.username,
      foto: perfil.photo_url || "",
    };
    localStorage.setItem("rt_perfil", JSON.stringify(localData));
    localStorage.setItem("rt_session", "active");

    // Actualizar UI
    const fotoMini = document.getElementById("chatRTFotoMini");
    if (fotoMini) fotoMini.src = localData.foto || _defaultPhoto;

    // Cargar contactos y suscribirse a mensajes
    chatRTMostrarVista("main");
    chatRTCargarContactos();
    chatRTSuscribirMensajes();
    chatRTVerificarContactosNuevos();
    chatRTIniciarHeartbeat();
  }

  // === AUTH: Cerrar sesion ===
  async function chatRTCerrarSesion() {
    chatRTCerrarTodasConexiones();
    const sb = getSupabase();
    if (sb) {
      await sb.auth.signOut();
    }
    localStorage.removeItem("rt_session");
    localStorage.removeItem("rt_perfil");
    chatRTContactos = [];
    chatRTChatActivo = null;
    chatRTMostrarVista("login");
    chatRTResetLoginForm();
  }

  // === Toggle Login / Registro ===
  let _chatRTModoRegistro = false;
  let _chatRTRegFotoDataURL = null;
  let _chatRTRegFotoFile = null;
  function chatRTResetFotoRegistro() {
    _chatRTRegFotoDataURL = null;
    _chatRTRegFotoFile = null;
    const preview = document.getElementById("chatRTRegFotoPreview");
    const icon = document.getElementById("chatRTRegFotoIcon");
    const btn = document.getElementById("chatRTRegFotoBtn");
    if (preview) { preview.src = _defaultPhoto; preview.style.display = "none"; }
    if (icon) icon.style.display = "flex";
    if (btn) { btn.style.borderStyle = "dashed"; btn.style.borderColor = "#2563eb"; }
  }
  function chatRTToggleModoAuth(modoRegistro) {
    _chatRTModoRegistro = modoRegistro;
    const regFields = document.getElementById("chatRTRegisterFields");
    const btn = document.getElementById("chatRTBtnSubmit");
    const toggleText = document.getElementById("chatRTToggleText");
    const toggleBtn = document.getElementById("chatRTToggleAuth");
    const subtitulo = document.getElementById("chatRTLoginSubtitulo");
    ocultarTodosErroresRT();

    if (modoRegistro) {
      if (regFields) regFields.style.display = "flex";
      if (btn) btn.textContent = "Registrate";
      if (toggleText) toggleText.textContent = "Ya tienes cuenta?";
      if (toggleBtn) toggleBtn.textContent = "Inicia sesion";
      if (subtitulo) subtitulo.textContent = "Crea tu cuenta para empezar";
    } else {
      if (regFields) regFields.style.display = "none";
      if (btn) btn.textContent = "Iniciar sesion";
      if (toggleText) toggleText.textContent = "No tienes cuenta?";
      if (toggleBtn) toggleBtn.textContent = "Registrate";
      if (subtitulo) subtitulo.textContent = "Inicia sesion para continuar";
      chatRTResetFotoRegistro();
    }
  }

  function chatRTResetLoginForm() {
    const campos = ["chatRTRegUser", "chatRTRegNombre", "chatRTLoginEmail", "chatRTLoginPass"];
    campos.forEach(id => { const el = document.getElementById(id); if (el) el.value = ""; });
    ocultarTodosErroresRT();
    chatRTToggleModoAuth(false);
    // Resetear countdown
    const cd = document.getElementById("chatRTRecCountdown");
    if (cd) cd.style.display = "none";
    const btnEnviar = document.getElementById("chatRTBtnEnviarRec");
    if (btnEnviar) btnEnviar.style.display = "";
  }

  // === RECUPERAR CUENTA ===
  let _chatRTRecTimer = null;
  async function chatRTEnviarRecuperacion() {
    ocultarErrorRT("chatRTRecEmailError");
    ocultarErrorRT("chatRTRecGeneralError");
    const email = document.getElementById("chatRTRecEmail")?.value?.trim().toLowerCase() || "";
    if (!email) { mostrarErrorRT("chatRTRecEmailError", "Ingresa tu correo"); return; }
    if (!validarEmail(email)) { mostrarErrorRT("chatRTRecEmailError", "Correo no valido"); return; }

    const sb = getSupabase();
    if (!sb) { mostrarErrorRT("chatRTRecGeneralError", "Servicio no disponible"); return; }

    const btn = document.getElementById("chatRTBtnEnviarRec");
    if (btn) { btn.textContent = "Enviando..."; btn.disabled = true; }

    const { error } = await sb.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.href
    });

    if (btn) { btn.textContent = "Enviar correo"; btn.disabled = false; }

    if (error) {
      mostrarErrorRT("chatRTRecGeneralError", "No se pudo enviar el correo. Verifica tu direccion e intenta de nuevo.");
      return;
    }

    // Mostrar countdown
    document.getElementById("chatRTBtnEnviarRec").style.display = "none";
    const cd = document.getElementById("chatRTRecCountdown");
    if (cd) cd.style.display = "block";
    chatRTIniciarCountdown();
  }

  function chatRTIniciarCountdown() {
    let segundos = 60;
    const timerEl = document.getElementById("chatRTRecTimer");
    const btnReenviar = document.getElementById("chatRTBtnReenviar");
    if (btnReenviar) btnReenviar.style.display = "none";

    if (_chatRTRecTimer) clearInterval(_chatRTRecTimer);
    _chatRTRecTimer = setInterval(() => {
      segundos--;
      if (timerEl) timerEl.textContent = segundos;
      if (segundos <= 0) {
        clearInterval(_chatRTRecTimer);
        _chatRTRecTimer = null;
        if (timerEl) timerEl.style.display = "none";
        if (btnReenviar) btnReenviar.style.display = "";
      }
    }, 1000);
  }

  // === Verificar sesion al abrir ===
  async function chatRTVerificarSesion() {
    await cargarSupabaseSDK();

    // 1. Intentar cargar desde localStorage primero (rapido, sin red)
    const local = cargarPerfilRT();
    const tieneSesion = localStorage.getItem("rt_session") === "active";
    if (tieneSesion && local.user_id) {
      chatRTMostrarVista("main");
      const fotoMini = document.getElementById("chatRTFotoMini");
      if (fotoMini) fotoMini.src = local.foto || _defaultPhoto;
      // Iniciar todo lo necesario (heartbeat, contactos, suscripcion)
      chatRTCargarContactos();
      chatRTSuscribirMensajes();
      chatRTVerificarContactosNuevos();
      chatRTIniciarHeartbeat();
      // Refrescar en background sin bloquear la UI
      chatRTRefrescarPerfilSilencioso(local.user_id);
      return;
    }

    // 2. No hay sesion local, verificar con Supabase
    const sb = getSupabase();
    if (!sb) { chatRTMostrarVista("login"); return; }

    const { data: { session } } = await sb.auth.getSession();
    if (session && session.user) {
      await chatRTPostAuth(session.user);
    } else {
      localStorage.removeItem("rt_session");
      localStorage.removeItem("rt_perfil");
      chatRTMostrarVista("login");
    }
  }

  // Refrescar perfil en background (no bloquea UI)
  async function chatRTRefrescarPerfilSilencioso(userId) {
    const sb = getSupabase();
    if (!sb || !userId) return;
    try {
      const { data: perfil } = await sb.from("profiles").select("*").eq("user_id", userId).maybeSingle();
      if (perfil) {
        const local = cargarPerfilRT();
        local.nombre = perfil.display_name || local.nombre;
        local.info = perfil.info || local.info;
        local.usuario = perfil.username || local.usuario;
        local.foto = perfil.photo_url || local.foto;
        guardarPerfilRT(local);
        // Actualizar UI si cambio la foto
        const fotoMini = document.getElementById("chatRTFotoMini");
        if (fotoMini && perfil.photo_url) fotoMini.src = perfil.photo_url;
      }
    } catch(e) {}
  }

  // Fix autofill: forzar fondo oscuro en inputs
  const _autofillStyle = document.createElement("style");
  _autofillStyle.textContent = 'input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active{-webkit-box-shadow:0 0 0 30px #111 inset!important;-webkit-text-fill-color:#e8edf9!important;caret-color:#e8edf9!important;transition:background-color 5000s ease-in-out 0s}input[data-autocompleted]{background-color:#111!important;color:#e8edf9!important}';
  document.head.appendChild(_autofillStyle);

  chatRTOverlay.innerHTML = `
    <div id="chatRTRResizeHandle" style="position:absolute;left:0;top:0;width:5px;height:100%;cursor:ew-resize;z-index:10;transition:background 0.15s;"></div>

    <!-- Contenedor de vistas -->
    <div id="chatRTViewsContainer" style="flex:1;display:flex;flex-direction:column;overflow:hidden;position:relative;">

    <!-- ====== VISTA PRINCIPAL (empty state) ====== -->
    <div id="chatRTVistaMain" style="display:flex;flex-direction:column;height:100%;">
      <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:#111;border-bottom:1px solid #1a1a1a;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:28px;height:28px;border-radius:8px;background:#2563eb;display:flex;align-items:center;justify-content:center;">${_iconChat}</div>
          <div>
            <div style="font-size:13px;font-weight:700;color:#fff;">Conexan</div>
            <div style="font-size:10px;color:#666;">Comunicacion directa</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button id="chatRTNuevoChatBtn" style="background:none;border:1px solid #333;color:#fff;width:32px;height:32px;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.15s;" title="Nuevo chat">${_iconPlus}</button>
          <button id="cerrarChatRT" style="background:none;border:1px solid #333;color:#888;width:24px;height:24px;border-radius:4px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;transition:all 0.15s ease;line-height:1;">X</button>
        </div>
      </div>
      <div id="chatRTContactosLista" style="flex:1;overflow-y:auto;overflow-x:hidden;"></div>
      <div id="chatRTMainWelcome" style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;padding:40px;">
        <div style="width:80px;height:80px;border-radius:20px;background:#111;display:flex;align-items:center;justify-content:center;border:1px solid #1a1a1a;">${_iconChatLg}</div>
        <div style="text-align:center;">
          <div style="font-size:16px;font-weight:600;color:#fff;">Conexan</div>
          <div style="font-size:12px;color:#666;margin-top:6px;line-height:1.5;">Empieza a chatear con tus contactos.<br>Pulsa + para agregar un contacto.</div>
        </div>
      </div>
    </div>

    <!-- ====== VISTA NUEVO CHAT ====== -->
    <div id="chatRTVistaNuevoChat" style="display:none;flex-direction:column;height:100%;">
      <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#111;border-bottom:1px solid #1a1a1a;">
        <button id="chatRTNuevoChatVolver" style="background:none;border:none;color:#fff;cursor:pointer;display:flex;align-items:center;padding:4px;border-radius:4px;">${_iconBack}</button>
        <div style="font-size:14px;font-weight:600;color:#fff;">Nuevo chat</div>
      </div>
      <div style="padding:8px 0;">
        <div id="chatRTNuevoContactoBtn" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='#1a1a1a'" onmouseout="this.style.background='transparent'">
          <div style="width:40px;height:40px;border-radius:50%;background:#2563eb;display:flex;align-items:center;justify-content:center;">${_iconUserPlus}</div>
          <div>
            <div style="font-size:13px;color:#fff;font-weight:500;">Nuevo contacto</div>
            <div style="font-size:11px;color:#666;">Buscar por nombre de usuario</div>
          </div>
        </div>
        <div id="chatRTNuevoGrupoBtn" style="display:flex;align-items:center;gap:14px;padding:14px 20px;cursor:not-allowed;transition:background 0.15s;opacity:0.4;" onmouseover="this.style.background='#1a1a1a'" onmouseout="this.style.background='transparent'">
          <div style="width:40px;height:40px;border-radius:50%;background:#1a1a2e;border:1px solid #222;display:flex;align-items:center;justify-content:center;">${_iconGroup}</div>
          <div>
            <div id="chatRTNuevoGrupoTxt" style="font-size:13px;color:#fff;font-weight:500;">Nuevo grupo</div>
            <div id="chatRTNuevoGrupoSub" style="font-size:11px;color:#666;">Solo superadmin</div>
          </div>
        </div>
      </div>
    </div>

    <!-- ====== VISTA NUEVO CONTACTO ====== -->
    <div id="chatRTVistaNuevoContacto" style="display:none;flex-direction:column;height:100%;">
      <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#111;border-bottom:1px solid #1a1a1a;">
        <button id="chatRTNuevoContactoVolver" style="background:none;border:none;color:#fff;cursor:pointer;display:flex;align-items:center;padding:4px;border-radius:4px;">${_iconBack}</button>
        <div style="font-size:14px;font-weight:600;color:#fff;">Agregar contacto</div>
      </div>
      <div style="padding:16px;">
        <div style="display:flex;gap:8px;align-items:center;margin-bottom:16px;">
          <div style="flex:1;display:flex;align-items:center;background:#111;border:1px solid #222;border-radius:8px;padding:0 12px;">
            <span style="color:#666;font-size:14px;">@</span>
            <input id="chatRTBuscarContactoInput" type="text" placeholder="nombre de usuario" style="flex:1;background:none;border:none;color:#e8edf9;font-size:14px;padding:10px 6px;outline:none;" />
          </div>
          <button id="chatRTBuscarContactoBtn" style="background:#2563eb;border:none;color:#fff;width:38px;height:38px;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s;box-shadow:0 2px 8px rgba(37,99,235,0.3);" title="Buscar">${_iconSearch}</button>
        </div>
        <div id="chatRTBuscarContactoResultado" style="display:none;"></div>
      </div>
    </div>

    <!-- ====== VISTA CREAR GRUPO ====== -->
    <div id="chatRTVistaCrearGrupo" style="display:none;flex-direction:column;height:100%;">
      <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#111;border-bottom:1px solid #1a1a1a;">
        <button id="chatRTCrearGrupoVolver" style="background:none;border:none;color:#fff;cursor:pointer;display:flex;align-items:center;padding:4px;border-radius:4px;">${_iconBack}</button>
        <div style="font-size:14px;font-weight:600;color:#fff;">Nuevo grupo</div>
      </div>
      <div style="flex:1;overflow-y:auto;padding:20px;">
        <div style="display:flex;flex-direction:column;align-items:center;margin-bottom:20px;">
          <div id="chatRTGrupoFotoBtn" style="width:88px;height:88px;border-radius:50%;cursor:pointer;position:relative;overflow:hidden;background:#1a1a2e;border:2px dashed #2563eb;transition:all 0.2s;display:flex;align-items:center;justify-content:center;" title="Subir foto">
            <img id="chatRTGrupoFotoPreview" src="${_defaultPhoto}" style="width:100%;height:100%;object-fit:cover;display:none;" />
            <div id="chatRTGrupoFotoIcon" style="display:flex;flex-direction:column;align-items:center;gap:2px;">${_iconCam}<span style="font-size:8px;color:#666;">Foto</span></div>
          </div>
          <input type="file" id="chatRTGrupoFileInput" accept="image/*" style="display:none;" />
        </div>
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div>
            <div style="font-size:10px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Nombre del grupo</div>
            <input id="chatRTGrupoNombre" type="text" placeholder="Ej. Grupo de estudio" style="width:100%;background:#111;border:1px solid #222;color:#e8edf9;font-size:14px;padding:10px 12px;border-radius:8px;outline:none;transition:border-color 0.2s;box-sizing:border-box;" maxlength="40" />
          </div>
          <div>
            <div style="font-size:10px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Informacion del grupo</div>
            <textarea id="chatRTGrupoInfo" rows="2" placeholder="Describe el grupo..." style="width:100%;background:#111;border:1px solid #222;color:#e8edf9;font-size:13px;padding:10px 12px;border-radius:8px;outline:none;transition:border-color 0.2s;box-sizing:border-box;resize:none;font-family:inherit;" maxlength="200"></textarea>
          </div>
          <div>
            <div style="font-size:10px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">Permisos del grupo</div>
            <label style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px;background:#14141f;border:1px solid #1f1f2e;border-radius:10px;cursor:pointer;margin-bottom:10px;">
              <div>
                <div style="font-size:13px;color:#e8edf9;">Editar ajustes del grupo</div>
                <div style="font-size:11px;color:#666;margin-top:2px;">Foto, nombre e informacion</div>
              </div>
              <input id="chatRTGrupoPermEditar" type="checkbox" checked style="width:18px;height:18px;accent-color:#2563eb;cursor:pointer;" />
            </label>
            <label style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px;background:#14141f;border:1px solid #1f1f2e;border-radius:10px;cursor:pointer;">
              <div>
                <div style="font-size:13px;color:#e8edf9;">Enviar mensajes</div>
                <div style="font-size:11px;color:#666;margin-top:2px;">Permitir enviar mensajes a todos</div>
              </div>
              <input id="chatRTGrupoPermEnviar" type="checkbox" checked style="width:18px;height:18px;accent-color:#2563eb;cursor:pointer;" />
            </label>
          </div>
        </div>
        <button id="chatRTCrearGrupoBtn" style="width:100%;padding:12px;background:#2563eb;color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;transition:all 0.15s;margin-top:20px;box-shadow:0 2px 8px rgba(37,99,235,0.3);">Crear grupo</button>
        <div id="chatRTCrearGrupoMsg" style="font-size:11px;color:#ef4444;text-align:center;margin-top:10px;display:none;"></div>
      </div>
    </div>

    <!-- ====== VISTA INFO GRUPO ====== -->
    <div id="chatRTVistaInfoGrupo" style="display:none;flex-direction:column;height:100%;">
      <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#111;border-bottom:1px solid #1a1a1a;">
        <button id="chatRTInfoGrupoVolver" style="background:none;border:none;color:#fff;cursor:pointer;display:flex;align-items:center;padding:4px;border-radius:4px;">${_iconBack}</button>
        <div style="font-size:14px;font-weight:600;color:#fff;">Info del grupo</div>
      </div>
      <div style="flex:1;overflow-y:auto;padding:20px;">
        <div id="chatRTInfoGrupoContenido"></div>
      </div>
    </div>

    <!-- ====== VISTA PERFIL USUARIO (desde grupo) ====== -->
    <div id="chatRTVistaPerfilUsuario" style="display:none;flex-direction:column;height:100%;">
      <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#111;border-bottom:1px solid #1a1a1a;">
        <button id="chatRTPerfilUsuarioVolver" style="background:none;border:none;color:#fff;cursor:pointer;display:flex;align-items:center;padding:4px;border-radius:4px;">${_iconBack}</button>
        <div style="font-size:14px;font-weight:600;color:#fff;">Perfil</div>
      </div>
      <div id="chatRTPerfilUsuarioContenido" style="flex:1;overflow-y:auto;padding:30px 20px;display:flex;flex-direction:column;align-items:center;"></div>
    </div>

    <div id="chatRTVistaMenu" style="display:none;flex-direction:column;height:100%;">
      <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#111;border-bottom:1px solid #1a1a1a;">
        <button id="chatRTMenuVolverBtn" style="background:none;border:none;color:#fff;cursor:pointer;display:flex;align-items:center;padding:4px;border-radius:4px;transition:background 0.15s;">${_iconBack}</button>
        <div style="font-size:14px;font-weight:600;color:#fff;">Menu</div>
      </div>
      <div style="flex:1;overflow-y:auto;">
        <div style="padding:24px 20px;display:flex;align-items:center;gap:14px;border-bottom:1px solid #1a1a1a;">
          <div style="width:56px;height:56px;border-radius:50%;overflow:hidden;flex-shrink:0;background:#1a1a2e;border:2px solid #2563eb;">
            <img id="chatRTMenuFotoImg" src="${_defaultPhoto}" style="width:100%;height:100%;object-fit:cover;" />
          </div>
          <div style="overflow:hidden;">
            <div id="chatRTMenuNombre" style="font-size:15px;font-weight:600;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
            <div id="chatRTMenuUsuario" style="font-size:12px;color:#666;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
          </div>
        </div>
        <div style="padding:8px 0;">
          <div id="chatRTMenuOpcionPerfil" style="display:flex;align-items:center;gap:12px;padding:14px 20px;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='#1a1a1a'" onmouseout="this.style.background='transparent'">
            ${_iconUser}
            <span style="font-size:13px;color:#ccc;">Mi perfil</span>
          </div>
          <div id="chatRTMenuOpcionColores" style="display:flex;align-items:center;gap:12px;padding:14px 20px;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='#1a1a1a'" onmouseout="this.style.background='transparent'">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span style="font-size:13px;color:#ccc;">Chats</span>
          </div>
          <div id="chatRTMenuOpcionLogout" style="display:flex;align-items:center;gap:12px;padding:14px 20px;cursor:pointer;transition:background 0.15s;border-top:1px solid #1a1a1a;margin-top:8px;" onmouseover="this.style.background='#1a1a1a'" onmouseout="this.style.background='transparent'">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
            <span style="font-size:13px;color:#ef4444;">Cerrar sesion</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ====== VISTA PERFIL ====== -->
    <div id="chatRTVistaPerfil" style="display:none;flex-direction:column;height:100%;">
      <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#111;border-bottom:1px solid #1a1a1a;">
        <button id="chatRTVolverBtn" style="background:none;border:none;color:#fff;cursor:pointer;display:flex;align-items:center;padding:4px;border-radius:4px;transition:background 0.15s;">${_iconBack}</button>
        <div style="font-size:14px;font-weight:600;color:#fff;">Mi perfil</div>
      </div>
      <div style="flex:1;overflow-y:auto;">
        <div style="padding:30px 20px;display:flex;flex-direction:column;align-items:center;">
          <div id="chatRTFotoGrande" style="width:120px;height:120px;border-radius:50%;cursor:pointer;position:relative;overflow:hidden;background:#1a1a2e;border:3px solid #2563eb;transition:opacity 0.2s;" title="Cambiar foto">
            <img id="chatRTFotoPerfilImg" src="${_defaultPhoto}" style="width:100%;height:100%;object-fit:cover;" />
            <div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.7);text-align:center;padding:6px 0;font-size:10px;color:#fff;display:flex;align-items:center;justify-content:center;gap:4px;">${_iconCam} Cambiar</div>
          </div>
          <input type="file" id="chatRTFileInput" accept="image/*" style="display:none;" />
          <input type="file" id="chatRTRegFileInput" accept="image/*" style="display:none;" />
          <!-- Modal recorte -->
          <div id="chatRTCropModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:9999999;flex-direction:column;align-items:center;justify-content:center;padding:20px;">
            <div style="background:#111;border-radius:12px;padding:20px;width:320px;max-width:90vw;">
              <div style="font-size:14px;font-weight:600;color:#fff;margin-bottom:12px;text-align:center;">Recortar imagen</div>
              <div id="chatRTCropArea" style="width:200px;height:200px;border-radius:50%;overflow:hidden;margin:0 auto;border:2px solid #2563eb;position:relative;background:#000;">
                <img id="chatRTCropImg" style="width:100%;position:absolute;top:0;left:0;cursor:grab;" />
              </div>
              <div style="display:flex;gap:8px;margin-top:16px;">
                <button id="chatRTCropCancel" style="flex:1;padding:8px;background:#222;color:#888;border:1px solid #333;border-radius:8px;cursor:pointer;font-size:12px;">Cancelar</button>
                <button id="chatRTCropApply" style="flex:1;padding:8px;background:#2563eb;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:12px;font-weight:600;">Guardar</button>
              </div>
            </div>
          </div>
        </div>
        <div style="padding:0 20px 30px;display:flex;flex-direction:column;gap:20px;">
          <div>
            <div style="font-size:10px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Correo electronico</div>
            <input id="chatRTCampoEmail" type="email" readonly style="width:100%;background:#0d0d0d;border:1px solid #1a1a1a;color:#666;font-size:14px;padding:10px 12px;border-radius:8px;box-sizing:border-box;cursor:not-allowed;" />
          </div>
          <div>
            <div style="font-size:10px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Nombre</div>
            <input id="chatRTCampoNombre" type="text" placeholder="Escribe tu nombre" style="width:100%;background:#111;border:1px solid #222;color:#e8edf9;font-size:14px;padding:10px 12px;border-radius:8px;outline:none;transition:border-color 0.2s;box-sizing:border-box;" />
          </div>
          <div>
            <div style="font-size:10px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Informacion</div>
            <input id="chatRTCampoInfo" type="text" placeholder="Agrega una descripcion" style="width:100%;background:#111;border:1px solid #222;color:#e8edf9;font-size:14px;padding:10px 12px;border-radius:8px;outline:none;transition:border-color 0.2s;box-sizing:border-box;" />
          </div>
          <div>
            <div style="font-size:10px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Nombre de usuario</div>
            <input id="chatRTCampoUsuario" type="text" placeholder="@usuario" style="width:100%;background:#111;border:1px solid #222;color:#e8edf9;font-size:14px;padding:10px 12px;border-radius:8px;outline:none;transition:border-color 0.2s;box-sizing:border-box;" />
          </div>
          <div style="position:relative;">
            <div style="font-size:10px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">Contrasena</div>
            <div style="position:relative;">
              <input id="chatRTCampoPass" type="password" placeholder="Dejar vacio para no cambiar" style="width:100%;background:#111;border:1px solid #222;color:#e8edf9;font-size:14px;padding:10px 36px 10px 12px;border-radius:8px;outline:none;transition:border-color 0.2s;box-sizing:border-box;" />
              <button id="chatRTOjoPass" type="button" style="position:absolute;right:6px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
          </div>
          <div id="chatRTPerfilEditMsg" style="font-size:11px;color:#666;text-align:center;display:none;"></div>
          <button id="chatRTBtnGuardarPerfil" style="width:100%;padding:11px;background:#2563eb;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;transition:all 0.15s;display:none;">Guardar cambios</button>
        </div>
      </div>
      <!-- Modal confirmar edicion -->
      <div id="chatRTConfirmEditModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,0.85);z-index:9999999;flex-direction:column;align-items:center;justify-content:center;padding:20px;">
        <div style="background:#111;border-radius:12px;padding:24px;width:300px;max-width:90vw;text-align:center;">
          <div style="font-size:15px;font-weight:600;color:#fff;margin-bottom:8px;">Confirmar cambios</div>
          <div id="chatRTConfirmEditMsg" style="font-size:12px;color:#999;margin-bottom:20px;line-height:1.5;"></div>
          <div style="display:flex;gap:8px;">
            <button id="chatRTConfirmEditCancel" style="flex:1;padding:10px;background:#222;color:#888;border:1px solid #333;border-radius:8px;cursor:pointer;font-size:12px;">Cancelar</button>
            <button id="chatRTConfirmEditApply" style="flex:1;padding:10px;background:#2563eb;color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:12px;font-weight:600;">Confirmar</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ====== VISTA COLORES ====== -->
    <div id="chatRTVistaColores" style="display:none;flex-direction:column;height:100%;">
      <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#111;border-bottom:1px solid #1a1a1a;">
        <button id="chatRTColoresVolverBtn" style="background:none;border:none;color:#fff;cursor:pointer;display:flex;align-items:center;padding:4px;border-radius:4px;transition:background 0.15s;">${_iconBack}</button>
        <div style="font-size:14px;font-weight:600;color:#fff;">Chats</div>
      </div>
      <div style="flex:1;overflow-y:auto;padding:20px;">
        <div style="font-size:12px;color:#999;line-height:1.6;margin-bottom:20px;">Cada mensaje que envias tiene un estado que te indica su recorrido. Estos colores te ayudan a saber en que punto se encuentra tu mensaje.</div>
        <div style="display:flex;flex-direction:column;gap:14px;">
          <div style="display:flex;align-items:center;gap:12px;background:#14141f;border:1px solid #1f1f2e;border-radius:10px;padding:12px 14px;">
            <div style="width:34px;height:34px;border-radius:10px;border:2px solid #22c55e;flex-shrink:0;background:#1a1a2e;"></div>
            <div>
              <div style="font-size:13px;font-weight:600;color:#e8edf9;">Verde</div>
              <div style="font-size:11px;color:#888;margin-top:2px;line-height:1.5;">El mensaje fue enviado y se encuentra en camino hacia el destinatario.</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:12px;background:#14141f;border:1px solid #1f1f2e;border-radius:10px;padding:12px 14px;">
            <div style="width:34px;height:34px;border-radius:10px;border:2px solid #60a5fa;flex-shrink:0;background:#1a1a2e;"></div>
            <div>
              <div style="font-size:13px;font-weight:600;color:#e8edf9;">Celeste</div>
              <div style="font-size:11px;color:#888;margin-top:2px;line-height:1.5;">El mensaje fue entregado al dispositivo del destinatario, pero aun no lo ha abierto.</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:12px;background:#14141f;border:1px solid #1f1f2e;border-radius:10px;padding:12px 14px;">
            <div style="width:34px;height:34px;border-radius:10px;border:2px solid #252540;flex-shrink:0;background:#1a1a2e;"></div>
            <div>
              <div style="font-size:13px;font-weight:600;color:#e8edf9;">Normal</div>
              <div style="font-size:11px;color:#888;margin-top:2px;line-height:1.5;">El mensaje fue visto y leido por el destinatario.</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:12px;background:#14141f;border:1px solid #1f1f2e;border-radius:10px;padding:12px 14px;">
            <div style="width:34px;height:34px;border-radius:10px;border:2px solid #ef4444;flex-shrink:0;background:#1a1a2e;"></div>
            <div>
              <div style="font-size:13px;font-weight:600;color:#e8edf9;">Rojo</div>
              <div style="font-size:11px;color:#888;margin-top:2px;line-height:1.5;">El mensaje no pudo ser enviado. Puedes tocarlo para volver a intentarlo.</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ====== VISTA LOGIN / REGISTRO ====== -->
    <div id="chatRTVistaLogin" style="display:flex;flex-direction:column;height:100%;">
      <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:#111;border-bottom:1px solid #1a1a1a;">
        <div style="display:flex;align-items:center;gap:10px;">
          <div style="width:28px;height:28px;border-radius:8px;background:#2563eb;display:flex;align-items:center;justify-content:center;">${_iconChat}</div>
          <div>
            <div style="font-size:13px;font-weight:700;color:#fff;">Conexan</div>
            <div style="font-size:10px;color:#666;">Comunicacion directa</div>
          </div>
        </div>
        <button id="cerrarChatRT3" style="background:none;border:1px solid #333;color:#888;width:24px;height:24px;border-radius:4px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;transition:all 0.15s ease;line-height:1;">X</button>
      </div>
      <div style="flex:1;overflow-y:auto;padding:24px 20px;display:flex;flex-direction:column;align-items:center;">
        <div style="width:60px;height:60px;border-radius:16px;background:#111;display:flex;align-items:center;justify-content:center;border:1px solid #1a1a1a;margin-bottom:12px;">${_iconChatLg}</div>
        <div style="font-size:16px;font-weight:700;color:#fff;margin-bottom:2px;">Bienvenido a Conexan</div>
        <div id="chatRTLoginSubtitulo" style="font-size:11px;color:#666;margin-bottom:24px;">Inicia sesion para continuar</div>

        <div id="chatRTLoginForm" style="width:100%;display:flex;flex-direction:column;gap:14px;">
          <!-- Campos solo registro -->
          <div id="chatRTRegisterFields" style="display:none;flex-direction:column;gap:14px;">
            <!-- Foto de perfil (solo registro) -->
            <div style="display:flex;flex-direction:column;align-items:center;gap:6px;">
              <div id="chatRTRegFotoBtn" style="width:72px;height:72px;border-radius:50%;cursor:pointer;position:relative;overflow:hidden;background:#1a1a2e;border:2px dashed #2563eb;transition:all 0.2s;display:flex;align-items:center;justify-content:center;" title="Subir foto (opcional)">
                <img id="chatRTRegFotoPreview" src="${_defaultPhoto}" style="width:100%;height:100%;object-fit:cover;display:none;" />
                <div id="chatRTRegFotoIcon" style="display:flex;flex-direction:column;align-items:center;gap:2px;">${_iconCam}<span style="font-size:8px;color:#666;">Foto</span></div>
              </div>
              <div id="chatRTRegFotoError" style="font-size:10px;color:#ef4444;display:none;"></div>
            </div>
            <div>
              <div style="font-size:10px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Nombre de usuario</div>
              <div style="position:relative;">
                <span style="position:absolute;left:10px;top:50%;transform:translateY(-50%);color:#555;font-size:13px;">@</span>
                <input id="chatRTRegUser" type="text" placeholder="usuario" style="width:100%;background:#111;border:1px solid #222;color:#e8edf9;font-size:13px;padding:10px 12px 10px 22px;border-radius:8px;outline:none;transition:border-color 0.2s;box-sizing:border-box;" autocomplete="off" />
              </div>
              <div id="chatRTRegUserError" style="font-size:10px;color:#ef4444;margin-top:3px;display:none;"></div>
            </div>
            <div>
              <div style="font-size:10px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Nombre visible</div>
              <input id="chatRTRegNombre" type="text" placeholder="Tu nombre" style="width:100%;background:#111;border:1px solid #222;color:#e8edf9;font-size:13px;padding:10px 12px;border-radius:8px;outline:none;transition:border-color 0.2s;box-sizing:border-box;" autocomplete="name" />
              <div id="chatRTRegNombreError" style="font-size:10px;color:#ef4444;margin-top:3px;display:none;"></div>
            </div>
          </div>
          <!-- Email (siempre visible) -->
          <div>
            <div style="font-size:10px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Correo electronico</div>
            <input id="chatRTLoginEmail" type="email" placeholder="correo@ejemplo.com" style="width:100%;background:#111;border:1px solid #222;color:#e8edf9;font-size:13px;padding:10px 12px;border-radius:8px;outline:none;transition:border-color 0.2s;box-sizing:border-box;" autocomplete="email" />
            <div id="chatRTLoginEmailError" style="font-size:10px;color:#ef4444;margin-top:3px;display:none;"></div>
          </div>
          <!-- Password (siempre visible) -->
          <div>
            <div style="font-size:10px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Contrasena</div>
            <div style="position:relative;">
              <input id="chatRTLoginPass" type="password" placeholder="10+ caracteres, mayuscula, numero, especial" style="width:100%;background:#111;border:1px solid #222;color:#e8edf9;font-size:13px;padding:10px 36px 10px 12px;border-radius:8px;outline:none;transition:border-color 0.2s;box-sizing:border-box;" autocomplete="current-password" />
              <button id="chatRTTogglePass" type="button" style="position:absolute;right:6px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;opacity:0.5;transition:opacity 0.2s;">
                <svg id="chatRTEyeOpen" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                <svg id="chatRTEyeClosed" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:none;"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
              </button>
            </div>
            <div id="chatRTLoginPassError" style="font-size:10px;color:#ef4444;margin-top:3px;display:none;"></div>
          </div>
          <!-- Boton principal -->
          <button id="chatRTBtnSubmit" style="width:100%;padding:11px;background:#2563eb;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;transition:all 0.15s;margin-top:4px;">Iniciar sesion</button>
          <!-- Error general -->
          <div id="chatRTLoginGeneralError" style="font-size:11px;color:#ef4444;text-align:center;display:none;"></div>
          <!-- Links -->
          <div style="text-align:center;">
            <button id="chatRTLinkRecuperar" style="background:none;border:none;color:#2563eb;font-size:11px;cursor:pointer;">Olvidaste tu contrasena?</button>
          </div>
          <div style="text-align:center;font-size:11px;color:#666;">
            <span id="chatRTToggleText">No tienes cuenta?</span>
            <button id="chatRTToggleAuth" style="background:none;border:none;color:#2563eb;font-size:11px;font-weight:600;cursor:pointer;">Registrate</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ====== VISTA RECUPERAR CUENTA ====== -->
    <div id="chatRTVistaRecuperar" style="display:none;flex-direction:column;height:100%;">
      <div style="display:flex;align-items:center;gap:12px;padding:12px 16px;background:#111;border-bottom:1px solid #1a1a1a;">
        <button id="chatRTVolverLogin" style="background:none;border:none;color:#fff;cursor:pointer;display:flex;align-items:center;padding:4px;border-radius:4px;transition:background 0.15s;">${_iconBack}</button>
        <div style="font-size:14px;font-weight:600;color:#fff;">Recuperar cuenta</div>
      </div>
      <div style="flex:1;overflow-y:auto;padding:24px 20px;display:flex;flex-direction:column;align-items:center;">
        <div style="width:60px;height:60px;border-radius:50%;background:#111;display:flex;align-items:center;justify-content:center;border:1px solid #1a1a1a;margin-bottom:16px;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        </div>
        <div style="font-size:14px;font-weight:600;color:#fff;margin-bottom:4px;">Restablece tu contrasena</div>
        <div style="font-size:11px;color:#666;margin-bottom:20px;text-align:center;line-height:1.5;">Te enviaremos un correo con las instrucciones para restablecer tu contrasena.</div>
        <div style="width:100%;display:flex;flex-direction:column;gap:14px;">
          <div>
            <div style="font-size:10px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Correo electronico</div>
            <input id="chatRTRecEmail" type="email" placeholder="correo@ejemplo.com" style="width:100%;background:#111;border:1px solid #222;color:#e8edf9;font-size:13px;padding:10px 12px;border-radius:8px;outline:none;transition:border-color 0.2s;box-sizing:border-box;" autocomplete="email" />
            <div id="chatRTRecEmailError" style="font-size:10px;color:#ef4444;margin-top:3px;display:none;"></div>
          </div>
          <button id="chatRTBtnEnviarRec" style="width:100%;padding:11px;background:#2563eb;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;transition:all 0.15s;">Enviar correo</button>
          <div id="chatRTRecGeneralError" style="font-size:11px;color:#ef4444;text-align:center;display:none;"></div>
          <!-- Countdown -->
          <div id="chatRTRecCountdown" style="display:none;text-align:center;">
            <div style="font-size:11px;color:#666;margin-bottom:8px;">Correo enviado. Puedes reenviar en:</div>
            <div id="chatRTRecTimer" style="font-size:20px;font-weight:700;color:#2563eb;margin-bottom:8px;">60</div>
            <button id="chatRTBtnReenviar" style="background:none;border:none;color:#2563eb;font-size:11px;cursor:pointer;display:none;">Reenviar correo</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ====== VISTA CHAT (estructura existente, oculta por defecto) ====== -->
    <div id="chatRTVistaChat" style="display:none;flex-direction:column;height:100%;">
      <div id="chatRTChatHeader" style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:#111;border-bottom:1px solid #1a1a1a;">
        <div style="display:flex;align-items:center;gap:10px;flex:1;">
          <button id="chatRTChatVolverBtn" style="background:none;border:none;color:#fff;cursor:pointer;display:flex;align-items:center;padding:4px;border-radius:4px;">${_iconBack}</button>
          <div style="width:36px;height:36px;border-radius:50%;overflow:hidden;flex-shrink:0;background:#1a1a2e;"><img id="chatRTChatFoto" src="${_defaultPhoto}" style="width:100%;height:100%;object-fit:cover;" /></div>
          <div>
            <div id="chatRTChatNombre" style="font-size:13px;font-weight:700;color:#fff;">Conexan</div>
            <div id="chatRTChatUsuario" style="font-size:10px;color:#666;">Comunicacion directa</div>
          </div>
        </div>
        <button id="cerrarChatRT2" style="background:none;border:1px solid #333;color:#888;width:24px;height:24px;border-radius:4px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;transition:all 0.15s ease;line-height:1;">X</button>
      </div>
      <div id="chatRTMensajes" style="flex:1;overflow-y:auto;overflow-x:hidden;padding:10px;display:flex;flex-direction:column;position:relative;"></div>
      <!-- Barra de responder/citar -->
      <div id="chatRTReplyBar" style="display:none;padding:8px 12px;border-top:1px solid #1a1a1a;background:#14141f;align-items:center;gap:10px;">
        <div style="width:3px;height:100%;min-height:32px;background:#2563eb;border-radius:2px;flex-shrink:0;"></div>
        <div style="flex:1;overflow:hidden;">
          <div id="chatRTReplyAutor" style="font-size:11px;color:#60a5fa;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
          <div id="chatRTReplyTexto" style="font-size:11px;color:#999;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:2px;"></div>
        </div>
        <button id="chatRTReplyCerrar" style="background:none;border:none;color:#888;cursor:pointer;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:background 0.15s;" title="Cancelar respuesta" onmouseover="this.style.background='#222'" onmouseout="this.style.background='transparent'">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div id="chatRTComposer" style="padding:10px;border-top:1px solid #1a1a1a;background:#111;">
        <div style="display:flex;gap:8px;align-items:flex-end;">
          <button id="chatRTEmojiBtn" style="width:36px;height:36px;border:none;border-radius:8px;background:transparent;color:#888;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all 0.15s;" title="Emoji">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
          </button>
          <textarea id="chatRTInput" rows="1" placeholder="Escribe tu mensaje..." style="flex:1;background:#161616;border:1px solid #222;color:#e8edf9;font-family:inherit;font-size:13px;line-height:1.5;padding:8px 12px;border-radius:8px;resize:none;max-height:100px;outline:none;transition:border-color 0.2s;"></textarea>
          <button id="chatRTEnviar" style="width:36px;height:36px;border:none;border-radius:8px;background:#2563eb;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all 0.15s ease;" disabled>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/></svg>
          </button>
        </div>
        <div style="text-align:center;color:#444;font-size:10px;margin-top:6px;">Enter para enviar - Shift+Enter nueva linea</div>
      </div>
      <!-- Panel emojis estilo WhatsApp -->
      <div id="chatRTEmojiPanel" style="display:none;flex-direction:column;height:280px;border-top:1px solid #1a1a1a;background:#0d0d0d;overflow:hidden;">
        <div id="chatRTEmojiScroll" style="flex:1;overflow-y:auto;overflow-x:hidden;padding:8px 0;"></div>
        <div id="chatRTEmojiTabs" style="display:flex;justify-content:space-around;align-items:center;padding:6px 4px;border-top:1px solid #1a1a1a;background:#111;flex-shrink:0;"></div>
      </div>
    </div>
    </div><!-- /chatRTViewsContainer -->

    <!-- Bottom bar (siempre visible cuando hay sesion) -->
    <div id="chatRTBottomBar" style="display:none;padding:12px 16px;background:#111;border-top:1px solid #1a1a1a;justify-content:space-between;align-items:center;">
      <div id="chatRTChatsBtn" style="width:36px;height:36px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;background:#1a1a2e;border:1px solid #2563eb;transition:all 0.2s;" title="Chats">
        ${_iconChat}
      </div>
      <div id="chatRTPerfilBtn" style="width:40px;height:40px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;overflow:hidden;border:2px solid #222;transition:border-color 0.2s;" title="Mi perfil">
        <img id="chatRTFotoMini" src="${_defaultPhoto}" style="width:100%;height:100%;object-fit:cover;" />
      </div>
    </div>

    <!-- Modal de confirmacion elegante -->
    <div id="chatRTConfirmModal" style="display:none;position:absolute;inset:0;background:rgba(0,0,0,0.75);z-index:99999;align-items:center;justify-content:center;padding:20px;">
      <div style="background:#15151f;border:1px solid #252540;border-radius:14px;width:320px;max-width:90vw;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.6);">
        <div id="chatRTConfirmIcono" style="display:flex;align-items:center;justify-content:center;padding:20px 20px 0;"></div>
        <div style="padding:14px 20px 20px;text-align:center;">
          <div id="chatRTConfirmTitulo" style="font-size:15px;font-weight:700;color:#fff;"></div>
          <div id="chatRTConfirmMensaje" style="font-size:12px;color:#999;margin-top:8px;line-height:1.5;white-space:pre-line;"></div>
        </div>
        <div style="display:flex;border-top:1px solid #1f1f2e;">
          <button id="chatRTConfirmCancelar" style="flex:1;padding:12px;background:none;border:none;color:#888;font-size:13px;cursor:pointer;border-right:1px solid #1f1f2e;transition:background 0.15s;" onmouseover="this.style.background='#1a1a24'" onmouseout="this.style.background='transparent'">Cancelar</button>
          <button id="chatRTConfirmAceptar" style="flex:1;padding:12px;background:none;border:none;color:#ef4444;font-size:13px;font-weight:700;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='#2a0f0f'" onmouseout="this.style.background='transparent'">Eliminar</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(chatRTOverlay);
  document.body.appendChild(botonNotificaciones);
  document.body.appendChild(botonIA);
  document.body.appendChild(botonChatRT);

  function mostrarChatRT() {
    chatRTOverlay.style.display = "flex";
    chatRTOverlay.style.animation = "notifSlideIn 0.25s ease-out";
    botonChatRT.style.display = "none";
    botonIA.style.display = "none";
    botonNotificaciones.style.display = "none";
    chatRTVistaActual = "";
    // Reanudar conexiones si estaban cerradas por inactividad
    if (chatRTConexionesCerradas) { chatRTConexionesCerradas = false; chatRTReanudarConexiones(); }
    // Verificar sesion al abrir
    chatRTVerificarSesion();
    chatRTIniciarMonitoreoInactividad();
    setTimeout(() => {
      chatRTReconstruirConectores();
      const inp = document.getElementById("chatRTInput");
      if (inp) inp.focus();
    }, 300);
  }

  // === Navegacion entre vistas ===
  let chatRTVistaActual = "";
  function chatRTMostrarVista(vista) {
    if (vista === chatRTVistaActual) return;
    chatRTVistaActual = vista;
    // Detener polling si salimos del chat
    if (vista !== "chat") chatRTPararPolling();
    const vistas = ["chatRTVistaLogin", "chatRTVistaRecuperar", "chatRTVistaMain", "chatRTVistaNuevoChat", "chatRTVistaNuevoContacto", "chatRTVistaPerfil", "chatRTVistaColores", "chatRTVistaCrearGrupo", "chatRTVistaInfoGrupo", "chatRTVistaPerfilUsuario", "chatRTVistaChat", "chatRTVistaMenu"];
    vistas.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    });
    const mapa = {
      "login": "chatRTVistaLogin",
      "recuperar": "chatRTVistaRecuperar",
      "main": "chatRTVistaMain",
      "nuevochat": "chatRTVistaNuevoChat",
      "nuevocontacto": "chatRTVistaNuevoContacto",
      "perfil": "chatRTVistaPerfil",
      "colores": "chatRTVistaColores",
      "creargrupo": "chatRTVistaCrearGrupo",
      "infogrupo": "chatRTVistaInfoGrupo",
      "perfilusuario": "chatRTVistaPerfilUsuario",
      "chat": "chatRTVistaChat",
      "menu": "chatRTVistaMenu",
    };
    const elId = mapa[vista];
    const el = document.getElementById(elId);
    if (el) {
      el.style.display = "flex";
      el.style.animation = "none";
      el.offsetHeight;
      el.style.animation = "chatRTSlideIn 0.25s ease-out";
    }

    // Mostrar/ocultar bottom bar segun vista
    const bottomBar = document.getElementById("chatRTBottomBar");
    const ocultarBottom = (vista === "login" || vista === "recuperar" || vista === "chat");
    if (bottomBar) bottomBar.style.display = ocultarBottom ? "none" : "flex";

    // Ocultar snackbar y notificacion al cambiar de vista
    const snackbar = document.getElementById("chatRTSnackbar");
    if (snackbar) snackbar.style.display = "none";
    const notifChat = document.getElementById("chatRTNotifChat");
    if (notifChat) notifChat.style.display = "none";

    if (vista === "main") {
      // Cargar cache instantaneo si existe (sin esperar red)
      const cache = chatRTCargarCacheContactos();
      if (cache && Array.isArray(cache) && cache.length > 0) {
        chatRTContactos = cache;
        chatRTMostrarContactosEnLista();
      }
      // Cache de grupos (instantaneo)
      const cacheGrupos = chatRTCargarCacheGrupos();
      if (cacheGrupos.length > 0) {
        _chatRTGruposCache = cacheGrupos;
        chatRTMostrarContactosEnLista();
      }
      chatRTCargarContactos();
      chatRTCargarGrupos();
      chatRTCargarUltimoMsgPersonal();
      actualizarEstadoNuevoGrupo();
    }
    if (vista === "perfil") {
      const p = cargarPerfilRT();
      const campoEmail = document.getElementById("chatRTCampoEmail");
      const campoNombre = document.getElementById("chatRTCampoNombre");
      const campoInfo = document.getElementById("chatRTCampoInfo");
      const campoUsuario = document.getElementById("chatRTCampoUsuario");
      const campoPass = document.getElementById("chatRTCampoPass");
      const fotoGrande = document.getElementById("chatRTFotoPerfilImg");
      if (campoEmail) campoEmail.value = p.email || "";
      if (campoNombre) campoNombre.value = p.nombre || "";
      if (campoInfo) campoInfo.value = p.info || "";
      if (campoUsuario) campoUsuario.value = p.usuario || "";
      if (campoPass) campoPass.value = localStorage.getItem("rt_pass") || "";
      if (fotoGrande) fotoGrande.src = p.foto || _defaultPhoto;
      chatRTPerfilOriginales = {
        nombre: p.nombre || "",
        info: p.info || "",
        usuario: p.usuario || "",
        pass: localStorage.getItem("rt_pass") || "",
      };
      chatRTVerificarPermisosEdicion();
    }

    if (vista === "menu") {
      const p = cargarPerfilRT();
      const nombreEl = document.getElementById("chatRTMenuNombre");
      const usuarioEl = document.getElementById("chatRTMenuUsuario");
      const fotoEl = document.getElementById("chatRTMenuFotoImg");
      if (nombreEl) nombreEl.textContent = p.nombre || p.usuario || "Usuario";
      if (usuarioEl) usuarioEl.textContent = p.usuario ? "@" + p.usuario : "";
      if (fotoEl) fotoEl.src = p.foto || _defaultPhoto;
    }

    // Cerrar menu perfil al cambiar de vista
    chatRTCerrarMenuPerfil();
  }

  // === Menu perfil: navegar a vista menu ===
  function chatRTToggleMenuPerfil() {
    chatRTMostrarVista("menu");
  }
  function chatRTCerrarMenuPerfil() {}

  // === SISTEMA DE CONTACTOS Y CHAT ===
  let chatRTContactos = [];
  let chatRTChatActivo = null;
  let _chatRTChatPersonal = false;
  let _chatRTVistaAnterior = "main";
  let chatRTUltimoMsgPersonal = "";   // preview del ultimo mensaje personal
  let chatRTUltimoTsPersonal = "";    // timestamp del ultimo mensaje personal
  let chatRTBusquedasRecientes = [];
  // Estado de mensaje a responder (citar)
  let chatRTRespondiendoA = null; // { id, texto, autor, esGrupo }
  let chatRTReplyContenidos = {}; // msgId -> { texto, autor } para citar
  let chatRTHeartbeatInterval = null;

  // Heartbeat: actualizar last_seen cada 30 segundos
  let chatRTRefreshContactosInterval = null;
  function chatRTIniciarHeartbeat() {
    chatRTActualizarLastSeen();
    if (chatRTHeartbeatInterval) clearInterval(chatRTHeartbeatInterval);
    chatRTHeartbeatInterval = setInterval(chatRTActualizarLastSeen, 30000);
    // Refrescar contactos cada 30 segundos para estado online
    if (chatRTRefreshContactosInterval) clearInterval(chatRTRefreshContactosInterval);
    chatRTRefreshContactosInterval = setInterval(() => { chatRTCargarContactos(); }, 30000);
  }
  function chatRTPararHeartbeat() {
    if (chatRTHeartbeatInterval) { clearInterval(chatRTHeartbeatInterval); chatRTHeartbeatInterval = null; }
    if (chatRTRefreshContactosInterval) { clearInterval(chatRTRefreshContactosInterval); chatRTRefreshContactosInterval = null; }
  }
  async function chatRTActualizarLastSeen() {
    const sb = getSupabase();
    if (!sb) return;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return;
    await sb.from("profiles").update({ last_seen: new Date().toISOString() }).eq("user_id", session.user.id);
  }

  // === Cerrar/reabrir todas las conexiones ===
  function chatRTCerrarTodasConexiones() {
    chatRTPararPolling();
    chatRTPararPollingGrupo();
    chatRTPararHeartbeat();
    chatRTEnviarTypingStop();
    if (chatRTTypingDebounce) { clearTimeout(chatRTTypingDebounce); chatRTTypingDebounce = null; }
    if (chatRTTypingInterval) { clearInterval(chatRTTypingInterval); chatRTTypingInterval = null; }
    chatRTTypingUsers = {};
    const sb = getSupabase();
    if (sb && chatRTSubscription) { try { sb.removeChannel(chatRTSubscription); } catch(e) {} chatRTSubscription = null; }
    if (sb && chatRTTypingChannel) { try { sb.removeChannel(chatRTTypingChannel); } catch(e) {} chatRTTypingChannel = null; }
    if (sb && _chatRTGrupoSubscription) { try { sb.removeChannel(_chatRTGrupoSubscription); } catch(e) {} _chatRTGrupoSubscription = null; }
    if (sb && _chatRTGrupoTypingChannel) { try { sb.removeChannel(_chatRTGrupoTypingChannel); } catch(e) {} _chatRTGrupoTypingChannel = null; }
    _chatRTGrupoTypingUsers = {};
    _chatRTChatGrupoActivo = false;
  }
  function chatRTReanudarConexiones() {
    const sb = getSupabase();
    if (!sb) return;
    sb.auth.getSession().then(({ data: { session } }) => {
      if (!session) return;
      chatRTSuscribirMensajes();
      chatRTIniciarHeartbeat();
      chatRTActualizarLastSeen();
      if (chatRTChatActivo) { chatRTUltimoMsgTs = null; chatRTPollingActivo = true; chatRTPollingLoop(); chatRTStatusPollingLoop(); }
    });
  }

  // === Inactividad: cerrar conexiones despues de 2 minutos (como WhatsApp) ===
  let chatRTInactividadTimer = null;
  const _chatRT_TIMEOUT = 120000; // 2 minutos

  function chatRTReiniciarInactividad() {
    if (chatRTInactividadTimer) clearTimeout(chatRTInactividadTimer);
    chatRTInactividadTimer = setTimeout(() => {
      chatRTCerrarTodasConexiones();
      chatRTConexionesCerradas = true;
    }, _chatRT_TIMEOUT);
  }
  let chatRTConexionesCerradas = false;

  function chatRTOnInteraccion() {
    if (chatRTConexionesCerradas) {
      chatRTConexionesCerradas = false;
      chatRTReanudarConexiones();
    }
    chatRTReiniciarInactividad();
  }

  function chatRTIniciarMonitoreoInactividad() {
    ["click", "keydown", "scroll", "mousemove"].forEach(evt => {
      chatRTOverlay.addEventListener(evt, chatRTOnInteraccion, { passive: true });
    });
    chatRTReiniciarInactividad();
  }

  // Cargar contactos desde Supabase (con ultimo mensaje y no leidos)
  // Skeleton de contactos (shimmer)
  function chatRTMostrarSkeletonContactos() {
    const lista = document.getElementById("chatRTContactosLista");
    const welcome = document.getElementById("chatRTMainWelcome");
    if (!lista) return;
    if (welcome) welcome.style.display = "none";
    lista.style.display = "block";
    const shimmer = "background:linear-gradient(90deg,#14141f 25%,#1f1f2e 50%,#14141f 75%);background-size:200px 100%;animation:chatRTShimmer 1.2s infinite;";
    let html = "";
    for (let i = 0; i < 6; i++) {
      html += '<div style="display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid #1a1a1a;">' +
        '<div style="width:44px;height:44px;border-radius:50%;flex-shrink:0;' + shimmer + '"></div>' +
        '<div style="flex:1;display:flex;flex-direction:column;gap:8px;">' +
          '<div style="width:60%;height:12px;border-radius:6px;' + shimmer + '"></div>' +
          '<div style="width:40%;height:10px;border-radius:5px;' + shimmer + '"></div>' +
        '</div>' +
      '</div>';
    }
    lista.innerHTML = html;
  }

  function chatRTSkeletonContactosVisible() {
    const lista = document.getElementById("chatRTContactosLista");
    return !!(lista && lista.querySelector(".chatRTContactoItem"));
  }

  // Guardar contactos en cache local
  function chatRTGuardarCacheContactos(contactos) {
    try {
      localStorage.setItem("rt_chats_cache", JSON.stringify({ t: Date.now(), data: contactos }));
    } catch(e) {}
  }

  // Cargar contactos desde cache local (instantaneo)
  function chatRTCargarCacheContactos() {
    try {
      const raw = localStorage.getItem("rt_chats_cache");
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.data)) return null;
      return parsed.data;
    } catch(e) { return null; }
  }

  // Cache de grupos
  function chatRTGuardarCacheGrupos(grupos) {
    try {
      localStorage.setItem("rt_grupos_cache", JSON.stringify({ t: Date.now(), data: grupos }));
    } catch(e) {}
  }

  function chatRTCargarCacheGrupos() {
    try {
      const raw = localStorage.getItem("rt_grupos_cache");
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.data)) return [];
      return parsed.data;
    } catch(e) { return []; }
  }

  // Cache de mensajes por contacto (ultimos 60 mensajes)
  function chatRTGuardarCacheMensajes(contactId, mensajes) {
    try {
      const limitados = mensajes.slice(-60);
      localStorage.setItem("rt_msgs_" + contactId, JSON.stringify({ t: Date.now(), data: limitados }));
    } catch(e) {}
  }

  function chatRTCargarCacheMensajes(contactId) {
    try {
      const raw = localStorage.getItem("rt_msgs_" + contactId);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.data)) return [];
      return parsed.data;
    } catch(e) { return []; }
  }

  // Cargar el ultimo mensaje personal (notas)
  async function chatRTCargarUltimoMsgPersonal() {
    const sb = getSupabase();
    if (!sb) return;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return;
    const myId = session.user.id;
    const { data: lastMsg } = await sb
      .from("direct_messages")
      .select("content, created_at")
      .eq("sender_id", myId)
      .eq("receiver_id", myId)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();
    chatRTUltimoMsgPersonal = lastMsg ? lastMsg.content : "";
    chatRTUltimoTsPersonal = lastMsg ? lastMsg.created_at : "";
    chatRTMostrarContactosEnLista();
  }

  async function chatRTCargarContactos() {
    const sb = getSupabase();
    if (!sb) return [];
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return [];
    const myId = session.user.id;

    // Mostrar skeleton mientras carga (solo si no hay cache instantaneo visible)
    if (!chatRTSkeletonContactosVisible()) chatRTMostrarSkeletonContactos();

    // 1. Cargar contactos explícitos
    const { data: contactsData } = await sb
      .from("contacts")
      .select("id, contact_id, contact_email, created_at")
      .eq("user_id", myId);

    const contactosMap = new Map();
    const contactEmails = new Set();

    if (contactsData) {
      for (const c of contactsData) {
        let perfil = null;
        if (c.contact_email) {
          const { data: p1 } = await sb
            .from("profiles")
            .select("user_id, display_name, username, photo_url, email, last_seen")
            .eq("email", c.contact_email)
            .maybeSingle();
          perfil = p1;
        }
        if (!perfil && c.contact_id) {
          const { data: p2 } = await sb
            .from("profiles")
            .select("user_id, display_name, username, photo_url, email, last_seen")
            .eq("user_id", c.contact_id)
            .maybeSingle();
          perfil = p2;
        }
        if (perfil) {
          if (perfil.email) contactEmails.add(perfil.email);
          contactosMap.set(perfil.user_id, { perfil, creado: c.created_at });
        }
      }
    }

    // 2. Buscar personas con las que hay mensajes pero NO estan en contactos
    const { data: dmPartners } = await sb
      .from("direct_messages")
      .select("sender_id, receiver_id")
      .or("sender_id.eq." + myId + ",receiver_id.eq." + myId);

    const missingIds = new Set();
    if (dmPartners) {
      for (const dm of dmPartners) {
        const otherId = dm.sender_id === myId ? dm.receiver_id : dm.sender_id;
        if (otherId !== myId && !contactosMap.has(otherId)) {
          missingIds.add(otherId);
        }
      }
    }

    if (missingIds.size > 0) {
      const { data: missingProfiles } = await sb
        .from("profiles")
        .select("user_id, display_name, username, photo_url, email, last_seen")
        .in("user_id", [...missingIds]);
      if (missingProfiles) {
        for (const perfil of missingProfiles) {
          if (perfil.email) contactEmails.add(perfil.email);
          contactosMap.set(perfil.user_id, { perfil, creado: null });
        }
      }
    }

    // 3. Para cada perfil, obtener ultimo mensaje y no leidos
    const contactos = [];
    for (const [userId, { perfil, creado }] of contactosMap) {
      const estaOnline = perfil.last_seen && (Date.now() - new Date(perfil.last_seen).getTime()) < 60000;
      const ultimoVisto = perfil.last_seen || null;
      const { data: lastMsg } = await sb
        .from("direct_messages")
        .select("content, sender_id, created_at")
        .or("and(sender_id.eq." + myId + ",receiver_id.eq." + userId + "),and(sender_id.eq." + userId + ",receiver_id.eq." + myId + "))")
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      const { count: unread } = await sb
        .from("direct_messages")
        .select("id", { count: "exact", head: true })
        .eq("sender_id", userId)
        .eq("receiver_id", myId)
        .eq("read", false);
      contactos.push({
        contactId: userId,
        nombre: perfil.display_name || perfil.username || "Sin nombre",
        usuario: perfil.username || "",
        foto: perfil.photo_url || "",
        email: perfil.email || "",
        creado: creado,
        online: estaOnline,
        lastSeen: ultimoVisto,
        ultimoMensaje: lastMsg ? lastMsg.content : "",
        ultimoMensajeEsMio: lastMsg ? lastMsg.sender_id === myId : false,
        ultimoMensajeTiempo: lastMsg ? lastMsg.created_at : "",
        noLeidos: unread || 0,
      });
    }

    // Ordenar: primero con mensajes, por tiempo
    contactos.sort((a, b) => {
      if (a.ultimoMensajeTiempo && b.ultimoMensajeTiempo) return new Date(b.ultimoMensajeTiempo) - new Date(a.ultimoMensajeTiempo);
      if (a.ultimoMensajeTiempo) return -1;
      if (b.ultimoMensajeTiempo) return 1;
      return 0;
    });
    chatRTContactos = contactos;
    chatRTMostrarContactosEnLista();
    chatRTGuardarCacheContactos(contactos);
    // Actualizar header del chat si hay uno activo
    if (chatRTChatActivo) {
      const actualizado = contactos.find(c => c.contactId === chatRTChatActivo.contactId);
      if (actualizado) {
        chatRTChatActivo.online = actualizado.online;
        chatRTChatActivo.lastSeen = actualizado.lastSeen;
        const usuario = document.getElementById("chatRTChatUsuario");
        if (usuario) {
          if (actualizado.online) {
            usuario.textContent = "En linea";
            usuario.style.color = "#22c55e";
          } else {
            usuario.textContent = actualizado.lastSeen ? chatRTTiempoRelativo(actualizado.lastSeen) : "@" + actualizado.usuario;
            usuario.style.color = "#666";
          }
        }
      }
    }
    return contactos;
  }

  // Renderizar contactos en la vista principal (estilo WhatsApp)
  function chatRTMostrarContactosEnLista() {
    const lista = document.getElementById("chatRTContactosLista");
    const welcome = document.getElementById("chatRTMainWelcome");
    if (!lista) return;
    const hayGrupos = _chatRTGruposCache.length > 0;
    if (chatRTContactos.length === 0 && !hayGrupos) {
      lista.style.display = "none";
      if (welcome) welcome.style.display = "flex";
      return;
    }
    if (welcome) welcome.style.display = "none";
    lista.style.display = "block";
    // Combinar contactos y grupos, ordenar por ultimo mensaje (mas reciente primero)
    const items = [
      { tipo: "personal", contactId: "personal", nombre: "Notas personales", usuario: "tu", foto: obtenerFotoRT(), ultimoMensaje: chatRTUltimoMsgPersonal || "Envia notas para ti mismo", ultimoMensajeTiempo: chatRTUltimoTsPersonal },
      ...chatRTContactos.map(c => ({ tipo: "contacto", ...c })),
      ..._chatRTGruposCache.map(g => ({ tipo: "grupo", ...g })),
    ].sort((a, b) => {
      const ta = a.ultimoMensajeTiempo ? new Date(a.ultimoMensajeTiempo).getTime() : 0;
      const tb = b.ultimoMensajeTiempo ? new Date(b.ultimoMensajeTiempo).getTime() : 0;
      if (ta && tb) return tb - ta;
      if (ta) return -1;
      if (tb) return 1;
      return 0;
    });
    let html = "";
    items.forEach((it, i) => {
      if (it.tipo === "personal") {
        const foto = it.foto || _defaultPhoto;
        const tiempo = it.ultimoMensajeTiempo ? chatRTFormatearTiempo(it.ultimoMensajeTiempo) : "";
        const preview = it.ultimoMensaje || "";
        html += '<div data-idx="' + i + '" class="chatRTPersonalItem" style="display:flex;align-items:center;gap:12px;padding:12px 16px;cursor:pointer;border-bottom:1px solid #1a1a1a;transition:background 0.15s;background:#0f1624;" onmouseover="this.style.background=\'#141f33\'" onmouseout="this.style.background=\'#0f1624\'">' +
          '<div style="width:44px;height:44px;position:relative;flex-shrink:0;"><img src="' + foto + '" style="width:44px;height:44px;border-radius:50%;object-fit:cover;" /><div style="position:absolute;bottom:0;right:0;width:16px;height:16px;border-radius:50%;background:#22c55e;border:2px solid #0f1624;display:flex;align-items:center;justify-content:center;"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div></div>' +
          '<div style="overflow:hidden;flex:1;">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;">' +
              '<div style="font-size:13px;font-weight:600;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;">' + it.nombre + '</div>' +
              '<div style="font-size:10px;color:#666;flex-shrink:0;margin-left:8px;">' + tiempo + '</div>' +
            '</div>' +
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:2px;">' +
              '<div style="font-size:11px;color:#22c55e;font-style:italic;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;">' + preview + '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
      } else if (it.tipo === "grupo") {
        const foto = it.photo_url || _defaultPhoto;
        const tiempo = it.ultimoMensajeTiempo ? chatRTFormatearTiempo(it.ultimoMensajeTiempo) : "";
        const preview = it.ultimoMensaje ? it.ultimoMensaje : "";
        // Quien esta escribiendo en el grupo
        const escribiendoIds = Object.keys(_chatRTGrupoTypingUsers).filter(uid => {
          if (!_chatRTGrupoActivo || _chatRTGrupoActivo.id !== it.id) return false;
          return (Date.now() - _chatRTGrupoTypingUsers[uid]) < 4000;
        });
        const escribiendoNombre = escribiendoIds.length > 0
          ? (_chatRTGrupoTypingNombres[escribiendoIds[0]] || "Alguien") + " esta escribiendo..."
          : "";
        const subGrupo = escribiendoNombre
          ? '<span style="color:#22c55e;font-style:italic;">' + escribiendoNombre + '</span>'
          : '<span style="color:#666;">' + preview + '</span>';
        html += '<div data-idx="' + i + '" class="chatRTGrupoItem" style="display:flex;align-items:center;gap:12px;padding:12px 16px;cursor:pointer;border-bottom:1px solid #1a1a1a;transition:background 0.15s;background:#10101a;" onmouseover="this.style.background=\'#1a1a1a\'" onmouseout="this.style.background=\'#10101a\'">' +
          '<div style="width:44px;height:44px;position:relative;flex-shrink:0;"><img src="' + foto + '" style="width:44px;height:44px;border-radius:50%;object-fit:cover;" /><div style="position:absolute;bottom:0;right:0;width:16px;height:16px;border-radius:50%;background:#2563eb;border:2px solid #10101a;display:flex;align-items:center;justify-content:center;">' + _iconGroup + '</div></div>' +
          '<div style="overflow:hidden;flex:1;">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;">' +
              '<div style="font-size:13px;font-weight:600;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;">' + it.name + '</div>' +
              '<div style="font-size:10px;color:#666;flex-shrink:0;margin-left:8px;">' + tiempo + '</div>' +
            '</div>' +
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:2px;">' +
              '<div style="font-size:11px;color:' + (escribiendoNombre ? "#22c55e" : "#666") + ';font-weight:' + (escribiendoNombre ? "600" : "400") + ';white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;">' + subGrupo + '</div>' +
            '</div>' +
          '</div>' +
        '</div>';
      } else {
        const foto = it.foto || _defaultPhoto;
        const onlineDot = it.online
          ? '<div style="position:absolute;bottom:0;right:0;width:10px;height:10px;border-radius:50%;background:#22c55e;border:2px solid #0a0a0a;"></div>'
          : '';
        const statusLine = it.online
          ? '<span style="color:#22c55e;">En linea</span>'
          : (it.lastSeen ? '<span style="color:#666;">' + chatRTTiempoRelativo(it.lastSeen) + '</span>' : '<span style="color:#666;">@' + it.usuario + '</span>');
        const preview = it.ultimoMensaje
          ? (it.ultimoMensajeEsMio ? "Tu: " : "") + it.ultimoMensaje
          : "";
        const estaEscribiendo = chatRTTypingUsers[it.contactId] && (Date.now() - chatRTTypingUsers[it.contactId]) < 4000;
        const subLinea = estaEscribiendo
          ? '<span style="color:#22c55e;font-style:italic;">Escribiendo...</span>'
          : (preview || statusLine);
        const previewColor = estaEscribiendo ? "#22c55e" : (it.noLeidos > 0 ? "#e8edf9" : "#666");
        const previewWeight = estaEscribiendo ? "600" : (it.noLeidos > 0 ? "600" : "400");
        const badge = it.noLeidos > 0
          ? '<div style="min-width:20px;height:20px;border-radius:10px;background:#2563eb;color:#fff;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;padding:0 5px;">' + it.noLeidos + '</div>'
          : '';
        const tiempo = it.ultimoMensajeTiempo ? chatRTFormatearTiempo(it.ultimoMensajeTiempo) : "";
        html += '<div data-idx="' + i + '" class="chatRTContactoItem" style="display:flex;align-items:center;gap:12px;padding:12px 16px;cursor:pointer;border-bottom:1px solid #1a1a1a;transition:background 0.15s;" onmouseover="this.style.background=\'#111\'" onmouseout="this.style.background=\'transparent\'">' +
          '<div style="width:44px;height:44px;position:relative;flex-shrink:0;"><img src="' + foto + '" style="width:44px;height:44px;border-radius:50%;object-fit:cover;" />' + onlineDot + '</div>' +
          '<div style="overflow:hidden;flex:1;">' +
            '<div style="display:flex;justify-content:space-between;align-items:center;">' +
              '<div style="font-size:13px;font-weight:600;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;">' + (it.nombre) + '</div>' +
              '<div style="font-size:10px;color:#666;flex-shrink:0;margin-left:8px;">' + tiempo + '</div>' +
            '</div>' +
            '<div style="display:flex;justify-content:space-between;align-items:center;margin-top:2px;">' +
              '<div style="font-size:11px;color:' + previewColor + ';font-weight:' + previewWeight + ';white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;">' + subLinea + '</div>' +
              badge +
            '</div>' +
          '</div>' +
        '</div>';
      }
    });
    lista.innerHTML = html;
    lista.querySelectorAll(".chatRTContactoItem").forEach(item => {
      item.onclick = () => {
        const idx = parseInt(item.dataset.idx);
        const it = items[idx];
        if (it && it.tipo === "contacto") chatRTAbrirChat(it);
      };
    });
    lista.querySelectorAll(".chatRTGrupoItem").forEach(item => {
      item.onclick = () => {
        const idx = parseInt(item.dataset.idx);
        const it = items[idx];
        if (it && it.tipo === "grupo") chatRTAbrirChatGrupo(it);
      };
    });
    lista.querySelectorAll(".chatRTPersonalItem").forEach(item => {
      item.onclick = () => chatRTAbrirChatPersonal();
    });
  }

  // Tiempo relativo (como WhatsApp)
  function chatRTTiempoRelativo(iso) {
    if (!iso) return "";
    const diff = Date.now() - new Date(iso).getTime();
    const seg = Math.floor(diff / 1000);
    if (seg < 60) return "En linea";
    const min = Math.floor(seg / 60);
    if (min < 60) return "Hace " + min + " min";
    const hrs = Math.floor(min / 60);
    if (hrs < 24) return "Hace " + hrs + " h";
    const dias = Math.floor(hrs / 24);
    if (dias === 1) return "Ayer";
    if (dias < 7) return "Hace " + dias + " dias";
    return new Date(iso).toLocaleDateString("es", { day: "2-digit", month: "2-digit" });
  }

  // Formatear tiempo para la lista
  function chatRTFormatearTiempo(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    const ahora = new Date();
    const diff = ahora - d;
    const dias = Math.floor(diff / 86400000);
    if (dias === 0) {
      return d.toLocaleTimeString("es", { hour: "2-digit", minute: "2-digit" });
    } else if (dias === 1) {
      return "Ayer";
    } else if (dias < 7) {
      return d.toLocaleDateString("es", { weekday: "short" });
    } else {
      return d.toLocaleDateString("es", { day: "2-digit", month: "2-digit", year: "2-digit" });
    }
  }

  // Buscar usuario por username
  async function chatRTBuscarContacto() {
    const input = document.getElementById("chatRTBuscarContactoInput");
    const resultado = document.getElementById("chatRTBuscarContactoResultado");
    if (!input || !resultado) return;
    const busqueda = input.value.trim().replace("@", "").toLowerCase();
    if (busqueda.length < 2) return;
    // Rate limit: 5 busquedas por minuto
    const ahora = Date.now();
    chatRTBusquedasRecientes = chatRTBusquedasRecientes.filter(t => ahora - t < 60000);
    if (chatRTBusquedasRecientes.length >= 5) {
      const restantes = Math.ceil((60000 - (ahora - chatRTBusquedasRecientes[0])) / 1000);
      resultado.style.display = "block";
      resultado.innerHTML = '<div style="text-align:center;padding:20px;color:#ef4444;font-size:12px;">Demasiadas busquedas. Intenta en ' + restantes + ' segundo(s).</div>';
      return;
    }
    chatRTBusquedasRecientes.push(ahora);
    const sb = getSupabase();
    if (!sb) return;
    // Skeleton mientras busca
    resultado.style.display = "block";
    const shimmer = "background:linear-gradient(90deg,#14141f 25%,#1f1f2e 50%,#14141f 75%);background-size:200px 100%;animation:chatRTShimmer 1.2s infinite;";
    resultado.innerHTML =
      '<div style="display:flex;align-items:center;gap:12px;padding:12px;background:#111;border-radius:8px;border:1px solid #1a1a1a;">' +
        '<div style="width:48px;height:48px;border-radius:50%;flex-shrink:0;' + shimmer + '"></div>' +
        '<div style="flex:1;display:flex;flex-direction:column;gap:8px;">' +
          '<div style="width:50%;height:12px;border-radius:6px;' + shimmer + '"></div>' +
          '<div style="width:35%;height:10px;border-radius:5px;' + shimmer + '"></div>' +
        '</div>' +
      '</div>';
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return;
    // Buscar por username exacto
    const { data: perfil } = await sb
      .from("profiles")
      .select("user_id, display_name, username, photo_url, email")
      .ilike("username", busqueda)
      .maybeSingle();
    if (!perfil || perfil.user_id === session.user.id) {
      resultado.innerHTML = '<div style="text-align:center;padding:20px;color:#666;font-size:12px;">Usuario no encontrado</div>';
      return;
    }
    // Verificar si ya es contacto (por email)
    const { data: existe } = await sb
      .from("contacts")
      .select("id")
      .eq("user_id", session.user.id)
      .eq("contact_email", perfil.email)
      .maybeSingle();
    const foto = perfil.photo_url || _defaultPhoto;
    const yaExiste = !!existe;
    resultado.innerHTML =
      '<div style="display:flex;align-items:center;gap:12px;padding:12px;background:#111;border-radius:8px;border:1px solid #1a1a1a;">' +
        '<div style="width:48px;height:48px;border-radius:50%;overflow:hidden;flex-shrink:0;background:#1a1a2e;"><img src="' + foto + '" style="width:100%;height:100%;object-fit:cover;" /></div>' +
        '<div style="flex:1;overflow:hidden;">' +
          '<div style="font-size:13px;font-weight:600;color:#fff;">' + (perfil.display_name || perfil.username) + '</div>' +
          '<div style="font-size:11px;color:#666;">@' + (perfil.username || "") + '</div>' +
        '</div>' +
        (yaExiste
          ? '<div style="color:#666;font-size:11px;">Ya es contacto</div>'
          : '<button data-userid="' + perfil.user_id + '" data-email="' + (perfil.email || "") + '" data-nombre="' + (perfil.display_name || perfil.username) + '" data-usuario="' + (perfil.username || "") + '" data-foto="' + foto + '" class="chatRTAgregarContactoBtn" style="background:#2563eb;border:none;color:#fff;padding:6px 14px;border-radius:6px;font-size:12px;cursor:pointer;transition:all 0.15s;box-shadow:0 2px 6px rgba(37,99,235,0.3);">Agregar</button>'
        ) +
      '</div>';
    // Evento agregar
    if (!yaExiste) {
      const btn = resultado.querySelector(".chatRTAgregarContactoBtn");
      if (btn) btn.onclick = () => chatRTAgregarContacto(btn.dataset.userid, btn.dataset.email, btn.dataset.nombre, btn.dataset.usuario, btn.dataset.foto);
    }
  }

  // Agregar contacto
  async function chatRTAgregarContacto(contactUserId, contactEmail, contactNombre, contactUsuario, contactFoto) {
    const sb = getSupabase();
    if (!sb) return;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return;
    // Insertar por email
    const { error } = await sb.from("contacts").insert([
      { user_id: session.user.id, contact_id: contactUserId, contact_email: contactEmail },
    ]);
    if (error) {
      if (error.code === "23505") {
        // Ya existe
      }
      return;
    }
    // Auto-agregar a la lista local
    chatRTContactos.push({
      contactId: contactUserId,
      perfilId: "",
      nombre: contactNombre,
      usuario: contactUsuario,
      foto: contactFoto,
      email: contactEmail,
      creado: new Date().toISOString(),
    });
    chatRTMostrarContactosEnLista();
    // Snackbar de confirmacion
    chatRTMostrarSnackbar("Contacto agregado correctamente");
    // Notificacion para chatear
    chatRTMostrarNotificacionChat(contactNombre, contactUsuario, contactFoto, contactUserId, contactEmail);
  }

  // Notificacion para chatear con el contacto recien agregado (dentro del panel)
  function chatRTMostrarNotificacionChat(nombre, usuario, foto, userId, email) {
    let notif = document.getElementById("chatRTNotifChat");
    if (!notif) {
      notif = document.createElement("div");
      notif.id = "chatRTNotifChat";
      notif.style.cssText = "display:none;padding:10px 14px;background:#111;border-top:1px solid #1a1a1a;flex-shrink:0;";
      const viewsContainer = document.getElementById("chatRTViewsContainer");
      if (viewsContainer) viewsContainer.parentNode.insertBefore(notif, viewsContainer.nextSibling);
    }
    notif.innerHTML =
      '<div style="display:flex;align-items:center;gap:12px;">' +
        '<div style="width:36px;height:36px;border-radius:50%;overflow:hidden;flex-shrink:0;background:#1a1a2e;"><img src="' + foto + '" style="width:100%;height:100%;object-fit:cover;" /></div>' +
        '<div style="flex:1;overflow:hidden;">' +
          '<div style="font-size:12px;color:#fff;font-weight:500;">Chatear con @' + usuario + '</div>' +
          '<div style="font-size:10px;color:#666;">Ahora puedes enviarle mensajes</div>' +
        '</div>' +
        '<button id="chatRTNotifChatBtn" style="background:#2563eb;border:none;color:#fff;padding:7px 14px;border-radius:6px;font-size:12px;cursor:pointer;font-weight:500;">Chat</button>' +
        '<button id="chatRTNotifChatCerrar" style="background:none;border:none;color:#666;cursor:pointer;font-size:18px;padding:0 4px;">\u00d7</button>' +
      '</div>';
    notif.style.display = "block";
    const btnChat = document.getElementById("chatRTNotifChatBtn");
    const btnCerrar = document.getElementById("chatRTNotifChatCerrar");
    if (btnChat) btnChat.onclick = () => {
      notif.style.display = "none";
      chatRTAbrirChat({ contactId: userId, nombre: nombre, usuario: usuario, foto: foto, email: email });
    };
    if (btnCerrar) btnCerrar.onclick = () => { notif.style.display = "none"; };
  }

  // Snackbar notificacion (dentro del panel)
  function chatRTMostrarSnackbar(texto) {
    let snackbar = document.getElementById("chatRTSnackbar");
    if (!snackbar) {
      snackbar = document.createElement("div");
      snackbar.id = "chatRTSnackbar";
      snackbar.style.cssText = "padding:10px 16px;background:#2563eb;color:#fff;font-size:13px;display:none;text-align:center;border-radius:8px;margin:8px 12px;flex-shrink:0;";
      const viewsContainer = document.getElementById("chatRTViewsContainer");
      if (viewsContainer) viewsContainer.parentNode.insertBefore(snackbar, viewsContainer.nextSibling);
    }
    snackbar.textContent = texto;
    snackbar.style.display = "block";
    setTimeout(() => { snackbar.style.display = "none"; }, 3000);
  }

  // Modal de confirmacion elegante (reemplaza confirm nativo)
  function chatRTConfirmar(opciones) {
    return new Promise((resolve) => {
      const modal = document.getElementById("chatRTConfirmModal");
      if (!modal) { resolve(false); return; }
      const tituloEl = document.getElementById("chatRTConfirmTitulo");
      const msgEl = document.getElementById("chatRTConfirmMensaje");
      const iconoEl = document.getElementById("chatRTConfirmIcono");
      const btnAceptar = document.getElementById("chatRTConfirmAceptar");
      const btnCancelar = document.getElementById("chatRTConfirmCancelar");
      const titulo = opciones.titulo || "Confirmar";
      const mensaje = opciones.mensaje || "";
      const peligro = opciones.peligro !== false;
      // Icono: alerta roja si es zona de peligro, advertencia si no
      if (iconoEl) {
        if (peligro) {
          iconoEl.innerHTML = '<div style="width:52px;height:52px;border-radius:50%;background:#2a0f0f;border:2px solid #7f1d1d;display:flex;align-items:center;justify-content:center;"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>';
        } else {
          iconoEl.innerHTML = '<div style="width:52px;height:52px;border-radius:50%;background:#1a1a2e;border:2px solid #2563eb;display:flex;align-items:center;justify-content:center;"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>';
        }
      }
      if (tituloEl) tituloEl.textContent = titulo;
      if (msgEl) msgEl.textContent = mensaje;
      if (btnAceptar) {
        btnAceptar.textContent = opciones.aceptarTexto || "Eliminar";
        btnAceptar.style.color = peligro ? "#ef4444" : "#ef4444";
        btnAceptar.onclick = () => {
          modal.style.display = "none";
          resolve(true);
        };
      }
      if (btnCancelar) btnCancelar.onclick = () => {
        modal.style.display = "none";
        resolve(false);
      };
      modal.style.display = "flex";
      // Cerrar con tecla Esc
      const cerrarEsc = (e) => { if (e.key === "Escape") { document.removeEventListener("keydown", cerrarEsc); modal.style.display = "none"; resolve(false); } };
      document.addEventListener("keydown", cerrarEsc);
      // Click fuera del modal cancela
      modal.onclick = (e) => { if (e.target === modal) { document.removeEventListener("keydown", cerrarEsc); modal.style.display = "none"; resolve(false); } };
    });
  }

  // Abrir chat con un contacto (usa la vista chat existente)
  function chatRTAbrirChatPersonal() {
    const p = cargarPerfilRT();
    const sb = getSupabase();
    sb.auth.getSession().then(({ data: { session } }) => {
      if (!session) return;
      const contacto = {
        contactId: session.user.id,
        nombre: "Notas personales",
        usuario: p.usuario || "tu",
        foto: p.foto || _defaultPhoto,
        email: p.email || "",
        online: true,
        lastSeen: null,
        esPersonal: true,
      };
      chatRTAbrirChat(contacto);
    });
  }

  function chatRTAbrirChat(contacto) {
    _chatRTChatGrupoActivo = false;
    _chatRTChatPersonal = !!contacto.esPersonal;
    // Restaurar composer (en DMs siempre se puede escribir)
    const composerDM = document.getElementById("chatRTComposer");
    if (composerDM) composerDM.style.display = "block";
    // Si no venimos de la info del grupo, el volver regresa a main
    if (chatRTVistaActual !== "perfilusuario") _chatRTVistaAnterior = "main";
    chatRTPararPollingGrupo();
    chatRTChatActivo = contacto;
    const foto = document.getElementById("chatRTChatFoto");
    const nombre = document.getElementById("chatRTChatNombre");
    const usuario = document.getElementById("chatRTChatUsuario");
    if (foto) foto.src = contacto.foto || _defaultPhoto;
    if (nombre) nombre.textContent = _chatRTChatPersonal ? "Notas personales" : contacto.nombre;
    if (usuario) {
      if (_chatRTChatPersonal) {
        usuario.textContent = "Solo para ti";
        usuario.style.color = "#22c55e";
      } else if (contacto.online) {
        usuario.textContent = "En linea";
        usuario.style.color = "#22c55e";
      } else {
        usuario.textContent = contacto.lastSeen ? chatRTTiempoRelativo(contacto.lastSeen) : "@" + contacto.usuario;
        usuario.style.color = "#666";
      }
    }
    // Header tocable -> perfil del usuario (DMs y notas personales)
    if (!_chatRTChatGrupoActivo) {
      const fotoEl = document.getElementById("chatRTChatFoto");
      const nombreEl = document.getElementById("chatRTChatNombre");
      const usuarioEl = document.getElementById("chatRTChatUsuario");
      const headerEl = document.getElementById("chatRTChatHeader");
      const abrirPerfil = () => {
        _chatRTVistaAnterior = "chat";
        if (_chatRTChatPersonal) {
          const p = cargarPerfilRT();
          const sb = getSupabase();
          sb.auth.getSession().then(({ data: { session } }) => {
            if (!session) return;
            chatRTMostrarPerfilUsuario({ user_id: session.user.id, display_name: p.nombre, username: p.usuario, photo_url: p.foto, email: p.email });
          });
          return;
        }
        chatRTMostrarPerfilUsuario({ user_id: contacto.contactId, display_name: contacto.nombre, username: contacto.usuario, photo_url: contacto.foto, email: contacto.email });
      };
      if (fotoEl) fotoEl.onclick = abrirPerfil;
      if (nombreEl) nombreEl.onclick = abrirPerfil;
      if (usuarioEl) usuarioEl.onclick = abrirPerfil;
      // Hover para indicar que es clickeable
      if (headerEl) {
        headerEl.style.cursor = "pointer";
        headerEl.onmouseenter = () => { headerEl.style.background = "#16161f"; };
        headerEl.onmouseleave = () => { headerEl.style.background = "#111"; };
      }
    }
    const btnVolver = document.getElementById("chatRTChatVolverBtn");
    if (btnVolver) btnVolver.onclick = () => {
      chatRTChatActivo = null;
      chatRTPararPolling();
      chatRTPararPollingGrupo();
      _chatRTChatGrupoActivo = false;
      _chatRTGrupoActivo = null;
      _chatRTChatPersonal = false;
      _chatRTGrupoTypingUsers = {};
      if (_chatRTVistaAnterior === "infogrupo") chatRTMostrarVista("infogrupo");
      else chatRTMostrarVista("main");
    };
    const btnCerrar = document.getElementById("cerrarChatRT2");
    if (btnCerrar) btnCerrar.onclick = ocultarChatRT;
    // Forzar mostrar vista chat (aunque ya estemos en ella, para cambiar de contacto)
    const vistas = ["chatRTVistaLogin", "chatRTVistaRecuperar", "chatRTVistaMain", "chatRTVistaNuevoChat", "chatRTVistaNuevoContacto", "chatRTVistaPerfil", "chatRTVistaColores", "chatRTVistaCrearGrupo", "chatRTVistaInfoGrupo", "chatRTVistaPerfilUsuario", "chatRTVistaChat", "chatRTVistaMenu"];
    vistas.forEach(id => { const el = document.getElementById(id); if (el) el.style.display = "none"; });
    const chatEl = document.getElementById("chatRTVistaChat");
    if (chatEl) { chatEl.style.display = "flex"; chatEl.style.animation = "none"; chatEl.offsetHeight; chatEl.style.animation = "chatRTSlideIn 0.25s ease-out"; }
    const bottomBar = document.getElementById("chatRTBottomBar");
    if (bottomBar) bottomBar.style.display = "none";
    chatRTVistaActual = "chat";
    chatRTMarcarLeidos(contacto.contactId);
    // Reset estado de paginacion
    chatRTOldestTs = null;
    chatRTHayMas = false;
    chatRTCargandoViejos = false;
    // Activar polling: esperar a que cargarMensajes termine para tener el timestamp
    chatRTPollingActivo = true;
    chatRTUltimoMsgTs = null;
    chatRTMostrarSkeletonMensajes();
    chatRTCargarMensajes().then(() => { chatRTPollingLoop(); });
    chatRTSuscribirTyping(contacto.contactId);
  }

  // Marcar mensajes como leidos
  async function chatRTMarcarLeidos(contactUserId) {
    const sb = getSupabase();
    if (!sb) return;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return;
    await sb
      .from("direct_messages")
      .update({ read: true })
      .eq("sender_id", contactUserId)
      .eq("receiver_id", session.user.id)
      .eq("read", false);
    // Actualizar badge local
    const c = chatRTContactos.find(c => c.contactId === contactUserId);
    if (c) c.noLeidos = 0;
    chatRTMostrarContactosEnLista();
  }

  // Skeleton de mensajes (shimmer)
  function chatRTMostrarSkeletonMensajes() {
    const cont = document.getElementById("chatRTMensajes");
    if (!cont) return;
    const shimmer = "background:linear-gradient(90deg,#14141f 25%,#1f1f2e 50%,#14141f 75%);background-size:200px 100%;animation:chatRTShimmer 1.2s infinite;";
    let html = "";
    for (let i = 0; i < 5; i++) {
      const der = i % 2 === 0;
      const ancho = der ? "55%" : "45%";
      html += '<div style="display:flex;gap:8px;padding:5px 0;' + (der ? "justify-content:flex-end;flex-direction:row-reverse;" : "") + '">' +
        '<div style="width:28px;height:28px;border-radius:8px;flex-shrink:0;' + shimmer + '"></div>' +
        '<div style="width:' + ancho + ';height:38px;border-radius:12px;' + (der ? "border-top-right-radius:4px;" : "border-top-left-radius:4px;") + ' ' + shimmer + '"></div>' +
      '</div>';
    }
    cont.innerHTML = html;
  }

  function chatRTSkeletonMensajesVisible() {
    const cont = document.getElementById("chatRTMensajes");
    if (!cont) return false;
    return !!cont.querySelector("[data-role]");
  }

  // Cargar mensajes de la conversacion activa
  async function chatRTCargarMensajes() {
    if (!chatRTChatActivo) return;
    const sb = getSupabase();
    if (!sb) return;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return;
    const container = document.getElementById("chatRTMensajes");
    if (!container) return;

    // 1. Mostrar cache local instantaneo (sin red) si hay y no hay mensajes visibles
    if (!chatRTSkeletonMensajesVisible()) {
      const cache = chatRTCargarCacheMensajes(chatRTChatActivo.contactId);
      if (cache.length > 0) {
        container.innerHTML = "";
        for (const msg of cache) {
          const esMio = msg.sender_id === session.user.id;
          const foto = esMio ? obtenerFotoRT() : (chatRTChatActivo.foto || _defaultPhoto);
          var st = "";
          if (esMio) {
            if (msg.read) st = "read";
            else if (msg.delivered) st = "delivered";
            else st = "sent";
          }
          chatRTAgregarMensaje(esMio ? "usuario" : "otro", msg.content, foto, msg.id, msg.created_at, st);
        }
        container.scrollTop = container.scrollHeight;
        if (cache.length > 0) chatRTOldestTs = cache[0].created_at;
        chatRTHayMas = true;
      }
    }

    // 2. Refrescar desde Supabase (ultimos 30) y guardar cache
    let query = sb.from("direct_messages")
      .select("id, sender_id, receiver_id, content, created_at, delivered, read, reply_to_id")
      .or("and(sender_id.eq." + session.user.id + ",receiver_id.eq." + chatRTChatActivo.contactId + "),and(sender_id.eq." + chatRTChatActivo.contactId + ",receiver_id.eq." + session.user.id + "))")
      .order("created_at", { ascending: false })
      .limit(chatRTPageSize + 1);
    const { data, error } = await query;
    if (error || !data) { if (!chatRTSkeletonMensajesVisible()) container.innerHTML = ""; return; }
    const hayMas = data.length > chatRTPageSize;
    const page = data.slice(0, chatRTPageSize).reverse();
    // Llenar mapa de contenidos para citas
    page.forEach(m => { chatRTReplyContenidos[m.id] = { texto: m.content, autor: m.sender_id === session.user.id ? "Tu" : (chatRTChatActivo.nombre || "Alguien") }; });
    container.innerHTML = "";
    var idsPorMarcar = [];
    for (const msg of page) {
      const esMio = msg.sender_id === session.user.id;
      const foto = esMio ? obtenerFotoRT() : (chatRTChatActivo.foto || _defaultPhoto);
      var status = "";
      if (esMio) {
        if (_chatRTChatPersonal) status = "read";
        else if (msg.read) status = "read";
        else if (msg.delivered) status = "delivered";
        else status = "sent";
      }
      chatRTAgregarMensaje(esMio ? "usuario" : "otro", msg.content, foto, msg.id, msg.created_at, status, null, chatRTResolveReply(msg.reply_to_id));
      if (!esMio && !msg.delivered) idsPorMarcar.push(msg.id);
    }
    if (idsPorMarcar.length > 0) {
      sb.from("direct_messages").update({ delivered: true }).in("id", idsPorMarcar).then(function(){});
    }
    if (page.length > 0) {
      chatRTUltimoMsgTs = page[page.length - 1].created_at;
      chatRTOldestTs = page[0].created_at;
    }
    chatRTHayMas = hayMas;
    container.scrollTop = container.scrollHeight;
    chatRTGuardarCacheMensajes(chatRTChatActivo.contactId, page);
  }

  // Cargar mensajes anteriores (scroll hacia arriba)
  async function chatRTCargarMensajesViejos() {
    if (!chatRTChatActivo || chatRTCargandoViejos || !chatRTHayMas) return;
    if (!chatRTOldestTs) return;
    chatRTCargandoViejos = true;
    const container = document.getElementById("chatRTMensajes");
    const sb = getSupabase();
    if (!container || !sb) { chatRTCargandoViejos = false; return; }
    const { data: { session } } = await sb.auth.getSession();
    if (!session) { chatRTCargandoViejos = false; return; }
    // Loader en el tope
    const loader = document.createElement("div");
    loader.id = "chatRTCargandoViejos";
    loader.style.cssText = "display:flex;justify-content:center;padding:8px 0;";
    loader.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2.5" style="animation:chatRTSpin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke-dasharray="31.4" stroke-dashoffset="8" /></svg>';
    container.prepend(loader);
    // Guardar posicion de scroll antes de insertar
    const prevHeight = container.scrollHeight;
    const prevScroll = container.scrollTop;
    const { data, error } = await sb
      .from("direct_messages")
      .select("id, sender_id, receiver_id, content, created_at, delivered, read, reply_to_id")
      .or("and(sender_id.eq." + session.user.id + ",receiver_id.eq." + chatRTChatActivo.contactId + "),and(sender_id.eq." + chatRTChatActivo.contactId + ",receiver_id.eq." + session.user.id + "))")
      .lt("created_at", chatRTOldestTs)
      .order("created_at", { ascending: false })
      .limit(chatRTPageSize + 1);
    const loaderEl = document.getElementById("chatRTCargandoViejos");
    if (loaderEl) loaderEl.remove();
    if (error || !data) { chatRTCargandoViejos = false; return; }
    const hayMas = data.length > chatRTPageSize;
    const page = data.slice(0, chatRTPageSize).reverse();
    var idsPorMarcar = [];
    for (const msg of page) {
      const esMio = msg.sender_id === session.user.id;
      const foto = esMio ? obtenerFotoRT() : (chatRTChatActivo.foto || _defaultPhoto);
      var status = "";
      if (esMio) {
        if (msg.read) status = "read";
        else if (msg.delivered) status = "delivered";
        else status = "sent";
      }
      const yaExiste = document.querySelector('[data-rt-msgid="' + msg.id + '"]');
      if (yaExiste) continue;
      chatRTReplyContenidos[msg.id] = { texto: msg.content, autor: esMio ? "Tu" : (chatRTChatActivo.nombre || "Alguien") };
      container.insertBefore(chatRTConstruirMensaje(esMio ? "usuario" : "otro", msg.content, foto, msg.id, msg.created_at, status, null, chatRTResolveReply(msg.reply_to_id)), container.firstChild);
      if (!esMio && !msg.delivered) idsPorMarcar.push(msg.id);
    }
    if (idsPorMarcar.length > 0) {
      sb.from("direct_messages").update({ delivered: true }).in("id", idsPorMarcar).then(function(){});
    }
    if (page.length > 0) chatRTOldestTs = page[0].created_at;
    chatRTHayMas = hayMas;
    chatRTReconstruirConectores();
    // Ajustar scroll: mantener la posicion visual
    container.scrollTop = prevScroll + (container.scrollHeight - prevHeight);
    chatRTCargandoViejos = false;
  }

  // === SISTEMA DE EMOJIS (estilo WhatsApp) ===
  const _chatRTEmojiCategorias = [
    { key: "recientes", nombre: "Recientes", icono: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>' },
    { key: "caras", nombre: "Sonrisas y emociones", icono: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>' },
    { key: "personas", nombre: "Personas", icono: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>' },
    { key: "animales", nombre: "Animales y naturaleza", icono: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 7c-2 0-3.5.5-4.5 1.5A6 6 0 0 0 12 8a6 6 0 0 0-3.5.5C7.5 7.5 6 7 4 7a5 5 0 0 0-1 9.9c.6.1 1 .5 1 1.1 0 1.1 1 2 2 2h12c1 0 2-.9 2-2 0-.6.4-1 1-1.1A5 5 0 0 0 20 7z"/></svg>' },
    { key: "comida", nombre: "Comida y bebida", icono: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>' },
    { key: "actividades", nombre: "Actividades", icono: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12"/><path d="M10 24V6a2 2 0 0 1 4 0v18"/><path d="M17 8h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4"/><path d="M3 14a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4v8H3z"/></svg>' },
    { key: "viajes", nombre: "Viajes y lugares", icono: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>' },
    { key: "objetos", nombre: "Objetos", icono: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' },
    { key: "simbolos", nombre: "Simbolos", icono: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7.4-6.3-4.5-6.3 4.5L8 14 2 9.4h7.6z"/></svg>' },
    { key: "banderas", nombre: "Banderas", icono: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#888" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>' },
  ];
  const _chatRTEmojiData = {
    caras: ["😀","😃","😄","😁","😆","😅","😂","🤣","🙂","🙃","😉","😊","😇","🥰","😍","🤩","😘","😗","😚","😙","😋","😛","😜","🤪","😝","🤑","🤗","🤭","🤫","🤔","🤐","🤨","😐","😑","😶","😏","😒","🙄","😬","🤥","😌","😔","😪","🤤","😴","😷","🤒","🤕","🤢","🤮","🤧","🥵","🥶","🥴","😵","🤯","🤠","🥳","😎","🤓","🧐","😕","😟","🙁","☹️","😮","😯","😲","😳","🥺","😦","😧","😨","😰","😥","😢","😭","😱","😖","😣","😞","😓","😩","😫","🥱","😤","😡","😠","🤬","😈","👿","💀","☠️","💩","🤡","👹","👺","👻","👽","👾","🤖"],
    personas: ["👋","🤚","✋","🖖","👌","🤌","🤏","✌️","🤞","🤟","🤘","🤙","👈","👉","👆","🖕","👇","☝️","👍","👎","✊","👊","🤛","🤜","👏","🙌","👐","🤲","🤝","🙏","✍️","💅","🤳","💪","🦾","🦵","🦶","👂","🦻","👃","🧠","🦷","👀","👁️","👅","👄","👶","👧","🧒","👦","👩","🧑","👨","👵","🧓","👴","👲","👳","🧕","👮","👷","💂","🕵️","👩‍⚕️","👨‍⚕️","👩‍🏫","👨‍🏫","👩‍⚖️","👨‍⚖️","👩‍🌾","👨‍🌾","👩‍🍳","👨‍🍳","👩‍🔧","👨‍🔧","👩‍💻","👨‍💻","👩‍💼","👨‍💼","👩‍🔬","👨‍🔬","👩‍🎨","👨‍🎨","👩‍🚒","👨‍🚒","👩‍✈️","👨‍✈️","👩‍🚀","👨‍🚀","👩‍🎤","👨‍🎤","👷‍♀️","💃","🕺","🕴️","👯","🧖","🧗","🤺","🏇","⛷️","🏂","🏌️","🏄","🚣","🏊","🤽","🚴","🚵","🤸","🤼","🤾","🤹","🧘","🛀","🛌","👭","👫","👬","💏","💑","👪","👤","👥","🗣️","🧠","👣"],
    animales: ["🐶","🐱","🐭","🐹","🐰","🦊","🐻","🐼","🐨","🐯","🦁","🐮","🐷","🐸","🐵","🙈","🙉","🙊","🐒","🐔","🐧","🐦","🐤","🐣","🐥","🦆","🦅","🦉","🦇","🐺","🐗","🐴","🦄","🐝","🐛","🦋","🐌","🐞","🐜","🪰","🪲","🪳","🦟","🦗","🕷️","🕸️","🦂","🐢","🐍","🦎","🦖","🦕","🐙","🦑","🦐","🦞","🦀","🐡","🐠","🐟","🐬","🐳","🐋","🦈","🐊","🐅","🐆","🦓","🦍","🦧","🐘","🦛","🦏","🐪","🐫","🦒","🦘","🦬","🐃","🐂","🐄","🐎","🐖","🐏","🐑","🦙","🐐","🦌","🐕","🐩","🦮","🐈","🐓","🦃","🦚","🦜","🦢","🦩","🕊️","🐇","🦝","🦨","🦡","🦫","🦦","🦥","🐁","🐀","🐿️","🦔"],
    comida: ["🍏","🍎","🍐","🍊","🍋","🍌","🍉","🍇","🍓","🫐","🍈","🍒","🍑","🥭","🍍","🥥","🥝","🍅","🍆","🥑","🥦","🥬","🥒","🌶️","🫑","🌽","🥕","🫒","🧄","🧅","🥔","🍠","🥐","🥯","🍞","🥖","🥨","🧀","🥚","🍳","🧈","🥞","🧇","🥓","🥩","🍗","🍖","🌭","🍔","🍟","🍕","🥪","🥙","🧆","🌮","🌯","🥗","🥘","🫕","🍝","🍜","🍲","🍛","🍣","🍱","🥟","🦪","🍤","🍙","🍚","🍘","🍥","🥠","🥮","🍢","🍡","🍧","🍨","🍦","🥧","🧁","🍰","🎂","🍮","🍭","🍬","🍫","🍿","🍩","🍪","🌰","🥜","🍯","🥛","🍼","🫖","☕","🍵","🧃","🥤","🧋","🍶","🍺","🍻","🥂","🍷","🥃","🍸","🍹","🧉","🍾","🧊"],
    actividades: ["⚽","🏀","🏈","⚾","🥎","🎾","🏐","🏉","🥏","🎱","🪀","🏓","🏸","🏒","🏑","🥍","🏏","🪃","🥅","⛳","🪁","🏹","🎣","🤿","🥊","🥋","🎽","🛹","🛼","🛷","⛸️","🥌","🎿","⛷️","🏂","🪂","🏋️","🤼","🤸","⛹️","🤺","🤾","🏌️","🏇","🧘","🏄","🏊","🤽","🚣","🧗","🚵","🚴","🏆","🥇","🥈","🥉","🏅","🎖️","🏵️","🎗️","🎫","🎟️","🎪","🤹","🎭","🩰","🎨","🎬","🎤","🎧","🎼","🎹","🥁","🪘","🎷","🎺","🪗","🎸","🪕","🎻","🎲","♟️","🎯","🎳","🎮","🎰","🧩"],
    viajes: ["🚗","🚕","🚙","🚌","🚎","🏎️","🚓","🚑","🚒","🚐","🛻","🚚","🚛","🚜","🛵","🏍️","🛺","🚲","🛴","🛹","🚨","🚔","🚍","🚘","🚖","🚡","🚠","🚟","🚃","🚋","🚞","🚝","🚄","🚅","🚈","🚂","🚆","🚇","🚊","🚉","✈️","🛫","🛬","🛩️","💺","🛰️","🚀","🛸","🚁","🛶","⛵","🚤","🛥️","🛳️","⛴️","🚢","⚓","🪝","⛽","🚧","🚦","🚥","🚏","🗺️","🗿","🗽","🗼","🏰","🏯","🏟️","🎡","🎢","🎠","⛲","⛱️","🏖️","🏝️","🏜️","🌋","⛰️","🏔️","🗻","🏕️","⛺","🛖","🏠","🏡","🏘️","🏚️","🏗️","🏭","🏢","🏬","🏣","🏤","🏥","🏦","🏨","🏪","🏫","🏩","💒","🏛️","⛪","🕌","🕍","🛕","🕋","⛩️","🛤️","🛣️","🗾","🎑","🏞️","🌅","🌄","🌠","🎇","🎆","🌇","🌆","🏙️","🌃","🌌","🌉","🌁"],
    objetos: ["⌚","📱","📲","💻","⌨️","🖥️","🖨️","🖱️","🖲️","🕹️","🗜️","💽","💾","💿","📀","📼","📷","📸","📹","🎥","📽️","🎞️","📞","☎️","📟","📠","📺","📻","🎙️","🎚️","🎛️","🧭","⏱️","⏲️","⏰","🕰️","⌛","⏳","📡","🔋","🪫","🔌","💡","🔦","🕯️","🪔","🧯","🛢️","💸","💵","💴","💶","💷","🪙","💰","💳","💎","⚖️","🪜","🧰","🪛","🔧","🔨","⚒️","🛠️","⛏️","🪚","🔩","⚙️","🪤","🧱","⛓️","🧲","🔫","💣","🧨","🪓","🔪","🗡️","⚔️","🛡️","🚬","⚰️","🪦","⚱️","🏺","🔮","📿","🧿","💈","⚗️","🔭","🔬","🕳️","🩹","🩺","🩻","🩼","💊","💉","🩸","🧬","🦠","🧫","🧪","🌡️","🧹","🪠","🧺","🧻","🚽","🚰","🚿","🛁","🛀","🧼","🪥","🪒","🧽","🪣","🧴","🛎️","🔑","🗝️","🚪","🪑","🛋️","🛏️","🛌","🧸","🪆","🖼️","🪞","🪟","🛍️","🛒","🎁","🎈","🎏","🎀","🪄","🪅","🎊","🎉","🎎","🏮","🎐","🧧","✉️","📩","📨","📧","💌","📥","📤","📦","🏷️","🪧","📪","📫","📬","📭","📮","📯","📜","📃","📄","📑","🧾","📊","📈","📉","🗒️","🗓️","📆","📅","🗑️","📇","🗃️","🗳️","🗄️","📋","📁","📂","🗂️","🗞️","📰","📓","📔","📒","📕","📗","📘","📙","📚","📖","🔖","🧷","🔗","📎","🖇️","📐","📏","🧮","📌","📍","✂️","🖊️","🖋️","✒️","🖌️","🖍️","📝","✏️","🔍","🔎","🔏","🔐","🔒","🔓"],
    simbolos: ["❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","☮️","✝️","☪️","🕉️","☸️","✡️","🔯","🕎","☯️","☦️","🛐","⛎","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑","♒","♓","🆔","⚛️","🉑","☢️","☣️","📴","📳","🈶","🈚","🈸","🈺","🈷️","✴️","🆚","💮","🉐","㊙️","㊗️","🈴","🈵","🈹","🈲","🅰️","🅱️","🆎","🆑","🅾️","🆘","❌","⭕","🛑","⛔","📛","🚫","💯","💢","♨️","🚷","🚯","🚳","🚱","🔞","📵","🚭","❗","❕","❓","❔","‼️","⁉️","🔅","🔆","〽️","⚠️","🚸","🔱","⚜️","🔰","♻️","✅","🈯","💹","❇️","✳️","❎","🌐","💠","Ⓜ️","🌀","💤","🏧","🚾","♿","🅿️","🛗","🈳","🈂️","🛂","🛃","🛄","🛅","🚹","🚺","🚼","⚧️","🚻","🚮","🎦","📶","🈁","🔣","ℹ️","🔤","🔡","🔠","🆖","🆗","🆙","🆒","🆕","🆓","0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣","🔟","🔢","#️⃣","*️⃣","⏏️","▶️","⏸️","⏯️","⏹️","⏺️","⏭️","⏮️","⏩","⏪","⏫","⏬","◀️","🔼","🔽","➡️","⬅️","⬆️","⬇️","↗️","↘️","↙️","↖️","↕️","↔️","↪️","↩️","⤴️","⤵️","🔀","🔁","🔂","🔄","🔃","🎵","🎶","➕","➖","➗","✖️","🟰","♾️","💲","💱","™️","©️","®️","👁️","🗨️","✌️","🫰","🫶","🤟"],
    banderas: ["🏁","🚩","🎌","🏴","🏳️","🏳️‍🌈","🏳️‍⚧️","🏴‍☠️","🇦🇫","🇦🇽","🇦🇱","🇩🇿","🇦🇸","🇦🇩","🇦🇴","🇦🇮","🇦🇶","🇦🇬","🇦🇷","🇦🇲","🇦🇼","🇦🇺","🇦🇹","🇦🇿","🇧🇸","🇧🇭","🇧🇩","🇧🇧","🇧🇾","🇧🇪","🇧🇿","🇧🇯","🇧🇲","🇧🇹","🇧🇴","🇧🇦","🇧🇼","🇧🇷","🇮🇴","🇻🇬","🇧🇳","🇧🇬","🇧🇫","🇧🇮","🇰🇭","🇨🇲","🇨🇦","🇰🇾","🇨🇫","🇹🇩","🇨🇱","🇨🇳","🇨🇽","🇨🇨","🇨🇴","🇰🇲","🇨🇬","🇨🇩","🇨🇰","🇨🇷","🇨🇮","🇭🇷","🇨🇺","🇨🇼","🇨🇾","🇨🇿","🇩🇰","🇩🇯","🇩🇲","🇩🇴","🇪🇨","🇪🇬","🇸🇻","🇬🇶","🇪🇷","🇪🇪","🇸🇿","🇪🇹","🇫🇰","🇫🇴","🇫🇯","🇫🇮","🇫🇷","🇬🇫","🇵🇫","🇹🇫","🇬🇦","🇬🇲","🇬🇪","🇩🇪","🇬🇭","🇬🇮","🇬🇷","🇬🇱","🇬🇩","🇬🇵","🇬🇺","🇬🇹","🇬🇬","🇬🇳","🇬🇼","🇬🇾","🇭🇹","🇭🇳","🇭🇰","🇭🇺","🇮🇸","🇮🇳","🇮🇩","🇮🇷","🇮🇶","🇮🇪","🇮🇲","🇮🇱","🇮🇹","🇯🇲","🇯🇵","🇯🇪","🇯🇴","🇰🇿","🇰🇪","🇰🇮","🇰🇼","🇰🇬","🇱🇦","🇱🇻","🇱🇧","🇱🇸","🇱🇷","🇱🇾","🇱🇮","🇱🇹","🇱🇺","🇲🇴","🇲🇬","🇲🇼","🇲🇾","🇲🇻","🇲🇱","🇲🇹","🇲🇭","🇲🇶","🇲🇷","🇲🇺","🇾🇹","🇲🇽","🇫🇲","🇲🇩","🇲🇨","🇲🇳","🇲🇪","🇲🇸","🇲🇦","🇲🇿","🇲🇲","🇳🇦","🇳🇷","🇳🇵","🇳🇱","🇳🇨","🇳🇿","🇳🇮","🇳🇪","🇳🇬","🇳🇺","🇳🇫","🇰🇵","🇲🇰","🇲🇵","🇳🇴","🇴🇲","🇵🇰","🇵🇼","🇵🇸","🇵🇦","🇵🇬","🇵🇾","🇵🇪","🇵🇭","🇵🇳","🇵🇱","🇵🇹","🇵🇷","🇶🇦","🇷🇪","🇷🇴","🇷🇺","🇷🇼","🇼🇸","🇸🇲","🇸🇦","🇸🇳","🇷🇸","🇸🇨","🇸🇱","🇸🇬","🇸🇽","🇸🇰","🇸🇮","🇸🇧","🇸🇴","🇿🇦","🇬🇸","🇰🇷","🇸🇸","🇪🇸","🇱🇰","🇧🇱","🇸🇭","🇰🇳","🇱🇨","🇵🇲","🇻🇨","🇸🇩","🇸🇷","🇸🇪","🇨🇭","🇸🇾","🇹🇼","🇹🇯","🇹🇿","🇹🇭","🇹🇱","🇹🇬","🇹🇰","🇹🇴","🇹🇹","🇹🇳","🇹🇷","🇹🇲","🇹🇨","🇹🇻","🇺🇬","🇺🇦","🇦🇪","🇬🇧","🇺🇸","🇺🇾","🇺🇿","🇻🇺","🇻🇦","🇻🇪","🇻🇳","🇼🇫","🇪🇭","🇾🇪","🇿🇲","🇿🇼"],
  };
  let _chatRTEmojiRecientes = [];
  try { const r = JSON.parse(localStorage.getItem("rt_emoji_recientes") || "[]"); if (Array.isArray(r)) _chatRTEmojiRecientes = r; } catch(e) {}
  let _chatRTEmojiAbierto = false;
  let _chatRTEmojiCategoriaActiva = "recientes";

  function chatRTEmojiGuardarReciente(emoji) {
    _chatRTEmojiRecientes = [emoji].concat(_chatRTEmojiRecientes.filter(e => e !== emoji)).slice(0, 24);
    try { localStorage.setItem("rt_emoji_recientes", JSON.stringify(_chatRTEmojiRecientes)); } catch(e) {}
    if (_chatRTEmojiAbierto) chatRTEmojiRender();
  }

  function chatRTEmojiRender() {
    const scroll = document.getElementById("chatRTEmojiScroll");
    const tabs = document.getElementById("chatRTEmojiTabs");
    if (!scroll || !tabs) return;
    // Construir secciones
    let html = "";
    for (const cat of _chatRTEmojiCategorias) {
      let emojis = cat.key === "recientes" ? _chatRTEmojiRecientes : (_chatRTEmojiData[cat.key] || []);
      if (cat.key === "recientes" && emojis.length === 0) emojis = _chatRTEmojiData.caras;
      html += '<div class="chatRTEmojiCategoria" data-cat="' + cat.key + '" style="padding:6px 10px 10px;">' +
        '<div style="font-size:11px;color:#888;padding:4px 4px 6px;">' + (cat.key === "recientes" && _chatRTEmojiRecientes.length > 0 ? "Recientes" : cat.nombre) + '</div>' +
        '<div style="display:flex;flex-wrap:wrap;">' +
        emojis.map(e => '<button data-emoji="' + e + '" style="width:36px;height:36px;font-size:22px;line-height:1;background:none;border:none;border-radius:8px;cursor:pointer;transition:background 0.1s;padding:0;" onmouseover="this.style.background=\'#1f1f2e\'" onmouseout="this.style.background=\'transparent\'">' + e + '</button>').join("") +
        '</div></div>';
    }
    scroll.innerHTML = html;
    // Eventos click en emojis
    scroll.querySelectorAll("button[data-emoji]").forEach(btn => {
      btn.onclick = () => {
        const e = btn.getAttribute("data-emoji");
        chatRTEmojiInsertar(e);
        chatRTEmojiGuardarReciente(e);
      };
    });
    // Tabs
    let tabsHTML = "";
    for (const cat of _chatRTEmojiCategorias) {
      tabsHTML += '<button data-tab="' + cat.key + '" title="' + cat.nombre + '" style="width:32px;height:32px;background:none;border:none;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.15s;opacity:' + (cat.key === _chatRTEmojiCategoriaActiva ? "1" : "0.4") + ';">' + cat.icono + '</button>';
    }
    tabs.innerHTML = tabsHTML;
    tabs.querySelectorAll("button[data-tab]").forEach(btn => {
      btn.onclick = () => {
        _chatRTEmojiCategoriaActiva = btn.getAttribute("data-tab");
        const seccion = scroll.querySelector('[data-cat="' + _chatRTEmojiCategoriaActiva + '"]');
        if (seccion) {
          seccion.scrollIntoView({ block: "start" });
          scroll.scrollTop = seccion.offsetTop - scroll.offsetTop;
        }
        chatRTEmojiRenderTabs();
      };
    });
  }

  function chatRTEmojiRenderTabs() {
    const tabs = document.getElementById("chatRTEmojiTabs");
    if (!tabs) return;
    tabs.querySelectorAll("button[data-tab]").forEach(btn => {
      const activo = btn.getAttribute("data-tab") === _chatRTEmojiCategoriaActiva;
      btn.style.opacity = activo ? "1" : "0.4";
      btn.style.background = activo ? "#1f1f2e" : "none";
    });
  }

  function chatRTEmojiInsertar(e) {
    const input = document.getElementById("chatRTInput");
    if (!input) return;
    const ini = input.selectionStart || input.value.length;
    const fin = input.selectionEnd || input.value.length;
    input.value = input.value.slice(0, ini) + e + input.value.slice(fin);
    input.focus();
    const pos = ini + e.length;
    input.setSelectionRange(pos, pos);
    input.dispatchEvent(new Event("input"));
  }

  function chatRTEmojiAbrir() {
    _chatRTEmojiAbierto = true;
    const panel = document.getElementById("chatRTEmojiPanel");
    if (!panel) return;
    chatRTEmojiRender();
    panel.style.display = "flex";
    panel.style.animation = "chatRTEmojiSlide 0.22s ease-out";
    _chatRTEmojiCategoriaActiva = "recientes";
    const scroll = document.getElementById("chatRTEmojiScroll");
    if (scroll) scroll.scrollTop = 0;
    chatRTEmojiRenderTabs();
  }

  function chatRTEmojiCerrar() {
    _chatRTEmojiAbierto = false;
    const panel = document.getElementById("chatRTEmojiPanel");
    if (!panel) return;
    panel.style.animation = "chatRTEmojiSlideOut 0.18s ease-in";
    setTimeout(() => { if (!_chatRTEmojiAbierto) panel.style.display = "none"; }, 180);
  }

  function chatRTEmojiToggle() {
    if (_chatRTEmojiAbierto) chatRTEmojiCerrar();
    else chatRTEmojiAbrir();
  }

  // === SISTEMA DE GRUPOS ===
  let _chatRTGruposCache = [];       // grupos del usuario
  let _chatRTGrupoActivo = null;     // grupo en el chat
  let _chatRTInfoGrupoDesde = "main"; // vista desde donde se abrio info
  let _chatRTGrupoFotoDataURL = null;
  let _chatRTGrupoFotoFile = null;
  let _chatRTChatGrupoActivo = false; // si el chat activo es un grupo
  let _chatRTGrupoUltimoTs = null;
  let _chatRTGrupoHayMas = false;
  let _chatRTGrupoCargandoViejos = false;
  let _chatRTGrupoPollingTimer = null;
  let _chatRTGrupoSubscription = null;
  let _chatRTGrupoFotos = {}; // sender_id -> foto url
  let _chatRTGrupoNombres = {}; // sender_id -> nombre
  let _chatRTGrupoTypingChannel = null;
  let _chatRTGrupoTypingUsers = {}; // userId -> timestamp
  let _chatRTGrupoTypingNombres = {}; // userId -> nombre

  // Reset del formulario de crear grupo
  function chatRTResetCrearGrupo() {
    _chatRTGrupoFotoDataURL = null;
    _chatRTGrupoFotoFile = null;
    const preview = document.getElementById("chatRTGrupoFotoPreview");
    const icon = document.getElementById("chatRTGrupoFotoIcon");
    const nombre = document.getElementById("chatRTGrupoNombre");
    const info = document.getElementById("chatRTGrupoInfo");
    const msg = document.getElementById("chatRTCrearGrupoMsg");
    const permE = document.getElementById("chatRTGrupoPermEditar");
    const permS = document.getElementById("chatRTGrupoPermEnviar");
    if (preview) { preview.src = _defaultPhoto; preview.style.display = "none"; }
    if (icon) icon.style.display = "flex";
    if (nombre) nombre.value = "";
    if (info) info.value = "";
    if (msg) msg.style.display = "none";
    if (permE) permE.checked = true;
    if (permS) permS.checked = true;
  }

  // Subir foto de grupo (si hay) y crear el grupo
  async function chatRTCrearGrupo() {
    const nombre = document.getElementById("chatRTGrupoNombre");
    const info = document.getElementById("chatRTGrupoInfo");
    const msg = document.getElementById("chatRTCrearGrupoMsg");
    if (!nombre || !info) return;
    const nombreVal = nombre.value.trim();
    if (!nombreVal) { if (msg) { msg.style.display = "block"; msg.textContent = "Pon un nombre al grupo."; } return; }
    const infoVal = info.value.trim();
    const permEditar = document.getElementById("chatRTGrupoPermEditar") ? document.getElementById("chatRTGrupoPermEditar").checked : true;
    const permEnviar = document.getElementById("chatRTGrupoPermEnviar") ? document.getElementById("chatRTGrupoPermEnviar").checked : true;
    const sb = getSupabase();
    if (!sb) return;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return;
    if (msg) { msg.style.display = "block"; msg.style.color = "#888"; msg.textContent = "Creando grupo..."; }
    // Foto
    let fotoURL = "";
    if (_chatRTGrupoFotoFile) {
      fotoURL = await chatRTSubirFotoGrupo(_chatRTGrupoFotoFile);
    } else if (_chatRTGrupoFotoDataURL) {
      fotoURL = _chatRTGrupoFotoDataURL;
    }
    const { data: grupo, error } = await sb.from("groups").insert({
      name: nombreVal,
      info: infoVal,
      photo_url: fotoURL,
      owner_id: session.user.id,
      settings_can_edit: permEditar,
      settings_can_send: permEnviar,
    }).select("id").single();
    if (error || !grupo) {
      if (msg) { msg.style.display = "block"; msg.style.color = "#ef4444"; msg.textContent = "No se pudo crear el grupo."; }
      return;
    }
    // Agregar al creador como owner
    const { error: errMember } = await sb.from("group_members").insert({
      group_id: grupo.id,
      user_id: session.user.id,
      role: "owner",
    });
    if (errMember) {
      if (msg) { msg.style.display = "block"; msg.style.color = "#ef4444"; msg.textContent = "Error al agregar como propietario."; }
      return;
    }
    if (msg) { msg.style.display = "none"; }
    chatRTCargarGrupos();
    chatRTMostrarVista("main");
  }

  // Cargar fotos de los miembros del grupo (para mostrar en mensajes)
  async function chatRTCargarFotosGrupo() {
    _chatRTGrupoFotos = {};
    if (!_chatRTGrupoActivo) return;
    const sb = getSupabase();
    if (!sb) return;
    const { data: memberships } = await sb.from("group_members").select("user_id").eq("group_id", _chatRTGrupoActivo.id);
    if (!memberships) return;
    const ids = memberships.map(m => m.user_id);
    if (ids.length === 0) return;
    const { data: perfiles } = await sb.from("profiles").select("user_id, photo_url, display_name, username").in("user_id", ids);
    (perfiles || []).forEach(p => { _chatRTGrupoFotos[p.user_id] = p.photo_url || _defaultPhoto; _chatRTGrupoNombres[p.user_id] = p.display_name || p.username || "Alguien"; });
  }

  async function chatRTSubirFotoGrupo(file) {
    const sb = getSupabase();
    if (!sb) return "";
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return "";
    try {
      const path = session.user.id + "/grupo_" + Date.now() + ".jpg";
      const { error } = await sb.storage.from("avatars").upload(path, file, { contentType: file.type, upsert: true });
      if (error) return "";
      const { data: pub } = sb.storage.from("avatars").getPublicUrl(path);
      return pub ? pub.publicUrl : "";
    } catch(e) { return ""; }
  }

  // Cargar grupos del usuario
  async function chatRTCargarGrupos() {
    const sb = getSupabase();
    if (!sb) return;
    try {
      const { data: { session } } = await sb.auth.getSession();
      if (!session) {
        // Sin sesion: usar cache si existe
        const cacheSin = chatRTCargarCacheGrupos();
        if (cacheSin.length > 0) { _chatRTGruposCache = cacheSin; chatRTMostrarGruposEnLista(); }
        return;
      }
      const { data: memberships } = await sb
        .from("group_members")
        .select("group_id, role")
        .eq("user_id", session.user.id);
      if (!memberships) { chatRTMostrarGruposEnLista(); return; }
      const ids = memberships.map(m => m.group_id);
      if (ids.length === 0) { _chatRTGruposCache = []; chatRTMostrarGruposEnLista(); return; }
      const { data: grupos } = await sb
        .from("groups")
        .select("id, name, info, photo_url, owner_id, settings_can_edit, settings_can_send, created_at")
        .in("id", ids);
      if (!grupos) { chatRTMostrarGruposEnLista(); return; }
      const roles = {};
      memberships.forEach(m => roles[m.group_id] = m.role);
      // Obtener ultimo mensaje de cada grupo para ordenar
      const cache = [];
      for (const g of grupos) {
        const { data: lastMsg } = await sb
          .from("group_messages")
          .select("content, created_at")
          .eq("group_id", g.id)
          .order("created_at", { ascending: false })
          .limit(1)
          .maybeSingle();
      // Obtener miembros del grupo (total + nombres)
      let miembroNombres = [];
      let miembroTotal = 0;
      let miembroOnline = 0;
      const { data: miembrosG } = await sb.from("group_members").select("user_id").eq("group_id", g.id);
      if (miembrosG) {
        miembroTotal = miembrosG.length;
        const idsM = miembrosG.map(m => m.user_id);
        if (idsM.length > 0) {
          const { data: perfilesM } = await sb.from("profiles").select("display_name, username, last_seen").in("user_id", idsM);
          miembroNombres = (perfilesM || []).map(p => p.display_name || p.username || "Usuario");
          miembroOnline = (perfilesM || []).filter(p => p.last_seen && (Date.now() - new Date(p.last_seen).getTime()) < 60000).length;
        }
      }
      cache.push({
        ...g,
        rol: roles[g.id] || "member",
        ultimoMensaje: lastMsg ? lastMsg.content : "",
        ultimoMensajeEsMio: false,
        ultimoMensajeTiempo: lastMsg ? lastMsg.created_at : "",
        miembroTotal: miembroTotal,
        miembroNombres: miembroNombres,
        miembroOnline: miembroOnline,
      });
    }
    _chatRTGruposCache = cache;
    if (cache.length > 0 || !chatRTCargarCacheGrupos().length) {
      chatRTGuardarCacheGrupos(cache);
    }
    chatRTMostrarGruposEnLista();
    // Actualizar header del chat de grupo activo
    if (_chatRTChatGrupoActivo && _chatRTGrupoActivo) {
      const actualizado = cache.find(x => x.id === _chatRTGrupoActivo.id);
      if (actualizado) {
        _chatRTGrupoActivo.miembroTotal = actualizado.miembroTotal;
        _chatRTGrupoActivo.miembroOnline = actualizado.miembroOnline;
        _chatRTGrupoActivo.miembroNombres = actualizado.miembroNombres;
        const usuarioEl = document.getElementById("chatRTChatUsuario");
        if (usuarioEl) {
          const total = actualizado.miembroTotal || 0;
          const online = actualizado.miembroOnline || 0;
          const nombres = (actualizado.miembroNombres || []).slice(0, 3).join(", ");
          let txt = total + " " + (total === 1 ? "miembro" : "miembros") + (nombres ? " · " + nombres : "");
          if (online > 0) {
            usuarioEl.innerHTML = '<div style="line-height:1.3;">' + txt + '</div><div style="line-height:1.3;color:#22c55e;display:flex;align-items:center;gap:4px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>' + online + ' en linea</div>';
          } else {
            usuarioEl.textContent = txt;
          }
        }
      }
    }
    } catch(e) { chatRTMostrarGruposEnLista(); }
  }

  // Mostrar grupos en la lista principal (bajo los contactos)
  function chatRTMostrarGruposEnLista() {
    // Los grupos se renderizan junto a los contactos en chatRTMostrarContactosEnLista
    chatRTMostrarContactosEnLista();
  }

  // Abrir chat de grupo
  async function chatRTAbrirChatGrupo(grupo) {
    _chatRTGrupoActivo = grupo;
    _chatRTChatGrupoActivo = true;
    // Guardar la vista anterior para el boton volver
    _chatRTVistaAnterior = (chatRTVistaActual === "infogrupo" || chatRTVistaActual === "perfilusuario") ? chatRTVistaActual : "main";
    const foto = document.getElementById("chatRTChatFoto");
    const nombre = document.getElementById("chatRTChatNombre");
    const usuario = document.getElementById("chatRTChatUsuario");
    if (foto) foto.src = grupo.photo_url || _defaultPhoto;
    if (nombre) nombre.textContent = grupo.name;
    if (usuario) {
      const total = grupo.miembroTotal || 0;
      const online = grupo.miembroOnline || 0;
      const nombres = (grupo.miembroNombres || []).slice(0, 3).join(", ");
      let txt = total + " " + (total === 1 ? "miembro" : "miembros") + (nombres ? " · " + nombres : "");
      if (online > 0) {
        usuario.innerHTML = '<div style="line-height:1.3;">' + txt + '</div><div style="line-height:1.3;color:#22c55e;display:flex;align-items:center;gap:4px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>' + online + ' en linea</div>';
      } else {
        usuario.textContent = txt;
      }
    }
    // Header tocable -> info grupo
    const header = document.getElementById("chatRTChatHeader");
    if (header) {
      header.style.cursor = "pointer";
      header.onmouseenter = () => { header.style.background = "#16161f"; };
      header.onmouseleave = () => { header.style.background = "#111"; };
    }
    const fotoEl = document.getElementById("chatRTChatFoto");
    if (fotoEl) fotoEl.onclick = () => { _chatRTInfoGrupoDesde = "chat"; chatRTMostrarInfoGrupo(grupo); };
    if (nombre) nombre.onclick = () => { _chatRTInfoGrupoDesde = "chat"; chatRTMostrarInfoGrupo(grupo); };
    if (usuario) usuario.onclick = () => { _chatRTInfoGrupoDesde = "chat"; chatRTMostrarInfoGrupo(grupo); };
    // Boton volver: regresar a la vista anterior
    const btnVolver = document.getElementById("chatRTChatVolverBtn");
    if (btnVolver) btnVolver.onclick = () => {
      chatRTPararPolling();
      chatRTPararPollingGrupo();
      _chatRTChatGrupoActivo = false;
      _chatRTGrupoActivo = null;
      _chatRTChatPersonal = false;
      _chatRTGrupoTypingUsers = {};
      if (_chatRTVistaAnterior === "infogrupo") chatRTMostrarVista("infogrupo");
      else chatRTMostrarVista("main");
    };
    // Mostrar vista chat
    const vistas = ["chatRTVistaLogin", "chatRTVistaRecuperar", "chatRTVistaMain", "chatRTVistaNuevoChat", "chatRTVistaNuevoContacto", "chatRTVistaPerfil", "chatRTVistaColores", "chatRTVistaCrearGrupo", "chatRTVistaInfoGrupo", "chatRTVistaPerfilUsuario", "chatRTVistaChat", "chatRTVistaMenu"];
    vistas.forEach(id => { const el = document.getElementById(id); if (el) el.style.display = "none"; });
    const chatEl = document.getElementById("chatRTVistaChat");
    if (chatEl) { chatEl.style.display = "flex"; }
    const bottomBar = document.getElementById("chatRTBottomBar");
    if (bottomBar) bottomBar.style.display = "none";
    chatRTVistaActual = "chat";
    chatRTPararPolling();
    chatRTPararPollingGrupo();
    const container = document.getElementById("chatRTMensajes");
    if (container) container.innerHTML = "";
    chatRTMostrarSkeletonMensajes();
    await chatRTCargarFotosGrupo();
    await chatRTCargarMensajesGrupo();
    chatRTIniciarPollingGrupo();
    chatRTSuscribirGrupo();
    chatRTSuscribirTypingGrupo();
    // Permisos de envio: si "enviar mensajes" esta desactivado, solo admins/owner escriben
    const rolYo = grupo.rol || "member";
    const soyAdminGrupo = rolYo === "owner" || rolYo === "admin";
    const composer = document.getElementById("chatRTComposer");
    const emojiPanel = document.getElementById("chatRTEmojiPanel");
    if (composer) composer.style.display = (soyAdminGrupo || grupo.settings_can_send !== false) ? "block" : "none";
    if (emojiPanel) emojiPanel.style.display = "none";
    const input = document.getElementById("chatRTInput");
    if (input) { input.value = ""; input.style.height = "auto"; }
  }

  // Cargar mensajes de grupo (ultimos 30)
  async function chatRTCargarMensajesGrupo() {
    if (!_chatRTGrupoActivo) return;
    const sb = getSupabase();
    if (!sb) return;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return;
    const container = document.getElementById("chatRTMensajes");
    if (!container) return;
    const { data, error } = await sb
      .from("group_messages")
      .select("id, sender_id, content, created_at, reply_to_id")
      .eq("group_id", _chatRTGrupoActivo.id)
      .order("created_at", { ascending: false })
      .limit(31);
    if (error || !data) { if (container.innerHTML) container.innerHTML = ""; return; }
    const hayMas = data.length > 30;
    const page = data.slice(0, 30).reverse();
    // Llenar mapa de contenidos del grupo
    page.forEach(m => { chatRTReplyContenidos[m.id] = { texto: m.content, autor: m.sender_id === session.user.id ? "Tu" : (_chatRTGrupoNombres[m.sender_id] || "Alguien") }; });
    container.innerHTML = "";
    for (const msg of page) {
      const esMio = msg.sender_id === session.user.id;
      const foto = esMio ? obtenerFotoRT() : (_chatRTGrupoFotos[msg.sender_id] || _defaultPhoto);
      chatRTAgregarMensaje(esMio ? "usuario" : "otro", msg.content, foto, msg.id, msg.created_at, "", msg.sender_id, chatRTResolveReply(msg.reply_to_id));
    }
    if (page.length > 0) {
      _chatRTGrupoUltimoTs = page[page.length - 1].created_at;
    }
    _chatRTGrupoHayMas = hayMas;
    container.scrollTop = container.scrollHeight;
  }

  // Cargar mensajes viejos de grupo
  async function chatRTCargarMensajesGrupoViejos() {
    if (!_chatRTGrupoActivo || _chatRTGrupoCargandoViejos || !_chatRTGrupoHayMas) return;
    if (!_chatRTGrupoUltimoTs) return;
    _chatRTGrupoCargandoViejos = true;
    const sb = getSupabase();
    const container = document.getElementById("chatRTMensajes");
    if (!sb || !container) { _chatRTGrupoCargandoViejos = false; return; }
    const { data: { session } } = await sb.auth.getSession();
    if (!session) { _chatRTGrupoCargandoViejos = false; return; }
    const loader = document.createElement("div");
    loader.id = "chatRTCargandoViejos";
    loader.style.cssText = "display:flex;justify-content:center;padding:8px 0;";
    loader.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="2.5" style="animation:chatRTSpin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke-dasharray="31.4" stroke-dashoffset="8" /></svg>';
    container.prepend(loader);
    const prevHeight = container.scrollHeight;
    const prevScroll = container.scrollTop;
    const { data, error } = await sb
      .from("group_messages")
      .select("id, sender_id, content, created_at, reply_to_id")
      .eq("group_id", _chatRTGrupoActivo.id)
      .lt("created_at", _chatRTGrupoUltimoTs)
      .order("created_at", { ascending: false })
      .limit(31);
    const loaderEl = document.getElementById("chatRTCargandoViejos");
    if (loaderEl) loaderEl.remove();
    if (error || !data) { _chatRTGrupoCargandoViejos = false; return; }
    const hayMas = data.length > 30;
    const page = data.slice(0, 30).reverse();
    for (const msg of page) {
      const yaExiste = document.querySelector('[data-rt-msgid="' + msg.id + '"]');
      if (yaExiste) continue;
      const esMio = msg.sender_id === session.user.id;
      const foto = esMio ? obtenerFotoRT() : (_chatRTGrupoFotos[msg.sender_id] || _defaultPhoto);
      chatRTReplyContenidos[msg.id] = { texto: msg.content, autor: esMio ? "Tu" : (_chatRTGrupoNombres[msg.sender_id] || "Alguien") };
      container.insertBefore(chatRTConstruirMensaje(esMio ? "usuario" : "otro", msg.content, foto, msg.id, msg.created_at, "", msg.sender_id, chatRTResolveReply(msg.reply_to_id)), container.firstChild);
    }
    if (page.length > 0) _chatRTGrupoUltimoTs = page[0].created_at;
    _chatRTGrupoHayMas = hayMas;
    chatRTReconstruirConectores();
    container.scrollTop = prevScroll + (container.scrollHeight - prevHeight);
    _chatRTGrupoCargandoViejos = false;
  }

  // Polling de grupo
  function chatRTIniciarPollingGrupo() {
    chatRTPararPollingGrupo();
    _chatRTGrupoPollingTimer = setInterval(async () => {
      if (!_chatRTGrupoActivo || !_chatRTChatGrupoActivo) return;
      const sb = getSupabase();
      if (!sb) return;
      const { data: { session } } = await sb.auth.getSession();
      if (!session) return;
      let q = sb.from("group_messages")
        .select("id, sender_id, content, created_at, reply_to_id")
        .eq("group_id", _chatRTGrupoActivo.id)
        .order("created_at", { ascending: true });
      if (_chatRTGrupoUltimoTs) q = q.gt("created_at", _chatRTGrupoUltimoTs);
      const { data } = await q;
      if (data && data.length > 0) {
        _chatRTGrupoUltimoTs = data[data.length - 1].created_at;
        for (const msg of data) {
          if (msg.sender_id === session.user.id) continue;
          if (document.querySelector('[data-rt-msgid="' + msg.id + '"]')) continue;
          const foto = _chatRTGrupoFotos[msg.sender_id] || _defaultPhoto;
          chatRTReplyContenidos[msg.id] = { texto: msg.content, autor: _chatRTGrupoNombres[msg.sender_id] || "Alguien" };
          chatRTAgregarMensaje("otro", msg.content, foto, msg.id, msg.created_at, "", msg.sender_id, chatRTResolveReply(msg.reply_to_id));
        }
      }
    }, 3000);
  }

  function chatRTPararPollingGrupo() {
    if (_chatRTGrupoPollingTimer) { clearInterval(_chatRTGrupoPollingTimer); _chatRTGrupoPollingTimer = null; }
  }

  // Suscripcion realtime grupo
  function chatRTSuscribirGrupo() {
    const sb = getSupabase();
    if (!sb) return;
    if (_chatRTGrupoSubscription) { try { sb.removeChannel(_chatRTGrupoSubscription); } catch(e) {} }
    sb.auth.getSession().then(({ data: { session } }) => {
      if (!session) return;
      const uid = session.user.id;
      _chatRTGrupoSubscription = sb.channel("grupo_" + (_chatRTGrupoActivo ? _chatRTGrupoActivo.id : Date.now()))
        .on("postgres_changes", { event: "INSERT", schema: "public", table: "group_messages" }, (payload) => {
          const msg = payload.new;
          if (!_chatRTGrupoActivo || msg.group_id !== _chatRTGrupoActivo.id) return;
          if (msg.sender_id === uid) return;
          if (document.querySelector('[data-rt-msgid="' + msg.id + '"]')) return;
          const foto = _chatRTGrupoFotos[msg.sender_id] || _defaultPhoto;
          chatRTReplyContenidos[msg.id] = { texto: msg.content, autor: _chatRTGrupoNombres[msg.sender_id] || "Alguien" };
          chatRTAgregarMensaje("otro", msg.content, foto, msg.id, msg.created_at, "", msg.sender_id, chatRTResolveReply(msg.reply_to_id));
        })
        .subscribe();
    }).catch(() => {});
  }

  // === TYPING DE GRUPO ===
  function chatRTSuscribirTypingGrupo() {
    const sb = getSupabase();
    if (!sb || !_chatRTGrupoActivo) return;
    if (_chatRTGrupoTypingChannel) { try { sb.removeChannel(_chatRTGrupoTypingChannel); } catch(e) {} }
    let myId = null;
    sb.auth.getSession().then(({ data: { session } }) => {
      if (session) myId = session.user.id;
      _chatRTGrupoTypingChannel = sb.channel("gtyping_" + _chatRTGrupoActivo.id)
        .on("broadcast", { event: "typing_start" }, (payload) => {
          if (payload.payload && payload.payload.userId !== myId) {
            _chatRTGrupoTypingUsers[payload.payload.userId] = Date.now();
            if (payload.payload.nombre) _chatRTGrupoTypingNombres[payload.payload.userId] = payload.payload.nombre;
            chatRTMostrarContactosEnLista();
          }
        })
        .on("broadcast", { event: "typing_stop" }, (payload) => {
          if (payload.payload && payload.payload.userId !== myId) {
            delete _chatRTGrupoTypingUsers[payload.payload.userId];
            chatRTMostrarContactosEnLista();
          }
        })
        .subscribe();
    }).catch(() => {});
  }

  function chatRTEnviarTypingGrupoStart() {
    const sb = getSupabase();
    if (!sb || !_chatRTGrupoTypingChannel || !_chatRTGrupoActivo) return;
    sb.auth.getSession().then(({ data: { session } }) => {
      if (!session) return;
      const p = cargarPerfilRT();
      _chatRTGrupoTypingChannel.send({ type: "broadcast", event: "typing_start", payload: { userId: session.user.id, nombre: p.nombre || p.usuario || "Alguien" } });
    });
  }

  function chatRTEnviarTypingGrupoStop() {
    const sb = getSupabase();
    if (!sb || !_chatRTGrupoTypingChannel || !_chatRTGrupoActivo) return;
    sb.auth.getSession().then(({ data: { session } }) => {
      if (!session) return;
      _chatRTGrupoTypingChannel.send({ type: "broadcast", event: "typing_stop", payload: { userId: session.user.id } });
    });
  }

  // Enviar mensaje a grupo
  async function chatRTEnviarMensajeGrupo() {
    if (!_chatRTGrupoActivo) return;
    chatRTEmojiCerrar();
    chatRTEnviarTypingGrupoStop();
    chatRTTypingVisible = false;
    if (chatRTTypingDebounce) { clearTimeout(chatRTTypingDebounce); chatRTTypingDebounce = null; }
    if (chatRTTypingInterval) { clearInterval(chatRTTypingInterval); chatRTTypingInterval = null; }
    const input = document.getElementById("chatRTInput");
    const btnEnviar = document.getElementById("chatRTEnviar");
    if (!input || !btnEnviar) return;
    const texto = input.value.trim();
    if (!texto) return;
    const sb = getSupabase();
    if (!sb) return;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return;
    input.value = "";
    input.style.height = "auto";
    btnEnviar.disabled = true;
    const localId = "gopt_" + Date.now();
    var replyOptG = chatRTRespondiendoA || null;
    chatRTAgregarMensaje("usuario", texto, obtenerFotoRT(), localId, new Date().toISOString(), "", null, replyOptG);
    const { data, error } = await sb.from("group_messages").insert({
      group_id: _chatRTGrupoActivo.id,
      sender_id: session.user.id,
      content: texto,
      reply_to_id: chatRTRespondiendoA ? chatRTRespondiendoA.id : null,
    }).select("id, created_at");
    if (error || !data || !data[0]) {
      chatRTActualizarEstadoMensaje(localId, "failed");
      chatRTFailedMessages[localId] = { content: texto, groupId: _chatRTGrupoActivo.id };
      return;
    }
    chatRTRespondiendoA = null;
    const barReplyG = document.getElementById("chatRTReplyBar");
    if (barReplyG) barReplyG.style.display = "none";
    const wrapper = document.querySelector('[data-rt-msgid="' + localId + '"]');
    if (wrapper) wrapper.setAttribute("data-rt-msgid", data[0].id);
    chatRTUltimoMsgTs = null;
  }

  // Mostrar info de grupo
  async function chatRTMostrarInfoGrupo(grupo) {
    _chatRTInfoGrupoDesde = _chatRTInfoGrupoDesde || "main";
    const contenido = document.getElementById("chatRTInfoGrupoContenido");
    if (!contenido) return;
    contenido.innerHTML = '<div style="text-align:center;padding:20px;color:#666;font-size:12px;">Cargando...</div>';
    chatRTMostrarVista("infogrupo");
    const sb = getSupabase();
    if (!sb) return;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return;
    const myId = session.user.id;
    const [gRes, mRes] = await Promise.all([
      sb.from("groups").select("id, name, info, photo_url, owner_id, settings_can_edit, settings_can_send").eq("id", grupo.id).single(),
      sb.from("group_members").select("user_id, role, joined_at").eq("group_id", grupo.id)
    ]);
    const g = gRes.data;
    const miembros = mRes.data || [];
    if (!g) { contenido.innerHTML = '<div style="text-align:center;padding:20px;color:#666;font-size:12px;">Grupo no encontrado.</div>'; return; }
    // Cargar perfiles de miembros
    const userIds = miembros.map(m => m.user_id);
    const { data: perfiles } = await sb.from("profiles").select("user_id, display_name, username, photo_url, email").in("user_id", userIds);
    const perfMap = {};
    (perfiles || []).forEach(p => perfMap[p.user_id] = p);
    // Ordenar: owner primero, luego admins, luego miembros
    const orden = { owner: 0, admin: 1, member: 2 };
    const ordenados = [...miembros].sort((a, b) => (orden[a.role] || 3) - (orden[b.role] || 3));
    const miembro = miembros.find(m => m.user_id === myId);
    const esAdmin = miembro && (miembro.role === "owner" || miembro.role === "admin");
    const esOwner = miembro && miembro.role === "owner";
    const etiqueta = { owner: '<span style="background:#2563eb;color:#fff;font-size:9px;font-weight:700;padding:2px 8px;border-radius:10px;letter-spacing:0.3px;">PROPIETARIO</span>', admin: '<span style="background:#1a1a2e;border:1px solid #2563eb;color:#60a5fa;font-size:9px;font-weight:700;padding:2px 8px;border-radius:10px;letter-spacing:0.3px;">ADMIN</span>' };
    let html = '';
    // Header
    const puedeEditarAjustes = esAdmin || !!g.settings_can_edit;
    if (puedeEditarAjustes) {
      html += '<div style="display:flex;flex-direction:column;align-items:center;padding:10px 0 16px;border-bottom:1px solid #1a1a1a;">' +
        '<div id="chatRTInfoFotoBtn" style="width:100px;height:100px;border-radius:50%;overflow:hidden;background:#1a1a2e;border:2px solid #2563eb;cursor:pointer;position:relative;" title="Cambiar foto">' +
          '<img id="chatRTInfoFotoImg" src="' + (g.photo_url || _defaultPhoto) + '" style="width:100%;height:100%;object-fit:cover;" />' +
          '<div style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,0.7);text-align:center;padding:4px 0;font-size:9px;color:#fff;">' + _iconCam + '</div>' +
        '</div>' +
        '<div style="width:100%;max-width:280px;margin-top:12px;">' +
          '<div style="font-size:10px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Nombre del grupo</div>' +
          '<input id="chatRTInfoNombre" type="text" value="' + g.name + '" maxlength="40" style="width:100%;background:#111;border:1px solid #222;color:#e8edf9;font-size:13px;padding:8px 10px;border-radius:8px;outline:none;box-sizing:border-box;" />' +
        '</div>' +
        '<div style="width:100%;max-width:280px;margin-top:10px;">' +
          '<div style="font-size:10px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">Informacion</div>' +
          '<textarea id="chatRTInfoTexto" rows="2" maxlength="200" style="width:100%;background:#111;border:1px solid #222;color:#e8edf9;font-size:12px;padding:8px 10px;border-radius:8px;outline:none;box-sizing:border-box;resize:none;font-family:inherit;">' + (g.info || "") + '</textarea>' +
        '</div>' +
        '<input type="file" id="chatRTInfoFileInput" accept="image/*" style="display:none;" />' +
      '</div>';
      // Permisos: SOLO admin puede cambiar los toggles
      if (esAdmin) {
        html += '<div style="margin-top:16px;padding-bottom:8px;border-bottom:1px solid #1a1a1a;">' +
          '<div style="font-size:10px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">Permisos del grupo</div>' +
          '<label style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#14141f;border:1px solid #1f1f2e;border-radius:10px;cursor:pointer;margin-bottom:8px;">' +
            '<div><div style="font-size:13px;color:#e8edf9;">Editar ajustes del grupo</div><div style="font-size:11px;color:#666;margin-top:2px;">Quien puede cambiar foto, nombre e info</div></div>' +
            '<input id="chatRTInfoPermEditar" type="checkbox" ' + (g.settings_can_edit ? "checked" : "") + ' style="width:18px;height:18px;accent-color:#2563eb;cursor:pointer;" />' +
          '</label>' +
          '<label style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#14141f;border:1px solid #1f1f2e;border-radius:10px;cursor:pointer;">' +
            '<div><div style="font-size:13px;color:#e8edf9;">Enviar mensajes</div><div style="font-size:11px;color:#666;margin-top:2px;">Permitir que todos envien mensajes</div></div>' +
            '<input id="chatRTInfoPermEnviar" type="checkbox" ' + (g.settings_can_send ? "checked" : "") + ' style="width:18px;height:18px;accent-color:#2563eb;cursor:pointer;" />' +
          '</label>' +
        '</div>';
      }
      html += '<button id="chatRTInfoGuardarBtn" style="width:100%;padding:10px;background:#2563eb;color:#fff;border:none;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;margin-top:12px;">Guardar cambios</button>' +
        '<div id="chatRTInfoGuardarMsg" style="font-size:11px;color:#22c55e;text-align:center;margin-top:8px;display:none;"></div>';
    } else {
      // Miembro normal sin permiso de editar: ver header sin editar, permisos atenuados
      html += '<div style="display:flex;flex-direction:column;align-items:center;padding:10px 0 16px;border-bottom:1px solid #1a1a1a;">' +
        '<div style="width:100px;height:100px;border-radius:50%;overflow:hidden;background:#1a1a2e;border:2px solid #2563eb;"><img src="' + (g.photo_url || _defaultPhoto) + '" style="width:100%;height:100%;object-fit:cover;" /></div>' +
        '<div style="font-size:16px;font-weight:700;color:#fff;margin-top:12px;">' + g.name + '</div>' +
        '<div style="font-size:11px;color:#888;margin-top:4px;">Grupo</div>' +
        (g.info ? '<div style="font-size:12px;color:#aaa;margin-top:8px;text-align:center;max-width:280px;">' + g.info + '</div>' : '') +
      '</div>';
      // Permisos atenuados (solo lectura para miembros)
      html += '<div style="margin-top:16px;padding-bottom:8px;border-bottom:1px solid #1a1a1a;opacity:0.45;">' +
        '<div style="font-size:10px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">Permisos del grupo</div>' +
        '<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#14141f;border:1px solid #1f1f2e;border-radius:10px;margin-bottom:8px;">' +
          '<div><div style="font-size:13px;color:#e8edf9;">Editar ajustes del grupo</div></div>' +
          '<input type="checkbox" ' + (g.settings_can_edit ? "checked" : "") + ' disabled style="width:18px;height:18px;accent-color:#2563eb;opacity:0.5;" />' +
        '</div>' +
        '<div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#14141f;border:1px solid #1f1f2e;border-radius:10px;">' +
          '<div><div style="font-size:13px;color:#e8edf9;">Enviar mensajes</div></div>' +
          '<input type="checkbox" ' + (g.settings_can_send ? "checked" : "") + ' disabled style="width:18px;height:18px;accent-color:#2563eb;opacity:0.5;" />' +
        '</div>' +
      '</div>';
    }
    // Seccion admins
    const admins = ordenados.filter(m => m.role === "owner" || m.role === "admin");
    if (admins.length > 0) {
      html += '<div style="font-size:10px;color:#2563eb;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin:20px 0 8px;">Admins</div>';
      html += admins.map(m => {
        const p = perfMap[m.user_id] || {};
        const foto = p.photo_url || _defaultPhoto;
        const nombre = p.display_name || p.username || "Usuario";
        let etiq = m.role === "owner" ? etiqueta.owner : etiqueta.admin;
        // El owner puede quitar admin a un admin (no a si mismo ni al owner)
        if (m.role === "admin" && esOwner && m.user_id !== myId) {
          etiq = '<span data-accion="quitaradmin" data-userid="' + m.user_id + '" style="background:#1a1a2e;border:1px solid #ef4444;color:#f87171;font-size:9px;font-weight:700;padding:2px 8px;border-radius:10px;letter-spacing:0.3px;cursor:pointer;" title="Quitar admin">ADMIN</span>';
        }
        // Solo el owner puede expulsar a otro admin
        const btnExpulsarAdmin = (m.role === "admin" && esOwner && m.user_id !== myId)
          ? '<button data-accion="expulsar" data-userid="' + m.user_id + '" style="background:none;border:1px solid #333;color:#ef4444;font-size:10px;padding:4px 10px;border-radius:6px;cursor:pointer;margin-left:6px;">Expulsar</button>'
          : '';
        return '<div data-perfil="' + m.user_id + '" class="chatRTMiembroItem" style="display:flex;align-items:center;gap:12px;padding:10px 0;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background=\'#14141f\'" onmouseout="this.style.background=\'transparent\'">' +
          '<div style="width:42px;height:42px;border-radius:50%;overflow:hidden;background:#1a1a2e;flex-shrink:0;"><img src="' + foto + '" style="width:100%;height:100%;object-fit:cover;" /></div>' +
          '<div style="flex:1;overflow:hidden;">' +
            '<div style="font-size:13px;color:#fff;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + nombre + '</div>' +
            '<div style="font-size:11px;color:#666;">@' + (p.username || "") + '</div>' +
          '</div>' + etiq + btnExpulsarAdmin + '</div>';
      }).join("");
    }
    // Seccion miembros
    const miembrosNorm = ordenados.filter(m => m.role === "member");
    html += '<div style="font-size:10px;color:#888;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin:20px 0 8px;">Miembros (' + miembros.length + ')</div>';
    html += miembrosNorm.map(m => {
      const p = perfMap[m.user_id] || {};
      const foto = p.photo_url || _defaultPhoto;
      const nombre = p.display_name || p.username || "Usuario";
      const btnAdmin = (esOwner && m.user_id !== myId)
        ? '<button data-accion="haceradmin" data-userid="' + m.user_id + '" style="background:none;border:1px solid #333;color:#60a5fa;font-size:10px;padding:4px 10px;border-radius:6px;cursor:pointer;">Hacer admin</button>'
        : '';
      const btnExpulsar = (esAdmin && m.user_id !== myId)
        ? '<button data-accion="expulsar" data-userid="' + m.user_id + '" style="background:none;border:1px solid #333;color:#ef4444;font-size:10px;padding:4px 10px;border-radius:6px;cursor:pointer;margin-left:6px;">Expulsar</button>'
        : '';
      return '<div data-perfil="' + m.user_id + '" class="chatRTMiembroItem" style="display:flex;align-items:center;gap:12px;padding:10px 0;cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background=\'#14141f\'" onmouseout="this.style.background=\'transparent\'">' +
        '<div style="width:42px;height:42px;border-radius:50%;overflow:hidden;background:#1a1a2e;flex-shrink:0;"><img src="' + foto + '" style="width:100%;height:100%;object-fit:cover;" /></div>' +
        '<div style="flex:1;overflow:hidden;">' +
          '<div style="font-size:13px;color:#fff;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + nombre + '</div>' +
          '<div style="font-size:11px;color:#666;">@' + (p.username || "") + '</div>' +
        '</div>' + btnAdmin + btnExpulsar + '</div>';
    }).join("");
    if (miembrosNorm.length === 0) html += '<div style="font-size:12px;color:#666;padding:6px 0;">Aun no hay miembros.</div>';
    // Boton agregar miembro (solo admin/owner)
    if (esAdmin) {
      html += '<button id="chatRTAgregarMiembroBtn" style="width:100%;padding:11px;background:#1a1a2e;color:#60a5fa;border:1px solid #2563eb;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;margin-top:16px;">Agregar miembro</button>';
    }
    // Salir del grupo (miembros y admins, no el owner) o eliminar grupo (solo owner)
    if (esOwner) {
      html += '<div style="margin-top:24px;padding-top:16px;border-top:1px solid #1a1a1a;">' +
        '<button id="chatRTEliminarGrupoBtn" style="width:100%;padding:11px;background:#2a0f0f;color:#f87171;border:1px solid #7f1d1d;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;">Eliminar grupo</button>' +
      '</div>';
    } else {
      html += '<div style="margin-top:24px;padding-top:16px;border-top:1px solid #1a1a1a;">' +
        '<button id="chatRTSalirGrupoBtn" style="width:100%;padding:11px;background:#1a1a1a;color:#f87171;border:1px solid #333;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;">Salir del grupo</button>' +
      '</div>';
    }
    contenido.innerHTML = html;
    // Evento abrir perfil de miembro
    contenido.querySelectorAll('[data-perfil]').forEach(el => {
      el.onclick = () => {
        const uid = el.getAttribute("data-perfil");
        const p = perfMap[uid];
        if (p) chatRTMostrarPerfilUsuario(p);
      };
    });
    // Evento hacer admin
    contenido.querySelectorAll('[data-accion="haceradmin"]').forEach(btn => {
      btn.onclick = (e) => { e.stopPropagation(); chatRTHacerAdminGrupo(grupo.id, btn.getAttribute("data-userid"), btn); };
    });
    // Evento quitar admin (solo owner)
    contenido.querySelectorAll('[data-accion="quitaradmin"]').forEach(btn => {
      btn.onclick = (e) => { e.stopPropagation(); chatRTQuitarAdminGrupo(grupo.id, btn.getAttribute("data-userid"), btn); };
    });
    // Evento expulsar miembro (solo owner)
    contenido.querySelectorAll('[data-accion="expulsar"]').forEach(btn => {
      btn.onclick = (e) => { e.stopPropagation(); chatRTExpulsarMiembroGrupo(grupo.id, btn.getAttribute("data-userid"), btn); };
    });
    // Evento agregar miembro
    const btnAgregar = document.getElementById("chatRTAgregarMiembroBtn");
    if (btnAgregar) btnAgregar.onclick = () => chatRTMostrarSelectorAgregarMiembro(grupo);
    // Eventos de edicion de ajustes (miembros con permiso o admin)
    if (puedeEditarAjustes) {
      const infoFotoBtn = document.getElementById("chatRTInfoFotoBtn");
      const infoFileInput = document.getElementById("chatRTInfoFileInput");
      if (infoFotoBtn && infoFileInput) infoFotoBtn.onclick = () => infoFileInput.click();
      if (infoFileInput) infoFileInput.onchange = () => {
        const file = infoFileInput.files && infoFileInput.files[0];
        if (!file) return;
        if (file.size > 1048576) { chatRTMostrarSnackbar("La foto debe ser menor a 1MB."); return; }
        const reader = new FileReader();
        reader.onload = (ev) => {
          const img = document.getElementById("chatRTInfoFotoImg");
          if (img) img.src = ev.target.result;
          _chatRTGrupoFotoDataURL = ev.target.result;
          _chatRTGrupoFotoFile = file;
        };
        reader.readAsDataURL(file);
        infoFileInput.value = "";
      };
      const btnGuardar = document.getElementById("chatRTInfoGuardarBtn");
      if (btnGuardar) btnGuardar.onclick = async () => {
        const nombreEl = document.getElementById("chatRTInfoNombre");
        const infoEl = document.getElementById("chatRTInfoTexto");
        const permE = document.getElementById("chatRTInfoPermEditar");
        const permS = document.getElementById("chatRTInfoPermEnviar");
        const msgEl = document.getElementById("chatRTInfoGuardarMsg");
        const nombreVal = nombreEl ? nombreEl.value.trim() : "";
        if (!nombreVal) { chatRTMostrarSnackbar("El nombre no puede estar vacio."); return; }
        let fotoURL = g.photo_url || "";
        if (_chatRTGrupoFotoFile) {
          fotoURL = await chatRTSubirFotoGrupo(_chatRTGrupoFotoFile) || fotoURL;
          _chatRTGrupoFotoFile = null;
          _chatRTGrupoFotoDataURL = null;
        } else if (_chatRTGrupoFotoDataURL && !_chatRTGrupoFotoFile) {
          fotoURL = _chatRTGrupoFotoDataURL;
          _chatRTGrupoFotoDataURL = null;
        }
        // Solo admin puede cambiar los permisos; el resto conserva los actuales
        const updateData = {
          name: nombreVal,
          info: infoEl ? infoEl.value.trim() : "",
          photo_url: fotoURL,
        };
        if (esAdmin) {
          updateData.settings_can_edit = permE ? permE.checked : true;
          updateData.settings_can_send = permS ? permS.checked : true;
        }
        const { error } = await sb.from("groups").update(updateData).eq("id", grupo.id);
        if (error) { chatRTMostrarSnackbar("No se pudo guardar."); return; }
        if (msgEl) { msgEl.style.display = "block"; msgEl.textContent = "Cambios guardados."; setTimeout(() => { msgEl.style.display = "none"; }, 2000); }
        _chatRTGrupoFotoDataURL = null;
        _chatRTGrupoFotoFile = null;
        chatRTCargarGrupos();
        if (_chatRTGrupoActivo) {
          _chatRTGrupoActivo.name = nombreVal;
          _chatRTGrupoActivo.info = infoEl ? infoEl.value.trim() : "";
          _chatRTGrupoActivo.photo_url = fotoURL;
        }
      };
    }
    // Salir del grupo (miembros y admins)
    const btnSalirGrupo = document.getElementById("chatRTSalirGrupoBtn");
    if (btnSalirGrupo) btnSalirGrupo.onclick = async () => {
      const sb2 = getSupabase();
      if (!sb2) return;
      const ok = await chatRTConfirmar({
        titulo: "Salir del grupo",
        mensaje: "¿Seguro que quieres salir del grupo?",
        peligro: false,
        aceptarTexto: "Salir",
      });
      if (!ok) return;
      const { data: { session } } = await sb2.auth.getSession();
      if (!session) return;
      const { error } = await sb2.from("group_members").delete().eq("group_id", grupo.id).eq("user_id", session.user.id);
      if (error) { chatRTMostrarSnackbar("No se pudo salir del grupo."); return; }
      chatRTMostrarSnackbar("Saliste del grupo.");
      _chatRTGrupoActivo = null;
      _chatRTChatGrupoActivo = false;
      chatRTPararPollingGrupo();
      chatRTMostrarVista("main");
      chatRTCargarGrupos();
    };
    // Eliminar grupo (solo owner) con confirmacion critica
    const btnEliminarGrupo = document.getElementById("chatRTEliminarGrupoBtn");
    if (btnEliminarGrupo) btnEliminarGrupo.onclick = async () => {
      const sb2 = getSupabase();
      if (!sb2) return;
      const ok = await chatRTConfirmar({
        titulo: "Eliminar grupo",
        mensaje: "Esta accion eliminara el grupo y todos sus mensajes permanentemente.\nNo se puede deshacer.\n\n¿Estas seguro de eliminar este grupo?",
        peligro: true,
        aceptarTexto: "Eliminar",
      });
      if (!ok) return;
      const { data: { session } } = await sb2.auth.getSession();
      if (!session) return;
      const { error } = await sb2.from("groups").delete().eq("id", grupo.id).eq("owner_id", session.user.id);
      if (error) { chatRTMostrarSnackbar("No se pudo eliminar el grupo."); return; }
      chatRTMostrarSnackbar("Grupo eliminado.");
      _chatRTGrupoActivo = null;
      _chatRTChatGrupoActivo = false;
      chatRTPararPollingGrupo();
      chatRTMostrarVista("main");
      chatRTCargarGrupos();
    };
  }

  // Mostrar perfil de un usuario (desde la info del grupo o header del chat)
  async function chatRTMostrarPerfilUsuario(perfil) {
    const contenido = document.getElementById("chatRTPerfilUsuarioContenido");
    if (!contenido) return;
    const sb = getSupabase();
    let esPropio = false;
    let yaEsContacto = false;
    if (sb) {
      const { data: { session } } = await sb.auth.getSession();
      if (session && session.user && session.user.id === perfil.user_id) esPropio = true;
      // Verificar si ya es contacto (por user_id o email)
      if (!esPropio && session && session.user && perfil.user_id) {
        const { data: cPorId } = await sb.from("contacts").select("id").eq("user_id", session.user.id).eq("contact_id", perfil.user_id).maybeSingle();
        if (cPorId) { yaEsContacto = true; }
        else if (perfil.email) {
          const { data: cPorEmail } = await sb.from("contacts").select("id").eq("user_id", session.user.id).eq("contact_email", perfil.email).maybeSingle();
          if (cPorEmail) yaEsContacto = true;
        }
      }
    }
    const foto = perfil.photo_url || _defaultPhoto;
    const nombre = perfil.display_name || perfil.username || "Usuario";
    const btnAgregarHTML = esPropio ? "" :
      '<button id="chatRTPerfilAgregarBtn" style="width:56px;height:56px;border-radius:50%;background:' + (yaEsContacto ? "#14141f" : "#1a1a2e") + ';border:1px solid ' + (yaEsContacto ? "#333" : "#2563eb") + ';color:' + (yaEsContacto ? "#555" : "#60a5fa") + ';cursor:' + (yaEsContacto ? "not-allowed" : "pointer") + ';display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;opacity:' + (yaEsContacto ? "0.6" : "1") + ';" title="' + (yaEsContacto ? "Ya es tu contacto" : "Agregar a contactos") + '">' +
        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>' +
        '<span style="font-size:9px;">' + (yaEsContacto ? "Agregado" : "Agregar") + '</span>' +
      '</button>';
    const btnChatTexto = esPropio ? "Notas" : "Chat";
    contenido.innerHTML =
      '<div style="width:110px;height:110px;border-radius:50%;overflow:hidden;background:#1a1a2e;border:3px solid #2563eb;flex-shrink:0;"><img src="' + foto + '" style="width:100%;height:100%;object-fit:cover;" /></div>' +
      '<div style="font-size:18px;font-weight:700;color:#fff;margin-top:16px;text-align:center;">' + nombre + '</div>' +
      '<div style="font-size:13px;color:#888;margin-top:4px;">@' + (perfil.username || "") + '</div>' +
      (esPropio ? '<div style="font-size:11px;color:#22c55e;margin-top:8px;">Este es tu perfil. Aqui puedes guardar notas personales.</div>' : '') +
      '<div style="display:flex;gap:20px;margin-top:28px;">' +
        '<button id="chatRTPerfilChatBtn" style="width:56px;height:56px;border-radius:50%;background:#2563eb;border:none;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:4px;box-shadow:0 4px 14px rgba(37,99,235,0.4);" title="' + (esPropio ? "Notas personales" : "Chatear") + '">' +
          '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
          '<span style="font-size:9px;">' + btnChatTexto + '</span>' +
        '</button>' +
        btnAgregarHTML +
      '</div>';
    chatRTMostrarVista("perfilusuario");
    // Boton chatear
    const btnChat = document.getElementById("chatRTPerfilChatBtn");
    if (btnChat) btnChat.onclick = () => {
      if (esPropio) {
        chatRTAbrirChatPersonal();
        return;
      }
      const c = chatRTContactos.find(x => x.contactId === perfil.user_id);
      // Si venimos de la info del grupo, el volver debe regresar ahi
      if (chatRTVistaActual === "perfilusuario") _chatRTVistaAnterior = "infogrupo";
      if (c) chatRTAbrirChat(c);
      else {
        const contactoNuevo = {
          contactId: perfil.user_id,
          nombre: nombre,
          usuario: perfil.username || "",
          foto: foto,
          email: perfil.email || "",
          online: false,
          lastSeen: null,
        };
        chatRTAbrirChat(contactoNuevo);
      }
    };
    // Boton agregar contacto
    const btnAgregar = document.getElementById("chatRTPerfilAgregarBtn");
    if (btnAgregar) btnAgregar.onclick = async () => {
      if (yaEsContacto) { chatRTMostrarSnackbar("Ya es tu contacto."); return; }
      const sb = getSupabase();
      if (!sb) return;
      const { data: { session } } = await sb.auth.getSession();
      if (!session) return;
      const email = perfil.email;
      if (!email) { chatRTMostrarSnackbar("Este usuario no tiene correo asociado."); return; }
      const { data: existe } = await sb.from("contacts").select("id").eq("user_id", session.user.id).eq("contact_email", email).maybeSingle();
      if (existe) { chatRTMostrarSnackbar("Ya es tu contacto."); return; }
      const { error } = await sb.from("contacts").insert({
        user_id: session.user.id,
        contact_email: email,
      });
      if (error) { chatRTMostrarSnackbar("No se pudo agregar."); return; }
      chatRTMostrarSnackbar("Contacto agregado.");
      chatRTCargarContactos();
    };
  }

  // Hacer admin a un miembro
  async function chatRTHacerAdminGrupo(groupId, userId, btn) {
    const sb = getSupabase();
    if (!sb) return;
    if (btn) btn.disabled = true;
    const { error } = await sb.from("group_members").update({ role: "admin" })
      .eq("group_id", groupId).eq("user_id", userId);
    if (btn) btn.disabled = false;
    if (error) { chatRTMostrarSnackbar("No se pudo cambiar el rol."); return; }
    chatRTMostrarSnackbar("Ahora es admin.");
    if (_chatRTGrupoActivo) chatRTMostrarInfoGrupo(_chatRTGrupoActivo);
  }

  // Quitar admin (solo el propietario)
  async function chatRTQuitarAdminGrupo(groupId, userId, btn) {
    const sb = getSupabase();
    if (!sb) return;
    if (btn) btn.disabled = true;
    const { error } = await sb.from("group_members").update({ role: "member" })
      .eq("group_id", groupId).eq("user_id", userId);
    if (btn) btn.disabled = false;
    if (error) { chatRTMostrarSnackbar("No se pudo quitar el admin."); return; }
    chatRTMostrarSnackbar("Ya no es admin.");
    if (_chatRTGrupoActivo) chatRTMostrarInfoGrupo(_chatRTGrupoActivo);
  }

  // Expulsar miembro (solo el propietario)
  async function chatRTExpulsarMiembroGrupo(groupId, userId, btn) {
    const sb = getSupabase();
    if (!sb) return;
    if (btn) btn.disabled = true;
    const { error } = await sb.from("group_members").delete()
      .eq("group_id", groupId).eq("user_id", userId);
    if (btn) btn.disabled = false;
    if (error) { chatRTMostrarSnackbar("No se pudo expulsar."); return; }
    chatRTMostrarSnackbar("Miembro expulsado.");
    if (_chatRTGrupoActivo) chatRTMostrarInfoGrupo(_chatRTGrupoActivo);
  }

  // Selector de contactos para agregar como miembro del grupo
  async function chatRTMostrarSelectorAgregarMiembro(grupo) {
    const contenido = document.getElementById("chatRTInfoGrupoContenido");
    if (!contenido) return;
    const sb = getSupabase();
    if (!sb) return;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return;
    contenido.innerHTML = '<div style="text-align:center;padding:20px;color:#666;font-size:12px;">Cargando contactos...</div>';
    // Cargar contactos
    const { data: contactsData } = await sb.from("contacts").select("contact_id, contact_email").eq("user_id", session.user.id);
    const { data: memberships } = await sb.from("group_members").select("user_id").eq("group_id", grupo.id);
    const miembrosIds = new Set((memberships || []).map(m => m.user_id));
    // Cargar perfiles de los contactos
    const contactIds = (contactsData || []).map(c => c.contact_id).filter(Boolean);
    let perfiles = [];
    if (contactIds.length > 0) {
      const { data } = await sb.from("profiles").select("user_id, display_name, username, photo_url").in("user_id", contactIds);
      perfiles = data || [];
    }
    const disponibles = perfiles.filter(p => !miembrosIds.has(p.user_id));
    let html = '';
    html += '<div style="font-size:14px;font-weight:700;color:#fff;margin-bottom:4px;">Agregar miembros</div>';
    html += '<div style="font-size:11px;color:#666;margin-bottom:16px;">Selecciona contactos para agregar al grupo</div>';
    if (disponibles.length === 0) {
      html += '<div style="font-size:12px;color:#666;padding:12px 0;">No tienes contactos disponibles para agregar.</div>';
    } else {
      html += disponibles.map(p => {
        const foto = p.photo_url || _defaultPhoto;
        const nombre = p.display_name || p.username || "Usuario";
        return '<div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid #1a1a1a;">' +
          '<div style="width:42px;height:42px;border-radius:50%;overflow:hidden;background:#1a1a2e;flex-shrink:0;"><img src="' + foto + '" style="width:100%;height:100%;object-fit:cover;" /></div>' +
          '<div style="flex:1;overflow:hidden;">' +
            '<div style="font-size:13px;color:#fff;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + nombre + '</div>' +
            '<div style="font-size:11px;color:#666;">@' + (p.username || "") + '</div>' +
          '</div>' +
          '<button data-gadd="' + p.user_id + '" style="background:#2563eb;border:none;color:#fff;padding:6px 12px;border-radius:6px;font-size:11px;cursor:pointer;">Agregar</button>' +
        '</div>';
      }).join("");
    }
    html += '<button id="chatRTVolverInfoGrupoBtn" style="width:100%;padding:10px;background:#1a1a2e;color:#888;border:1px solid #333;border-radius:8px;font-size:12px;cursor:pointer;margin-top:16px;">Volver</button>';
    contenido.innerHTML = html;
    contenido.querySelectorAll('[data-gadd]').forEach(btn => {
      btn.onclick = async () => {
        btn.disabled = true;
        const { error } = await sb.from("group_members").insert({ group_id: grupo.id, user_id: btn.getAttribute("data-gadd"), role: "member" });
        if (error) { chatRTMostrarSnackbar("No se pudo agregar."); btn.disabled = false; return; }
        chatRTMostrarSnackbar("Miembro agregado.");
        if (_chatRTGrupoActivo) chatRTMostrarInfoGrupo(_chatRTGrupoActivo);
      };
    });
    const btnVolverInfo = document.getElementById("chatRTVolverInfoGrupoBtn");
    if (btnVolverInfo) btnVolverInfo.onclick = () => { if (_chatRTGrupoActivo) chatRTMostrarInfoGrupo(_chatRTGrupoActivo); };
  }

  // Suscripcion real-time a mensajes directos
  let chatRTSubscription = null;
  function chatRTSuscribirMensajes() {
    const sb = getSupabase();
    if (!sb) return;
    if (chatRTSubscription) { try { sb.removeChannel(chatRTSubscription); } catch(e) {} }
    const myId = (function(){ const s = sb.auth.getSession && null; return null; })();
    // Intentar suscripcion Realtime (si funciona, genial)
    sb.auth.getSession().then(({ data: { session } }) => {
      if (!session) return;
      const uid = session.user.id;
      chatRTSubscription = sb.channel("dm_" + Date.now())
        .on("postgres_changes", { event: "INSERT", schema: "public", table: "direct_messages" }, (payload) => {
          const msg = payload.new;
          if (msg.sender_id === uid) return;
          // Marcar delivered
          sb.from("direct_messages").update({ delivered: true }).eq("id", msg.id).then(function(){});
          if (chatRTChatActivo && msg.sender_id === chatRTChatActivo.contactId) {
            if (!document.querySelector('[data-rt-msgid="' + msg.id + '"]')) {
              const foto = chatRTChatActivo.foto || _defaultPhoto;
              chatRTReplyContenidos[msg.id] = { texto: msg.content, autor: chatRTChatActivo.nombre || "Alguien" };
              chatRTAgregarMensaje("otro", msg.content, foto, msg.id, msg.created_at, "", null, chatRTResolveReply(msg.reply_to_id));
              chatRTMarcarLeidos(msg.sender_id);
            }
          } else {
            chatRTActualizarPreviewLocal(msg.sender_id, msg.content, false);
            chatRTIncrementarNoLeidos(msg.sender_id);
            chatRTNotificarMensajeEntrante(msg.sender_id, msg.content);
          }
        })
        .on("postgres_changes", { event: "UPDATE", schema: "public", table: "direct_messages" }, (payload) => {
          const msg = payload.new;
          if (msg.sender_id !== uid) return;
          const w = document.querySelector('[data-rt-msgid="' + msg.id + '"]');
          if (!w) return;
          let nuevo = "sent";
          if (msg.read) nuevo = "read";
          else if (msg.delivered) nuevo = "delivered";
          const actual = w.getAttribute("data-rt-status");
          if (actual !== nuevo) chatRTActualizarEstadoMensaje(msg.id, nuevo);
        })
        .subscribe();
    }).catch(() => {});

    // Polling de respaldo: cada 3 segundos buscar mensajes nuevos
    chatRTPollingActivo = true;
    chatRTPollingLoop();
    chatRTStatusPollingLoop();
  }

  // Polling ligero: 1 query cada 3s, solo si hay chat abierto
  let chatRTPollingActivo = false;
  let chatRTPollingTimer = null;
  let chatRTUltimoMsgTs = null;
  let chatRTStatusPollingTimer = null;
  // Estado de paginacion de mensajes (carga progresiva)
  let chatRTOldestTs = null;      // timestamp del mensaje mas antiguo cargado
  let chatRTHayMas = false;       // si hay mas mensajes anteriores en Supabase
  let chatRTCargandoViejos = false; // si hay una carga de viejos en curso
  let chatRTPageSize = 30;        // cuantos mensajes anteriores pedir

  function chatRTPollingLoop() {
    if (chatRTPollingTimer) clearInterval(chatRTPollingTimer);
    chatRTPollingTimer = setInterval(async () => {
      if (!chatRTPollingActivo || !chatRTChatActivo) return;
      const sb = getSupabase();
      if (!sb) return;
      const { data: { session } } = await sb.auth.getSession();
      if (!session) return;
      // Query liviana: mensajes nuevos desde el ultimo conocido
      let query = sb.from("direct_messages")
        .select("id, sender_id, receiver_id, content, created_at, delivered, read, reply_to_id")
        .or("and(sender_id.eq." + session.user.id + ",receiver_id.eq." + chatRTChatActivo.contactId + "),and(sender_id.eq." + chatRTChatActivo.contactId + ",receiver_id.eq." + session.user.id + "))")
        .order("created_at", { ascending: true });
      if (chatRTUltimoMsgTs) {
        query = query.gt("created_at", chatRTUltimoMsgTs);
      }
      const { data } = await query;
      if (data && data.length > 0) {
        chatRTUltimoMsgTs = data[data.length - 1].created_at;
        var idsMarcarDelivered = [];
        for (const msg of data) {
          if (msg.sender_id === session.user.id) {
            // Actualizar estado de mensajes propios
            var w = document.querySelector('[data-rt-msgid="' + msg.id + '"]');
            if (w) {
              var est = w.getAttribute("data-rt-status");
              var nuevo = "sent";
              if (msg.read) nuevo = "read";
              else if (msg.delivered) nuevo = "delivered";
              if (est !== nuevo) chatRTActualizarEstadoMensaje(msg.id, nuevo);
            }
            continue;
          }
          const yaExiste = document.querySelector('[data-rt-msgid="' + msg.id + '"]');
          if (!yaExiste) {
            const foto = chatRTChatActivo.foto || _defaultPhoto;
            chatRTReplyContenidos[msg.id] = { texto: msg.content, autor: chatRTChatActivo.nombre || "Alguien" };
            chatRTAgregarMensaje("otro", msg.content, foto, msg.id, msg.created_at, "", null, chatRTResolveReply(msg.reply_to_id));
            chatRTMarcarLeidos(msg.sender_id);
          }
          if (!msg.delivered) idsMarcarDelivered.push(msg.id);
        }
        if (idsMarcarDelivered.length > 0) {
          sb.from("direct_messages").update({ delivered: true }).in("id", idsMarcarDelivered).then(function(){});
        }
      }
    }, 3000);
  }

  function chatRTPararPolling() {
    chatRTPollingActivo = false;
    if (chatRTPollingTimer) { clearInterval(chatRTPollingTimer); chatRTPollingTimer = null; }
    if (chatRTStatusPollingTimer) { clearInterval(chatRTStatusPollingTimer); chatRTStatusPollingTimer = null; }
    chatRTUltimoMsgTs = null;
  }

  // Status polling: cada 10s checkear estado de mensajes propios (fallback de realtime)
  function chatRTStatusPollingLoop() {
    if (chatRTStatusPollingTimer) clearInterval(chatRTStatusPollingTimer);
    chatRTStatusPollingTimer = setInterval(async () => {
      if (!chatRTPollingActivo || !chatRTChatActivo) return;
      const sb = getSupabase();
      if (!sb) return;
      const { data: { session } } = await sb.auth.getSession();
      if (!session) return;
      const { data } = await sb.from("direct_messages")
        .select("id, delivered, read")
        .eq("sender_id", session.user.id)
        .eq("receiver_id", chatRTChatActivo.contactId)
        .or("delivered.eq.false,read.eq.false")
        .order("created_at", { ascending: false })
        .limit(30);
      if (!data) return;
      for (const msg of data) {
        const w = document.querySelector('[data-rt-msgid="' + msg.id + '"]');
        if (!w) continue;
        const actual = w.getAttribute("data-rt-status");
        if (actual === "failed" || actual === "sending") continue;
        let nuevo = "sent";
        if (msg.read) nuevo = "read";
        else if (msg.delivered) nuevo = "delivered";
        if (actual !== nuevo) chatRTActualizarEstadoMensaje(msg.id, nuevo);
      }
    }, 10000);
  }

  // Actualizar preview de un contacto localmente sin query
  function chatRTActualizarPreviewLocal(contactId, contenido, esMio) {
    const contacto = chatRTContactos.find(c => c.contactId === contactId);
    if (contacto) {
      contacto.ultimoMensaje = contenido;
      contacto.ultimoMensajeEsMio = esMio;
      contacto.ultimoMensajeTiempo = new Date().toISOString();
      chatRTMostrarContactosEnLista();
    }
  }

  function chatRTIncrementarNoLeidos(contactId) {
    const contacto = chatRTContactos.find(c => c.contactId === contactId);
    if (contacto) {
      contacto.noLeidos = (contacto.noLeidos || 0) + 1;
      chatRTMostrarContactosEnLista();
    }
  }

  // Notificacion visual de mensaje entrante (dentro del panel)
  function chatRTSolicitarPermisoNotificaciones() {
    if (!("Notification" in window)) return;
    if (Notification.permission === "default") {
      try { Notification.requestPermission(); } catch(e) {}
    }
  }

  function chatRTNotificarMensajeEntrante(senderId, contenido) {
    // Notificacion del navegador si hay permiso
    if ("Notification" in window && Notification.permission === "granted") {
      try {
        const contacto = chatRTContactos.find(c => c.contactId === senderId);
        const nombre = contacto ? contacto.nombre : "Nuevo mensaje";
        const textoCorto = contenido.length > 80 ? contenido.substring(0, 80) + "..." : contenido;
        const n = new Notification(nombre, {
          body: textoCorto,
          icon: (contacto && contacto.foto) ? contacto.foto : undefined,
          tag: "chatRTConexan"
        });
        n.onclick = function() {
          window.focus();
          if (n.close) n.close();
          if (contacto) chatRTAbrirChat(contacto);
        };
      } catch(e) {}
    }
    let notif = document.getElementById("chatRTNotifEntrante");
    if (!notif) {
      notif = document.createElement("div");
      notif.id = "chatRTNotifEntrante";
      notif.style.cssText = "position:absolute;top:8px;left:50%;transform:translateX(-50%);z-index:9999;background:#1e1e32;border:1px solid #2563eb;border-radius:10px;padding:10px 16px;display:flex;align-items:center;gap:10px;animation:chatEntrar 0.25s ease;box-shadow:0 4px 16px rgba(0,0,0,0.5);max-width:90%;cursor:pointer;";
      const overlay = document.getElementById("chatRTOverlay");
      if (overlay) overlay.appendChild(notif);
    }
    const contacto = chatRTContactos.find(c => c.contactId === senderId);
    const nombre = contacto ? contacto.nombre : "Alguien";
    const textoCorto = contenido.length > 40 ? contenido.substring(0, 40) + "..." : contenido;
    notif.innerHTML = '<div style="flex:1;"><div style="font-size:12px;font-weight:600;color:#e8edf9;">' + nombre + '</div><div style="font-size:11px;color:#999;margin-top:2px;">' + textoCorto + '</div></div><div style="font-size:10px;color:#2563eb;">Abrir</div>';
    notif.onclick = () => {
      if (contacto) chatRTAbrirChat(contacto);
      notif.remove();
    };
    notif.style.display = "flex";
    setTimeout(() => { if (notif) notif.remove(); }, 4000);
  }

  // Verificar si alguien te agrego como contacto (notificacion)
  let chatRTUltimoCheckContactos = 0;
  async function chatRTVerificarContactosNuevos() {
    const sb = getSupabase();
    if (!sb) return;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return;
    // Contar contactos que te tienen
    const { count } = await sb
      .from("contacts")
      .select("id", { count: "exact", head: true })
      .eq("contact_id", session.user.id)
      .gt("created_at", new Date(chatRTUltimoCheckContactos).toISOString());
    chatRTUltimoCheckContactos = Date.now();
    if (count && count > 0) {
      chatRTMostrarSnackbar(count + " contacto(s) nuevo(s) te agregaron");
      chatRTCargarContactos();
    }
  }

  // Enviar mensaje
  var chatRTOptimisticId = 0;
  async function chatRTEnviarMensajeRT() {
    if (!chatRTChatActivo) return;
    chatRTEmojiCerrar();
    chatRTEnviarTypingStop();
    chatRTTypingVisible = false;
    if (chatRTTypingDebounce) { clearTimeout(chatRTTypingDebounce); chatRTTypingDebounce = null; }
    if (chatRTTypingInterval) { clearInterval(chatRTTypingInterval); chatRTTypingInterval = null; }
    const input = document.getElementById("chatRTInput");
    const btnEnviar = document.getElementById("chatRTEnviar");
    if (!input || !btnEnviar) return;
    const texto = input.value.trim();
    if (!texto) return;
    const sb = getSupabase();
    if (!sb) return;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return;
    input.value = "";
    input.style.height = "auto";
    btnEnviar.disabled = true;
    var localId = "opt_" + (++chatRTOptimisticId) + "_" + Date.now();
    var replyOpt = chatRTRespondiendoA || null;
    chatRTAgregarMensaje("usuario", texto, obtenerFotoRT(), localId, new Date().toISOString(), "sending", null, replyOpt);
    chatRTUltimoMsgTs = new Date().toISOString();
    var res = await sb.from("direct_messages").insert({
      sender_id: session.user.id,
      receiver_id: chatRTChatActivo.contactId,
      content: texto,
      reply_to_id: chatRTRespondiendoA ? chatRTRespondiendoA.id : null,
    }).select("id, created_at");
    if (res.error || !res.data || !res.data[0]) {
      chatRTActualizarEstadoMensaje(localId, "failed");
      chatRTFailedMessages[localId] = { content: texto, receiverId: chatRTChatActivo.contactId };
      return;
    }
    var wrapper = document.querySelector('[data-rt-msgid="' + localId + '"]');
    if (wrapper) wrapper.setAttribute("data-rt-msgid", res.data[0].id);
    // Limpiar el estado de responder tras enviar
    chatRTRespondiendoA = null;
    const barReply = document.getElementById("chatRTReplyBar");
    if (barReply) barReply.style.display = "none";
    // En notas personales el mensaje se marca como visto al instante
    if (_chatRTChatPersonal) chatRTActualizarEstadoMensaje(res.data[0].id, "read");
    else chatRTActualizarEstadoMensaje(res.data[0].id, "sent");
    chatRTActualizarPreviewLocal(chatRTChatActivo.contactId, texto, true);
    // Actualizar preview del chat personal al instante
    if (_chatRTChatPersonal) {
      chatRTUltimoMsgPersonal = texto;
      chatRTUltimoTsPersonal = new Date().toISOString();
      chatRTMostrarContactosEnLista();
    }
  }
  let chatRTPerfilOriginales = { nombre: "", info: "", usuario: "", pass: "" };

  function chatRTDetectarCambios() {
    const nombre = (document.getElementById("chatRTCampoNombre")?.value || "").trim();
    const info = (document.getElementById("chatRTCampoInfo")?.value || "").trim();
    const usuario = document.getElementById("chatRTCampoUsuario");
    const pass = document.getElementById("chatRTCampoPass");
    let cambia = nombre !== chatRTPerfilOriginales.nombre || info !== chatRTPerfilOriginales.info;
    if (usuario && !usuario.readOnly) cambia = cambia || usuario.value.trim() !== chatRTPerfilOriginales.usuario;
    if (pass && !pass.readOnly) cambia = cambia || pass.value !== chatRTPerfilOriginales.pass;
    const btn = document.getElementById("chatRTBtnGuardarPerfil");
    if (btn) btn.style.display = cambia ? "block" : "none";
  }

  async function chatRTVerificarPermisosEdicion() {
    const msg = document.getElementById("chatRTPerfilEditMsg");
    const usuarioEl = document.getElementById("chatRTCampoUsuario");
    const passEl = document.getElementById("chatRTCampoPass");
    const camposRestringidos = ["chatRTCampoUsuario", "chatRTCampoPass"];

    // 1. Intentar desde localStorage (rapido)
    let lastEdit = null;
    const localEdit = localStorage.getItem("rt_perfil_last_edit");
    if (localEdit) {
      lastEdit = new Date(parseInt(localEdit));
      const diff = Date.now() - lastEdit.getTime();
      if (diff < 2592000000) {
        const diasRestantes = 30 - Math.floor(diff / 86400000);
        camposRestringidos.forEach(id => { const el = document.getElementById(id); if (el) { el.readOnly = true; el.style.background = "#0d0d0d"; el.style.borderColor = "#1a1a1a"; el.style.color = "#666"; el.style.cursor = "not-allowed"; } });
        if (msg) { msg.style.display = "block"; msg.textContent = "Usuario y contrasena: editables en " + diasRestantes + " dia(s)."; msg.style.color = "#666"; }
        chatRTDetectarCambios();
        return false;
      }
    }

    // 2. Sin local o ya pasaron 30 dias, consultar Supabase
    const sb = getSupabase();
    if (sb) {
      const { data: { session } } = await sb.auth.getSession();
      if (session) {
        const { data } = await sb.from("profiles").select("last_profile_edit").eq("user_id", session.user.id).maybeSingle();
        if (data && data.last_profile_edit) {
          lastEdit = new Date(data.last_profile_edit);
          // Sincronizar a localStorage
          localStorage.setItem("rt_perfil_last_edit", lastEdit.getTime().toString());
          const diff = Date.now() - lastEdit.getTime();
          if (diff < 2592000000) {
            const diasRestantes = 30 - Math.floor(diff / 86400000);
            camposRestringidos.forEach(id => { const el = document.getElementById(id); if (el) { el.readOnly = true; el.style.background = "#0d0d0d"; el.style.borderColor = "#1a1a1a"; el.style.color = "#666"; el.style.cursor = "not-allowed"; } });
            if (msg) { msg.style.display = "block"; msg.textContent = "Usuario y contrasena: editables en " + diasRestantes + " dia(s)."; msg.style.color = "#666"; }
            chatRTDetectarCambios();
            return false;
          }
        }
      }
    }

    // 3. Todo libre
    camposRestringidos.forEach(id => { const el = document.getElementById(id); if (el) { el.readOnly = false; el.style.background = "#111"; el.style.borderColor = "#222"; el.style.color = "#e8edf9"; el.style.cursor = "auto"; } });
    if (msg) msg.style.display = "none";
    return true;
  }

  function chatRTGuardarPerfil() {
    const modal = document.getElementById("chatRTConfirmEditModal");
    const msgEl = document.getElementById("chatRTConfirmEditMsg");
    const nombre = (document.getElementById("chatRTCampoNombre")?.value || "").trim();
    const info = (document.getElementById("chatRTCampoInfo")?.value || "").trim();
    const usuarioEl = document.getElementById("chatRTCampoUsuario");
    const passEl = document.getElementById("chatRTCampoPass");
    const usuario = usuarioEl ? usuarioEl.value.trim() : "";
    const pass = passEl ? passEl.value : "";
    let cambios = [];
    if (nombre !== chatRTPerfilOriginales.nombre) cambios.push("Nombre");
    if (info !== chatRTPerfilOriginales.info) cambios.push("Informacion");
    if (usuarioEl && !usuarioEl.readOnly && usuario !== chatRTPerfilOriginales.usuario) cambios.push("Usuario");
    if (passEl && !passEl.readOnly && pass !== chatRTPerfilOriginales.pass) cambios.push("Contrasena");
    if (cambios.length === 0) return;
    if (msgEl) msgEl.textContent = "Se actualizaran: " + cambios.join(", ") + ". Esta accion no se puede deshacer.";
    if (modal) modal.style.display = "flex";
  }

  async function chatRTAplicarCambiosPerfil() {
    const modal = document.getElementById("chatRTConfirmEditModal");
    if (modal) modal.style.display = "none";
    const nombre = (document.getElementById("chatRTCampoNombre")?.value || "").trim();
    const info = (document.getElementById("chatRTCampoInfo")?.value || "").trim();
    const usuarioEl = document.getElementById("chatRTCampoUsuario");
    const passEl = document.getElementById("chatRTCampoPass");
    const usuario = usuarioEl ? usuarioEl.value.trim() : "";
    const pass = passEl ? passEl.value : "";
    const usuarioBloqueado = usuarioEl && usuarioEl.readOnly;
    const passBloqueado = passEl && passEl.readOnly;
    const sb = getSupabase();
    if (!sb) return;
    const { data: { session } } = await sb.auth.getSession();
    if (!session) return;
    // Actualizar perfil en Supabase
    const update = {};
    if (nombre !== chatRTPerfilOriginales.nombre) update.display_name = nombre;
    if (info !== chatRTPerfilOriginales.info) update.info = info;
    if (!usuarioBloqueado && usuario !== chatRTPerfilOriginales.usuario) {
      update.username = usuario;
      update.last_profile_edit = new Date().toISOString();
    }
    if (Object.keys(update).length > 0) {
      const { error } = await sb.from("profiles").update(update).eq("user_id", session.user.id);
      if (error) {
        if (error.message && error.message.includes("Username")) {
          const msg = document.getElementById("chatRTPerfilEditMsg");
          if (msg) { msg.style.display = "block"; msg.textContent = "Este usuario ya esta en uso."; msg.style.color = "#ef4444"; }
          return;
        }
        if (error.message && error.message.includes("30 dias")) {
          const msg = document.getElementById("chatRTPerfilEditMsg");
          if (msg) { msg.style.display = "block"; msg.textContent = "Solo puedes cambiar usuario o contrasena una vez cada 30 dias."; msg.style.color = "#ef4444"; }
          return;
        }
      }
    }
    // Actualizar contrasena
    if (!passBloqueado && pass !== chatRTPerfilOriginales.pass) {
      const { error: passErr } = await sb.auth.updateUser({ password: pass });
      if (passErr) {
        let msgPass = "No se pudo actualizar la contrasena.";
        if (passErr.code === "same_password" || (passErr.message && passErr.message.includes("same_password"))) msgPass = "La nueva contrasena debe ser diferente a la actual.";
        const msgEl = document.getElementById("chatRTPerfilEditMsg");
        if (msgEl) { msgEl.style.display = "block"; msgEl.textContent = msgPass; msgEl.style.color = "#ef4444"; }
        return;
      }
      localStorage.setItem("rt_pass", pass);
      if (!usuarioBloqueado && usuario !== chatRTPerfilOriginales.usuario) {
        // Ya se actualizo arriba con el username
      } else {
        await sb.from("profiles").update({ last_profile_edit: new Date().toISOString() }).eq("user_id", session.user.id);
      }
    }
    // Actualizar localStorage
    const perfil = cargarPerfilRT();
    if (nombre !== chatRTPerfilOriginales.nombre) perfil.nombre = nombre;
    if (info !== chatRTPerfilOriginales.info) perfil.info = info;
    if (!usuarioBloqueado && usuario !== chatRTPerfilOriginales.usuario) { perfil.usuario = usuario; perfil.username = usuario; }
    perfil.email = session.user.email || perfil.email;
    guardarPerfilRT(perfil);
    // Sincronizar fecha de edicion a localStorage para bloquear de inmediato
    localStorage.setItem("rt_perfil_last_edit", Date.now().toString());
    // Reset y recargar permisos
    chatRTPerfilOriginales = { nombre, info, usuario, pass };
    chatRTDetectarCambios();
    chatRTVerificarPermisosEdicion();
  }

  // === Persistencia automatica del perfil (al escribir) ===
  function chatRTEscucharCampos() {
    const campos = [
      { id: "chatRTCampoNombre", key: "nombre" },
      { id: "chatRTCampoInfo", key: "info" },
      { id: "chatRTCampoUsuario", key: "usuario" },
    ];
    campos.forEach(c => {
      const el = document.getElementById(c.id);
      if (el) el.addEventListener("input", chatRTDetectarCambios);
    });
    const passEl = document.getElementById("chatRTCampoPass");
    if (passEl) passEl.addEventListener("input", chatRTDetectarCambios);
  }

  // === Cambio de foto de perfil ===
  function chatRTCambiarFoto() {
    const fileInput = document.getElementById("chatRTFileInput");
    if (fileInput) fileInput.click();
  }

  function chatRTConfigurarCrop() {
    const fileInput = document.getElementById("chatRTFileInput");
    const modal = document.getElementById("chatRTCropModal");
    const cropImg = document.getElementById("chatRTCropImg");
    const cropArea = document.getElementById("chatRTCropArea");
    const btnApply = document.getElementById("chatRTCropApply");
    const btnCancel = document.getElementById("chatRTCropCancel");

    if (!fileInput || !modal || !cropImg) return;

    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      // Validar tamaño maximo 1MB
      if (file.size > 1048576) {
        mostrarErrorRT("chatRTRegFotoError", "Maximo 1MB. Se reducira automaticamente.");
        setTimeout(() => ocultarErrorRT("chatRTRegFotoError"), 3000);
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        cropImg.src = ev.target.result;
        modal.style.display = "flex";
        // Resetear posicion
        cropImg.style.top = "0";
        cropImg.style.left = "0";
        // Arrastrar para mover
        let dragging = false, startY, imgTop = 0;
        cropImg.onmousedown = (me) => {
          dragging = true;
          startY = me.clientY - imgTop;
          cropImg.style.cursor = "grabbing";
          me.preventDefault();
        };
        document.addEventListener("mousemove", (mm) => {
          if (!dragging) return;
          imgTop = mm.clientY - startY;
          imgTop = Math.min(0, Math.max(-100, imgTop));
          cropImg.style.top = imgTop + "px";
        });
        document.addEventListener("mouseup", () => {
          dragging = false;
          if (cropImg) cropImg.style.cursor = "grab";
        });
      };
      reader.readAsDataURL(file);
      fileInput.value = "";
    });

    if (btnCancel) btnCancel.onclick = () => { modal.style.display = "none"; };

    if (btnApply) btnApply.onclick = () => {
      // Capturar imagen recortada en canvas
      const canvas = document.createElement("canvas");
      canvas.width = 200;
      canvas.height = 200;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const ratio = Math.max(200 / img.width, 200 / img.height);
        const w = img.width * ratio;
        const h = img.height * ratio;
        const top = parseInt(cropImg.style.top || "0");
        ctx.drawImage(img, (200 - w) / 2, top + (200 - h) / 2, w, h);
        // Comenzar con calidad 0.8 y reducir si es mayor a 1MB
        let quality = 0.8;
        let dataURL = canvas.toDataURL("image/jpeg", quality);
        while (dataURL.length > 1398108 && quality > 0.1) {
          quality -= 0.1;
          dataURL = canvas.toDataURL("image/jpeg", quality);
        }
        // Convertir a Blob y subir a Supabase Storage
        canvas.toBlob(async (blob) => {
          if (!blob) return;
          const fotoURL = await chatRTSubirFoto(blob);
          const fotoFinal = fotoURL || dataURL;
          // Guardar URL en perfil local
          const perfil = cargarPerfilRT();
          perfil.foto = fotoFinal;
          guardarPerfilRT(perfil);
          // Guardar URL en Supabase
          const sb = getSupabase();
          const { data: { session } } = sb ? await sb.auth.getSession() : { data: {} };
          if (sb && session) {
            await sb.from("profiles").update({ photo_url: fotoFinal }).eq("user_id", session.user.id);
          }
          // Actualizar UI
          const fotoGrande = document.getElementById("chatRTFotoPerfilImg");
          const fotoMini = document.getElementById("chatRTFotoMini");
          if (fotoGrande) fotoGrande.src = fotoFinal;
          if (fotoMini) fotoMini.src = fotoFinal;
          modal.style.display = "none";
        }, "image/jpeg", quality);
      };
      img.src = cropImg.src;
    };
  }

  function ocultarChatRT() {
    chatRTCerrarTodasConexiones();
    if (chatRTInactividadTimer) { clearTimeout(chatRTInactividadTimer); chatRTInactividadTimer = null; }
    chatRTOverlay.style.animation = "notifSlideOut 0.2s ease-in";
    setTimeout(() => {
      chatRTOverlay.style.display = "none";
      botonChatRT.style.display = "flex";
      botonIA.style.display = "flex";
      botonNotificaciones.style.display = "flex";
    }, 200);
  }

  function chatRTParsearMarkdown(texto) {
    const lineas = texto.split("\n");
    let html = "";
    let enLista = false;
    let enTabla = false;
    for (let i = 0; i < lineas.length; i++) {
      let l = lineas[i];
      if (/^>\s?/.test(l)) {
        if (enLista) { html += enLista === "ol" ? "</ol>" : "</ul>"; enLista = false; }
        if (enTabla) { html += "</table>"; enTabla = false; }
        l = l.replace(/^>\s?/, "");
        html += '<blockquote style="border-left:3px solid #2563eb;padding-left:10px;margin:6px 0;color:#aaa;font-style:italic;">' + l + '</blockquote>';
        continue;
      }
      if (/^[-*]{3,}$/.test(l.trim())) {
        if (enLista) { html += enLista === "ol" ? "</ol>" : "</ul>"; enLista = false; }
        if (enTabla) { html += "</table>"; enTabla = false; }
        html += '<hr style="border:none;border-top:1px solid #333;margin:8px 0;">';
        continue;
      }
      if (/^\|(.+)\|$/.test(l.trim())) {
        if (enLista) { html += enLista === "ol" ? "</ol>" : "</ul>"; enLista = false; }
        if (/^\|[\s\-:|]+\|$/.test(l.trim())) continue;
        const celdas = l.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map(c => c.trim());
        if (!enTabla) {
          html += '<div style="margin:8px 0;"><table style="width:100%;border-collapse:collapse;font-size:12px;table-layout:auto;"><thead><tr>';
          for (const c of celdas) html += '<th style="background:#1a1a2e;border:1px solid #333;padding:5px 8px;text-align:left;color:#ddd;">' + c + '</th>';
          html += '</tr></thead><tbody>';
          enTabla = true;
        } else {
          html += '<tr>';
          for (const c of celdas) html += '<td style="border:1px solid #333;padding:4px 8px;color:#ccc;">' + c + '</td>';
          html += '</tr>';
        }
        continue;
      }
      if (enTabla) { html += "</tbody></table></div>"; enTabla = false; }
      l = l.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const h3 = l.match(/^###\s+(.+)/);
      const h4 = l.match(/^##\s+(.+)/);
      const h5 = l.match(/^#\s+(.+)/);
      if (h3) {
        if (enLista) { html += enLista === "ol" ? "</ol>" : "</ul>"; enLista = false; }
        html += '<div style="font-size:14px;font-weight:bold;color:#ddd;margin:8px 0 4px 0;">' + h3[1] + '</div>';
        continue;
      } else if (h4) {
        if (enLista) { html += enLista === "ol" ? "</ol>" : "</ul>"; enLista = false; }
        html += '<div style="font-size:13px;font-weight:bold;color:#ccc;margin:6px 0 3px 0;">' + h4[1] + '</div>';
        continue;
      } else if (h5) {
        if (enLista) { html += enLista === "ol" ? "</ol>" : "</ul>"; enLista = false; }
        html += '<div style="font-size:12px;font-weight:bold;color:#bbb;margin:4px 0 2px 0;">' + h5[1] + '</div>';
        continue;
      }
      const numMatch = l.match(/^(\d+)[.\-]\s+(.+)/);
      const guionMatch = l.match(/^[-*]\s+(.+)/);
      if (numMatch) {
        if (enLista !== "ol") { if (enLista) html += "</ul>"; html += "<ol>"; enLista = "ol"; }
        html += "<li>" + numMatch[2] + "</li>";
      } else if (guionMatch) {
        if (enLista !== "ul") { if (enLista) html += "</ol>"; html += "<ul>"; enLista = "ul"; }
        html += "<li>" + guionMatch[1] + "</li>";
      } else {
        if (enLista) { html += enLista === "ol" ? "</ol>" : "</ul>"; enLista = false; }
        html += l + "<br>";
      }
    }
    if (enLista) html += enLista === "ol" ? "</ol>" : "</ul>";
    if (enTabla) html += "</tbody></table></div>";
    html = html.replace(/<br>$/, "");
    html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
    html = html.replace(/\*(.+?)\*/g, "<em>$1</em>");
    return html;
  }

  function chatRTReconstruirConectores() {
    const chatRTMensajes = document.getElementById("chatRTMensajes");
    if (!chatRTMensajes) return;
    function offsetHasta(el, limit) {
      let t = 0, l = 0;
      while (el && el !== limit) { t += el.offsetTop; l += el.offsetLeft; el = el.offsetParent; }
      return { top: t, left: l };
    }
    function dibujarLinea(id, selector) {
      let linea = document.getElementById(id);
      if (!linea) {
        linea = document.createElement("div");
        linea.id = id;
        linea.style.cssText = "position:absolute;width:1px;background:#222233;pointer-events:none;z-index:0;";
        chatRTMensajes.appendChild(linea);
      }
      // Circulo en el final de la linea (pegado al ultimo avatar)
      let circulo = document.getElementById(id + "Circulo");
      if (!circulo) {
        circulo = document.createElement("div");
        circulo.id = id + "Circulo";
        circulo.style.cssText = "position:absolute;width:5px;height:5px;border-radius:50%;background:#222233;pointer-events:none;z-index:0;";
        chatRTMensajes.appendChild(circulo);
      }
      const items = chatRTMensajes.querySelectorAll(selector);
      if (items.length < 2) { linea.style.display = "none"; circulo.style.display = "none"; return; }
      linea.style.display = "";
      circulo.style.display = "";
      const avFirst = items[0].children[0].children[0];
      const avLast = items[items.length - 1].children[0].children[0];
      if (!avFirst || !avLast) { linea.style.display = "none"; circulo.style.display = "none"; return; }
      const pFirst = offsetHasta(avFirst, chatRTMensajes);
      const pLast = offsetHasta(avLast, chatRTMensajes);
      linea.style.left = (pFirst.left + 14) + "px";
      linea.style.top = (pFirst.top + 14) + "px";
      linea.style.height = Math.max(0, (pLast.top + 14) - (pFirst.top + 14)) + "px";
      // Circulo centrado en el punto final de la linea
      circulo.style.left = (pLast.left + 14 - 2) + "px";
      circulo.style.top = (pLast.top + 14 - 2) + "px";
    }
    dibujarLinea("chatRTThreadLine", '[data-role="rt-usuario"]');
    dibujarLinea("chatRTThreadLineOtro", '[data-role="rt-otro"]');
  }

  function chatRTConstruirMensaje(rol, texto, fotoUrl, msgId, createdAt, status, senderId, reply) {
    const esUsuario = rol === "usuario";

    const wrapper = document.createElement("div");
    wrapper.style.cssText = "padding:3px 0;animation:chatEntrar 0.2s ease;position:relative;width:100%;";
    if (esUsuario) wrapper.setAttribute("data-role", "rt-usuario");
    else wrapper.setAttribute("data-role", "rt-otro");
    if (msgId) wrapper.setAttribute("data-rt-msgid", msgId);
    if (status) wrapper.setAttribute("data-rt-status", status);

    const row = document.createElement("div");
    row.style.cssText = "display:flex;gap:8px;max-width:92%;position:relative;" + (esUsuario ? "margin-left:auto;flex-direction:row-reverse;" : "");

    const foto = fotoUrl || _defaultPhoto;
    const avatarBg = esUsuario ? "background:#161620;border:1px solid #222233;" : "background:#2563eb;";
    const avatarHTML = '<img src="' + foto + '" style="width:28px;height:28px;border-radius:8px;object-fit:cover;flex-shrink:0;" />';

    // Borde de burbuja segun estado (solo usuario)
    let bordeColor = "#252540";
    if (esUsuario) {
      if (status === "sending") bordeColor = "#60a5fa";
      else if (status === "sent") bordeColor = "#22c55e";
      else if (status === "delivered") bordeColor = "#60a5fa";
      else if (status === "read") bordeColor = "#252540";
      else if (status === "failed") bordeColor = "#ef4444";
    }
    const burbujaBg = esUsuario
      ? "background:#1a1a2e;border:1px solid " + bordeColor + ";border-top-right-radius:4px;color:#ccc;"
      : "background:#111118;border:1px solid #1a1a24;border-top-left-radius:4px;color:#ccc;";

    const textoRenderizado = "<em>" + chatRTParsearMarkdown(texto) + "</em>";

    let fechaHTML = "";
    if (createdAt) {
      const d = new Date(createdAt);
      const ahora = new Date();
      const esHoy = d.toDateString() === ahora.toDateString();
      const ayer = new Date(ahora); ayer.setDate(ayer.getDate() - 1);
      const esAyer = d.toDateString() === ayer.toDateString();
      const hora = d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });
      let fechaStr = hora;
      if (!esHoy) {
        if (esAyer) fechaStr = "Ayer " + hora;
        else fechaStr = d.toLocaleDateString() + " " + hora;
      }
      fechaHTML = '<div style="font-size:10px;color:#555;margin-top:4px;' + (esUsuario ? "text-align:right;" : "text-align:left;") + '">' + fechaStr + '</div>';
    }

    const conectorPosRT = esUsuario ? "right:30px;" : "left:28px;";
    const conectorHTMLRT = '<div style="position:absolute;top:14px;' + conectorPosRT + 'width:8px;height:1px;background:#222233;pointer-events:none;"></div>';

    // Icono de estado (solo para mensajes propios)
    let statusIconHTML = "";
    if (esUsuario && status === "sending") {
      statusIconHTML = '<div class="chatRTStatusIcon" style="width:14px;height:14px;flex-shrink:0;display:flex;align-items:center;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2.5" style="animation:chatRTSpin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke-dasharray="31.4" stroke-dashoffset="8" /></svg></div>';
    } else if (esUsuario && status === "failed") {
      statusIconHTML = '<div class="chatRTStatusIcon chatRTRetryBtn" style="width:14px;height:14px;flex-shrink:0;display:flex;align-items:center;cursor:pointer;" title="Reintentar"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg></div>';
    }

    // Bloque de cita (responder) si existe
    let replyHTML = "";
    if (reply && reply.texto) {
      const replyTexto = String(reply.texto).length > 60 ? String(reply.texto).substring(0, 60) + "..." : String(reply.texto);
      // Borde a la derecha solo cuando el mensaje CITADO es mio (autor "Tu")
      const citadoEsMio = reply.autor === "Tu";
      const bordeCita = citadoEsMio
        ? "border-right:3px solid #35507a;"
        : "border-left:3px solid #35507a;";
      // Margen uniforme en todas las esquinas (3px)
      const marginCita = "margin:3px;";
      const paddingCita = citadoEsMio ? "padding:4px 10px 4px 8px;" : "padding:4px 8px 4px 10px;";
      replyHTML = '<div style="display:flex;gap:8px;align-items:stretch;' + paddingCita + 'background:' + (citadoEsMio ? "#141426" : "#0c0c12") + ';' + bordeCita + 'border-radius:0;' + marginCita + 'max-width:100%;overflow:hidden;">' +
        '<div style="flex:1;overflow:hidden;">' +
          '<div style="font-size:10px;color:#6f8bbf;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + (reply.autor || "Mensaje") + '</div>' +
          '<div style="font-size:11px;color:' + (citadoEsMio ? "#aab" : "#888") + ';white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:1px;">' + replyTexto + '</div>' +
        '</div>' +
      '</div>';
    }

    // Nombre del remitente (solo en grupos, mensajes de otros)
    let nombreHTML = "";
    if (_chatRTChatGrupoActivo && !esUsuario && senderId) {
      const nombreAutor = _chatRTGrupoNombres[senderId] || "Alguien";
      nombreHTML = '<div style="font-size:11px;color:#60a5fa;font-weight:600;margin-bottom:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + nombreAutor + '</div>';
    }

    row.innerHTML = '<div style="width:28px;height:28px;border-radius:8px;flex-shrink:0;overflow:hidden;position:relative;z-index:1;' + avatarBg + '">' + avatarHTML + '</div>' + conectorHTMLRT + '<div style="padding:9px 13px;border-radius:12px;font-size:13px;line-height:1.5;overflow-wrap:break-word;white-space:normal;max-width:calc(100vw - 120px);' + burbujaBg + '">' + nombreHTML + replyHTML + textoRenderizado + fechaHTML + '</div>' + statusIconHTML;

    wrapper.appendChild(row);
    // Swipe a la derecha para responder (citar)
    let autorSwipe = null;
    if (esUsuario) autorSwipe = "Tu";
    else if (_chatRTChatGrupoActivo && senderId) autorSwipe = _chatRTGrupoNombres[senderId] || "Alguien";
    else if (chatRTChatActivo) autorSwipe = chatRTChatActivo.nombre;
    chatRTAplicarSwipeResponder(wrapper, texto, autorSwipe);
    return wrapper;
  }

  // Swipe horizontal a la derecha activa responder (como WhatsApp)
  // Swipe horizontal activa responder (como WhatsApp)
  // Usa un solo par de listeners globales para evitar acumulacion de eventos
  let _chatRTSwipeW = null;
  let _chatRTSwipeStartX = null;
  let _chatRTSwipeStartY = null;
  let _chatRTSwipeMio = false;
  let _chatRTSwipeActivo = false;

  function chatRTIniciarSwipeGlobal() {
    if (window._chatRTSwipeGlobalIniciado) return;
    window._chatRTSwipeGlobalIniciado = true;
    document.addEventListener("touchstart", (e) => {
      const w = e.target && e.target.closest ? e.target.closest("[data-rt-msgid]") : null;
      if (!w) { _chatRTSwipeW = null; return; }
      _chatRTSwipeW = w;
      _chatRTSwipeStartX = e.touches[0].clientX;
      _chatRTSwipeStartY = e.touches[0].clientY;
      _chatRTSwipeMio = w.getAttribute("data-role") === "rt-usuario";
      _chatRTSwipeActivo = false;
    }, { passive: true });
    document.addEventListener("touchmove", (e) => {
      if (!_chatRTSwipeW || _chatRTSwipeStartX === null) return;
      const t = e.touches[0];
      const dx = t.clientX - _chatRTSwipeStartX;
      const dy = t.clientY - _chatRTSwipeStartY;
      if (Math.abs(dy) > Math.abs(dx) * 1.5) { _chatRTSwipeW = null; return; }
      if (_chatRTSwipeMio) { if (dx < -8) _chatRTSwipeActivo = true; }
      else { if (dx > 8) _chatRTSwipeActivo = true; }
      if (_chatRTSwipeActivo) {
        const v = _chatRTSwipeMio ? Math.max(dx, -60) : Math.min(dx, 60);
        _chatRTSwipeW.style.transform = "translateX(" + v + "px)";
      }
    }, { passive: true });
    document.addEventListener("touchend", () => {
      if (_chatRTSwipeW) {
        _chatRTSwipeW.style.transform = "";
        if (_chatRTSwipeActivo) {
          const w = _chatRTSwipeW;
          const mid = w.getAttribute("data-rt-msgid");
          if (mid) chatRTAbrirResponder(mid, w.getAttribute("data-rt-texto") || "", w.getAttribute("data-rt-autor") || null);
        }
      }
      _chatRTSwipeW = null; _chatRTSwipeStartX = null; _chatRTSwipeActivo = false;
    });
    document.addEventListener("mousedown", (e) => {
      const w = e.target && e.target.closest ? e.target.closest("[data-rt-msgid]") : null;
      if (!w) { _chatRTSwipeW = null; return; }
      _chatRTSwipeW = w;
      _chatRTSwipeStartX = e.clientX;
      _chatRTSwipeStartY = e.clientY;
      _chatRTSwipeMio = w.getAttribute("data-role") === "rt-usuario";
      _chatRTSwipeActivo = false;
    });
    document.addEventListener("mousemove", (e) => {
      if (!_chatRTSwipeW || _chatRTSwipeStartX === null) return;
      const dx = e.clientX - _chatRTSwipeStartX;
      const dy = e.clientY - _chatRTSwipeStartY;
      if (Math.abs(dy) > Math.abs(dx) * 1.5) { _chatRTSwipeW = null; return; }
      if (_chatRTSwipeMio) { if (dx < -8) _chatRTSwipeActivo = true; }
      else { if (dx > 8) _chatRTSwipeActivo = true; }
      if (_chatRTSwipeActivo) {
        const v = _chatRTSwipeMio ? Math.max(dx, -60) : Math.min(dx, 60);
        _chatRTSwipeW.style.transform = "translateX(" + v + "px)";
      }
    });
    document.addEventListener("mouseup", () => {
      if (_chatRTSwipeW) {
        _chatRTSwipeW.style.transform = "";
        if (_chatRTSwipeActivo) {
          const w = _chatRTSwipeW;
          const mid = w.getAttribute("data-rt-msgid");
          if (mid) chatRTAbrirResponder(mid, w.getAttribute("data-rt-texto") || "", w.getAttribute("data-rt-autor") || null);
        }
      }
      _chatRTSwipeW = null; _chatRTSwipeStartX = null; _chatRTSwipeActivo = false;
    });
  }

  function chatRTAplicarSwipeResponder(wrapper, texto, autor) {
    if (!msgIdEnWrapper(wrapper)) return;
    wrapper.setAttribute("data-rt-texto", texto || "");
    wrapper.setAttribute("data-rt-autor", autor || "");
    chatRTIniciarSwipeGlobal();
  }

  function msgIdEnWrapper(wrapper) {
    return !!wrapper.getAttribute("data-rt-msgid");
  }

  function chatRTAgregarMensaje(rol, texto, fotoUrl, msgId, createdAt, status, senderId, reply) {
    const chatRTMensajes = document.getElementById("chatRTMensajes");
    if (!chatRTMensajes) return;
    const wrapper = chatRTConstruirMensaje(rol, texto, fotoUrl, msgId, createdAt, status, senderId, reply);
    chatRTMensajes.appendChild(wrapper);
    chatRTMensajes.scrollTop = chatRTMensajes.scrollHeight;
    chatRTReconstruirConectores();
  }

  // === SISTEMA DE RESPONDER/CITAR (swipe derecha, como WhatsApp) ===
  function chatRTMostrarBarraResponder() {
    const bar = document.getElementById("chatRTReplyBar");
    const autorEl = document.getElementById("chatRTReplyAutor");
    const textoEl = document.getElementById("chatRTReplyTexto");
    if (!bar || !chatRTRespondiendoA) { if (bar) bar.style.display = "none"; return; }
    autorEl.textContent = chatRTRespondiendoA.autor || "Mensaje";
    textoEl.textContent = chatRTRespondiendoA.texto || "";
    bar.style.display = "flex";
  }

  function chatRTCerrarResponder() {
    chatRTRespondiendoA = null;
    const bar = document.getElementById("chatRTReplyBar");
    if (bar) bar.style.display = "none";
    const input = document.getElementById("chatRTInput");
    if (input) input.focus();
  }

  // Activar responder sobre un mensaje (swipe derecha)
  function chatRTAbrirResponder(msgId, texto, autor) {
    chatRTRespondiendoA = { id: msgId, texto: texto, autor: autor };
    chatRTMostrarBarraResponder();
    const input = document.getElementById("chatRTInput");
    if (input) input.focus();
  }

  // Resolver contenido de un mensaje citado (fallback seguro)
  function chatRTResolveReply(replyToId) {
    if (!replyToId) return null;
    const r = chatRTReplyContenidos[replyToId];
    if (r && r.texto) return r;
    return { texto: "Mensaje anterior", autor: "Mensaje" };
  }

  // Actualizar estado de un mensaje existente (solo borde + icono)
  function chatRTActualizarEstadoMensaje(msgId, nuevoStatus) {
    const wrapper = document.querySelector('[data-rt-msgid="' + msgId + '"]');
    if (!wrapper) return;
    const anterior = wrapper.getAttribute("data-rt-status");
    if (anterior === nuevoStatus) return;
    wrapper.setAttribute("data-rt-status", nuevoStatus);
    const row = wrapper.children[0];
    if (!row) return;
    const burbuja = row.children[2];
    const colores = { sending: "#60a5fa", sent: "#22c55e", delivered: "#60a5fa", read: "#252540", failed: "#ef4444" };
    const c = colores[nuevoStatus] || "#252540";
    if (burbuja) burbuja.style.borderColor = c;
    const viejo = row.querySelector(".chatRTStatusIcon");
    if (viejo) viejo.remove();
    if (nuevoStatus === "sending") {
      const el = document.createElement("div");
      el.className = "chatRTStatusIcon";
      el.style.cssText = "width:14px;height:14px;flex-shrink:0;display:flex;align-items:center;";
      el.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" stroke-width="2.5" style="animation:chatRTSpin 1s linear infinite;"><circle cx="12" cy="12" r="10" stroke-dasharray="31.4" stroke-dashoffset="8" /></svg>';
      row.appendChild(el);
    } else if (nuevoStatus === "failed") {
      const el = document.createElement("div");
      el.className = "chatRTStatusIcon chatRTRetryBtn";
      el.style.cssText = "width:14px;height:14px;flex-shrink:0;display:flex;align-items:center;cursor:pointer;";
      el.title = "Reintentar";
      el.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="2.5"><path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>';
      el.onclick = function() { chatRTRetryMensaje(msgId); };
      row.appendChild(el);
    }
  }

  // Mapa local de mensajes fallidos
  var chatRTFailedMessages = {};

  // Reintentar envio de mensaje fallido
  function chatRTRetryMensaje(localId) {
    var failed = chatRTFailedMessages[localId];
    if (!failed) return;
    delete chatRTFailedMessages[localId];
    chatRTActualizarEstadoMensaje(localId, "sending");
    var sb = getSupabase();
    if (!sb) { chatRTActualizarEstadoMensaje(localId, "failed"); chatRTFailedMessages[localId] = failed; return; }
    sb.auth.getSession().then(function(res) {
      var session = res.data && res.data.session;
      if (!session) { chatRTActualizarEstadoMensaje(localId, "failed"); chatRTFailedMessages[localId] = failed; return; }
      sb.from("direct_messages").insert({
        sender_id: session.user.id,
        receiver_id: failed.receiverId,
        content: failed.content
      }).select("id, created_at").then(function(res2) {
        if (res2.error || !res2.data || !res2.data[0]) {
          chatRTActualizarEstadoMensaje(localId, "failed");
          chatRTFailedMessages[localId] = failed;
          return;
        }
        var wrapper = document.querySelector('[data-rt-msgid="' + localId + '"]');
        if (wrapper) wrapper.setAttribute("data-rt-msgid", res2.data[0].id);
        chatRTActualizarEstadoMensaje(res2.data[0].id, "sent");
      });
    });
  }

  // === TYPING INDICATOR ===
  let chatRTTypingChannel = null;
  let chatRTTypingDebounce = null;
  let chatRTTypingVisible = false;
  let chatRTTypingInterval = null;
  let chatRTTypingUsers = {};

  function chatRTSuscribirTyping(otroUserId) {
    const sb = getSupabase();
    if (!sb || !otroUserId) return;
    if (chatRTTypingChannel) { try { sb.removeChannel(chatRTTypingChannel); } catch(e) {} }
    let myId = null;
    sb.auth.getSession().then(({ data: { session } }) => {
      if (session) myId = session.user.id;
      const channelName = "typing_" + [myId, otroUserId].sort().join("_");
      chatRTTypingChannel = sb.channel(channelName)
        .on("broadcast", { event: "typing_start" }, (payload) => {
          if (payload.payload && payload.payload.userId !== myId) {
            chatRTTypingUsers[payload.payload.userId] = Date.now();
            if (chatRTChatActivo && chatRTChatActivo.contactId === payload.payload.userId) {
              chatRTMostrarTyping();
            }
            chatRTMostrarContactosEnLista();
          }
        })
        .on("broadcast", { event: "typing_stop" }, (payload) => {
          if (payload.payload && payload.payload.userId !== myId) {
            delete chatRTTypingUsers[payload.payload.userId];
            if (chatRTChatActivo && chatRTChatActivo.contactId === payload.payload.userId) {
              chatRTQuitarTyping();
            }
            chatRTMostrarContactosEnLista();
          }
        })
        .subscribe();
    });
  }

  function chatRTEnviarTypingStart() {
    const sb = getSupabase();
    if (!sb || !chatRTTypingChannel || !chatRTChatActivo) return;
    sb.auth.getSession().then(({ data: { session } }) => {
      if (!session) return;
      chatRTTypingChannel.send({ type: "broadcast", event: "typing_start", payload: { userId: session.user.id } });
    });
  }

  function chatRTEnviarTypingStop() {
    const sb = getSupabase();
    if (!sb || !chatRTTypingChannel || !chatRTChatActivo) return;
    sb.auth.getSession().then(({ data: { session } }) => {
      if (!session) return;
      chatRTTypingChannel.send({ type: "broadcast", event: "typing_stop", payload: { userId: session.user.id } });
    });
  }

  function chatRTOnTypingInput() {
    if (_chatRTChatGrupoActivo) {
      if (!chatRTTypingVisible) {
        chatRTEnviarTypingGrupoStart();
        chatRTTypingVisible = true;
        chatRTTypingInterval = setInterval(() => chatRTEnviarTypingGrupoStart(), 3000);
      }
      if (chatRTTypingDebounce) clearTimeout(chatRTTypingDebounce);
      chatRTTypingDebounce = setTimeout(() => {
        chatRTEnviarTypingGrupoStop();
        chatRTTypingVisible = false;
        if (chatRTTypingInterval) { clearInterval(chatRTTypingInterval); chatRTTypingInterval = null; }
      }, 2000);
      return;
    }
    if (!chatRTTypingVisible) {
      chatRTEnviarTypingStart();
      chatRTTypingVisible = true;
      // Reenviar typing_start cada 3 segundos mientras se sigue escribiendo
      chatRTTypingInterval = setInterval(() => chatRTEnviarTypingStart(), 3000);
    }
    if (chatRTTypingDebounce) clearTimeout(chatRTTypingDebounce);
    chatRTTypingDebounce = setTimeout(() => {
      chatRTEnviarTypingStop();
      chatRTTypingVisible = false;
      if (chatRTTypingInterval) { clearInterval(chatRTTypingInterval); chatRTTypingInterval = null; }
    }, 2000);
  }

  // Dentro del chat: solo 3 puntos animados (sin texto)
  function chatRTMostrarTyping() {
    if (document.getElementById("chatRTTyping")) return;
    const chatRTMensajes = document.getElementById("chatRTMensajes");
    if (!chatRTMensajes) return;
    const foto = chatRTChatActivo ? (chatRTChatActivo.foto || _defaultPhoto) : _defaultPhoto;
    const div = document.createElement("div");
    div.id = "chatRTTyping";
    div.style.cssText = "display:flex;gap:8px;align-self:flex-start;animation:chatEntrar 0.2s ease;padding:3px 0;width:100%;";
    div.innerHTML = '<div style="width:28px;height:28px;border-radius:8px;background:#2563eb;flex-shrink:0;overflow:hidden;"><img src="' + foto + '" style="width:100%;height:100%;object-fit:cover;" /></div><div style="display:flex;align-items:center;padding:9px 13px;background:#111118;border:1px solid #1a1a24;border-radius:12px;border-top-left-radius:4px;"><span style="display:inline-flex;gap:4px;"><span style="width:6px;height:6px;border-radius:50%;background:#555;animation:chatPulse 1.2s infinite ease-in-out;"></span><span style="width:6px;height:6px;border-radius:50%;background:#555;animation:chatPulse 1.2s 0.2s infinite ease-in-out;"></span><span style="width:6px;height:6px;border-radius:50%;background:#555;animation:chatPulse 1.2s 0.4s infinite ease-in-out;"></span></span></div>';
    chatRTMensajes.appendChild(div);
    chatRTMensajes.scrollTop = chatRTMensajes.scrollHeight;
  }

  function chatRTQuitarTyping() {
    const t = document.getElementById("chatRTTyping");
    if (t) t.remove();
  }

  function chatRTEnviarMensaje() {
    const inp = document.getElementById("chatRTInput");
    const btn = document.getElementById("chatRTEnviar");
    if (!inp) return;
    const texto = inp.value.trim();
    if (!texto) return;
    chatRTAgregarMensaje("usuario", texto, obtenerFotoRT(), null, new Date().toISOString());
    inp.value = "";
    inp.style.height = "auto";
    btn.disabled = true;
    // Logica real-time se conectara despues
  }

  (function() {
    let scrollRAF = null;
    const chatRTM = document.getElementById("chatRTMensajes");
    if (chatRTM) chatRTM.addEventListener("scroll", function() {
      if (scrollRAF) return;
      scrollRAF = requestAnimationFrame(function() {
        chatRTReconstruirConectores();
        scrollRAF = null;
      });
    });
  })();

  setTimeout(() => {
    const btnCerrarRT = document.getElementById("cerrarChatRT");
    const btnCerrarRT2 = document.getElementById("cerrarChatRT2");
    const btnEnviarRT = document.getElementById("chatRTEnviar");
    const chatRTInput = document.getElementById("chatRTInput");
    const btnPerfil = document.getElementById("chatRTPerfilBtn");
    const btnVolver = document.getElementById("chatRTVolverBtn");
    const fotoGrande = document.getElementById("chatRTFotoGrande");

    // Cerrar panel (botones X)
    if (btnCerrarRT) btnCerrarRT.onclick = ocultarChatRT;
    if (btnCerrarRT2) btnCerrarRT2.onclick = ocultarChatRT;
    const btnCerrarRT3 = document.getElementById("cerrarChatRT3");
    if (btnCerrarRT3) btnCerrarRT3.onclick = ocultarChatRT;

    // === LOGIN / REGISTRO ===
    const btnSubmit = document.getElementById("chatRTBtnSubmit");
    const toggleAuth = document.getElementById("chatRTToggleAuth");
    const linkRecuperar = document.getElementById("chatRTLinkRecuperar");
    const btnVolverLogin = document.getElementById("chatRTVolverLogin");
    const btnEnviarRec = document.getElementById("chatRTBtnEnviarRec");
    const btnReenviar = document.getElementById("chatRTBtnReenviar");

    if (btnSubmit) btnSubmit.onclick = () => {
      if (_chatRTModoRegistro) chatRTRegistrar();
      else chatRTLogin();
    };
    if (toggleAuth) toggleAuth.onclick = () => chatRTToggleModoAuth(!_chatRTModoRegistro);
    if (linkRecuperar) linkRecuperar.onclick = () => {
      chatRTMostrarVista("recuperar");
      const emailRec = document.getElementById("chatRTRecEmail");
      const emailActual = document.getElementById("chatRTLoginEmail");
      if (emailRec && emailActual) emailRec.value = emailActual.value;
    };
    if (btnVolverLogin) btnVolverLogin.onclick = () => {
      if (_chatRTRecTimer) { clearInterval(_chatRTRecTimer); _chatRTRecTimer = null; }
      chatRTResetLoginForm();
      chatRTMostrarVista("login");
    };
    if (btnEnviarRec) btnEnviarRec.onclick = chatRTEnviarRecuperacion;
    if (btnReenviar) btnReenviar.onclick = chatRTEnviarRecuperacion;

    // Enter en campos de login para enviar
    ["chatRTRegUser", "chatRTRegNombre", "chatRTLoginEmail", "chatRTLoginPass"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener("keydown", (e) => {
        if (e.key === "Enter") { e.preventDefault(); if (btnSubmit) btnSubmit.click(); }
      });
    });

    // Toggle ver contraseña
    const togglePass = document.getElementById("chatRTTogglePass");
    if (togglePass) {
      togglePass.addEventListener("click", () => {
        const input = document.getElementById("chatRTLoginPass");
        const eyeOpen = document.getElementById("chatRTEyeOpen");
        const eyeClosed = document.getElementById("chatRTEyeClosed");
        if (!input) return;
        const visible = input.type === "text";
        input.type = visible ? "password" : "text";
        if (eyeOpen) eyeOpen.style.display = visible ? "block" : "none";
        if (eyeClosed) eyeClosed.style.display = visible ? "none" : "block";
        togglePass.style.opacity = "1";
      });
      togglePass.addEventListener("mouseenter", () => { togglePass.style.opacity = "0.8"; });
      togglePass.addEventListener("mouseleave", () => { togglePass.style.opacity = "0.5"; });
    }

    // Validar username en tiempo real (chequear disponibilidad)
    const campoUser = document.getElementById("chatRTRegUser");
    if (campoUser) {
      let _timeoutUser = null;
      campoUser.addEventListener("input", () => {
        clearTimeout(_timeoutUser);
        const val = campoUser.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "");
        campoUser.value = val;
        const err = validarUsername(val);
        if (err) { mostrarErrorRT("chatRTRegUserError", err); return; }
        ocultarErrorRT("chatRTRegUserError");
        if (val.length >= 1) {
          _timeoutUser = setTimeout(async () => {
            const sb = getSupabase();
            if (!sb) return;
            const { data } = await sb.from("profiles").select("user_id").eq("username", val).maybeSingle();
            if (data) mostrarErrorRT("chatRTRegUserError", "Este usuario ya existe");
          }, 600);
        }
      });
    }

    // Validar nombre en tiempo real
    const campoNombre = document.getElementById("chatRTRegNombre");
    if (campoNombre) {
      campoNombre.addEventListener("input", () => {
        const val = campoNombre.value.trim();
        const err = validarNombre(val);
        if (err) { mostrarErrorRT("chatRTRegNombreError", err); }
        else { ocultarErrorRT("chatRTRegNombreError"); }
      });
    }

    // Validar email en tiempo real (sin espacios, minusculas)
    const campoEmail = document.getElementById("chatRTLoginEmail");
    if (campoEmail) {
      campoEmail.addEventListener("input", () => {
        campoEmail.value = campoEmail.value.toLowerCase().replace(/\s+/g, "");
        const val = campoEmail.value.trim();
        const el = document.getElementById("chatRTLoginEmailError");
        if (!_chatRTModoRegistro) { ocultarErrorRT("chatRTLoginEmailError"); return; }
        if (!val) {
          ocultarErrorRT("chatRTLoginEmailError");
          if (el) { el.textContent = ""; el.style.color = "#ef4444"; }
        } else if (!validarEmail(val)) {
          if (el) { el.textContent = "Correo no valido"; el.style.color = "#ef4444"; el.style.display = "block"; }
        } else {
          if (el) { el.textContent = "✓ Correo valido"; el.style.color = "#22c55e"; el.style.display = "block"; }
        }
      });
    }

    // Validar contraseña en tiempo real
    const campoPass = document.getElementById("chatRTLoginPass");
    if (campoPass) {
      campoPass.addEventListener("input", () => {
        const val = campoPass.value;
        const el = document.getElementById("chatRTLoginPassError");
        if (!_chatRTModoRegistro) { ocultarErrorRT("chatRTLoginPassError"); return; }
        if (!val) {
          ocultarErrorRT("chatRTLoginPassError");
          if (el) { el.textContent = ""; el.style.color = "#ef4444"; }
        } else {
          const err = validarPassword(val);
          if (err) {
            if (el) { el.textContent = err + " (" + val.length + "/100)"; el.style.color = "#ef4444"; el.style.display = "block"; }
          } else {
            if (el) { el.textContent = "✓ Contrasena valida"; el.style.color = "#22c55e"; el.style.display = "block"; }
          }
        }
      });
    }

    // Navegacion: perfil (abrir vista menu)
    if (btnPerfil) btnPerfil.onclick = () => chatRTToggleMenuPerfil();

    // Navegacion: chats (volver a vista principal)
    const btnChats = document.getElementById("chatRTChatsBtn");
    if (btnChats) btnChats.onclick = () => chatRTMostrarVista("main");

    // Menu perfil: opciones
    const menuOpcionPerfil = document.getElementById("chatRTMenuOpcionPerfil");
    const menuOpcionColores = document.getElementById("chatRTMenuOpcionColores");
    const menuOpcionLogout = document.getElementById("chatRTMenuOpcionLogout");
    const menuVolverBtn = document.getElementById("chatRTMenuVolverBtn");
    if (menuOpcionPerfil) menuOpcionPerfil.onclick = () => chatRTMostrarVista("perfil");
    if (menuOpcionColores) menuOpcionColores.onclick = () => chatRTMostrarVista("colores");
    if (menuOpcionLogout) menuOpcionLogout.onclick = () => chatRTCerrarSesion();
    if (menuVolverBtn) menuVolverBtn.onclick = () => chatRTMostrarVista("main");

    // Vista colores: volver al menu
    const coloresVolverBtn = document.getElementById("chatRTColoresVolverBtn");
    if (coloresVolverBtn) coloresVolverBtn.onclick = () => chatRTMostrarVista("menu");

    // Boton Nuevo Chat (+)
    const btnNuevoChat = document.getElementById("chatRTNuevoChatBtn");
    if (btnNuevoChat) btnNuevoChat.onclick = () => chatRTMostrarVista("nuevochat");

    // Volver desde Nuevo Chat
    const btnNuevoChatVolver = document.getElementById("chatRTNuevoChatVolver");
    if (btnNuevoChatVolver) btnNuevoChatVolver.onclick = () => chatRTMostrarVista("main");

    // Nuevo Contacto
    const btnNuevoContacto = document.getElementById("chatRTNuevoContactoBtn");
    if (btnNuevoContacto) btnNuevoContacto.onclick = () => {
      const input = document.getElementById("chatRTBuscarContactoInput");
      const resultado = document.getElementById("chatRTBuscarContactoResultado");
      if (input) input.value = "";
      if (resultado) { resultado.style.display = "none"; resultado.innerHTML = ""; }
      chatRTMostrarVista("nuevocontacto");
      if (input) input.focus();
    };

    // Volver desde Nuevo Contacto
    const btnNuevoContactoVolver = document.getElementById("chatRTNuevoContactoVolver");
    if (btnNuevoContactoVolver) btnNuevoContactoVolver.onclick = () => chatRTMostrarVista("nuevochat");

    // Buscar contacto
    const btnBuscarContacto = document.getElementById("chatRTBuscarContactoBtn");
    if (btnBuscarContacto) btnBuscarContacto.onclick = chatRTBuscarContacto;
    const inputBuscarContacto = document.getElementById("chatRTBuscarContactoInput");
    if (inputBuscarContacto) inputBuscarContacto.addEventListener("keydown", (e) => {
      if (e.key === "Enter") chatRTBuscarContacto();
    });

    // Nuevo Grupo (solo superadmin)
    const btnNuevoGrupo = document.getElementById("chatRTNuevoGrupoBtn");
    const btnNuevoGrupoSub = document.getElementById("chatRTNuevoGrupoSub");
    actualizarEstadoNuevoGrupo();

    // Volver desde Crear Grupo
    const btnCrearGrupoVolver = document.getElementById("chatRTCrearGrupoVolver");
    if (btnCrearGrupoVolver) btnCrearGrupoVolver.onclick = () => chatRTMostrarVista("nuevochat");
    // Crear grupo
    const btnCrearGrupo = document.getElementById("chatRTCrearGrupoBtn");
    if (btnCrearGrupo) btnCrearGrupo.onclick = chatRTCrearGrupo;
    // Foto grupo
    const btnGrupoFoto = document.getElementById("chatRTGrupoFotoBtn");
    if (btnGrupoFoto) btnGrupoFoto.onclick = () => {
      const fi = document.getElementById("chatRTGrupoFileInput");
      if (fi) fi.click();
    };
    const grupoFileInput = document.getElementById("chatRTGrupoFileInput");
    if (grupoFileInput) grupoFileInput.onchange = () => {
      const file = grupoFileInput.files && grupoFileInput.files[0];
      if (!file) return;
      if (file.size > 1048576) { chatRTMostrarSnackbar("La foto debe ser menor a 1MB."); return; }
      const reader = new FileReader();
      reader.onload = (ev) => {
        const preview = document.getElementById("chatRTGrupoFotoPreview");
        const icon = document.getElementById("chatRTGrupoFotoIcon");
        _chatRTGrupoFotoDataURL = ev.target.result;
        _chatRTGrupoFotoFile = file;
        if (preview) { preview.src = ev.target.result; preview.style.display = "block"; }
        if (icon) icon.style.display = "none";
      };
      reader.readAsDataURL(file);
      grupoFileInput.value = "";
    };
    // Info grupo volver
    const btnInfoGrupoVolver = document.getElementById("chatRTInfoGrupoVolver");
    if (btnInfoGrupoVolver) btnInfoGrupoVolver.onclick = () => {
      if (_chatRTInfoGrupoDesde === "chat") chatRTMostrarVista("chat");
      else chatRTMostrarVista("main");
    };
    // Volver desde perfil de usuario -> volver a la info del grupo
    const btnPerfilUsuarioVolver = document.getElementById("chatRTPerfilUsuarioVolver");
    if (btnPerfilUsuarioVolver) btnPerfilUsuarioVolver.onclick = () => {
      if (_chatRTVistaAnterior === "chat") chatRTMostrarVista("chat");
      else if (_chatRTVistaAnterior === "infogrupo" && _chatRTGrupoActivo) chatRTMostrarInfoGrupo(_chatRTGrupoActivo);
      else chatRTMostrarVista("main");
    };

    if (btnVolver) btnVolver.onclick = () => chatRTMostrarVista("menu");

    // Cerrar sesion desde perfil
    const btnLogout = document.getElementById("chatRTBtnLogout");
    if (btnLogout) btnLogout.onclick = chatRTCerrarSesion;

    // Guardar cambios de perfil
    const btnGuardar = document.getElementById("chatRTBtnGuardarPerfil");
    if (btnGuardar) btnGuardar.onclick = chatRTGuardarPerfil;
    const btnConfirmApply = document.getElementById("chatRTConfirmEditApply");
    const btnConfirmCancel = document.getElementById("chatRTConfirmEditCancel");
    if (btnConfirmApply) btnConfirmApply.onclick = chatRTAplicarCambiosPerfil;
    if (btnConfirmCancel) btnConfirmCancel.onclick = () => {
      const modal = document.getElementById("chatRTConfirmEditModal");
      if (modal) modal.style.display = "none";
    };

    // Ojo contrasena perfil
    const ojoPass = document.getElementById("chatRTOjoPass");
    if (ojoPass) ojoPass.onclick = () => {
      const inp = document.getElementById("chatRTCampoPass");
      if (!inp || inp.readOnly) return;
      const visible = inp.type === "text";
      inp.type = visible ? "password" : "text";
      ojoPass.innerHTML = visible
        ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'
        : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
    };

    // Cambiar foto
    if (fotoGrande) fotoGrande.onclick = chatRTCambiarFoto;
    chatRTConfigurarCrop();
    chatRTEscucharCampos();

    // Foto de registro: click en boton abre file input
    const regFotoBtn = document.getElementById("chatRTRegFotoBtn");
    const regFileInput = document.getElementById("chatRTRegFileInput");
    if (regFotoBtn && regFileInput) {
      regFotoBtn.onclick = () => regFileInput.click();
      regFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (!file) return;
        if (file.size > 1048576) {
          mostrarErrorRT("chatRTRegFotoError", "Maximo 1MB. Reduciendo...");
          setTimeout(() => ocultarErrorRT("chatRTRegFotoError"), 3000);
        }
        const reader = new FileReader();
        reader.onload = (ev) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement("canvas");
            let size = 200;
            let quality = 0.8;
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext("2d");
            const ratio = Math.max(size / img.width, size / img.height);
            const w = img.width * ratio;
            const h = img.height * ratio;
            ctx.drawImage(img, (size - w) / 2, (size - h) / 2, w, h);
            let dataURL = canvas.toDataURL("image/jpeg", quality);
            while (dataURL.length > 1398108 && quality > 0.1) {
              quality -= 0.1;
              dataURL = canvas.toDataURL("image/jpeg", quality);
            }
            _chatRTRegFotoDataURL = dataURL;
            // Guardar Blob comprimido para subir a Storage despues del registro
            canvas.toBlob((blob) => {
              _chatRTRegFotoFile = blob;
            }, "image/jpeg", quality);
            const preview = document.getElementById("chatRTRegFotoPreview");
            const icon = document.getElementById("chatRTRegFotoIcon");
            if (preview) { preview.src = dataURL; preview.style.display = "block"; }
            if (icon) icon.style.display = "none";
            regFotoBtn.style.borderStyle = "solid";
            regFotoBtn.style.borderColor = "#22c55e";
          };
          img.src = ev.target.result;
        };
        reader.readAsDataURL(file);
        regFileInput.value = "";
      });
    }

    // Cargar foto mini al iniciar
    const p = cargarPerfilRT();
    const fotoMini = document.getElementById("chatRTFotoMini");
    if (fotoMini) fotoMini.src = p.foto || _defaultPhoto;

    // Chat existente
    if (btnEnviarRT) {
      btnEnviarRT.onclick = () => {
        if (_chatRTChatGrupoActivo) chatRTEnviarMensajeGrupo();
        else if (chatRTChatActivo) chatRTEnviarMensajeRT();
        else chatRTEnviarMensaje();
      };
      btnEnviarRT.onmouseenter = () => { if (!btnEnviarRT.disabled) btnEnviarRT.style.transform = "translateY(-1px)"; };
      btnEnviarRT.onmouseleave = () => { btnEnviarRT.style.transform = "none"; };
    }

    if (chatRTInput) {
      let chatRTInputBaseH = 0;
      chatRTInput.addEventListener("input", () => {
        if (chatRTInputBaseH <= 0) chatRTInputBaseH = chatRTInput.offsetHeight;
        chatRTInput.style.height = "auto";
        const nuevo = chatRTInput.scrollHeight;
        if (nuevo > chatRTInputBaseH + 4) {
          chatRTInput.style.height = Math.min(nuevo, 100) + "px";
        }
        if (btnEnviarRT) btnEnviarRT.disabled = !chatRTInput.value.trim();
        if (chatRTChatActivo) chatRTOnTypingInput();
      });
      chatRTInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          if (_chatRTChatGrupoActivo) chatRTEnviarMensajeGrupo();
          else if (chatRTChatActivo) chatRTEnviarMensajeRT();
          else chatRTEnviarMensaje();
        }
      });
      chatRTInput.onfocus = () => { chatRTInput.style.borderColor = "#2563eb"; };
      chatRTInput.onblur = () => { chatRTInput.style.borderColor = "#222"; };
    }

    // Boton emoji: abrir/cerrar panel
    const chatRTEmojiBtn = document.getElementById("chatRTEmojiBtn");
    if (chatRTEmojiBtn) chatRTEmojiBtn.onclick = () => chatRTEmojiToggle();

    // Boton cerrar responder
    const chatRTReplyCerrar = document.getElementById("chatRTReplyCerrar");
    if (chatRTReplyCerrar) chatRTReplyCerrar.onclick = () => chatRTCerrarResponder();

    // Scroll del panel emoji: sincronizar pestaña activa
    const chatRTEmojiScroll = document.getElementById("chatRTEmojiScroll");
    if (chatRTEmojiScroll) {
      chatRTEmojiScroll.addEventListener("scroll", () => {
        if (!_chatRTEmojiAbierto) return;
        const secciones = chatRTEmojiScroll.querySelectorAll(".chatRTEmojiCategoria");
        let activa = "recientes";
        for (const sec of secciones) {
          const topSec = sec.offsetTop;
          if (chatRTEmojiScroll.scrollTop >= topSec - 30) activa = sec.getAttribute("data-cat");
          else break;
        }
        if (activa !== _chatRTEmojiCategoriaActiva) {
          _chatRTEmojiCategoriaActiva = activa;
          chatRTEmojiRenderTabs();
        }
      });
    }

    // Scroll hacia arriba: cargar mensajes anteriores (carga progresiva)
    const chatRTMsgsEl = document.getElementById("chatRTMensajes");
    if (chatRTMsgsEl) {
      chatRTMsgsEl.addEventListener("scroll", () => {
        if (chatRTMsgsEl.scrollTop <= 20) {
          if (_chatRTChatGrupoActivo) { chatRTCargarMensajesGrupoViejos(); return; }
          if (chatRTChatActivo && !chatRTCargandoViejos && chatRTHayMas) chatRTCargarMensajesViejos();
        }
      });
    }

    // Resize handle
    const resizeHandleRT = document.getElementById("chatRTRResizeHandle");
    if (resizeHandleRT) {
      let resizing = false, startX, startW;
      resizeHandleRT.addEventListener("mousedown", (e) => {
        resizing = true;
        startX = e.clientX;
        startW = chatRTOverlay.offsetWidth;
        document.body.style.cursor = "ew-resize";
        document.body.style.userSelect = "none";
        resizeHandleRT.style.background = "#2563eb";
        e.preventDefault();
      });
      document.addEventListener("mousemove", (e) => {
        if (!resizing) return;
        const diff = startX - e.clientX;
        const newW = Math.max(280, Math.min(700, startW + diff));
        chatRTOverlay.style.width = newW + "px";
        chatRTReconstruirConectores();
      });
      document.addEventListener("mouseup", () => {
        if (!resizing) return;
        resizing = false;
        document.body.style.cursor = "";
        document.body.style.userSelect = "";
        resizeHandleRT.style.background = "";
      });
      resizeHandleRT.addEventListener("mouseenter", () => { if (!resizing) resizeHandleRT.style.background = "rgba(37,99,235,0.3)"; });
      resizeHandleRT.addEventListener("mouseleave", () => { if (!resizing) resizeHandleRT.style.background = ""; });
    }

    // Focus campos de perfil
    document.querySelectorAll("#chatRTVistaPerfil input").forEach(inp => {
      inp.addEventListener("focus", () => { inp.style.borderColor = "#2563eb"; });
      inp.addEventListener("blur", () => { inp.style.borderColor = "#222"; });
    });
  }, 100);

  botonChatRT.addEventListener("click", () => {
    if (chatRTOverlay.style.display === "flex") {
      ocultarChatRT();
    } else {
      mostrarChatRT();
    }
  });

  // Actualizar contador cuando se marcan notificaciones como leídas
  const marcarTodasLeidasOriginal = marcarTodasLeidas;
  marcarTodasLeidas = function () {
    marcarTodasLeidasOriginal();
    actualizarContadorNotificaciones();
  };

  // Modificar la función mostrarNotificaciones para actualizar contador
  const mostrarNotificacionesOriginal = mostrarNotificaciones;
  mostrarNotificaciones = function () {
    mostrarNotificacionesOriginal();
    botonNotificaciones.style.display = "none";
    botonChatRT.style.display = "none";
    botonIA.style.display = "none";
  };

  // Modificar la función ocultarNotificaciones para mostrar botón nuevamente
  const ocultarNotificacionesOriginal = ocultarNotificaciones;
  ocultarNotificaciones = function () {
    ocultarNotificacionesOriginal();
    setTimeout(() => {
      botonNotificaciones.style.display = "flex";
      botonChatRT.style.display = "flex";
      botonIA.style.display = "flex";
      actualizarContadorNotificaciones();
    }, 300);
  };


})();

