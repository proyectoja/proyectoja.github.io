(async function () {

  let intervaloVerificacion = null; // ⬅️ Guardamos el intervalo para poder detenerlo

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

  function obtenerVersionLocal() {
    const titulo = document.title;
    const match = titulo.match(/v(\d+\.\d+\.\d+)/);
    return match ? match[1] : "0.0.0";
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
      console.warn("Sin conexión o error obteniendo versión remota");
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

    // 🛑 Detener verificaciones cuando se bloquea
    clearInterval(intervaloVerificacion);
  }

  async function verificarVersion() {
    const local = obtenerVersionLocal();
    const remota = await obtenerVersionRemota();

    // 🚫 Si no hay internet → NO BLOQUEAR y seguir verificando
    if (remota === "SIN_INTERNET") {
      console.log("No hay conexión — continuar normal");
      return;
    }

    // ✔ Si la versión remota es mayor → bloquear
    if (esMayorVersion(local, remota)) {
      bloquearApp();
      return;
    }

    // ✔ Si la versión está bien → detener verificaciones
    console.log("Versión correcta — detener verificaciones");
    clearInterval(intervaloVerificacion);
  }

  // 🔘 Activar el botón
  setTimeout(() => {
    const btn = document.getElementById("btnActualizarHimnario");
    if (btn) {
      btn.onclick = () => {
        window.open("https://proyectoja.github.io/", "_blank");
      };
    }
  }, 100);

  // ============================
  // 🕐 Esperar 1 minuto antes de comenzar
  // ============================
  console.log("Esperando 1 minuto antes de verificar versiones...");

  setTimeout(() => {
    verificarVersion(); // Primera verificación
    intervaloVerificacion = setInterval(verificarVersion, 30000); // Luego cada 30s
  }, 60000); // 1 minuto (60000 ms)

})();
