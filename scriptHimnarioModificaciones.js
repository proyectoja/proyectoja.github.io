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
      descripcion:         "Querida comunidad, queremos compartirles algo con total transparencia y respeto. Por el momento, las actualizaciones quedarán en pausa hasta alcanzar las 100 suscripciones activas. Este proyecto se mantiene gracias al apoyo real de quienes creen en él. Cada mejora, corrección y nueva función requiere tiempo, recursos y compromiso, y llegar a esa meta nos permitirá seguir avanzando con la calidad y dedicación que ustedes merecen. No es una despedida, es una pausa consciente. Una invitación a reflexionar, a valorar el trabajo detrás de cada actualización y, si este proyecto ha sido de bendición para ti, a considerar apoyarlo para que pueda seguir creciendo. Gracias por estar, por usarlo y por creer. Con su apoyo, esto no se detiene… se fortalece",
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
          <span style="font-size: 11px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: #888;">Avisos</span>
          <button id="cerrarNotificaciones" style="
              background: none;
              border: 1px solid #333;
              color: #666;
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
              border: 1px solid #222;
              color: #666;
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
                  <span style="font-size: 12px; font-weight: 600; color: #fff; line-height: 1.3;">${notif.titulo}</span>
                  ${!notif.leida ? '<span style="width: 6px; height: 6px; border-radius: 50%; background: #c0392b; flex-shrink: 0; margin-left: 6px;"></span>' : ""}
              </div>
              <p style="margin: 0; font-size: 11px; line-height: 1.4; color: #666;">${notif.descripcion}</p>
              <span style="font-size: 10px; color: #444; margin-top: 4px; display: block;">${notif.fecha}</span>
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
        btnMarcarTodas.style.borderColor = "#333";
        btnMarcarTodas.style.color = "#999";
      };
      btnMarcarTodas.onmouseleave = () => {
        btnMarcarTodas.style.borderColor = "#222";
        btnMarcarTodas.style.color = "#666";
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
  `;
  document.head.appendChild(estiloAnimaciones);

  // Mostrar notificaciones automáticamente después de 60 segundos (1 minuto) SOLO si hay no leídas
  setTimeout(() => {
    const hayNoLeidas = notificaciones.some((n) => !n.leida);
    if (hayNoLeidas) {
      mostrarNotificaciones();
    }
  }, 60000);

  // Crear botón flotante para abrir notificaciones manualmente (arrastrable)
  const botonNotificaciones = document.createElement("button");
  botonNotificaciones.id = "botonAbrirNotificaciones";
  botonNotificaciones.style.cssText = `
      position: fixed;
      top: 15px;
      right: 15px;
      width: 32px;
      height: 32px;
      background: rgba(30, 30, 50, 0.85);
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 50%;
      cursor: move;
      z-index: 9999997;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      transition: all 0.25s ease;
      padding: 0;
      user-select: none;
      touch-action: none;
      backdrop-filter: blur(10px);
  `;

  // Variables para funcionalidad de arrastre del botón
  let botonDragging = false;
  let botonDragOffsetX = 0;
  let botonDragOffsetY = 0;
  let botonCurrentX = 15; // Posición inicial right
  let botonCurrentY = 15; // Posición inicial top

  // Función para iniciar arrastre del botón - Optimizada
  function iniciarArrastreBoton(e) {
    botonDragging = true;

    // Calcular offset una sola vez
    const rect = botonNotificaciones.getBoundingClientRect();
    botonDragOffsetX = e.clientX - rect.left;
    botonDragOffsetY = e.clientY - rect.top;

    // Feedback visual inmediato
    botonNotificaciones.style.cursor = "grabbing";
    botonNotificaciones.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.4)";
    botonNotificaciones.style.transform = "scale(1.05)";

    // Prevenir comportamientos no deseados
    e.preventDefault();
    e.stopPropagation();

    // Forzar un reflow para mejor rendimiento
    botonNotificaciones.getBoundingClientRect();
  }

  // Función para arrastrar el botón - Optimizada
  let lastSaveTime = 0;
  const SAVE_THROTTLE = 100; // Guardar cada 100ms máximo

  function arrastrarBoton(e) {
    if (!botonDragging) return;

    // Calcular nueva posición directamente
    const newX = e.clientX - botonDragOffsetX;
    const newY = e.clientY - botonDragOffsetY;

    // Limitar a los bordes de la ventana (cálculos optimizados)
    const boundedX = Math.max(0, Math.min(newX, window.innerWidth - 40)); // 40px = width del botón
    const boundedY = Math.max(0, Math.min(newY, window.innerHeight - 40)); // 40px = height del botón

    // Actualizar posición inmediatamente (sin throttling para suavidad)
    botonNotificaciones.style.left = boundedX + "px";
    botonNotificaciones.style.top = boundedY + "px";

    // Actualizar posición actual
    botonCurrentX = boundedX;
    botonCurrentY = boundedY;

    // Throttle para guardar en localStorage (no en cada frame)
    const now = Date.now();
    if (now - lastSaveTime > SAVE_THROTTLE) {
      guardarPosicionBoton();
      lastSaveTime = now;
    }
  }

  // Función para detener arrastre del botón - Optimizada
  function detenerArrastreBoton() {
    if (botonDragging) {
      botonDragging = false;

      // Guardar posición final inmediatamente
      guardarPosicionBoton();
      lastSaveTime = Date.now();

      // Restaurar estilos con transición suave
      botonNotificaciones.style.cursor = "move";
      botonNotificaciones.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
      botonNotificaciones.style.transform = "scale(1)";

      // Forzar un reflow para mejor rendimiento
      botonNotificaciones.getBoundingClientRect();
    }
  }

  // Función para guardar posición del botón en localStorage
  function guardarPosicionBoton() {
    try {
      localStorage.setItem(
        "HIMNARIO_BOTON_NOTIFICACIONES_POS",
        JSON.stringify({
          x: botonCurrentX,
          y: botonCurrentY,
        })
      );
    } catch (e) {
      console.error("Error al guardar posición del botón:", e);
    }
  }

  // Función para cargar posición del botón desde localStorage
  function cargarPosicionBoton() {
    try {
      const posGuardada = localStorage.getItem(
        "HIMNARIO_BOTON_NOTIFICACIONES_POS"
      );
      if (posGuardada) {
        const pos = JSON.parse(posGuardada);
        botonCurrentX = pos.x || 15;
        botonCurrentY = pos.y || 15;

        // Aplicar posición guardada
        botonNotificaciones.style.left = botonCurrentX + "px";
        botonNotificaciones.style.top = botonCurrentY + "px";
        botonNotificaciones.style.right = "auto";
      }
    } catch (e) {
      console.error("Error al cargar posición del botón:", e);
    }
  }

  // Actualizar el contador de notificaciones no leídas
  function actualizarContadorNotificaciones() {
    const noLeidas = notificaciones.filter((n) => !n.leida).length;
    const bellSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>';
    botonNotificaciones.innerHTML =
      noLeidas > 0
        ? bellSvg + `<span style="position: absolute; top: -2px; right: -2px; background: #4ade80; color: white; width: 14px; height: 14px; border-radius: 50%; font-size: 9px; display: flex; align-items: center; justify-content: center; font-weight: bold;">${noLeidas}</span>`
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

  // Cargar posición guardada del botón
  cargarPosicionBoton();

  // Configurar eventos del botón - Sistema mejorado de arrastre
  let dragStartX = 0;
  let dragStartY = 0;
  let isPotentialDrag = false;
  const DRAG_THRESHOLD = 5; // Píxeles de movimiento para activar arrastre

  botonNotificaciones.addEventListener("mousedown", (e) => {
    // Guardar posición inicial
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    isPotentialDrag = true;

    // Configurar eventos globales
    const onMouseMove = (moveEvent) => {
      if (!isPotentialDrag) return;

      // Calcular distancia movida
      const deltaX = Math.abs(moveEvent.clientX - dragStartX);
      const deltaY = Math.abs(moveEvent.clientY - dragStartY);

      // Si se movió más del umbral, iniciar arrastre
      if (deltaX > DRAG_THRESHOLD || deltaY > DRAG_THRESHOLD) {
        isPotentialDrag = false;
        iniciarArrastreBoton(e); // Usar el evento original para el offset

        // Actualizar con la posición actual para arrastre suave
        botonDragOffsetX =
          moveEvent.clientX - botonNotificaciones.getBoundingClientRect().left;
        botonDragOffsetY =
          moveEvent.clientY - botonNotificaciones.getBoundingClientRect().top;

        // Remover este listener temporal
        document.removeEventListener("mousemove", onMouseMove);
      }
    };

    const onMouseUp = () => {
      if (isPotentialDrag) {
        // Fue un clic, abrir notificaciones
        mostrarNotificaciones();
      }
      isPotentialDrag = false;

      // Limpiar listeners
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  });

  // Eventos de movimiento globales para arrastre continuo
  document.addEventListener("mousemove", (e) => {
    if (botonDragging) {
      arrastrarBoton(e);
    }
  });

  document.addEventListener("mouseup", () => {
    if (botonDragging) {
      detenerArrastreBoton();
    }
  });

  // También soporte para touch - Sistema similar
  botonNotificaciones.addEventListener(
    "touchstart",
    (e) => {
      const touch = e.touches[0];
      dragStartX = touch.clientX;
      dragStartY = touch.clientY;
      isPotentialDrag = true;

      const onTouchMove = (moveEvent) => {
        if (!isPotentialDrag) return;

        const currentTouch = moveEvent.touches[0];
        const deltaX = Math.abs(currentTouch.clientX - dragStartX);
        const deltaY = Math.abs(currentTouch.clientY - dragStartY);

        if (deltaX > DRAG_THRESHOLD || deltaY > DRAG_THRESHOLD) {
          isPotentialDrag = false;
          iniciarArrastreBoton(touch);

          // Actualizar offset
          botonDragOffsetX =
            currentTouch.clientX -
            botonNotificaciones.getBoundingClientRect().left;
          botonDragOffsetY =
            currentTouch.clientY -
            botonNotificaciones.getBoundingClientRect().top;

          document.removeEventListener("touchmove", onTouchMove);
        }

        moveEvent.preventDefault();
      };

      const onTouchEnd = () => {
        if (isPotentialDrag) {
          mostrarNotificaciones();
        }
        isPotentialDrag = false;

        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onTouchEnd);
      };

      document.addEventListener("touchmove", onTouchMove, { passive: false });
      document.addEventListener("touchend", onTouchEnd);

      e.preventDefault();
    },
    { passive: false }
  );

  document.addEventListener(
    "touchmove",
    (e) => {
      if (botonDragging && e.touches[0]) {
        arrastrarBoton(e.touches[0]);
        e.preventDefault();
      }
    },
    { passive: false }
  );

  document.addEventListener("touchend", () => {
    if (botonDragging) {
      detenerArrastreBoton();
    }
  });

  // Efectos de hover
  botonNotificaciones.addEventListener("mouseenter", () => {
    if (!botonDragging) {
      botonNotificaciones.style.transform = "scale(1.15)";
      botonNotificaciones.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.4)";
    }
  });

  botonNotificaciones.addEventListener("mouseleave", () => {
    if (!botonDragging) {
      botonNotificaciones.style.transform = "none";
      botonNotificaciones.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.3)";
    }
  });

  document.body.appendChild(botonNotificaciones);

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
  // ⏳ INICIO
  // ============================
  console.log("⏳ Esperando 30 segundos antes de verificar versiones...");

  setTimeout(() => {
    verificarVersion();
    intervaloVerificacion = setInterval(verificarVersion, 20000);
  }, 600000);
})();
