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
    intervaloVerificacion = setInterval(verificarVersion, 10000);
  }, 120000);
})();
