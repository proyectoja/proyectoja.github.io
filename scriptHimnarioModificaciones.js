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
