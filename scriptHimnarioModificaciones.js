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
    if (window.__APP_VERSION__) {
      return window.__APP_VERSION__;
    }

    const titulo = document.title;
    const match = titulo.match(/v(\d+\.\d+\.\d+)/);
    return match ? match[1] : undefined;
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

      // GitHub usa:  tag_name: "v1.0.28"
      let ver = data.tag_name;

      if (!ver) return null;

      // limpiar formato: "v1.0.28" → "1.0.28"
      ver = ver.replace(/^v/i, "");

      return ver;
    } catch (err) {
      console.warn("❌ Error obteniendo versión remota desde GitHub:", err);
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

    if (!local || local === "0.0.0") {
      bloquearApp();
      alert(
        "DEPURACIÓN DE VERSIÓN\n\n" +
        "Título detectado: " + document.title + "\n" +
        "Versión local detectada: " + local + "\n" +
        "Versión remota detectada: " + remota
      );
      return;
    }

    if (remota === "SIN_INTERNET") {
      console.log("🌐 Sin conexión — no bloquear");
      return;
    }

    if (esMayorVersion(local, remota)) {
      bloquearApp();
      alert(
        "DEPURACIÓN DE VERSIÓN\n\n" +
        "Título detectado: " + document.title + "\n" +
        "Versión local detectada: " + local + "\n" +
        "Versión remota detectada: " + remota
      );
      return;
    }

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
        descargarInstalador();
      };
    }
  }, 100);

  async function descargarInstalador() {
    try {
      // Obtener release más reciente
      const res = await fetch(
        "https://api.github.com/repos/proyectoja/HimnarioApp/releases/latest",
        { cache: "no-store" }
      );
  
      if (!res.ok) throw new Error("No se pudo leer el release");
  
      const data = await res.json();
  
      // Buscar el instalador (EXE, MSI, ZIP, etc.)
      const asset = data.assets?.find(a =>
        a.name.endsWith(".exe") ||
        a.name.endsWith(".msi") ||
        a.name.endsWith(".zip")
      );
  
      if (!asset) {
        alert("No se encontró ningún instalador en el release.");
        return;
      }
  
      // Descargar directamente
      window.location.href = asset.browser_download_url;
  
    } catch (err) {
      console.error(err);
      alert("Error al intentar descargar el instalador.");
    }
  }
  

  console.log("⏳ Esperando 30 segundos antes de verificar versiones...");

  setTimeout(() => {
    verificarVersion();
    intervaloVerificacion = setInterval(verificarVersion, 10000);
  }, 60000);

})();

