(async function () {
  let intervaloVerificacion = null;

  // ============================
  // OVERLAY DE BLOQUEO
  // ============================
  const overlay = document.createElement("div");
  overlay.id = "bloqueo-actualizacion";
  overlay.style.cssText = `
      position: fixed;
      inset: 0;
      background: #000000e0;
      color: white;
      z-index: 9999999;
      display: none;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: sans-serif;
      text-align: center;
      padding: 20px;
  `;
  overlay.innerHTML = `
      <h1 style="font-size: 38px; margin-bottom: 15px;">Actualización requerida</h1>
      <p style="font-size: 22px; max-width: 650px;">
          Esta versión del Himnario Adventista PRO está desactualizada.<br>
          Debes actualizar para continuar usando la aplicación.
      </p>
      <button id="btnActualizarHimnario" style="
          margin-top: 30px;
          padding: 14px 30px;
          font-size: 20px;
          border: none;
          border-radius: 14px;
          cursor: pointer;
      ">
          Actualizar ahora
      </button>
  `;
  document.body.appendChild(overlay);

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
      descripcion: "Querida comunidad, queremos compartirles algo con total transparencia y respeto. Por el momento, las actualizaciones quedarán en pausa hasta alcanzar las 100 suscripciones activas. Este proyecto se mantiene gracias al apoyo real de quienes creen en él. Cada mejora, corrección y nueva función requiere tiempo, recursos y compromiso, y llegar a esa meta nos permitirá seguir avanzando con la calidad y dedicación que ustedes merecen. No es una despedida, es una pausa consciente. Una invitación a reflexionar, a valorar el trabajo detrás de cada actualización y, si este proyecto ha sido de bendición para ti, a considerar apoyarlo para que pueda seguir creciendo. Gracias por estar, por usarlo y por creer. Con su apoyo, esto no se detiene… se fortalece",
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
        "Mantén tu aplicación actualizada para disfrutar de todas las funciones y correcciones de seguridad. Este software está en constante actualización, cada semana se actualiza para mejorar la estabilización, optimización, diseño, características y funcionalidades potentes. No es un error que te llegue actualizaciones, es bueno que te lleguen, y puedas actualizar a la última versión siempre.",
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
  //  SISTEMA DE VERIFICACIÓN LOCAL
  // ============================
  function marcarVerificado() {
    localStorage.setItem("HIMNARIO_VERIFICADO", "true");
  }

  function estaVerificadoAntes() {
    return localStorage.getItem("HIMNARIO_VERIFICADO") === "true";
  }

  // ============================
  //  OBTENER VERSIÓN LOCAL REAL
  // ============================
  function obtenerVersionLocal() {
    // Primero intentar obtener de window.__APP_VERSION__ (versiones nuevas)
    if (window.__APP_VERSION__) {
      return window.__APP_VERSION__;
    }

    // Intentar extraer del título de la página (versiones intermedias)
    const titulo = document.title;
    const match = titulo.match(/v(\d+\.\d+\.\d+)/);
    if (match) {
      return match[1];
    }

    // Si no se encuentra en el título, es una versión MUY antigua
    // que no tenía sistema de versiones (versiones anteriores a 1.0.0)
    // Estas versiones serán bloqueadas automáticamente
    console.warn(" Versión antigua detectada - Sin sistema de versiones");
    return "0.0.0"; // Versión mínima para forzar bloqueo
  }

  // ============================
  //  OBTENER VERSIÓN REMOTA DESDE GITHUB
  // ============================
  async function obtenerVersionRemota() {
    try {
      const res = await fetch(
        "https://api.github.com/repos/proyectoja/HimnarioApp/releases/latest",
        { cache: "no-store" }
      );

      if (!res.ok) throw new Error(" No se pudo leer el release de GitHub");

      const data = await res.json();

      let ver = data.tag_name;
      if (!ver) return null;

      ver = ver.replace(/^v/i, "");
      return ver;
    } catch (err) {
      console.warn(" Error obteniendo versión remota desde GitHub:", err);
      return "SIN_INTERNET";
    }
  }

  // ============================
  //  COMPARADOR DE VERSIONES
  // ============================
  function esMayorVersion(local, remota) {
    const a = local.split(".").map(Number);
    const b = remota.split(".").map(Number);

    for (let i = 0; i < 3; i++) {
      if ((a[i] || 0) < (b[i] || 0)) return true;
      if ((a[i] || 0) > (b[i] || 0)) return false;
    }
    return false;
  }

  // ============================
  //  BLOQUEAR APLICACIÓN
  // ============================
  function bloquearApp() {
    const principal = document.querySelector(".contenedor-principal");
    if (principal) principal.style.display = "none";
    overlay.style.display = "flex";
  }

  // ============================
  //  VERIFICAR VERSIÓN
  // ============================
  async function verificarVersion() {
    const local = obtenerVersionLocal();
    const remota = await obtenerVersionRemota();

    // ============================================
    //  VERSIÓN LOCAL INVÁLIDA O ANTIGUA (Validar esto PRIMERO para evitar crash)
    // ============================================
    if (!local || local === "0.0.0") {
      bloquearApp();

      let mensaje = "VERSIÓN ANTIGUA DETECTADA\n\n";

      if (local === "0.0.0") {
        mensaje +=
          "Esta es una versión MUY antigua del Himnario Adventista PRO\n";
        mensaje += "que no tiene sistema de versiones incorporado.\n\n";
      } else {
        mensaje += "No se pudo detectar la versión de la aplicación.\n\n";
      }

      mensaje += "Título de la página: " + document.title + "\n";
      mensaje += "Versión detectada: " + (local || "NO DETECTADA") + "\n";
      mensaje +=
        "Versión remota disponible: " + (remota || "NO DISPONIBLE") + "\n\n";
      mensaje += "Debes actualizar a la versión más reciente para continuar.";

      alert(mensaje);
      return;
    }

    // ============================================
    //  BLOQUEAR SI ES MENOR QUE 1.0.69
    // ============================================
    const versionMinima = "1.0.69";
    if (esMayorVersion(local, versionMinima)) {
      bloquearApp();
      console.warn("Versión local inferior a la mínima permitida:", local);
      return;
    }

    // ============================================
    //  SIN INTERNET
    // ============================================
    if (remota === "SIN_INTERNET") {
      if (estaVerificadoAntes()) {
        // Ya verificó antes → ahora requiere internet
        bloquearApp();
        console.warn(
          "Bloqueado: Usuario quitó el internet después de validar."
        );
      } else {
        console.log("Primera ejecución sin internet — permitido.");
      }
      return;
    }

    // ============================================
    //  REMOTA ES MAYOR — bloquear
    // ============================================
    if (esMayorVersion(local, remota)) {
      bloquearApp();
      alert(
        "DEPURACIÓN DE VERSIÓN\n\n" +
          "Título detectado: " +
          document.title +
          "\nVersión local: " +
          local +
          "\nVersión remota: " +
          remota
      );
      return;
    }

    // ============================================
    //  VERIFICACIÓN EXITOSA
    // ============================================
    marcarVerificado();
    console.log(" Versión correcta — deteniendo verificaciones");
    clearInterval(intervaloVerificacion);
  }

  // ============================
  //  BOTÓN DESCARGAR UPDATE
  // ============================
  setTimeout(() => {
    const btn = document.getElementById("btnActualizarHimnario");
    if (btn) {
      btn.onclick = () => {
        descargarInstalador();
      };
    }
  }, 100);

  async function descargarInstalador() {
    try {
      const res = await fetch(
        "https://api.github.com/repos/proyectoja/HimnarioApp/releases/latest",
        { cache: "no-store" }
      );

      if (!res.ok) throw new Error("No se pudo leer el release");

      const data = await res.json();
      const plataforma = navigator.userAgent.toLowerCase();

      let extensionBuscada = "";

      if (plataforma.includes("win")) {
        extensionBuscada = ".exe";
      } else if (plataforma.includes("mac") || plataforma.includes("os x")) {
        extensionBuscada = ".dmg";
      } else if (plataforma.includes("linux")) {
        extensionBuscada = ".AppImage";
      } else {
        alert("No se pudo detectar tu sistema operativo.");
        return;
      }

      const asset = data.assets?.find((a) => a.name.endsWith(extensionBuscada));

      if (!asset) {
        alert(
          "No existe un instalador para tu sistema operativo.\n" +
            "Buscado: " +
            extensionBuscada
        );
        return;
      }

      window.location.href = asset.browser_download_url;
    } catch (err) {
      console.error(err);
      alert("Error al intentar descargar el instalador.");
    }
  }

  // ============================
  //  SISTEMA DE CHAT IA (Vercel Backend)
  // ============================
  const CHAT_API_URL = "/api/chat";
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
    if (/[ñÑ¿¡]/.test(texto)) return "español";
    const t = texto.toLowerCase();
    const ptsEsp = (t.match(/\b(el|la|los|las|que|por|para|hola|gracias|muy|pero|porque|entonces|eres|somos|soy|días|señor|mundo|dios|iglesia|fe|amor|paz|biblia|familia|trabajo|escuela|amigo|tiempo|hoy|mañana|ayer|semana|año|si|no|ya|bien|mal|más|todo|nada|algo|otro|cuando|donde|como|quien|este|esta|estos|estas|ese|esa|esos|esas|nuestro|nuestra|yo|tú|él|ella|usted|nosotros|ellos|ellas|me|te|se|nos|lo|la|le|los|las|les|mi|tu|su|mis|tus|sus|vamos|voy|vas|va|van)\b/g) || []).length;
    const ptsEng = (t.match(/\b(the|a|an|and|or|for|with|hello|hi|thanks|you|please|help|what|where|when|why|how|who|which|this|that|these|those|is|am|are|was|were|have|has|had|do|does|did|will|would|can|could|god|jesus|lord|bible|faith|love|hope|peace|church|life|time|today|tomorrow|yes|no|not|very|just|good|bad|big|small|new|old|great|more|most|other|here|there|in|out|on|off|over|under|before|after|from|about|because|while|then|than)\b/g) || []).length;
    if (ptsEsp > ptsEng && ptsEsp > 0) return "español";
    if (ptsEng > ptsEsp && ptsEng > 0) return "inglés";
    if (ptsEsp > 0) return "español";
    return null;
  }

  async function llamarGroq(mensajes) {
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
      ? "You are a helpful assistant for Himnario Adventista PRO and Arcan Player projects. Be direct, natural, friendly. Never use vulgar words." + instruccionIdioma
      : "Eres un asistente del Himnario Adventista PRO y Arcan Player. Habla directo, natural, con buena onda. Nunca uses palabras vulgares." + instruccionIdioma;

    const mensajes = construirMensajes(chatSession, textoDetectar, sistema);

    const resultado = await llamarGroq(mensajes);

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
    <div style="display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:#111;border-bottom:1px solid #1a1a1a;">
      <div style="display:flex;align-items:center;gap:10px;">
        <div style="width:28px;height:28px;border-radius:8px;background:#c05a35;display:flex;align-items:center;justify-content:center;">
          <svg width="16" height="16" viewBox="0 0 256 208" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M205.28,31.36 C219.376,46.24 225.296,66.56 227.792,95.04 C234.417867,95.04 240.5968,96.5093333 244.768,102.192 L252.56,112.752 C254.8,115.792 256,119.424 256,123.2 L256,151.888 C255.992,155.592267 254.1568,159.203467 251.168,161.392 C215.885333,187.222133 172.3496,208 128,208 C78.9344,208 29.8098667,179.726667 4.832,161.392 C1.84330667,159.203467 0.00722666667,155.592267 0,151.888 L0,123.2 C0,119.424 1.2,115.776 3.424,112.736 L11.216,102.192 C15.3891733,96.5349333 21.5953067,95.04 28.208,95.04 C30.704,66.56 36.608,46.24 50.72,31.36 C77.3312,3.1648 112.56728,0.06016 127.552142,0.00088672 L128,0 C142.72,0 178.4,2.88 205.28,31.36 Z M128.016,78.736 C124.976,78.736 121.472,78.912 117.744,79.28 C116.432,84.176 114.496,88.592 111.664,91.408 C100.464,102.608 86.96,104.336 79.728,104.336 C72.9258667,104.336 65.8005333,102.915733 59.984,99.248 C54.4816,101.056 49.1978667,103.6632 48.848,110.16 C48.2621333,122.440533 48.2112,134.709333 48.1602667,146.984 C48.1336,153.144533 48.1093333,159.3064 48.016,165.472 C48.04,169.050667 50.1978667,172.3752 53.456,173.856 C79.936,185.92 104.976,192 128.016,192 C151.024,192 176.064,185.92 202.528,173.856 C205.786133,172.3752 207.9432,169.050667 207.968,165.472 C208.285333,147.0536 208.029867,128.560267 207.152,110.16 C206.826133,103.625867 201.520267,101.061867 196,99.248 C190.179467,102.899733 183.072533,104.336 176.272,104.336 C169.04,104.336 155.552,102.608 144.336,91.408 C141.504,88.592 139.568,84.176 138.256,79.28 C134.853333,78.9338667 131.436,78.7525333 128.016,78.736 Z M101.074933,122.666667 C106.8232,122.666667 111.4832,127.326667 111.4832,133.074933 L111.4832,152.2584 C111.4832,158.006667 106.8232,162.666667 101.074933,162.666667 C95.3266667,162.666667 90.6666667,158.006667 90.6666667,152.2584 L90.6666667,133.074933 C90.6666667,127.326667 95.3266667,122.666667 101.074933,122.666667 Z M154.408267,122.666667 C160.156533,122.666667 164.816533,127.326667 164.816533,133.074933 L164.816533,152.2584 C164.816533,158.006667 160.156533,162.666667 154.408267,162.666667 C148.66,162.666667 144,158.006667 144,152.2584 L144,133.074933 C144,127.326667 148.66,122.666667 154.408267,122.666667 Z M81.44,28.32 C70.24,29.44 60.8,33.12 56,38.24 C45.6,49.6 47.84,78.4 53.76,84.48 C58.08,88.8 66.24,91.68 75.04,91.68 C81.76,91.68 94.56,90.24 105.12,79.52 C109.76,75.04 112.64,63.84 112.32,52.48 C112,43.36 109.44,35.84 105.6,32.64 C101.44,28.96 92,27.36 81.44,28.32 Z M150.4,32.64 C146.56,35.84 144,43.36 143.68,52.48 C143.36,63.84 146.24,75.04 150.88,79.52 C161.44,90.24 174.24,91.68 180.96,91.68 C189.76,91.68 197.92,88.8 202.24,84.48 C208.16,78.4 210.4,49.6 200,38.24 C195.2,33.12 185.76,29.44 174.56,28.32 C164,27.36 154.56,28.96 150.4,32.64 Z M128,56 C125.44,56 122.4,56.16 119.04,56.48 C119.36,58.24 119.52,60.16 119.68,62.24 C119.68,63.68 119.68,65.12 119.52,66.72 C122.72,66.4 125.44,66.4 128,66.4 C130.559733,66.4 133.28,66.4 136.48,66.72 C136.32,65.12 136.32,63.68 136.32,62.24 C136.48,60.16 136.64,58.24 136.96,56.48 C133.6,56.16 130.56,56 128,56 Z" fill="#fff"/></svg>
        </div>
        <div>
          <div style="font-size:13px;font-weight:700;color:#fff;">Arcan IA</div>
          <div style="font-size:10px;color:#666;">Asistente</div>
        </div>
      </div>
      <button id="cerrarChatIA" style="background:none;border:1px solid #333;color:#888;width:24px;height:24px;border-radius:4px;cursor:pointer;font-size:14px;display:flex;align-items:center;justify-content:center;transition:all 0.15s ease;line-height:1;">X</button>
    </div>
    <div id="chatMensajes" style="flex:1;overflow-y:auto;padding:10px;display:flex;flex-direction:column;gap:8px;"></div>
    <div style="padding:10px;border-top:1px solid #1a1a1a;background:#111;">
      <div style="display:flex;gap:8px;align-items:flex-end;">
        <textarea id="chatInput" rows="1" placeholder="Escribe tu mensaje..." style="flex:1;background:#161616;border:1px solid #222;color:#e8edf9;font-family:inherit;font-size:13px;line-height:1.5;padding:8px 12px;border-radius:8px;resize:none;max-height:100px;outline:none;transition:border-color 0.2s;"></textarea>
        <button id="chatEnviar" style="width:36px;height:36px;border:none;border-radius:8px;background:#c05a35;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:all 0.15s ease;" disabled>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/></svg>
        </button>
      </div>
      <div style="text-align:center;color:#444;font-size:10px;margin-top:6px;">Enter para enviar - Shift+Enter nueva linea</div>
    </div>
  `;
  document.body.appendChild(chatOverlay);

  function mostrarChat() {
    chatUltimoRol = null;
    chatOverlay.style.display = "flex";
    chatOverlay.style.animation = "notifSlideIn 0.25s ease-out";
    botonIA.style.display = "none";
    botonNotificaciones.style.display = "none";
    const chatMensajes = document.getElementById("chatMensajes");
    if (chatMensajes) chatMensajes.scrollTop = chatMensajes.scrollHeight;
    setTimeout(() => {
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
    }, 200);
  }

  let chatUltimoRol = null;

  function chatAgregarMensaje(rol, texto) {
    const chatMensajes = document.getElementById("chatMensajes");
    if (!chatMensajes) return;
    const esUsuario = rol === "usuario";
    const esMismoRol = chatUltimoRol === rol;
    chatUltimoRol = rol;

    const div = document.createElement("div");
    div.style.cssText = "display:flex;gap:8px;max-width:92%;animation:chatEntrar 0.2s ease;" + (esUsuario ? "align-self:flex-end;flex-direction:row-reverse;" : "align-self:flex-start;");

    const avatarSvg = esUsuario
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#666" stroke-width="1.8"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ddd" stroke-width="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-1.9-5.3 8.5 8.5 0 0 1 8.5-8.5 8.38 8.38 0 0 1 8.5 8.5z"/><path d="M12 8v4"/><path d="M10 10h4"/></svg>';

    const avatarBg = esUsuario ? "background:#161620;border:1px solid #222233;" : "background:#c05a35;";
    const burbujaBg = esUsuario ? "background:#1a1a2e;border:1px solid #252540;border-top-right-radius:4px;color:#ccc;" : "background:#111118;border:1px solid #1a1a24;border-top-left-radius:4px;color:#ccc;";

    let connector = "";
    if (esMismoRol) {
      const side = esUsuario ? "right:14px;" : "left:14px;";
      connector = '<div style="position:absolute;' + side + 'top:-8px;width:1px;height:8px;background:#222233;"></div>';
    }

    div.innerHTML = '<div style="position:relative;">' + connector + '<div style="width:28px;height:28px;border-radius:8px;flex-shrink:0;display:flex;align-items:center;justify-content:center;' + avatarBg + '">' + avatarSvg + '</div></div><div style="padding:9px 13px;border-radius:12px;font-size:13px;line-height:1.5;word-break:break-word;white-space:pre-wrap;max-width:280px;' + burbujaBg + '">' + texto + '</div>';
    chatMensajes.appendChild(div);
    chatMensajes.scrollTop = chatMensajes.scrollHeight;
  }

  function chatMostrarTyping() {
    const chatMensajes = document.getElementById("chatMensajes");
    if (!chatMensajes) return;
    const div = document.createElement("div");
    div.id = "chatTyping";
    div.style.cssText = "display:flex;gap:8px;align-self:flex-start;animation:chatEntrar 0.2s ease;";
    div.innerHTML = '<div style="width:28px;height:28px;border-radius:8px;background:#c05a35;flex-shrink:0;display:flex;align-items:center;justify-content:center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ddd" stroke-width="1.8"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-1.9-5.3 8.5 8.5 0 0 1 8.5-8.5 8.38 8.38 0 0 1 8.5 8.5z"/><path d="M12 8v4"/><path d="M10 10h4"/></svg></div><div style="display:flex;align-items:center;gap:6px;color:#555;font-size:12px;">Escribiendo<span style="display:inline-flex;gap:3px;"><span style="width:5px;height:5px;border-radius:50%;background:#c05a35;animation:chatPulse 1.2s infinite ease-in-out;"></span><span style="width:5px;height:5px;border-radius:50%;background:#c05a35;animation:chatPulse 1.2s 0.15s infinite ease-in-out;"></span><span style="width:5px;height:5px;border-radius:50%;background:#c05a35;animation:chatPulse 1.2s 0.3s infinite ease-in-out;"></span></span></div>';
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

    const resultado = await responderChat(texto);
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
      chatInput.onfocus = () => { chatInput.style.borderColor = "#c05a35"; };
      chatInput.onblur = () => { chatInput.style.borderColor = "#222"; };
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

  document.body.appendChild(botonNotificaciones);
  document.body.appendChild(botonIA);

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
    // Ocultar botón mientras se muestran las notificaciones
    botonNotificaciones.style.display = "none";
  };

  // Modificar la función ocultarNotificaciones para mostrar botón nuevamente
  const ocultarNotificacionesOriginal = ocultarNotificaciones;
  ocultarNotificaciones = function () {
    ocultarNotificacionesOriginal();
    // Mostrar botón después de ocultar notificaciones
    setTimeout(() => {
      botonNotificaciones.style.display = "flex";
      actualizarContadorNotificaciones();
    }, 300);
  };



  // ============================
  // ⏳ INICIO
  // ============================
  console.log("⏳ Esperando 30 segundos antes de verificar versiones...");

  setTimeout(() => {
    verificarVersion();
    intervaloVerificacion = setInterval(verificarVersion, 20000);
  }, 600000);
})();
