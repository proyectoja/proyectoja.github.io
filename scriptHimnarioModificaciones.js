(async function () {

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
  // 📌 OBTENER VERSIÓN LOCAL DESDE EL TÍTULO
  // ============================
  function obtenerVersionLocal() {
      const titulo = document.title;
      const match = titulo.match(/v(\d+\.\d+\.\d+)/);
      return match ? match[1] : "0.0.0"; 
  }


  // ============================
  // 📌 OBTENER VERSIÓN REMOTA DESDE version.json (RAW)
  // ============================
  async function obtenerVersionRemota() {
      try {
          const url = "https://proyectoja.github.io/version.json&cache=" + Date.now();

          const res = await fetch(url, {
              headers: {
                  "Accept": "application/json"
              }
          });

          const data = await res.json();
          return data.version || null;

      } catch (err) {
          console.warn("Error al obtener versión remota:", err);
          return null; 
      }
  }


  // ============================
  //- 🔍 COMPARAR VERSIONES
  // ============================
  function debeBloquear(local, remota) {
      if (!local || !remota) return true;

      const a = local.split(".").map(Number);
      const b = remota.split(".").map(Number);

      for (let i = 0; i < 3; i++) {
          if ((a[i] || 0) < (b[i] || 0)) return true;
          if ((a[i] || 0) > (b[i] || 0)) return false;
      }
      return false;
  }


  // ============================
  // 🔒 BLOQUEAR APP
  // ============================
  function bloquearApp() {
      const principal = document.querySelector(".contenedor-principal");
      if (principal) principal.style.display = "none";
      overlay.style.display = "flex";
  }


  // ============================
  // 🔄 VERIFICACIÓN CADA 10s
  // ============================
  async function verificarVersion() {
      const local = obtenerVersionLocal();
      const remota = await obtenerVersionRemota();

      if (debeBloquear(local, remota)) {
          bloquearApp();
      }
  }

  verificarVersion();
  setInterval(verificarVersion, 30000);

})();
