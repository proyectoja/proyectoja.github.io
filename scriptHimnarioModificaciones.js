document.body.style.backgroundColor = "transparent";
document.body.style.width = "100%";
document.body.style.height = "100%";

// 🔹 Lista de anuncios
const anuncios = [
  {
    colorFondo: "#fff0f0", // Fondo suave con tono rojo claro
    tituloText: "❤️ ¡Ayúdanos a mantener viva esta bendición!",
    textoText: "Esta aplicación fue creada con amor, dedicación y muchas horas de esfuerzo para bendecir a iglesias y clubes. 🙏 Cada suscripción o donación permite seguir mejorándola, sostener los servidores y continuar este ministerio. Si esta app te ha sido de ayuda, por favor, apóyanos hoy. ¡Tu apoyo hace una gran diferencia! 🌟",
    botonText: "💖 Apoyar o Suscribirme",
    botonLink: "https://www.paypal.com/donate/?hosted_button_id=B9TWARFHA7SWQ" // ← cambia por tu enlace real
  },
  {
    colorFondo: "#ffffff",
    tituloText: "🌿 ¡Forma parte de nuestra comunidad en WhatsApp!",
    textoText: "Recibe inspiración, noticias y novedades directamente en nuestro canal. Mantente siempre conectado con lo mejor ✨",
    botonText: "Unirme ahora",
    botonLink: "https://whatsapp.com/channel/0029VaDMfYK5fM5bmqhsxk0h"
  }
];

// 🔹 Función para crear un anuncio
function mostrarAnuncio(index) {
  if (index >= anuncios.length) return;

  const anuncio = anuncios[index];
  const ventana = document.createElement("div");

  ventana.style.display = "flex";
  ventana.style.flexDirection = "column";
  ventana.style.alignItems = "center";
  ventana.style.justifyContent = "center";
  ventana.style.position = "fixed";
  ventana.style.top = "0";
  ventana.style.left = "0";
  ventana.style.width = "100%";
  ventana.style.height = "100%";
  ventana.style.backgroundColor = anuncio.colorFondo;
  ventana.style.padding = "80px 100px";
  ventana.style.zIndex = "99998";
  ventana.style.boxSizing = "border-box";
  ventana.style.textAlign = "center";
  ventana.style.boxShadow = "inset 0 0 100px rgba(0,0,0,0.15)";
  ventana.style.transition = "opacity 0.5s ease";

  // ❌ Botón cerrar
  const cerrar = document.createElement("span");
  cerrar.innerHTML = "&times;";
  cerrar.style.cssText = `
    position: absolute;
    top: 25px;
    right: 35px;
    font-size: 60px;
    font-weight: bold;
    color: ${index === 0 ? "#d9534f" : "#25D366"};
    cursor: pointer;
    transition: color 0.2s;
  `;
  cerrar.onmouseover = () => cerrar.style.color = index === 0 ? "#b52b27" : "#1da851";
  cerrar.onmouseout = () => cerrar.style.color = index === 0 ? "#d9534f" : "#25D366";
  cerrar.onclick = () => {
    ventana.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(ventana);
      mostrarAnuncio(index + 1);
    }, 300);
  };
  ventana.appendChild(cerrar);

  // 💬 Título
  const titulo = document.createElement("h1");
  titulo.textContent = anuncio.tituloText;
  titulo.style.fontSize = "36px";
  titulo.style.fontFamily = "Arial, Helvetica, sans-serif";
  titulo.style.fontWeight = "bold";
  titulo.style.marginBottom = "40px";
  titulo.style.color = index === 0 ? "#c9302c" : "#25D366";
  titulo.style.lineHeight = "1.4";
  ventana.appendChild(titulo);

  // 📖 Texto
  const texto = document.createElement("p");
  texto.textContent = anuncio.textoText;
  texto.style.fontSize = "22px";
  texto.style.fontFamily = "Arial, Helvetica, sans-serif";
  texto.style.color = "#333";
  texto.style.lineHeight = "1.8";
  texto.style.maxWidth = "900px";
  texto.style.margin = "0 auto 60px";
  ventana.appendChild(texto);

  // 🔘 Botón
  const boton = document.createElement("a");
  boton.href = anuncio.botonLink;
  boton.target = "_blank";
  boton.textContent = anuncio.botonText;
  boton.style.cssText = `
    display: inline-block;
    background-color: ${index === 0 ? "#d9534f" : "#25D366"};
    color: white;
    padding: 20px 40px;
    border-radius: 15px;
    text-decoration: none;
    font-size: 24px;
    font-weight: bold;
    transition: background 0.3s, transform 0.2s;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0 6px 15px rgba(0,0,0,0.3);
  `;
  boton.onmouseover = () => {
    boton.style.backgroundColor = index === 0 ? "#b52b27" : "#1da851";
    boton.style.transform = "scale(1.05)";
  };
  boton.onmouseout = () => {
    boton.style.backgroundColor = index === 0 ? "#d9534f" : "#25D366";
    boton.style.transform = "scale(1)";
  };
  ventana.appendChild(boton);

  document.body.appendChild(ventana);
}

