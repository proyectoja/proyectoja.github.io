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
      descripcion: "Querida comunidad, queremos compartirles algo con total transparencia y respeto. Por el momento, las actualizaciones quedar�n en pausa hasta alcanzar las 100 suscripciones activas. Este proyecto se mantiene gracias al apoyo real de quienes creen en �l. Cada mejora, correcci�n y nueva funci�n requiere tiempo, recursos y compromiso, y llegar a esa meta nos permitir� seguir avanzando con la calidad y dedicaci�n que ustedes merecen. No es una despedida, es una pausa consciente. Una invitaci�n a reflexionar, a valorar el trabajo detr�s de cada actualizaci�n y, si este proyecto ha sido de bendici�n para ti, a considerar apoyarlo para que pueda seguir creciendo. Gracias por estar, por usarlo y por creer. Con su apoyo, esto no se detiene� se fortalece",
      fecha: "2026-01-14",
      categoria: "anuncio",
      leida: false,
    },
    {
      id: 2,
      imagen: "//proyectoja.github.io/promocionUno.png",
      titulo: "PROMOCI�N EN NUESTRAS REDES SOCIALES",
      descripcion:
        "Puedes ir a nuestra p�gina de Facebook y encontrar la informaci�n de nuestra promoci�n para obtener un c�digo premium durante un a�o.",
      fecha: "2026-01-01",
      categoria: "promocion",
      leida: false,
    },
    {
      id: 1,
      titulo: "Recordatorio de actualizaci�n",
      descripcion:
        "Mant�n tu aplicaci�n actualizada para disfrutar de todas las funciones y correcciones de seguridad. Este software est� en constante actualizaci�n, cada semana se actualiza para mejorar la estabilizaci�n, optimizaci�n, dise�o, caracter�sticas y funcionalidades potentes. No es un error que te llegue actualizaciones, es bueno que te lleguen, y puedas actualizar a la �ltima versi�n siempre.",
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
        // Combinar con las notificaciones base, manteniendo el estado le�do
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

  // Funci�n para mostrar notificaciones
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

  // Funci�n para ocultar notificaciones
  function ocultarNotificaciones() {
    notificacionesOverlay.style.animation = "notifSlideOut 0.2s ease-in";
    setTimeout(() => {
      notificacionesOverlay.style.display = "none";
    }, 200);
  }

  // Funci�n para marcar todas como le�das
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

  // Agregar estilos de animaci�n
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

  // Mostrar notificaciones autom�ticamente despu�s de 60 segundos (1 minuto) SOLO si hay no le�das
  setTimeout(() => {
    const hayNoLeidas = notificaciones.some((n) => !n.leida);
    if (hayNoLeidas) {
      mostrarNotificaciones();
    }
  }, 60000);

  // Crear bot�n flotante para abrir notificaciones manualmente
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

  // Crear bot�n flotante de IA
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
    if (/[�ѿ�]/.test(texto)) return "espa�ol";
    const t = texto.toLowerCase();
    const ptsEsp = (t.match(/\b(el|la|los|las|que|por|para|hola|gracias|muy|pero|porque|entonces|eres|somos|soy|d�as|se�or|mundo|dios|iglesia|fe|amor|paz|biblia|familia|trabajo|escuela|amigo|tiempo|hoy|ma�ana|ayer|semana|a�o|si|no|ya|bien|mal|m�s|todo|nada|algo|otro|cuando|donde|como|quien|este|esta|estos|estas|ese|esa|esos|esas|nuestro|nuestra|yo|t�|�l|ella|usted|nosotros|ellos|ellas|me|te|se|nos|lo|la|le|los|las|les|mi|tu|su|mis|tus|sus|vamos|voy|vas|va|van)\b/g) || []).length;
    const ptsEng = (t.match(/\b(the|a|an|and|or|for|with|hello|hi|thanks|you|please|help|what|where|when|why|how|who|which|this|that|these|those|is|am|are|was|were|have|has|had|do|does|did|will|would|can|could|god|jesus|lord|bible|faith|love|hope|peace|church|life|time|today|tomorrow|yes|no|not|very|just|good|bad|big|small|new|old|great|more|most|other|here|there|in|out|on|off|over|under|before|after|from|about|because|while|then|than)\b/g) || []).length;
    if (ptsEsp > ptsEng && ptsEsp > 0) return "espa�ol";
    if (ptsEng > ptsEsp && ptsEng > 0) return "ingl�s";
    if (ptsEsp > 0) return "espa�ol";
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
    if (idioma === "ingl�s") {
      instruccionIdioma = "\nRESPOND EXACTLY IN ENGLISH. Do not translate.";
    } else if (idioma === "espa�ol") {
      instruccionIdioma = "\nRESPONDE EXACTAMENTE EN ESPA�OL. NO traduzcas.";
    }

    const sistema = idioma === "ingl�s"
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
  chatRTOverlay.innerHTML = `
    <div id="chatRTRResizeHandle" style="position:absolute;left:0;top:0;width:5px;height:100%;cursor:ew-resize;z-index:10;transition:background 0.15s;"></div>
    <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:#111;border-bottom:1px solid #1a1a1a;">
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="width:28px;height:28px;border-radius:8px;background:#2563eb;display:flex;align-items:center;justify-content:center;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <div>
          <div style="font-size:13px;font-weight:700;color:#fff;">Conexan</div>
          <div style="font-size:10px;color:#666;">Comunicacion directa</div>
        </div>
      </div>
      <button id="cerrarChatRT" style="background:none;border:1px solid #333;color:#888;width:24px;height:24px;border-radius:4px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;transition:all 0.15s ease;line-height:1;">X</button>
    </div>
    <div id="chatRTMensajes" style="flex:1;overflow-y:auto;padding:10px;display:flex;flex-direction:column;position:relative;"></div>
    <div style="padding:10px;border-top:1px solid #1a1a1a;background:#111;">
      <div style="display:flex;gap:8px;align-items:flex-end;">
        <textarea id="chatRTInput" rows="1" placeholder="Escribe tu mensaje..." style="flex:1;background:#161616;border:1px solid #222;color:#e8edf9;font-family:inherit;font-size:13px;line-height:1.5;padding:8px 12px;border-radius:8px;resize:none;max-height:100px;outline:none;transition:border-color 0.2s;"></textarea>
        <button id="chatRTEnviar" style="width:36px;height:36px;border:none;border-radius:8px;background:#2563eb;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all 0.15s ease;" disabled>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/></svg>
        </button>
      </div>
      <div style="text-align:center;color:#444;font-size:10px;margin-top:6px;">Enter para enviar - Shift+Enter nueva linea</div>
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
    const chatRTMensajes = document.getElementById("chatRTMensajes");
    if (chatRTMensajes) chatRTMensajes.scrollTop = chatRTMensajes.scrollHeight;
    setTimeout(() => {
      chatRTReconstruirConectores();
      const inp = document.getElementById("chatRTInput");
      if (inp) inp.focus();
    }, 300);
  }

  function ocultarChatRT() {
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
      const items = chatRTMensajes.querySelectorAll(selector);
      if (items.length < 2) { linea.style.display = "none"; return; }
      linea.style.display = "";
      const avFirst = items[0].children[0].children[0];
      const avLast = items[items.length - 1].children[0].children[0];
      if (!avFirst || !avLast) { linea.style.display = "none"; return; }
      const pFirst = offsetHasta(avFirst, chatRTMensajes);
      const pLast = offsetHasta(avLast, chatRTMensajes);
      linea.style.left = (pFirst.left + 14) + "px";
      linea.style.top = (pFirst.top + 14) + "px";
      linea.style.height = Math.max(0, (pLast.top + 14) - (pFirst.top + 14)) + "px";
    }
    dibujarLinea("chatRTThreadLine", '[data-role="rt-usuario"]');
    dibujarLinea("chatRTThreadLineOtro", '[data-role="rt-otro"]');
  }

  function chatRTAgregarMensaje(rol, texto) {
    const chatRTMensajes = document.getElementById("chatRTMensajes");
    if (!chatRTMensajes) return;
    const esUsuario = rol === "usuario";

    const wrapper = document.createElement("div");
    wrapper.style.cssText = "padding:3px 0;animation:chatEntrar 0.2s ease;position:relative;width:100%;";
    if (esUsuario) wrapper.setAttribute("data-role", "rt-usuario");
    else wrapper.setAttribute("data-role", "rt-otro");

    const row = document.createElement("div");
    row.style.cssText = "display:flex;gap:8px;max-width:92%;position:relative;" + (esUsuario ? "margin-left:auto;flex-direction:row-reverse;" : "");

    const avatarSvg = esUsuario
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.8"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';

    const avatarBg = esUsuario ? "background:#161620;border:1px solid #222233;" : "background:#2563eb;";
    const burbujaBg = esUsuario ? "background:#1a1a2e;border:1px solid #252540;border-top-right-radius:4px;color:#ccc;" : "background:#111118;border:1px solid #1a1a24;border-top-left-radius:4px;color:#ccc;";

    const textoRenderizado = "<em>" + chatRTParsearMarkdown(texto) + "</em>";

    const conectorPosRT = esUsuario ? "right:30px;" : "left:28px;";
    const conectorHTMLRT = '<div style="position:absolute;top:14px;' + conectorPosRT + 'width:8px;height:1px;background:#222233;pointer-events:none;"></div>';
    row.innerHTML = '<div style="width:28px;height:28px;border-radius:8px;flex-shrink:0;display:flex;align-items:center;justify-content:center;' + avatarBg + '">' + avatarSvg + '</div>' + conectorHTMLRT + '<div style="padding:9px 13px;border-radius:12px;font-size:13px;line-height:1.5;overflow-wrap:break-word;white-space:normal;max-width:calc(100vw - 120px);' + burbujaBg + '">' + textoRenderizado + '</div>';

    wrapper.appendChild(row);
    chatRTMensajes.appendChild(wrapper);
    chatRTMensajes.scrollTop = chatRTMensajes.scrollHeight;
    chatRTReconstruirConectores();
  }

  function chatRTMostrarTyping() {
    const chatRTMensajes = document.getElementById("chatRTMensajes");
    if (!chatRTMensajes) return;
    const div = document.createElement("div");
    div.id = "chatRTTyping";
    div.style.cssText = "display:flex;gap:8px;align-self:flex-start;animation:chatEntrar 0.2s ease;";
    div.innerHTML = '<div style="width:28px;height:28px;border-radius:8px;background:#2563eb;flex-shrink:0;display:flex;align-items:center;justify-content:center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><div style="display:flex;align-items:center;gap:6px;color:#555;font-size:12px;">Escribiendo<span style="display:inline-flex;gap:3px;"><span style="width:5px;height:5px;border-radius:50%;background:#2563eb;animation:chatPulse 1.2s infinite ease-in-out;"></span><span style="width:5px;height:5px;border-radius:50%;background:#2563eb;animation:chatPulse 1.2s 0.15s infinite ease-in-out;"></span><span style="width:5px;height:5px;border-radius:50%;background:#2563eb;animation:chatPulse 1.2s 0.3s infinite ease-in-out;"></span></span></div>';
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
    chatRTAgregarMensaje("usuario", texto);
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
    const btnEnviarRT = document.getElementById("chatRTEnviar");
    const chatRTInput = document.getElementById("chatRTInput");

    if (btnCerrarRT) btnCerrarRT.onclick = ocultarChatRT;

    if (btnEnviarRT) {
      btnEnviarRT.onclick = chatRTEnviarMensaje;
      btnEnviarRT.onmouseenter = () => { if (!btnEnviarRT.disabled) btnEnviarRT.style.transform = "translateY(-1px)"; };
      btnEnviarRT.onmouseleave = () => { btnEnviarRT.style.transform = "none"; };
    }

    if (chatRTInput) {
      chatRTInput.addEventListener("input", () => {
        chatRTInput.style.height = "auto";
        chatRTInput.style.height = Math.min(chatRTInput.scrollHeight, 100) + "px";
        if (btnEnviarRT) btnEnviarRT.disabled = !chatRTInput.value.trim();
      });
      chatRTInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          chatRTEnviarMensaje();
        }
      });
      chatRTInput.onfocus = () => { chatRTInput.style.borderColor = "#2563eb"; };
      chatRTInput.onblur = () => { chatRTInput.style.borderColor = "#222"; };
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
  }, 100);

  botonChatRT.addEventListener("click", () => {
    if (chatRTOverlay.style.display === "flex") {
      ocultarChatRT();
    } else {
      mostrarChatRT();
    }
  });

  // Actualizar contador cuando se marcan notificaciones como le�das
  const marcarTodasLeidasOriginal = marcarTodasLeidas;
  marcarTodasLeidas = function () {
    marcarTodasLeidasOriginal();
    actualizarContadorNotificaciones();
  };

  // Modificar la funci�n mostrarNotificaciones para actualizar contador
  const mostrarNotificacionesOriginal = mostrarNotificaciones;
  mostrarNotificaciones = function () {
    mostrarNotificacionesOriginal();
    botonNotificaciones.style.display = "none";
    botonChatRT.style.display = "none";
    botonIA.style.display = "none";
  };

  // Modificar la funci�n ocultarNotificaciones para mostrar bot�n nuevamente
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

