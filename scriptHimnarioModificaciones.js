document.body.style.backgroundColor = "transparent";
document.body.style.width = "100%";
document.body.style.height = "100%";

// Lista de anuncios en secuencia
const anuncios = [
  {
    colorFondo: "#ffffff", // Fondo blanco limpio
    tituloText: "🌿 ¡Forma parte de nuestra comunidad en WhatsApp!",
    textoText: "Recibe inspiración, noticias y novedades directamente en nuestro canal. Mantente siempre conectado con lo mejor ✨",
    botonText: "Unirme ahora",
    botonLink: "https://whatsapp.com/channel/0029VaDMfYK5fM5bmqhsxk0h"
  }
];

// Función para crear un anuncio
function mostrarAnuncio(index) {
  if (index >= anuncios.length) return; // No hay más anuncios

  const anuncio = anuncios[index];

  const ventana = document.createElement("div");
  ventana.style.display = "flex";
  ventana.style.flexDirection = "column";
  ventana.style.alignItems = "center";
  ventana.style.position = "fixed"; // fixed para que siempre quede centrada en la pantalla
  ventana.style.boxSizing = "border-box";
  ventana.style.width = "480px";
  ventana.style.backgroundColor = anuncio.colorFondo;

  // 🔹 centrado absoluto
  ventana.style.top = "50%";
  ventana.style.left = "50%";
  ventana.style.transform = "translate(-50%, -50%)";
  ventana.style.borderRadius = "1rem";
  ventana.style.padding = "25px";
  ventana.style.zIndex = "99998";
  ventana.style.boxShadow = "0 6px 20px rgba(0,0,0,0.25)";
  ventana.style.border = "2px solid #25D366"; // borde verde WhatsApp

  // Botón cerrar
  const cerrar = document.createElement("span");
  cerrar.innerHTML = "&times;";
  cerrar.style.cssText = `
    align-self: flex-end;
    font-size: 35px;
    font-weight: bold;
    color: #25D366;
    cursor: pointer;
    margin-bottom: 10px;
    transition: color 0.2s;
  `;
  cerrar.onmouseover = () => cerrar.style.color = "#1da851";
  cerrar.onmouseout = () => cerrar.style.color = "#25D366";
  cerrar.onclick = () => {
    document.body.removeChild(ventana);
    mostrarAnuncio(index + 1);
  };
  ventana.appendChild(cerrar);

  // Título
  const titulo = document.createElement("h1");
  titulo.textContent = anuncio.tituloText;
  titulo.style.fontSize = "22px";
  titulo.style.fontFamily = "Arial, Helvetica, sans-serif";
  titulo.style.fontWeight = "bold";
  titulo.style.textAlign = "center";
  titulo.style.width = "100%";
  titulo.style.marginBottom = "15px";
  titulo.style.color = "#25D366"; // verde motivador
  ventana.appendChild(titulo);

  // Texto
  const texto = document.createElement("p");
  texto.textContent = anuncio.textoText;
  texto.style.fontSize = "16px";
  texto.style.fontFamily = "Arial, Helvetica, sans-serif";
  texto.style.textAlign = "center";
  texto.style.marginBottom = "20px";
  texto.style.lineHeight = "1.5";
  texto.style.color = "#333"; // gris elegante
  ventana.appendChild(texto);

  // Botón
  const boton = document.createElement("a");
  boton.href = anuncio.botonLink;
  boton.target = "_blank";
  boton.textContent = anuncio.botonText;
  boton.style.cssText = `
    display: inline-block;
    background-color: #25D366;
    color: white;
    padding: 14px 22px;
    border-radius: 10px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    transition: background 0.3s;
    font-family: Arial, Helvetica, sans-serif;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  `;
  boton.onmouseover = () => boton.style.backgroundColor = "#1da851";
  boton.onmouseout = () => boton.style.backgroundColor = "#25D366";
  ventana.appendChild(boton);

  document.body.appendChild(ventana);
}

// Mostrar el primer anuncio después de 15 segundos
setTimeout(() => {
  mostrarAnuncio(0);
}, 20000);
