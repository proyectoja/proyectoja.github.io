document.body.style.backgroundColor = "transparent";
document.body.style.width = "100%";
document.body.style.height = "100%";

// Lista de anuncios en secuencia
const anuncios = [
  {
    colorFondo: "#25D366",
    tituloText: "📢 Únete a nuestro canal de WhatsApp",
    textoText: "Recibe las últimas novedades y actualizaciones directamente en nuestro canal de WhatsApp.",
    botonText: "Seguir en WhatsApp",
    botonLink: "https://whatsapp.com/channel/0029VaDMfYK5fM5bmqhsxk0h"
  },
  {
    colorFondo: "#fff3cd",
    tituloText: "🚀 Próxima actualización",
    textoText: "Se está trabajando en una nueva actualización de este software. Mantente informado sobre el lanzamiento a través del canal oficial de nuestro ministerio en WhatsApp.",
    botonText: "Ver canal oficial",
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
  ventana.style.position = "absolute";
  ventana.style.boxSizing = "border-box";
  ventana.style.width = "500px";
  ventana.style.backgroundColor = anuncio.colorFondo;
  ventana.style.top = "100px";
  ventana.style.right = "20px";
  ventana.style.borderRadius = "1rem";
  ventana.style.padding = "20px";
  ventana.style.zIndex = "99998";
  ventana.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";

  // Botón cerrar
  const cerrar = document.createElement("span");
  cerrar.innerHTML = "&times;";
  cerrar.style.cssText = `
    align-self: flex-end;
    font-size: 30px;
    cursor: pointer;
    margin-bottom: 10px;
  `;
  cerrar.onclick = () => {
    document.body.removeChild(ventana);
    // Mostrar siguiente anuncio cuando se cierre
    mostrarAnuncio(index + 1);
  };
  ventana.appendChild(cerrar);

  // Título
  const titulo = document.createElement("h1");
  titulo.textContent = anuncio.tituloText;
  titulo.style.fontSize = "24px";
  titulo.style.fontFamily = "Arial, Helvetica, sans-serif";
  titulo.style.fontWeight = "bold";
  titulo.style.textAlign = "center";
  titulo.style.width = "100%";
  titulo.style.marginBottom = "15px";
  ventana.appendChild(titulo);

  // Texto
  const texto = document.createElement("p");
  texto.textContent = anuncio.textoText;
  texto.style.fontSize = "16px";
  texto.style.fontFamily = "Arial, Helvetica, sans-serif";
  texto.style.textAlign = "center";
  texto.style.marginBottom = "20px";
  ventana.appendChild(texto);

  // Botón
  const boton = document.createElement("a");
  boton.href = anuncio.botonLink;
  boton.target = "_blank";
  boton.textContent = anuncio.botonText;
  boton.style.cssText = `
    display: inline-block;
    background-color: ${anuncio.colorFondo === "#25D366" ? "#25D366" : "#007bff"};
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    transition: background 0.3s;
    font-family: Arial, Helvetica, sans-serif;
  `;
  boton.onmouseover = () => boton.style.backgroundColor = anuncio.colorFondo === "#25D366" ? "#1da851" : "#0056b3";
  boton.onmouseout = () => boton.style.backgroundColor = anuncio.colorFondo === "#25D366" ? "#25D366" : "#007bff";
  ventana.appendChild(boton);

  document.body.appendChild(ventana);
}

// Mostrar el primer anuncio después de 15 segundos
setTimeout(() => {
  mostrarAnuncio(0);
}, 15000);