// ⏰ Mostrar el primer anuncio después de 20 segundos
setTimeout(() => {
  mostrarAnuncio(0);
}, 20000);




////////////////////////////////////////////
//BLOQUEO DEL HIMNARIO SI NO TIENEN LA ACTUALIZACIÓN MÁS RECIENTE
// Sistema de verificación de versión con GitHub Releases y bloqueo completo
class GitHubVersionChecker {
  constructor() {
    this.config = {
      repoOwner: 'proyectoja',
      repoName: 'HimnarioApp',
      checkInterval: 60000, // 1 minuto
      storageKey: 'himnario_version_data',
      maxRetries: 3
    };
    
    this.state = {
      currentVersion: null,
      latestVersion: null,
      downloadUrl: null,
      isUpdateRequired: false,
      retryCount: 0
    };
  }

  async init() {
    console.log('🔍 Iniciando verificador de versión...');
    
    // Obtener versión actual de la app
    await this.getCurrentVersion();
    
    // Verificar si hay datos en localStorage
    const cachedData = this.getCachedVersionData();
    
    if (cachedData && this.isCacheValid(cachedData)) {
      console.log('📦 Usando datos en caché:', cachedData);
      this.state.latestVersion = cachedData.latestVersion;
      this.state.downloadUrl = cachedData.downloadUrl;
      await this.checkVersionCompatibility();
    } else {
      await this.fetchLatestRelease();
    }
    
    // Iniciar verificación continua
    this.startContinuousChecking();
  }

  async getCurrentVersion() {
    try {
      if (window.electronAPI?.getAppVersion) {
        this.state.currentVersion = await window.electronAPI.getAppVersion();
        console.log('📱 Versión actual:', this.state.currentVersion);
      } else {
        // Fallback para desarrollo
        this.state.currentVersion = '1.0.23';
      }
    } catch (error) {
      console.error('❌ Error obteniendo versión actual:', error);
      this.state.currentVersion = '1.0.23';
    }
  }

  getCachedVersionData() {
    try {
      const cached = localStorage.getItem(this.config.storageKey);
      return cached ? JSON.parse(cached) : null;
    } catch (error) {
      return null;
    }
  }

  setCachedVersionData(data) {
    try {
      const cacheData = {
        ...data,
        timestamp: Date.now(),
        cacheDuration: 3600000 // 1 hora en milisegundos
      };
      localStorage.setItem(this.config.storageKey, JSON.stringify(cacheData));
    } catch (error) {
      console.error('❌ Error guardando en cache:', error);
    }
  }

  isCacheValid(cachedData) {
    const now = Date.now();
    const cacheAge = now - cachedData.timestamp;
    return cacheAge < (cachedData.cacheDuration || 3600000);
  }

