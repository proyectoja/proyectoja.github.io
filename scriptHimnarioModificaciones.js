(async function () {
  let intervaloVerificacion = null;

  // ============================
  // 🛡️ OVERLAY DE BLOQUEO
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
  // 📢 SISTEMA DE NOTIFICACIONES
  // ============================
  const notificacionesBase = [
    {
      id: 3,
      titulo: "Apoyo al proyecto",
      descripcion: "Querida comunidad, queremos compartirles algo con total transparencia y respeto. Por el momento, las actualizaciones quedarán en pausa hasta alcanzar las 100 suscripciones activas. Este proyecto se mantiene gracias al apoyo real de quienes creen en él. Cada mejora, corrección y nueva función requiere tiempo, recursos y compromiso, y llegar a esa meta nos permitirá seguir avanzando con la calidad y dedicación que ustedes merecen. No es una despedida, es una pausa consciente. Una invitación a reflexionar, a valorar el trabajo detrás de cada actualización y, si este proyecto ha sido de bendición para ti, a considerar apoyarlo para que pueda seguir creciendo. Gracias por estar, por usarlo y por creer. Con su apoyo, esto no se detiene… se fortalece 🙏✨",
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
      titulo: "🔔 Recordatorio de actualización",
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
      top: 20px;
      right: 20px;
      width: 420px;
      max-height: 80vh;
      background: brown;
      color: white;
      z-index: 9999998;
      display: none;
      flex-direction: column;
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
      border-radius: 20px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.1);
  `;

  notificacionesOverlay.innerHTML = `
      <div id="cabecera-notificaciones" style="padding: 15px 20px 10px 20px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
              <h2 style="margin: 0; font-size: 20px; font-weight: 600; display: flex; align-items: center; gap: 8px;">
                  <span style="font-size: 22px;">🔔</span> Noti
              </h2>
              <button id="cerrarNotificaciones" style="
                  background: rgba(255, 255, 255, 0.15);
                  border: none;
                  color: white;
                  width: 32px;
                  height: 32px;
                  border-radius: 50%;
                  cursor: pointer;
                  font-size: 18px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  transition: all 0.2s ease;
              ">×</button>
          </div>
          <p style="margin: 0; opacity: 0.9; font-size: 13px;">Avisos:</p>
      </div>
      <div id="listaNotificaciones" style="
          flex: 1;
          overflow-y: auto;
          padding: 15px 25px;
          max-height: 400px;
      ">
          <!-- Notificaciones se cargarán aquí -->
            </div>
      <div id="pie-notificaciones" style="
          padding: 15px 25px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
      ">
          <button id="marcarTodasLeidas" style="
              background: rgba(255, 255, 255, 0.2);
              border: none;
              color: white;
              padding: 10px 20px;
              border-radius: 10px;
              cursor: pointer;
              font-size: 14px;
              font-weight: 500;
              transition: all 0.2s ease;
              width: 100%;
              margin-bottom: 15px;
          ">Marcar todas como leídas</button>
          
          <!-- Navegador inferior de opciones -->
          <div id="navegadorOpciones" style="
              display: flex;
              justify-content: space-around;
              background: rgba(255, 255, 255, 0.1);
              border-radius: 12px;
              padding: 10px;
              margin-top: 10px;
          ">
              <button class="opcion-nav" data-seccion="juegos" style="
                  background: rgba(255, 150, 0, 0.2);
                  border: none;
                  color: white;
                  padding: 10px 20px;
                  border-radius: 8px;
                  cursor: pointer;
                  font-size: 14px;
                  font-weight: 500;
                  transition: all 0.2s ease;
                  flex: 1;
                  margin: 0 5px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 8px;
              ">
                  <span style="font-size: 16px;">🎮</span>
                  <span>Games</span>
              </button>
              
              <button class="opcion-nav" data-seccion="notificaciones" style="
                  background: rgba(255, 255, 255, 0.1);
                  border: none;
                  color: white;
                  padding: 10px 20px;
                  border-radius: 8px;
                  cursor: pointer;
                  font-size: 14px;
                  font-weight: 500;
                  transition: all 0.2s ease;
                  flex: 1;
                  margin: 0 5px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  gap: 8px;
              ">
                  <span style="font-size: 16px;">🔔</span>
                  <span>Noti</span>
              </button>
          </div>
      </div>
      
      <!-- Botón de salida persistente para juegos -->
      <button id="btnSalirDeJuego" style="
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 10000;
          background: rgba(255, 255, 255, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: white;
          padding: 10px 20px;
          border-radius: 30px;
          cursor: pointer;
          font-weight: bold;
          backdrop-filter: blur(10px);
          display: none;
          transition: all 0.2s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
      ">Salir ×</button>
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
          background: ${
            notif.leida
              ? "rgba(255, 255, 255, 0.05)"
              : "rgba(255, 255, 255, 0.1)"
          };
          border-radius: 12px;
          padding: 18px;
          margin-bottom: 12px;
          border-left: 4px solid ${
            notif.leida ? "rgba(255, 255, 255, 0.3)" : "rgba(255,255,255,0.8)"
          };
          transition: all 0.3s ease;
          cursor: pointer;
      `;
      notifElement.onmouseenter = () => {
        notifElement.style.transform = "translateX(-4px)";
        notifElement.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
      };
      notifElement.onmouseleave = () => {
        notifElement.style.transform = "none";
        notifElement.style.boxShadow = "none";
      };
      notifElement.onclick = () => {
        notif.leida = true;
        guardarNotificaciones(); // Guardar en localStorage
        mostrarNotificaciones();
        actualizarContadorNotificaciones(); // Actualizar contador
      };

      // Construir el contenido de la notificación
      let contenidoNotificacion = "";

      // Si tiene imagen, mostrarla arriba
      if (notif.imagen) {
        contenidoNotificacion += `
          <div style="margin-bottom: 15px; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);">
            <img src="${notif.imagen}" alt="${notif.titulo}" style="width: 100%; height: 180px; object-fit: cover; display: block;">
          </div>
        `;
      }

      contenidoNotificacion += `
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 5px;">
              <h3 style="margin: 0; font-size: 14px; font-weight: 600; line-height: 1.3;">${
                notif.titulo
              }</h3>
              ${
                !notif.leida
                  ? '<span style="background: #4ade80; color: white; padding: 1px 6px; border-radius: 10px; font-size: 10px; font-weight: 600;">NUEVO</span>'
                  : ""
              }
          </div>
          <p style="margin: 0 0 8px 0; font-size: 12.5px; line-height: 1.4; opacity: 0.9;">${
            notif.descripcion
          }</p>
          <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 11px; opacity: 0.7;">${notif.fecha}</span>
              <span style="font-size: 11px; opacity: 0.7;">${
                notif.leida ? "✓ Leída" : "Toca para leer"
              }</span>
          </div>
      `;

      notifElement.innerHTML = contenidoNotificacion;

      lista.appendChild(notifElement);
    });

    notificacionesOverlay.style.display = "flex";
    notificacionesOverlay.style.animation =
      "slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
  }

  // Función para ocultar notificaciones
  function ocultarNotificaciones() {
    notificacionesOverlay.style.animation =
      "slideOut 0.3s cubic-bezier(0.16, 1, 0.3, 1)";
    setTimeout(() => {
      notificacionesOverlay.style.display = "none";
    }, 280);
  }

  // Función para marcar todas como leídas
  function marcarTodasLeidas() {
    notificaciones.forEach((notif) => (notif.leida = true));
    guardarNotificaciones(); // Guardar en localStorage
    mostrarNotificaciones();
  }

  // ============================
  // 🎮 SISTEMA DE NAVEGACIÓN Y JUEGOS
  // ============================
  let seccionActual = "notificaciones";
  let juegoActivo = false;

  // Función para cambiar sección
  function cambiarSeccion(seccion) {
    seccionActual = seccion;

    // Actualizar botones activos
    document.querySelectorAll(".opcion-nav").forEach((btn) => {
      const btnSeccion = btn.getAttribute("data-seccion");
      if (btnSeccion === seccion) {
        btn.style.background = "rgba(255, 255, 255, 0.25)";
        btn.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
      } else {
        btn.style.background = "rgba(255, 255, 255, 0.1)";
        btn.style.boxShadow = "none";
      }
    });

    // Mostrar contenido según sección
    const listaNotificaciones = document.getElementById("listaNotificaciones");
    const contenedorJuegos = document.getElementById("contenedorJuegos");
    const btnMarcarTodas = document.getElementById("marcarTodasLeidas");

    if (seccion === "notificaciones") {
      if (listaNotificaciones) listaNotificaciones.style.display = "block";
      if (contenedorJuegos) contenedorJuegos.style.display = "none";
      if (btnMarcarTodas) btnMarcarTodas.style.display = "block";

      // Restaurar tamaño del popup si no está en juego
      notificacionesOverlay.style.width = "400px"; // Un poco más pequeño
      notificacionesOverlay.style.height = "auto";
      notificacionesOverlay.style.maxHeight = "75vh";
      notificacionesOverlay.style.top = "15px";
      notificacionesOverlay.style.right = "15px";
      notificacionesOverlay.style.borderRadius = "15px";
      notificacionesOverlay.style.background = "brown";
      notificacionesOverlay.style.overflow = "hidden";

      if (contenedorJuegos) {
        contenedorJuegos.style.maxHeight = "350px";
        contenedorJuegos.style.overflowY = "auto";
      }

      juegoActivo = false;
      detenerJuegoSerpiente();
      detenerJuegoGato();
    } else if (seccion === "juegos") {
      if (listaNotificaciones) listaNotificaciones.style.display = "none";
      if (btnMarcarTodas) btnMarcarTodas.style.display = "none";
      mostrarMenuJuegos();
    }
  }

  // Función para mostrar menú de juegos
  function mostrarMenuJuegos() {
    let contenedorJuegos = document.getElementById("contenedorJuegos");

    if (!contenedorJuegos) {
      contenedorJuegos = document.createElement("div");
      contenedorJuegos.id = "contenedorJuegos";
      contenedorJuegos.style.cssText = `
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          max-height: 400px;
          display: none;
      `;

      // Insertar después de la lista de notificaciones
      const listaNotificaciones = document.getElementById(
        "listaNotificaciones"
      );
      if (listaNotificaciones && listaNotificaciones.parentNode) {
        listaNotificaciones.parentNode.insertBefore(
          contenedorJuegos,
          listaNotificaciones.nextSibling
        );
      }
    }

    contenedorJuegos.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
            <h3 style="margin: 0; font-size: 22px; font-weight: 600;">🎮 Juegos Disponibles</h3>
            <button id="btnVolverMenu" style="
                background: rgba(255, 255, 255, 0.15);
                border: none;
                color: white;
                padding: 8px 16px;
                border-radius: 8px;
                cursor: pointer;
                font-size: 14px;
                font-weight: 500;
                transition: all 0.2s ease;
                display: none;
            ">← Volver al menú</button>
        </div>
        <div id="listaJuegos" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 15px;">
            <div class="juego-card" data-juego="serpiente" style="
                background: rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                padding: 15px;
                cursor: pointer;
                transition: all 0.3s ease;
                text-align: center;
                border: 2px solid rgba(255, 255, 255, 0.2);
            ">
                <div style="font-size: 32px; margin-bottom: 8px;">🐍</div>
                <h4 style="margin: 0 0 5px 0; font-size: 15px; font-weight: 600;">Serpiente Neon</h4>
                <p style="margin: 0; font-size: 11px; opacity: 0.8;">Come y crece</p>
                <div style="margin-top: 8px; font-size: 10px; opacity: 0.7;">Récord: <span id="highScoreSerpiente">0</span></div>
            </div>
            
            <div class="juego-card" data-juego="gato" style="
                background: rgba(255, 255, 255, 0.1);
                border-radius: 12px;
                padding: 15px;
                cursor: pointer;
                transition: all 0.3s ease;
                text-align: center;
                border: 2px solid rgba(255, 255, 255, 0.2);
            ">
                <div style="font-size: 32px; margin-bottom: 8px;">❌⭕</div>
                <h4 style="margin: 0 0 5px 0; font-size: 15px; font-weight: 600;">Gato (Tic-Tac-Toe)</h4>
                <p style="margin: 0; font-size: 11px; opacity: 0.8;">3 en raya vs PROYECTO JA</p>
                <div style="margin-top: 8px; font-size: 10px; opacity: 0.7;">Dificultad: Smart</div>
            </div>
        </div>
        <div id="contenedorJuegoActivo" style="display: none; flex: 1; overflow: hidden;"></div>
        <div style="margin-top: 25px; text-align: center; font-size: 13px; opacity: 0.7;">
            Más juegos próximamente...
        </div>
    `;

    contenedorJuegos.style.display = "block";

    // Cargar puntuación alta
    const highScore = localStorage.getItem("serpiente_high_score") || "0";
    const highScoreElement = document.getElementById("highScoreSerpiente");
    if (highScoreElement) {
      highScoreElement.textContent = highScore;
    }

    // Configurar eventos de los juegos
    setTimeout(() => {
      const juegoCards = document.querySelectorAll(".juego-card");
      juegoCards.forEach((card) => {
        card.onclick = () => {
          const juego = card.getAttribute("data-juego");
          if (juego === "serpiente") {
            iniciarJuegoSerpiente();
          } else if (juego === "gato") {
            iniciarJuegoGato();
          }
        };

        card.onmouseenter = () => {
          card.style.transform = "translateY(-5px)";
          card.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.3)";
          card.style.borderColor = "rgba(255, 255, 255, 0.4)";
          card.style.background = "rgba(255, 255, 255, 0.15)";
        };

        card.onmouseleave = () => {
          card.style.transform = "none";
          card.style.boxShadow = "none";
          card.style.borderColor = "rgba(255, 255, 255, 0.2)";
          card.style.background = "rgba(255, 255, 255, 0.1)";
        };
      });

      // Configurar botón volver
      const btnVolverMenu = document.getElementById("btnVolverMenu");
      if (btnVolverMenu) {
        btnVolverMenu.onclick = () => {
          volverAlMenuJuegos();
        };
      }
    }, 100);
  }

  // Función para volver al menú de juegos
  function volverAlMenuJuegos() {
    const contenedorJuegos = document.getElementById("contenedorJuegos");
    const btnSalir = document.getElementById("btnSalirDeJuego");

    // Ocultar botón de salida
    if (btnSalir) btnSalir.style.display = "none";

    // Restaurar tamaño del popup
    notificacionesOverlay.style.width = "400px";
    notificacionesOverlay.style.height = "auto";
    notificacionesOverlay.style.maxHeight = "75vh";
    notificacionesOverlay.style.top = "15px";
    notificacionesOverlay.style.right = "15px";
    notificacionesOverlay.style.borderRadius = "15px";
    notificacionesOverlay.style.background = "brown";
    notificacionesOverlay.style.overflow = "hidden";

    if (contenedorJuegos) {
      contenedorJuegos.style.maxHeight = "350px";
      contenedorJuegos.style.height = "auto";
      contenedorJuegos.style.overflowY = "auto";
      contenedorJuegos.style.padding = "20px";

      // Restaurar visibilidad de los elementos del menú
      Array.from(contenedorJuegos.children).forEach((child) => {
        if (child.id === "contenedorJuegoActivo") {
          child.style.display = "none";
        } else if (child.id === "listaJuegos") {
          child.style.display = "grid";
        } else {
          child.style.display = "block";
        }
      });
    }

    // Restaurar visibilidad de los elementos comunes (cabecera, pie)
    const cabecera = document.getElementById("cabecera-notificaciones");
    const pie = document.getElementById("pie-notificaciones");
    if (cabecera) cabecera.style.display = "block";
    if (pie) pie.style.display = "block";

    // Restaurar visibilidad según la sección actual para evitar que se mezclen
    const listaNotificaciones = document.getElementById("listaNotificaciones");
    if (seccionActual === "juegos") {
      if (contenedorJuegos) contenedorJuegos.style.display = "block";
      if (listaNotificaciones) listaNotificaciones.style.display = "none";
    } else {
      if (contenedorJuegos) contenedorJuegos.style.display = "none";
      if (listaNotificaciones) listaNotificaciones.style.display = "block";
    }

    juegoActivo = false;
    detenerJuegoSerpiente();
    detenerJuegoGato();
  }

  // ============================
  // 🐍 JUEGO DE LA SERPIENTE (SNAKE)
  // ============================
  let snakeInterval = null;
  let snakeDirection = "right";
  let snakeGameRunning = false;

  function iniciarJuegoSerpiente() {
    juegoActivo = true;
    snakeGameRunning = false; // No arrancar de inmediato

    // Expandir el popup a pantalla completa
    notificacionesOverlay.style.width = "100vw";
    notificacionesOverlay.style.height = "100vh";
    notificacionesOverlay.style.maxHeight = "100vh";
    notificacionesOverlay.style.top = "0";
    notificacionesOverlay.style.right = "0";
    notificacionesOverlay.style.borderRadius = "0";
    notificacionesOverlay.style.background = "#0f172a"; // Oscuro premium
    notificacionesOverlay.style.overflow = "hidden"; // Evitar scroll global

    const listaJuegos = document.getElementById("listaJuegos");
    const contenedorJuegoActivo = document.getElementById(
      "contenedorJuegoActivo"
    );
    const btnVolverMenu = document.getElementById("btnVolverMenu");
    const contenedorJuegos = document.getElementById("contenedorJuegos");

    if (contenedorJuegos) {
      contenedorJuegos.style.maxHeight = "none";
      contenedorJuegos.style.height = "100%";
      contenedorJuegos.style.overflow = "hidden";
      contenedorJuegos.style.padding = "0";
      contenedorJuegos.style.boxSizing = "border-box";
    }

    // Ocultar TODO en el overlay excepto juegos y el botón salir
    Array.from(notificacionesOverlay.children).forEach((child) => {
      if (child.id === "contenedorJuegos" || child.id === "btnSalirDeJuego") {
        child.style.display = "block";
      } else {
        child.style.display = "none";
      }
    });

    if (listaJuegos) listaJuegos.style.display = "none";
    if (contenedorJuegoActivo) {
      // Ocultar todos los elementos del menú (título, lista, pie)
      Array.from(contenedorJuegos.children).forEach(
        (child) => (child.style.display = "none")
      );

      contenedorJuegoActivo.style.display = "flex";
      contenedorJuegoActivo.style.flexDirection = "column";
      contenedorJuegoActivo.style.alignItems = "center";
      contenedorJuegoActivo.style.justifyContent = "center";
      contenedorJuegoActivo.style.height = "100%";
      contenedorJuegoActivo.style.width = "100%";
      contenedorJuegoActivo.style.overflow = "hidden";
      contenedorJuegoActivo.style.position = "relative";
      contenedorJuegoActivo.style.boxSizing = "border-box";
    }
    if (btnVolverMenu) {
      btnVolverMenu.style.display = "block";
      btnVolverMenu.style.position = "absolute";
      btnVolverMenu.style.top = "20px";
      btnVolverMenu.style.right = "20px";
      btnVolverMenu.style.zIndex = "1000";
      btnVolverMenu.style.background = "rgba(255, 255, 255, 0.2)";
      btnVolverMenu.style.border = "1px solid rgba(255, 255, 255, 0.3)";
      btnVolverMenu.style.padding = "10px 20px";
      btnVolverMenu.style.borderRadius = "30px";
      btnVolverMenu.style.backdropFilter = "blur(5px)";
      btnVolverMenu.style.color = "white";
      btnVolverMenu.innerHTML = "Salir ×";
    }

    contenedorJuegoActivo.innerHTML = `
      <div id="game-ui" style="text-align: center; margin-bottom: 5px; font-family: 'Outfit', sans-serif;">
        <div style="font-size: 32px; font-weight: 800; color: #4ade80; text-shadow: 0 0 15px rgba(74, 222, 128, 0.4); margin-bottom: 0px;">
          <span id="snake-score">0</span>
        </div>
        <div style="font-size: 10px; opacity: 0.6; letter-spacing: 1px; margin-top: -5px;">PUNTAJE</div>
        <div style="margin-top: 2px; font-size: 11px; color: #fbbf24;">Mejor: <span id="snake-highscore">0</span></div>
      </div>
      
      <div style="position: relative; line-height: 0; display: flex; justify-content: center; align-items: center; width: 100%; flex: 1; min-height: 0;">
        <canvas id="snake-canvas" width="400" height="400" style="
          background: #1e293b;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          max-width: 95%;
          max-height: 95%;
          object-fit: contain;
        "></canvas>
      </div>

      <div id="start-screen" style="
        position: absolute;
        inset: 0;
        background: rgba(15, 23, 42, 0.9);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 10;
        border-radius: 12px;
        backdrop-filter: blur(4px);
      ">
        <div style="font-size: 80px; margin-bottom: 20px;">🐍</div>
        <h2 style="font-size: 32px; color: #4ade80; margin-bottom: 30px;">SERPIENTE NEON</h2>
        <button id="btnStartGame" style="
          padding: 16px 40px;
          font-size: 20px;
          background: #4ade80;
          color: #0f172a;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 800;
          box-shadow: 0 0 30px rgba(74, 222, 128, 0.4);
          transition: all 0.2s ease;
        ">¡ COMENZAR !</button>
        <p style="margin-top: 20px; opacity: 0.6; font-size: 14px;">Usa las flechas de tu teclado</p>
      </div>
    `;

    setTimeout(() => {
      const btnStart = document.getElementById("btnStartGame");
      if (btnStart) {
        btnStart.onclick = () => {
          document.getElementById("start-screen").style.display = "none";
          snakeGameRunning = true;
          setupSnakeGame();
        };
        btnStart.onmouseenter = () =>
          (btnStart.style.transform = "scale(1.05)");
        btnStart.onmouseleave = () => (btnStart.style.transform = "scale(1)");
      }
    }, 100);
  }

  function detenerJuegoSerpiente() {
    snakeGameRunning = false;
    cleanupSnakeEvents();
    if (snakeInterval) {
      clearInterval(snakeInterval);
      snakeInterval = null;
    }
    notificacionesOverlay.style.background = "brown";

    // Restaurar cabecera
    const cabeceraNotif =
      notificacionesOverlay.querySelector("div:first-child");
    if (cabeceraNotif) cabeceraNotif.style.display = "block";
  }

  // Manejador centralizado para evitar duplicados
  let snakeKeyHandler = null;

  function cleanupSnakeEvents() {
    if (snakeKeyHandler) {
      document.removeEventListener("keydown", snakeKeyHandler);
      snakeKeyHandler = null;
    }
  }

  function setupSnakeGame() {
    const canvas = document.getElementById("snake-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const box = 20;
    let score = 0;
    let highScore = localStorage.getItem("serpiente_high_score") || 0;
    const highScoreElement = document.getElementById("snake-highscore");
    if (highScoreElement) highScoreElement.textContent = highScore;

    let snake = [{ x: 9 * box, y: 10 * box }];
    let food = {
      x: Math.floor(Math.random() * 19) * box,
      y: Math.floor(Math.random() * 19) * box,
    };
    snakeDirection = "right";
    let gameSpeed = 200;

    // Limpiar antes de asignar
    cleanupSnakeEvents();

    snakeKeyHandler = (e) => {
      if (!snakeGameRunning) return;
      if (e.keyCode == 37 && snakeDirection != "right") snakeDirection = "left";
      else if (e.keyCode == 38 && snakeDirection != "down")
        snakeDirection = "up";
      else if (e.keyCode == 39 && snakeDirection != "left")
        snakeDirection = "right";
      else if (e.keyCode == 40 && snakeDirection != "up")
        snakeDirection = "down";

      if ([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", snakeKeyHandler);

    function draw() {
      if (!snakeGameRunning) return;

      // Fondo con rejilla sutil
      ctx.fillStyle = "#1e293b";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = "rgba(255,255,255,0.03)";
      for (let i = 0; i < canvas.width; i += box) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvas.width, i);
        ctx.stroke();
      }

      // Comida (Neon)
      ctx.fillStyle = "#f43f5e";
      ctx.shadowBlur = 15;
      ctx.shadowColor = "#f43f5e";
      ctx.beginPath();
      ctx.roundRect(food.x + 2, food.y + 2, box - 4, box - 4, 5);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Serpiente
      for (let i = 0; i < snake.length; i++) {
        const isHead = i === 0;
        ctx.fillStyle = isHead ? "#22c55e" : "#16a34a";

        if (isHead) {
          ctx.shadowBlur = 15;
          ctx.shadowColor = "#22c55e";
        }

        ctx.beginPath();
        ctx.roundRect(
          snake[i].x + 1,
          snake[i].y + 1,
          box - 2,
          box - 2,
          isHead ? 6 : 4
        );
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      let snakeX = snake[0].x;
      let snakeY = snake[0].y;

      if (snakeDirection == "left") snakeX -= box;
      if (snakeDirection == "up") snakeY -= box;
      if (snakeDirection == "right") snakeX += box;
      if (snakeDirection == "down") snakeY += box;

      // Colisión con bordes o consigo misma
      let hitSelf = false;
      for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snakeX && snake[i].y === snakeY) hitSelf = true;
      }

      if (
        snakeX < 0 ||
        snakeX >= canvas.width ||
        snakeY < 0 ||
        snakeY >= canvas.height ||
        hitSelf
      ) {
        snakeGameRunning = false;
        clearInterval(snakeInterval);

        // Efecto visual de muerte
        ctx.fillStyle = "rgba(244, 63, 94, 0.3)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        setTimeout(() => {
          if (score > highScore) {
            localStorage.setItem("serpiente_high_score", score);
            alert("¡NUEVO RÉCORD! 🏆 " + score);
          } else {
            alert("GAME OVER 💀\nPuntaje: " + score);
          }
          iniciarJuegoSerpiente(); // Reiniciar automáticamente
        }, 100);
        return;
      }

      // Si come
      if (snakeX == food.x && snakeY == food.y) {
        score++;
        const scoreEl = document.getElementById("snake-score");
        if (scoreEl) scoreEl.textContent = score;

        food = {
          x: Math.floor(Math.random() * 19) * box,
          y: Math.floor(Math.random() * 19) * box,
        };

        // Aumentar velocidad
        if (gameSpeed > 60) {
          clearInterval(snakeInterval);
          gameSpeed -= 2;
          snakeInterval = setInterval(draw, gameSpeed);
        }
      } else {
        snake.pop();
      }

      snake.unshift({ x: snakeX, y: snakeY });
    }

    snakeInterval = setInterval(draw, gameSpeed);
  }

  // ============================
  // ⭕ JUEGO DEL GATO (TIC-TAC-TOE)
  // ============================
  let gatoActivo = false;
  let tableroGato = Array(9).fill(null);
  let jugadorActual = "X";

  function iniciarJuegoGato() {
    juegoActivo = true;
    gatoActivo = true;
    tableroGato = Array(9).fill(null);
    jugadorActual = "X";

    // Expandir popup
    notificacionesOverlay.style.width = "100vw";
    notificacionesOverlay.style.height = "100vh";
    notificacionesOverlay.style.maxHeight = "100vh";
    notificacionesOverlay.style.top = "0";
    notificacionesOverlay.style.right = "0";
    notificacionesOverlay.style.borderRadius = "0";
    notificacionesOverlay.style.background = "#0f172a";

    const contenedorJuegos = document.getElementById("contenedorJuegos");
    const listaJuegos = document.getElementById("listaJuegos");
    const contenedorJuegoActivo = document.getElementById(
      "contenedorJuegoActivo"
    );
    const btnVolverMenu = document.getElementById("btnVolverMenu");

    if (contenedorJuegos) {
      contenedorJuegos.style.maxHeight = "none";
      contenedorJuegos.style.height = "100%";
      contenedorJuegos.style.padding = "0";
      contenedorJuegos.style.boxSizing = "border-box";
    }

    // Ocultar TODO en el overlay excepto juegos y el botón salir
    Array.from(notificacionesOverlay.children).forEach((child) => {
      if (child.id === "contenedorJuegos" || child.id === "btnSalirDeJuego") {
        child.style.display = "block";
      } else {
        child.style.display = "none";
      }
    });

    if (listaJuegos) listaJuegos.style.display = "none";
    if (contenedorJuegoActivo) {
      // Ocultar todos los elementos del menú (título, lista, pie)
      Array.from(contenedorJuegos.children).forEach(
        (child) => (child.style.display = "none")
      );

      contenedorJuegoActivo.style.display = "flex";
      contenedorJuegoActivo.style.flexDirection = "column";
      contenedorJuegoActivo.style.alignItems = "center";
      contenedorJuegoActivo.style.justifyContent = "center";
      contenedorJuegoActivo.style.height = "100%";
      contenedorJuegoActivo.style.width = "100%";
      contenedorJuegoActivo.style.overflow = "hidden";
      contenedorJuegoActivo.style.boxSizing = "border-box";
    }

    if (btnVolverMenu) {
      btnVolverMenu.style.display = "block";
      btnVolverMenu.style.position = "absolute";
      btnVolverMenu.style.top = "20px";
      btnVolverMenu.style.right = "20px";
      btnVolverMenu.style.zIndex = "1000";
      btnVolverMenu.style.background = "rgba(255, 255, 255, 0.2)";
      btnVolverMenu.style.border = "1px solid rgba(255, 255, 255, 0.3)";
      btnVolverMenu.style.padding = "10px 20px";
      btnVolverMenu.style.borderRadius = "30px";
      btnVolverMenu.style.backdropFilter = "blur(5px)";
      btnVolverMenu.style.color = "white";
      btnVolverMenu.innerHTML = "Salir ×";
    }

    contenedorJuegoActivo.innerHTML = `
      <div style="text-align: center; margin-bottom: 20px;">
        <h2 style="color: #4ade80; font-size: 28px; margin-bottom: 5px;">GATO NEON</h2>
        <p id="info-gato" style="color: white; opacity: 0.8; font-size: 16px;">Tu turno: ❌</p>
      </div>
      
      <div id="tablero-gato" style="
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 10px;
        background: rgba(255, 255, 255, 0.05);
        padding: 10px;
        border-radius: 15px;
        border: 2px solid rgba(255, 255, 255, 0.1);
        width: 300px;
        height: 300px;
        max-width: 80vw;
        max-height: 80vw;
      ">
        ${Array(9)
          .fill(0)
          .map(
            (_, i) => `
          <div class="celda-gato" data-index="${i}" style="
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            font-weight: 800;
            cursor: pointer;
            transition: all 0.2s ease;
            color: white;
          "></div>
        `
          )
          .join("")}
      </div>
      
      <button id="reiniciar-gato" style="
        margin-top: 30px;
        padding: 12px 30px;
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 10px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s ease;
      ">Reiniciar partida</button>
      
      <style>
        .celda-gato:hover { background: rgba(255, 255, 255, 0.1); transform: scale(1.02); }
        .celda-gato.win { background: #4ade8020; color: #4ade80; animation: pulse 1s infinite; }
        @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.05); } 100% { transform: scale(1); } }
      </style>
    `;

    setupLógicaGato();
  }

  function setupLógicaGato() {
    const celdas = document.querySelectorAll(".celda-gato");
    const info = document.getElementById("info-gato");
    const btnReiniciar = document.getElementById("reiniciar-gato");

    celdas.forEach((celda) => {
      celda.onclick = () => {
        const index = celda.getAttribute("data-index");
        if (!tableroGato[index] && gatoActivo && jugadorActual === "X") {
          hacerMovimiento(index);
          if (gatoActivo) {
            setTimeout(movimientoIA, 500);
          }
        }
      };
    });

    btnReiniciar.onclick = () => {
      tableroGato = Array(9).fill(null);
      celdas.forEach((c) => {
        c.textContent = "";
        c.classList.remove("win");
        c.style.color = "white";
      });
      jugadorActual = "X";
      gatoActivo = true;
      info.textContent = "Tu turno: ❌";
    };
  }

  function hacerMovimiento(index) {
    const celdas = document.querySelectorAll(".celda-gato");
    const info = document.getElementById("info-gato");

    tableroGato[index] = jugadorActual;
    const celda = celdas[index];
    celda.textContent = jugadorActual;
    celda.style.color = jugadorActual === "X" ? "#f43f5e" : "#38bdf8";
    celda.style.textShadow = `0 0 15px ${
      jugadorActual === "X" ? "#f43f5e" : "#38bdf8"
    }`;

    const ganador = verificarGanador();
    if (ganador) {
      if (ganador === "Empate") {
        info.textContent = "¡Empate! 🤝";
      } else {
        info.textContent = `¡Ganador: ${ganador === "X" ? "❌" : "⭕"}!`;
        resaltarGanador();
      }
      gatoActivo = false;
      return;
    }

    jugadorActual = jugadorActual === "X" ? "O" : "X";
    info.textContent =
      jugadorActual === "X" ? "Tu turno: ❌" : "PROYECTO JA pensando... ⭕";
  }

  function movimientoIA() {
    if (!gatoActivo) return;

    let mejorPuntaje = -Infinity;
    let movimiento;

    for (let i = 0; i < 9; i++) {
      if (tableroGato[i] === null) {
        tableroGato[i] = "O";
        let puntaje = minimax(tableroGato, 0, false);
        tableroGato[i] = null;
        if (puntaje > mejorPuntaje) {
          mejorPuntaje = puntaje;
          movimiento = i;
        }
      }
    }

    if (movimiento !== undefined) {
      hacerMovimiento(movimiento);
    }
  }

  function minimax(tablero, profundidad, esMaximizador) {
    let resultado = verificarGanador();
    if (resultado === "O") return 10 - profundidad;
    if (resultado === "X") return profundidad - 10;
    if (resultado === "Empate") return 0;

    if (esMaximizador) {
      let mejorPuntaje = -Infinity;
      for (let i = 0; i < 9; i++) {
        if (tablero[i] === null) {
          tablero[i] = "O";
          let puntaje = minimax(tablero, profundidad + 1, false);
          tablero[i] = null;
          mejorPuntaje = Math.max(puntaje, mejorPuntaje);
        }
      }
      return mejorPuntaje;
    } else {
      let mejorPuntaje = Infinity;
      for (let i = 0; i < 9; i++) {
        if (tablero[i] === null) {
          tablero[i] = "X";
          let puntaje = minimax(tablero, profundidad + 1, true);
          tablero[i] = null;
          mejorPuntaje = Math.min(puntaje, mejorPuntaje);
        }
      }
      return mejorPuntaje;
    }
  }

  function verificarGanador() {
    const combinaciones = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Horizontales
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Verticales
      [0, 4, 8],
      [2, 4, 6], // Diagonales
    ];

    for (let combo of combinaciones) {
      if (
        tableroGato[combo[0]] &&
        tableroGato[combo[0]] === tableroGato[combo[1]] &&
        tableroGato[combo[0]] === tableroGato[combo[2]]
      ) {
        return tableroGato[combo[0]];
      }
    }

    if (!tableroGato.includes(null)) return "Empate";
    return null;
  }

  function resaltarGanador() {
    const combinaciones = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const celdas = document.querySelectorAll(".celda-gato");
    for (let combo of combinaciones) {
      if (
        tableroGato[combo[0]] &&
        tableroGato[combo[0]] === tableroGato[combo[1]] &&
        tableroGato[combo[0]] === tableroGato[combo[2]]
      ) {
        combo.forEach((i) => celdas[i].classList.add("win"));
      }
    }
  }

  function detenerJuegoGato() {
    gatoActivo = false;
  }

  // Configurar eventos
  setTimeout(() => {
    const btnCerrar = document.getElementById("cerrarNotificaciones");
    const btnMarcarTodas = document.getElementById("marcarTodasLeidas");

    if (btnCerrar) {
      btnCerrar.onclick = ocultarNotificaciones;
      btnCerrar.onmouseenter = () => {
        btnCerrar.style.background = "rgba(255, 255, 255, 0.25)";
        btnCerrar.style.transform = "scale(1.1)";
      };
      btnCerrar.onmouseleave = () => {
        btnCerrar.style.background = "rgba(255, 255, 255, 0.15)";
        btnCerrar.style.transform = "none";
      };
    }

    if (btnMarcarTodas) {
      btnMarcarTodas.onclick = marcarTodasLeidas;
      btnMarcarTodas.onmouseenter = () => {
        btnMarcarTodas.style.background = "rgba(255, 255, 255, 0.3)";
        btnMarcarTodas.style.transform = "translateY(-2px)";
      };
      btnMarcarTodas.onmouseleave = () => {
        btnMarcarTodas.style.background = "rgba(255, 255, 255, 0.2)";
        btnMarcarTodas.style.transform = "none";
      };
    }

    // Configurar botón salir global
    const btnSalirGlobal = document.getElementById("btnSalirDeJuego");
    if (btnSalirGlobal) {
      btnSalirGlobal.onclick = volverAlMenuJuegos;
      btnSalirGlobal.onmouseenter = () => {
        btnSalirGlobal.style.background = "rgba(255, 255, 255, 0.4)";
        btnSalirGlobal.style.transform = "scale(1.05)";
      };
      btnSalirGlobal.onmouseleave = () => {
        btnSalirGlobal.style.background = "rgba(255, 255, 255, 0.25)";
        btnSalirGlobal.style.transform = "scale(1)";
      };
    }

    // Configurar eventos de navegación
    const btnsNav = document.querySelectorAll(".opcion-nav");
    btnsNav.forEach((btn) => {
      btn.onclick = () => {
        const seccion = btn.getAttribute("data-seccion");
        cambiarSeccion(seccion);
      };
    });
  }, 100);

  // Agregar estilos de animación
  const estiloAnimaciones = document.createElement("style");
  estiloAnimaciones.textContent = `
      @keyframes slideIn {
          from {
              opacity: 0;
              transform: translateX(30px) scale(0.95);
          }
          to {
              opacity: 1;
              transform: translateX(0) scale(1);
          }
      }
      
      @keyframes slideOut {
          from {
              opacity: 1;
              transform: translateX(0) scale(1);
          }
          to {
              opacity: 0;
              transform: translateX(30px) scale(0.95);
          }
      }
      
      #notificaciones-himnario::-webkit-scrollbar {
          width: 8px;
          height: 8px;
      }
      
      #notificaciones-himnario::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 0;
          margin: 0;
      }
      
      #notificaciones-himnario::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 4px;
          border: none;
          box-shadow: none;
          transition: background 0.2s ease;
      }
      
      #notificaciones-himnario::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: none;
          box-shadow: none;
      }
      
      #notificaciones-himnario::-webkit-scrollbar-corner {
          background: transparent;
      }
      
      /* Ocultar scrollbar cuando no está en uso (estilo de app nativa) */
      #notificaciones-himnario {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.15) transparent;
      }
      
      #notificaciones-himnario:not(:hover)::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
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
      width: 40px;
      height: 40px;
      background: brown;
      color: white;
      border: none;
      border-radius: 50%;
      cursor: move;
      z-index: 9999997;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
      transition: all 0.2s ease;
      padding: 0;
      user-select: none;
      touch-action: none;
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
      botonNotificaciones.style.boxShadow = "0 3px 8px rgba(0, 0, 0, 0.2)";
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
    botonNotificaciones.innerHTML =
      noLeidas > 0
        ? `<span style="position: absolute; top: -3px; right: -3px; background: #4ade80; color: white; width: 18px; height: 18px; border-radius: 50%; font-size: 10px; display: flex; align-items: center; justify-content: center; font-weight: bold;">${noLeidas}</span>🔔`
        : "🔔";

    // Mostrar/ocultar badge
    if (noLeidas > 0) {
      botonNotificaciones.style.background =
        "linear-gradient(135deg, #8B4513, brown)";
    } else {
      botonNotificaciones.style.background = "brown";
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
      botonNotificaciones.style.transform = "scale(1.1)";
      botonNotificaciones.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.4)";
    }
  });

  botonNotificaciones.addEventListener("mouseleave", () => {
    if (!botonDragging) {
      botonNotificaciones.style.transform = "none";
      botonNotificaciones.style.boxShadow = "0 3px 8px rgba(0, 0, 0, 0.2)";
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
  // 🧩 SISTEMA DE VERIFICACIÓN LOCAL
  // ============================
  function marcarVerificado() {
    localStorage.setItem("HIMNARIO_VERIFICADO", "true");
  }

  function estaVerificadoAntes() {
    return localStorage.getItem("HIMNARIO_VERIFICADO") === "true";
  }

  // ============================
  // 🟦 OBTENER VERSIÓN LOCAL REAL
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
    console.warn("❌ Versión antigua detectada - Sin sistema de versiones");
    return "0.0.0"; // Versión mínima para forzar bloqueo
  }

  // ============================
  // 🟩 OBTENER VERSIÓN REMOTA DESDE GITHUB
  // ============================
  async function obtenerVersionRemota() {
    try {
      const res = await fetch(
        "https://api.github.com/repos/proyectoja/HimnarioApp/releases/latest",
        { cache: "no-store" }
      );

      if (!res.ok) throw new Error("❌ No se pudo leer el release de GitHub");

      const data = await res.json();

      let ver = data.tag_name;
      if (!ver) return null;

      ver = ver.replace(/^v/i, "");
      return ver;
    } catch (err) {
      console.warn("❌ Error obteniendo versión remota desde GitHub:", err);
      return "SIN_INTERNET";
    }
  }

  // ============================
  // 🧮 COMPARADOR DE VERSIONES
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
  // 🔒 BLOQUEAR APLICACIÓN
  // ============================
  function bloquearApp() {
    const principal = document.querySelector(".contenedor-principal");
    if (principal) principal.style.display = "none";
    overlay.style.display = "flex";
  }

  // ============================
  // 🔍 VERIFICAR VERSIÓN
  // ============================
  async function verificarVersion() {
    const local = obtenerVersionLocal();
    const remota = await obtenerVersionRemota();

    // ============================================
    // ❗ VERSIÓN LOCAL INVÁLIDA O ANTIGUA (Validar esto PRIMERO para evitar crash)
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
    // 🚫 BLOQUEAR SI ES MENOR QUE 1.0.69
    // ============================================
    const versionMinima = "1.0.69";
    if (esMayorVersion(local, versionMinima)) {
      bloquearApp();
      console.warn("Versión local inferior a la mínima permitida:", local);
      return;
    }

    // ============================================
    // 🌐 SIN INTERNET
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
    // ❌ REMOTA ES MAYOR — bloquear
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
    // 🌟 VERIFICACIÓN EXITOSA
    // ============================================
    marcarVerificado();
    console.log("✔ Versión correcta — deteniendo verificaciones");
    clearInterval(intervaloVerificacion);
  }

  // ============================
  // 🎯 BOTÓN DESCARGAR UPDATE
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
