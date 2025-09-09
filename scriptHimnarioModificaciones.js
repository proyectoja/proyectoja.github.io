

function mostrarModalDonacion() {
    // Crear contenedor modal
    const modal = document.createElement("div");
    modal.id = "modalDonacion";
    modal.style.cssText = `
      position: fixed; 
      top: 0; left: 0; 
      width: 100%; height: 100%; 
      background: rgba(0,0,0,0.6); 
      display: flex; 
      align-items: center; 
      justify-content: center; 
      z-index: 99999;
    `;
  
    // Crear caja de contenido
    const contenido = document.createElement("div");
    contenido.style.cssText = `
      background: #fff; 
      padding: 20px; 
      border-radius: 12px; 
      max-width: 500px; 
      text-align: center; 
      box-shadow: 0 0 15px rgba(0,0,0,0.3); 
      font-family: sans-serif;
    `;
  
    // Botón cerrar
    const cerrar = document.createElement("span");
    cerrar.innerHTML = "&times;";
    cerrar.style.cssText = `
      float: right; 
      font-size: 22px; 
      cursor: pointer;
    `;
    cerrar.onclick = () => document.body.removeChild(modal);
  
    // Contenido del anuncio
    const titulo = document.createElement("h2");
    titulo.textContent = "✨ Queremos crecer juntos ✨";
  
    const p1 = document.createElement("p");
    p1.innerHTML = `Querido hermano, nuestro <strong>Himnario Adventista digital</strong> ha sido creado con mucho cariño para ser una herramienta de bendición en tu vida espiritual.`;
  
    const p2 = document.createElement("p");
    p2.innerHTML = `Actualmente necesitamos tu apoyo para adquirir una licencia de software en <strong>Mac</strong>, lo que nos permitirá distribuir el himnario también en ese sistema operativo.`;
  
    const p3 = document.createElement("p");
    p3.innerHTML = `<em>🙏 Tu donación hará posible que más hermanos y hermanas puedan alabar a Dios con esta herramienta.</em>`;
  
    const boton = document.createElement("a");
    boton.href = "https://paypal.me/proyectoja"; // <-- tu enlace aquí
    boton.target = "_blank";
    boton.textContent = "Donar ahora";
    boton.style.cssText = `
      display: inline-block; 
      background: #0070ba; 
      color: #fff; 
      padding: 12px 20px; 
      border-radius: 8px; 
      text-decoration: none; 
      margin: 15px 0; 
      font-weight: bold;
    `;
    boton.onmouseover = () => boton.style.background = "#005c99";
    boton.onmouseout = () => boton.style.background = "#0070ba";
  
    const cita = document.createElement("p");
    cita.innerHTML = `<small>“Dios ama al dador alegre” (2 Corintios 9:7)</small>`;
  
    // Ensamblar modal
    contenido.appendChild(cerrar);
    contenido.appendChild(titulo);
    contenido.appendChild(p1);
    contenido.appendChild(p2);
    contenido.appendChild(p3);
    contenido.appendChild(boton);
    contenido.appendChild(cita);
    modal.appendChild(contenido);
  
    // Insertar en el documento
    document.body.appendChild(modal);
  }
  
  
  

  document.body.style.backgroundColor = "transparent";
document.body.style.width = "100%";
document.body.style.height = "100%";

// Crear ventana modal
const ventana = document.createElement("div");
ventana.style.display = "flex";
ventana.style.flexDirection = "column";
ventana.style.alignItems = "center";
ventana.style.position = "absolute";
ventana.style.boxSizing = "border-box";
ventana.style.width = "500px";
ventana.style.backgroundColor = "white";
ventana.style.top = "20px";
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
  font-size: 22px;
  cursor: pointer;
  margin-bottom: 10px;
`;
cerrar.onclick = () => document.body.removeChild(ventana);
ventana.appendChild(cerrar);

// Título
const titulo = document.createElement("h1");
titulo.textContent = "📢 Únete a nuestro canal de WhatsApp";
titulo.style.fontSize = "24px";
titulo.style.fontFamily = "Arial, Helvetica, sans-serif";
titulo.style.fontWeight = "bold";
titulo.style.textAlign = "center";
titulo.style.width = "100%";
titulo.style.marginBottom = "15px";
ventana.appendChild(titulo);

// Texto invitación
const texto = document.createElement("p");
texto.textContent = "Recibe las últimas novedades y actualizaciones directamente en nuestro canal de WhatsApp.";
texto.style.fontSize = "16px";
texto.style.fontFamily = "Arial, Helvetica, sans-serif";
texto.style.textAlign = "center";
texto.style.marginBottom = "20px";
ventana.appendChild(texto);

// Botón WhatsApp
const boton = document.createElement("a");
boton.href = "https://whatsapp.com/channel/0029VaDMfYK5fM5bmqhsxk0h"; // <-- cambia por tu enlace real
boton.target = "_blank";
boton.textContent = "Seguir en WhatsApp";
boton.style.cssText = `
  display: inline-block;
  background-color: #25D366;
  color: white;
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  transition: background 0.3s;
  font-family: Arial, Helvetica, sans-serif;
`;
boton.onmouseover = () => boton.style.backgroundColor = "#1da851";
boton.onmouseout = () => boton.style.backgroundColor = "#25D366";
ventana.appendChild(boton);

// Insertar modal en el documento
document.body.appendChild(ventana);
// Mostrar modal automáticamente al cargar
window.onload = mostrarModalDonacion;