  async fetchLatestRelease() {
    try {
      console.log('🌐 Consultando GitHub Releases...');
      
      const response = await fetch(
        `https://api.github.com/repos/${this.config.repoOwner}/${this.config.repoName}/releases/latest`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/vnd.github.v3+json',
            'Cache-Control': 'no-cache'
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const releaseData = await response.json();
      
      // Extraer versión del tag (eliminar 'v' si existe)
      this.state.latestVersion = releaseData.tag_name.replace(/^v/, '');
      this.state.downloadUrl = releaseData.html_url;
      
      console.log('✅ Última versión en GitHub:', this.state.latestVersion);
      
      // Guardar en cache
      this.setCachedVersionData({
        latestVersion: this.state.latestVersion,
        downloadUrl: this.state.downloadUrl
      });
      
      await this.checkVersionCompatibility();
      
    } catch (error) {
      console.error('❌ Error fetching GitHub release:', error);
      this.state.retryCount++;
      
      if (this.state.retryCount <= this.config.maxRetries) {
        console.log(`🔄 Reintentando en 30 segundos... (${this.state.retryCount}/${this.config.maxRetries})`);
        setTimeout(() => this.fetchLatestRelease(), 30000);
      } else {
        // En caso de error después de varios intentos, usar cache o permitir acceso
        const cached = this.getCachedVersionData();
        if (cached) {
          this.state.latestVersion = cached.latestVersion;
          this.state.downloadUrl = cached.downloadUrl;
          await this.checkVersionCompatibility();
        }
      }
    }
  }

  async checkVersionCompatibility() {
    if (!this.state.currentVersion || !this.state.latestVersion) {
      return;
    }

    console.log(`🔍 Comparando: ${this.state.currentVersion} vs ${this.state.latestVersion}`);
    
    const currentParts = this.state.currentVersion.split('.').map(Number);
    const latestParts = this.state.latestVersion.split('.').map(Number);
    
    // Comparación semántica de versiones
    for (let i = 0; i < Math.max(currentParts.length, latestParts.length); i++) {
      const current = currentParts[i] || 0;
      const latest = latestParts[i] || 0;
      
      if (latest > current) {
        this.state.isUpdateRequired = true;
        console.log('🚨 Actualización requerida detectada');
        this.showBlockingUpdateAlert();
        break;
      } else if (latest < current) {
        break; // Versión local es más nueva (desarrollo)
      }
    }
  }

  showBlockingUpdateAlert() {
    // Prevenir múltiples alertas
    if (document.getElementById('update-blocker-overlay')) {
      return;
    }

    // Crear overlay que bloquea toda la aplicación
    const overlay = document.createElement('div');
    overlay.id = 'update-blocker-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 99999;
      font-family: 'Arial', sans-serif;
      color: white;
    `;

    const alertContainer = document.createElement('div');
    alertContainer.style.cssText = `
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      padding: 40px;
      border-radius: 20px;
      max-width: 600px;
      text-align: center;
      border: 3px solid #ffeb3b;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
    `;

    const title = document.createElement('h1');
    title.textContent = '🔄 ACTUALIZACIÓN REQUERIDA';
    title.style.cssText = `
      color: #ffeb3b;
      font-size: 32px;
      margin: 0 0 20px 0;
      text-shadow: 0 2px 4px rgba(0,0,0,0.3);
    `;

    const versionInfo = document.createElement('div');
    versionInfo.style.cssText = `
      background: rgba(0,0,0,0.3);
      padding: 15px;
      border-radius: 10px;
      margin: 20px 0;
      font-size: 18px;
    `;
    versionInfo.innerHTML = `
      <div style="margin: 10px 0;">
        <strong>Versión actual:</strong> 
        <span style="color: #ff6b6b;">v${this.state.currentVersion}</span>
      </div>
      <div style="margin: 10px 0;">
        <strong>Nueva versión disponible:</strong> 
        <span style="color: #51cf66;">v${this.state.latestVersion}</span>
      </div>
    `;

    const message = document.createElement('div');
    message.style.cssText = `
      line-height: 1.6;
      margin: 25px 0;
      font-size: 16px;
      text-align: left;
    `;
    message.innerHTML = `
      <h3 style="color: #ffeb3b; margin-bottom: 15px;">⚠️ IMPORTANTE:</h3>
      <p>Para continuar usando el <strong>Himnario Adventista Pro</strong>, debes actualizar a la última versión.</p>
      
      <h4 style="color: #ffeb3b; margin: 20px 0 10px 0;">¿Qué incluye esta actualización?</h4>
      <ul style="text-align: left; margin-left: 20px;">
        <li>Nuevas funciones y mejoras</li>
        <li>Corrección de errores importantes</li>
        <li>Contenido multimedia actualizado</li>
        <li>Mejoras de seguridad y rendimiento</li>
      </ul>
    `;

    const buttonContainer = document.createElement('div');
    buttonContainer.style.cssText = `
      display: flex;
      gap: 15px;
      justify-content: center;
      margin-top: 30px;
      flex-wrap: wrap;
    `;

    const updateButton = document.createElement('button');
    updateButton.textContent = '🔄 ACTUALIZAR AHORA';
    updateButton.style.cssText = `
      background: linear-gradient(135deg, #51cf66, #2f9e44);
      color: white;
      border: none;
      padding: 15px 30px;
      border-radius: 50px;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 5px 15px rgba(81, 207, 102, 0.4);
    `;

    const manualButton = document.createElement('button');
    manualButton.textContent = '📥 DESCARGAR MANUALMENTE';
    manualButton.style.cssText = `
      background: linear-gradient(135deg, #339af0, #1c7ed6);
      color: white;
      border: none;
      padding: 15px 25px;
      border-radius: 50px;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s;
      box-shadow: 0 5px 15px rgba(51, 154, 240, 0.4);
    `;

    // Efectos hover
    [updateButton, manualButton].forEach(btn => {
      btn.onmouseover = () => {
        btn.style.transform = 'translateY(-2px)';
        btn.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
      };
      btn.onmouseout = () => {
        btn.style.transform = 'translateY(0)';
        btn.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
      };
    });

    // Acciones de los botones
    updateButton.onclick = async () => {
      updateButton.textContent = '⏳ ACTUALIZANDO...';
      updateButton.disabled = true;
      
      try {
        if (window.electronAPI?.quitAndInstallUpdate) {
          await window.electronAPI.quitAndInstallUpdate();
        } else {
          // Fallback: abrir en navegador
          window.open(this.state.downloadUrl, '_blank');
        }
      } catch (error) {
        console.error('Error durante la actualización:', error);
        window.open(this.state.downloadUrl, '_blank');
      }
    };

    manualButton.onclick = () => {
      window.open(this.state.downloadUrl, '_blank');
    };

    // Ensamblar todo
    buttonContainer.appendChild(updateButton);
    buttonContainer.appendChild(manualButton);
    
    alertContainer.appendChild(title);
    alertContainer.appendChild(versionInfo);
    alertContainer.appendChild(message);
    alertContainer.appendChild(buttonContainer);
    overlay.appendChild(alertContainer);
    
    // Bloquear completamente la aplicación
    document.body.style.overflow = 'hidden';
    document.body.appendChild(overlay);

    // Prevenir cualquier interacción con el contenido detrás
    overlay.onclick = (e) => e.stopPropagation();
  }

  startContinuousChecking() {
    console.log('🔄 Iniciando verificación continua cada', this.config.checkInterval, 'ms');
    
    setInterval(async () => {
      console.log('🔍 Verificación periódica de versión...');
      await this.fetchLatestRelease();
    }, this.config.checkInterval);
  }
}

// Inicialización automática cuando la página carga
document.addEventListener('DOMContentLoaded', async () => {
  // Pequeño delay para asegurar que Electron esté listo
  setTimeout(async () => {
    window.versionChecker = new GitHubVersionChecker();
    await window.versionChecker.init();
  }, 2000);
});

// También inicializar si el DOM ya está listo
if (document.readyState === 'interactive' || document.readyState === 'complete') {
  setTimeout(async () => {
    window.versionChecker = new GitHubVersionChecker();
    await window.versionChecker.init();
  }, 2000);
}