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
  const notificaciones = [
    {
      id: 2,
      imagen: "promocionUno.png",
      titulo: "PROMOCIÓN EN NUESTRAS REDES SOCIALES",
      descripcion: "Puedes ir a nuestra página de Facebook y encontrar la información de nuestra promoción para obtener un código premium durante un año.",
      fecha: "2026-01-01",
      categoria: "promocion",
      leida: false
    },
    {
      id: 1,
      titulo: "🔔 Recordatorio de actualización",
      descripcion: "Mantén tu aplicación actualizada para disfrutar de todas las funciones y correcciones de seguridad. Este software está en constante actualización, cada semana se actualiza para mejorar la estabilización, optimización, diseño, características y funcionalidades potentes. No es un error que te llegue actualizaciones, es bueno que te lleguen, y puedas actualizar a la última versión siempre.",
      fecha: "2026-01-01",
      leida: false
    }
  ];

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
      <div style="padding: 25px 25px 15px 25px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
              <h2 style="margin: 0; font-size: 24px; font-weight: 600; display: flex; align-items: center; gap: 10px;">
                  <span style="font-size: 28px;">🔔</span> Notificaciones
              </h2>
              <button id="cerrarNotificaciones" style="
                  background: rgba(255, 255, 255, 0.15);
                  border: none;
                  color: white;
                  width: 36px;
                  height: 36px;
                  border-radius: 50%;
                  cursor: pointer;
                  font-size: 20px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  transition: all 0.2s ease;
              ">×</button>
          </div>
          <p style="margin: 0; opacity: 0.9; font-size: 14px;">Avisos:</p>
      </div>
      <div id="listaNotificaciones" style="
          flex: 1;
          overflow-y: auto;
          padding: 15px 25px;
          max-height: 400px;
      ">
          <!-- Notificaciones se cargarán aquí -->
      </div>
      <div style="
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
          ">Marcar todas como leídas</button>
      </div>
  `;

  document.body.appendChild(notificacionesOverlay);

  // Función para mostrar notificaciones
  function mostrarNotificaciones() {
    const lista = document.getElementById("listaNotificaciones");
    if (!lista) return;

    lista.innerHTML = '';
    
    notificaciones.forEach(notif => {
      const notifElement = document.createElement("div");
      notifElement.style.cssText = `
          background: ${notif.leida ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.1)'};
          border-radius: 12px;
          padding: 18px;
          margin-bottom: 12px;
          border-left: 4px solid ${notif.leida ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255,255,255,0.8)'};
          transition: all 0.3s ease;
          cursor: pointer;
      `;
      notifElement.onmouseenter = () => {
        notifElement.style.transform = 'translateX(-4px)';
        notifElement.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
      };
      notifElement.onmouseleave = () => {
        notifElement.style.transform = 'none';
        notifElement.style.boxShadow = 'none';
      };
      notifElement.onclick = () => {
        notif.leida = true;
        mostrarNotificaciones();
      };

      notifElement.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <h3 style="margin: 0; font-size: 16px; font-weight: 600; line-height: 1.4;">${notif.titulo}</h3>
              ${!notif.leida ? '<span style="background: #4ade80; color: white; padding: 2px 8px; border-radius: 12px; font-size: 11px; font-weight: 600;">NUEVO</span>' : ''}
          </div>
          <p style="margin: 0 0 10px 0; font-size: 14px; line-height: 1.5; opacity: 0.9;">${notif.descripcion}</p>
          <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 12px; opacity: 0.7;">${notif.fecha}</span>
              <span style="font-size: 12px; opacity: 0.7;">${notif.leida ? '✓ Leída' : 'Haz clic para marcar como leída'}</span>
          </div>
      `;

      lista.appendChild(notifElement);
    });

    notificacionesOverlay.style.display = 'flex';
    notificacionesOverlay.style.animation = 'slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
  }

  // Función para ocultar notificaciones
  function ocultarNotificaciones() {
    notificacionesOverlay.style.animation = 'slideOut 0.3s cubic-bezier(0.16, 1, 0.3, 1)';
    setTimeout(() => {
      notificacionesOverlay.style.display = 'none';
    }, 280);
  }

  // Función para marcar todas como leídas
  function marcarTodasLeidas() {
    notificaciones.forEach(notif => notif.leida = true);
    mostrarNotificaciones();
  }

  // Configurar eventos
  setTimeout(() => {
    const btnCerrar = document.getElementById("cerrarNotificaciones");
    const btnMarcarTodas = document.getElementById("marcarTodasLeidas");
    
    if (btnCerrar) {
      btnCerrar.onclick = ocultarNotificaciones;
      btnCerrar.onmouseenter = () => {
        btnCerrar.style.background = 'rgba(255, 255, 255, 0.25)';
        btnCerrar.style.transform = 'scale(1.1)';
      };
      btnCerrar.onmouseleave = () => {
        btnCerrar.style.background = 'rgba(255, 255, 255, 0.15)';
        btnCerrar.style.transform = 'none';
      };
    }
    
    if (btnMarcarTodas) {
      btnMarcarTodas.onclick = marcarTodasLeidas;
      btnMarcarTodas.onmouseenter = () => {
        btnMarcarTodas.style.background = 'rgba(255, 255, 255, 0.3)';
        btnMarcarTodas.style.transform = 'translateY(-2px)';
      };
      btnMarcarTodas.onmouseleave = () => {
        btnMarcarTodas.style.background = 'rgba(255, 255, 255, 0.2)';
        btnMarcarTodas.style.transform = 'none';
      };
    }
  }, 100);

  // Agregar estilos de animación
  const estiloAnimaciones = document.createElement('style');
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
          width: 6px;
      }
      
      #notificaciones-himnario::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
      }
      
      #notificaciones-himnario::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
      }
      
      #notificaciones-himnario::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
      }
  `;
  document.head.appendChild(estiloAnimaciones);

  // Mostrar notificaciones automáticamente después de 5 segundos
  setTimeout(() => {
    const hayNoLeidas = notificaciones.some(n => !n.leida);
    if (hayNoLeidas) {
      mostrarNotificaciones();
    }
  }, 5000);

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
        mensaje += "Esta es una versión MUY antigua del Himnario Adventista PRO\n";
        mensaje += "que no tiene sistema de versiones incorporado.\n\n";
      } else {
        mensaje += "No se pudo detectar la versión de la aplicación.\n\n";
      }
      
      mensaje += "Título de la página: " + document.title + "\n";
      mensaje += "Versión detectada: " + (local || "NO DETECTADA") + "\n";
      mensaje += "Versión remota disponible: " + (remota || "NO DISPONIBLE") + "\n\n";
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
  }, 120000);
})();
