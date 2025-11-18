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
  // 🟦 OBTENER VERSIÓN LOCAL REAL
  // ============================
  function obtenerVersionLocal() {
    // Nuevo método → versión inyectada desde Electron
    if (window.__APP_VERSION__) {
      return window.__APP_VERSION__;
    }

    // Método viejo de compatibilidad
    const titulo = document.title;
    const match = titulo.match(/v(\d+\.\d+\.\d+)/);
    return match ? match[1] : undefined;
  }

  async function obtenerVersionRemota() {
    try {
      const url =
        "https://proyectoja.github.io/version.json?cache=" + Date.now();
      const res = await fetch(url, { cache: "no-store" });

      if (!res.ok) throw new Error("No se pudo obtener JSON remoto");

      const data = await res.json();
      return data.version || null;
    } catch (err) {
      console.warn("❌ Sin conexión o error obteniendo versión remota");
      return "SIN_INTERNET";
    }
  }

  function esMayorVersion(local, remota) {
    const a = local.split(".").map(Number);
    const b = remota.split(".").map(Number);

    for (let i = 0; i < 3; i++) {
      if ((a[i] || 0) < (b[i] || 0)) return true;
      if ((a[i] || 0) > (b[i] || 0)) return false;
    }
    return false;
  }

  function bloquearApp() {
    const principal = document.querySelector(".contenedor-principal");
    if (principal) principal.style.display = "none";
    overlay.style.display = "flex";
  }

  async function verificarVersion() {
    const local = obtenerVersionLocal();
    const remota = await obtenerVersionRemota();

    // 🔍 DEPURACIÓN
    alert(
      "📌 DEPURACIÓN DE VERSIÓN\n\n" +
      "Título detectado: " + document.title + "\n" +
      "Versión local detectada: " + local + "\n" +
      "Versión remota leída: " + remota
    );

    // 🟡 CASO 1 → Local undefined o vacía → NO PERMITIR USAR LA APP
    if (!local || local === "0.0.0") {
      console.log("⏳ Esperando que Electron exponga la versión (undefined)...");
      bloquearApp(); // SE BLOQUEA hasta tener versión válida
      return;
    }

    // 🚫 Si no hay internet NO bloquear
    if (remota === "SIN_INTERNET") {
      console.log("🌐 Sin conexión — no bloquear");
      return;
    }

    // ✔ Versión remota mayor → bloquear
    if (esMayorVersion(local, remota)) {
      bloquearApp();
      return;
    }

    // ✔ Todo correcto → detener verificaciones
    console.log("✔ Versión correcta — deteniendo verificaciones");
    clearInterval(intervaloVerificacion);
  }

  // ============================
  // 🎯 BOTÓN ACTUALIZAR
  // ============================
  setTimeout(() => {
    const btn = document.getElementById("btnActualizarHimnario");
    if (btn) {
      btn.onclick = () => {
        window.open("https://proyectoja.github.io/", "_blank");
      };
    }
  }, 100);

  // ============================
  // 🕐 INICIO DEL SISTEMA
  // ============================
  console.log("⏳ Esperando 30 segundos antes de verificar versiones...");

  setTimeout(() => {
    verificarVersion();
    intervaloVerificacion = setInterval(verificarVersion, 30000);
  }, 30000);

})();
