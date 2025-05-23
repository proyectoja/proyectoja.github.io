var tituloAux;
let proyectoJaOnline = false; // Variable para almacenar el estado de "PROYECTO JA"

async function verificarProyectoJaEstado(username) {
  try {
    const response = await fetch(
      `https://api.picarto.tv/api/v1/channel/name/${username}`
    );
    const data = await response.json();
    if (data.online) {
      proyectoJaOnline = data.online; // Guardar el estado online del canal "PROYECTO JA"
      console.log("Prueba API: " + proyectoJaOnline);
    }
  } catch (error) {
    console.error("Error al verificar estado de PROYECTO JA:", error);
  }
}

// Función para obtener el día del año
function obtenerDiaDelAño() {
  const hoy = new Date();
  const inicioDelAño = new Date(hoy.getFullYear(), 0, 1); // 1 de enero del año actual
  const diff = hoy - inicioDelAño; // Diferencia en milisegundos
  const diaDelAño = Math.floor(diff / (1000 * 60 * 60 * 24)) + 1; // Convertir a días
  return diaDelAño;
}
function obtenerFechaActual() {
  const hoy = new Date();
  const anio = hoy.getFullYear();
  const mes = String(hoy.getMonth() + 1).padStart(2, "0"); // +1 porque los meses empiezan desde 0
  const dia = String(hoy.getDate()).padStart(2, "0");
  return `${anio}-${mes}-${dia}`; // Devuelve la fecha en formato YYYY-MM-DD
}

let contAux = 0;
// Función para mostrar el mensaje del día
function mostrarMensajeDelDia(mensajes, dia) {
  // Buscar el mensaje correspondiente al día
  const mensajeDelDia = mensajes.find((mensaje) => mensaje.dia === dia);
  let fechaAux = obtenerFechaActual();

  if (mensajeDelDia) {
    // Insertar los datos en el contenedor
    const container = document.getElementById("contenedor-publicaciones");

    const publicacionImage = document.createElement("div");
    publicacionImage.id = "publicacionImage";
    publicacionImage.className = "publicacionImage";

    const publicacionElem = document.createElement("div");
    publicacionElem.className = "publicacion";
    publicacionElem.id = "publicacion";
    /*if (contAux % 2 === 0) {
      publicacionElem.style.animation = "izquierda 2s ease-out forwards";
    } else {
      publicacionElem.style.animation = "derecha 2s ease-out forwards";
    }
    contAux += 1;*/

    const cabeceraElem = document.createElement("div");
    cabeceraElem.className = "cabecera-publicacion";

    const perfilElem = document.createElement("img");
    perfilElem.className = "perfil";
    perfilElem.src = mensajeDelDia.perfil || "default-profile.png";

    const infoElem = document.createElement("div");
    infoElem.className = "info-publicacion";

    const fusionPubCheckElem = document.createElement("div");
    fusionPubCheckElem.className = "fusionPubCheckElem";

    const publicadorElem = document.createElement("div");
    publicadorElem.className = "publicador";
    publicadorElem.textContent = mensajeDelDia.publicador || "Anónimo";

    const checkElem = document.createElement("img");
    checkElem.className = "check";
    checkElem.src = mensajeDelDia.check || "default-check.png";

    const fechaHoraElem = document.createElement("div");
    fechaHoraElem.className = "fecha-hora";
    fechaHoraElem.textContent = `${fechaAux || "Fecha desconocida"} - ${
      mensajeDelDia.hora || "Hora desconocida"
    }`;

    const tituloElem = document.createElement("div");
    tituloElem.className = "titulo";
    tituloElem.textContent = mensajeDelDia.titulo || "Sin título";
    tituloAux = mensajeDelDia.titulo;

    const contenidoElem = document.createElement("div");
    contenidoElem.className = "contenido";
    contenidoElem.textContent = mensajeDelDia.mensaje;

    const subContenidoElem = document.createElement("div");
    subContenidoElem.className = "subcontenido";
    const hoy = new Date();
    const anio = hoy.getFullYear();
    const mes = String(hoy.getMonth() + 1).padStart(2, "0"); // +1 porque los meses empiezan desde 0
    const dia = String(hoy.getDate()).padStart(2, "0");
    subContenidoElem.textContent = `© 2013-${anio} PROYECTO JA`;

    const redesSocialesElem = document.createElement("div");
    redesSocialesElem.className = "redes-sociales";

    if (mensajeDelDia.redes_sociales && mensajeDelDia.redes_sociales.whatsapp) {
      const whatsappBtn = document.createElement("button");
      whatsappBtn.className = "whatsapp";
      whatsappBtn.textContent = "WhatsApp";
      whatsappBtn.onclick = () =>
        window.open(mensajeDelDia.redes_sociales.whatsapp, "_blank");
      redesSocialesElem.appendChild(whatsappBtn);
    }

    if (mensajeDelDia.redes_sociales && mensajeDelDia.redes_sociales.facebook) {
      const facebookBtn = document.createElement("button");
      facebookBtn.className = "facebook";
      facebookBtn.textContent = "Facebook";
      facebookBtn.onclick = () =>
        window.open(mensajeDelDia.redes_sociales.facebook, "_blank");
      redesSocialesElem.appendChild(facebookBtn);
    }

    if (
      mensajeDelDia.redes_sociales &&
      mensajeDelDia.redes_sociales.instagram
    ) {
      const instagramBtn = document.createElement("button");
      instagramBtn.className = "instagram";
      instagramBtn.textContent = "Instagram";
      instagramBtn.onclick = () =>
        window.open(mensajeDelDia.redes_sociales.instagram, "_blank");
      redesSocialesElem.appendChild(instagramBtn);
    }

    if (mensajeDelDia.redes_sociales && mensajeDelDia.redes_sociales.youtube) {
      const youtubeBtn = document.createElement("button");
      youtubeBtn.className = "youtube";
      youtubeBtn.textContent = "You Tube";
      youtubeBtn.onclick = () =>
        window.open(mensajeDelDia.redes_sociales.youtube, "_blank");
      redesSocialesElem.appendChild(youtubeBtn);
    }

    if (mensajeDelDia.redes_sociales && mensajeDelDia.redes_sociales.tiktok) {
      const tiktokBtn = document.createElement("button");
      tiktokBtn.className = "tiktok";
      tiktokBtn.textContent = "Tik Tok";
      tiktokBtn.onclick = () =>
        window.open(mensajeDelDia.redes_sociales.tiktok, "_blank");
      redesSocialesElem.appendChild(tiktokBtn);
    }

    const botonesAccionElem = document.createElement("div");
    botonesAccionElem.className = "botones-accion";

    const descargarBtn = document.createElement("button");
    descargarBtn.className = "descargar";
    descargarBtn.textContent = "Descargar jpg";
    descargarBtn.onclick = () =>
      descargarImagen(publicacionImage, publicacionElem);

    const copiarBtn = document.createElement("button");
    copiarBtn.className = "copiar";
    copiarBtn.textContent = "Copiar png";
    copiarBtn.onclick = () => copiarImagen(publicacionImage, publicacionElem);

    const copiarTxt = document.createElement("button");
    copiarTxt.className = "copiar-texto";
    copiarTxt.textContent = "Copiar texto";
    copiarTxt.onclick = () => copiarTexto(publicacionImage);

    const imagenAleatoria = document.createElement("button");
    imagenAleatoria.className = "imagen-aleatoria";
    imagenAleatoria.id = "imagen-aleatoria";
    imagenAleatoria.textContent = "Generar Imagen";
    imagenAleatoria.onclick = () => imagenAleatoriaFuncion(publicacionImage);

    botonesAccionElem.appendChild(descargarBtn);
    botonesAccionElem.appendChild(copiarBtn);
    //botonesAccionElem.appendChild(copiarTxt);
    botonesAccionElem.appendChild(imagenAleatoria);

    fusionPubCheckElem.appendChild(publicadorElem);
    fusionPubCheckElem.appendChild(checkElem);
    infoElem.appendChild(fusionPubCheckElem);
    infoElem.appendChild(fechaHoraElem);
    // Aplicar el contorno rojo y estado "EN VIVO" si es PROYECTO JA y está online
    if (mensajeDelDia.publicador === "PROYECTO JA" && proyectoJaOnline) {
      const perfilContenedor = document.createElement("div");
      perfilContenedor.style.position = "relative"; // Necesario para el posicionamiento del indicador
      perfilContenedor.style.display = "inline-block";

      perfilElem.style.border = "4px solid red"; // Contorno rojo
      perfilElem.style.cursor = "pointer";
      perfilContenedor.appendChild(perfilElem);

      const liveIndicator = document.createElement("div");
      liveIndicator.textContent = "EN VIVO";
      liveIndicator.style.position = "absolute";
      liveIndicator.style.bottom = "-25px";
      liveIndicator.style.left = "9px";
      liveIndicator.style.transform = "translateX(-50%,0)";
      liveIndicator.style.backgroundColor = "red";
      liveIndicator.style.color = "white";
      liveIndicator.style.fontSize = "10px";
      liveIndicator.style.fontWeight = "bold";
      liveIndicator.style.fontFamily = "Arial, Helvetica, sans-serif";
      liveIndicator.style.padding = "2px 5px";
      liveIndicator.style.borderRadius = "3px";
      liveIndicator.style.textTransform = "uppercase";
      liveIndicator.style.textWrap = "nowrap";
      liveIndicator.style.zIndex = "0";

      perfilElem.addEventListener("mouseover", function () {
        perfilElem.style.boxShadow = "0px 0px 15px rgba(255, 0, 0, 0.7)"; // Aplica sombra
      });

      // Evento para cuando el cursor sale del perfil
      perfilElem.addEventListener("mouseout", function () {
        perfilElem.style.boxShadow = "none"; // Quita la sombra
      });

      perfilElem.onclick = () => {
        window.open(
          "https://proyectoja.github.io/embedClappr.html?video=https://edge1-us-miami.picarto.tv/stream/hls/golive%2bXSTUDIOCODE/0_1/index.m3u8&poster=https://i.imgur.com/ayIV94z.jpg",
          "_blank"
        );
      };
      perfilContenedor.appendChild(liveIndicator);
      cabeceraElem.appendChild(perfilContenedor);
    }
    cabeceraElem.appendChild(perfilElem);
    cabeceraElem.appendChild(infoElem);
    //Importante
    publicacionElem.appendChild(cabeceraElem);

    if (mensajeDelDia.imagen) {
      const imagenElem = document.createElement("img");
      imagenElem.className = "imagen-publicacion";
      imagenElem.src = mensajeDelDia.imagen;
      publicacionElem.appendChild(imagenElem);
    }

    publicacionElem.appendChild(tituloElem);
    publicacionElem.appendChild(contenidoElem);
    publicacionElem.appendChild(subContenidoElem);
    publicacionElem.appendChild(redesSocialesElem);
    publicacionElem.appendChild(botonesAccionElem);

    const ventanaFlotante = document.createElement("div");
    ventanaFlotante.className = "ventana-flotante";
    ventanaFlotante.innerHTML = `
                <h3 style="color:white; font-family: Arial, Helvetica, sans-serif;">${
                  mensajeDelDia.publicador
                }</h3>
                <p style="color:white; font-family: Arial, Helvetica, sans-serif;">
                    Estado: ${
                      mensajeDelDia.publicador === "PROYECTO JA" &&
                      proyectoJaOnline
                        ? '<span style="color:red;">EN VIVO 🔴</span>'
                        : "Fuera de línea"
                    }
                </p>
                `;

    // Estilo para la ventana flotante
    ventanaFlotante.style.padding = "auto";
    ventanaFlotante.style.position = "absolute";
    ventanaFlotante.style.backgroundColor = "#003399";
    ventanaFlotante.style.border = "3px solid #ccc";
    ventanaFlotante.style.borderRadius = "15px";
    ventanaFlotante.style.padding = "10px";
    ventanaFlotante.style.zIndex = "1000";
    ventanaFlotante.style.display = "none"; // Inicialmente oculto

    // Agregar la ventana flotante al documento
    document.body.appendChild(ventanaFlotante);

    // Función para mostrar la ventana flotante
    perfilElem.addEventListener("mouseover", (event) => {
      ventanaFlotante.style.display = "block";
      // Posicionar la ventana cerca del perfil
      ventanaFlotante.style.left = `${event.pageX + 20}px`;
      ventanaFlotante.style.top = `${event.pageY + 20}px`;
    });

    // Función para ocultar la ventana flotante
    perfilElem.addEventListener("mouseout", () => {
      ventanaFlotante.style.display = "none";
    });

    publicacionImage.appendChild(publicacionElem);
    container.appendChild(publicacionImage);
  } else {
    document.getElementById("mensajeContainer").innerHTML =
      "<p>No hay mensaje para hoy.</p>";
  }
}

// Cargar el archivo JSON y mostrar el mensaje correspondiente al día actual
// URL del archivo JSON
const jsonUrlPROYECTOJA =
  "https://proyectoja.github.io/proyecto_ja_001_365.json";
const jsonUrlELLENWHITE =
  "https://proyectoja.github.io/ellen_g_white_001_365.json";
const jsonUrlDios = "https://proyectoja.github.io/Dios_001_365.json";
const jsonUrlPsicologiaPositiva =
  "https://proyectoja.github.io/psicologia_positiva_001_365.json";
const jsonUrlOraciones = "https://proyectoja.github.io/oraciones_001_365.json";
const jsonUrlDeJovenAJoven = "https://proyectoja.github.io/de_joven_a_joven_001_365.json";

function cargarNotaPROYECTOJA() {
  fetch(jsonUrlPROYECTOJA)
    .then((response) => response.json())
    .then((mensajes) => {
      const diaActual = obtenerDiaDelAño(); // Obtener el día actual del año
      mostrarMensajeDelDia(mensajes, diaActual); // Mostrar el mensaje correspondiente al día
    })
    .catch((error) => {
      console.error("Error al cargar el JSON:", error);
    });
}

function cargarNotaELLENWHITE() {
  fetch(jsonUrlELLENWHITE)
    .then((response) => response.json())
    .then((mensajes) => {
      const diaActual = obtenerDiaDelAño(); // Obtener el día actual del año
      mostrarMensajeDelDia(mensajes, diaActual); // Mostrar el mensaje correspondiente al día
    })
    .catch((error) => {
      console.error("Error al cargar el JSON:", error);
    });
}

function cargarNotaDios() {
  fetch(jsonUrlDios)
    .then((response) => response.json())
    .then((mensajes) => {
      const diaActual = obtenerDiaDelAño(); // Obtener el día actual del año
      mostrarMensajeDelDia(mensajes, diaActual); // Mostrar el mensaje correspondiente al día
    })
    .catch((error) => {
      console.error("Error al cargar el JSON:", error);
    });
}

function cargarNotaPsicologiaPositiva() {
  fetch(jsonUrlPsicologiaPositiva)
    .then((response) => response.json())
    .then((mensajes) => {
      const diaActual = obtenerDiaDelAño(); // Obtener el día actual del año
      mostrarMensajeDelDia(mensajes, diaActual); // Mostrar el mensaje correspondiente al día
    })
    .catch((error) => {
      console.error("Error al cargar el JSON:", error);
    });
}

function cargarNotaOraciones() {
  fetch(jsonUrlOraciones)
    .then((response) => response.json())
    .then((mensajes) => {
      const diaActual = obtenerDiaDelAño(); // Obtener el día actual del año
      mostrarMensajeDelDia(mensajes, diaActual); // Mostrar el mensaje correspondiente al día
    })
    .catch((error) => {
      console.error("Error al cargar el JSON:", error);
    });
}

function cargarNotaDeJovenAJoven() {
  fetch(jsonUrlDeJovenAJoven)
    .then((response) => response.json())
    .then((mensajes) => {
      const diaActual = obtenerDiaDelAño(); // Obtener el día actual del año
      mostrarMensajeDelDia(mensajes, diaActual); // Mostrar el mensaje correspondiente al día
    })
    .catch((error) => {
      console.error("Error al cargar el JSON:", error);
    });
}

// Asumiendo que 'username' está definido
const username = "XSTUDIOCODE"; //
verificarProyectoJaEstado(username).then(function () {
  cargarNotaPROYECTOJA();
  cargarNotaELLENWHITE();
  cargarNotaDios();
  cargarNotaPsicologiaPositiva();
  cargarNotaOraciones();
  cargarNotaDeJovenAJoven();
});

function imagenAleatoriaFuncion(elemento) {
  let imageAux = `https://picsum.photos/id/${Math.floor(
    Math.random() * 1000
  )}/1080`;
  elemento.style.backgroundImage = `url("${imageAux}")`;
  console.log(imageAux);
}

function copiarTexto(elemento) {
  const titulo = elemento.querySelector(".titulo").textContent;
  const contenido = elemento.querySelector(".contenido").textContent;
  const subcontenido = elemento.querySelector(".subcontenido").textContent;
  const publicador = elemento.querySelector(".publicador").textContent;

  const texto = `*${titulo} | ${publicador}*\n\n_${contenido}_\n\n*${subcontenido}*\n${"https://proyectoja.github.io/"}`;

  navigator.clipboard
    .writeText(texto)
    .then(() => {
      alert("Texto copiado al portapapeles");
    })
    .catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
}

function descargarImagen(elemento, pub) {
  // Encuentra la imagen dentro del elemento
  const imagenElem = elemento.querySelector(".imagen-publicacion");
  if (imagenElem) {
    imagenElem.style.maxWidth = "100%";
  }

  const copiaElem = elemento.cloneNode(true);

  if (pub.offsetHeight > 490) {
    copiaElem.style.position = "fixed"; // Asegurar que se posicione en el viewport
    copiaElem.style.top = "0";
    copiaElem.style.left = "0";
    copiaElem.style.width = "500px";
    copiaElem.style.height = "100%";
    copiaElem.style.minHeight = "1200px";
    copiaElem.style.overflow = "hidden";
    copiaElem.style.zIndex = "1";
    copiaElem.style.borderRadius = "0rem";
  } else {
    copiaElem.style.position = "fixed"; // Asegurar que se posicione en el viewport
    copiaElem.style.top = "0";
    copiaElem.style.left = "0";
    copiaElem.style.width = "500px";
    copiaElem.style.height = "100%";
    copiaElem.style.minHeight = "500px";
    copiaElem.style.overflow = "hidden";
    copiaElem.style.zIndex = "1";
    copiaElem.style.borderRadius = "0rem";
  }

  // Ocultar botones antes de la captura
  ocultarBotones(copiaElem);

  // Ajustar el estilo del contenedor para la captura
  document.body.appendChild(copiaElem);

  html2canvas(copiaElem, {
    scale: 3,
    useCORS: true,
  }).then((canvas) => {
    const imgData = canvas.toDataURL("image/jpeg", 1.0);
    const link = document.createElement("a");
    link.href = imgData;
    link.download = "publicación.jpg";
    link.click();

    // Eliminar la copia del contenedor después de la descarga
    document.body.removeChild(copiaElem);

    // Mostrar botones después de la captura
    mostrarBotones(elemento);

    // Restaura el max-width original
    if (imagenElem) {
      imagenElem.style.maxWidth = "300px";
    }
  });
}

function copiarImagen(elemento, pub) {
  // Encuentra la imagen dentro del elemento
  const imagenElem = elemento.querySelector(".imagen-publicacion");
  if (imagenElem) {
    imagenElem.style.maxWidth = "100%";
  }
  const copiaElem = elemento.cloneNode(true);

  if (pub.offsetHeight > 490) {
    copiaElem.style.position = "fixed"; // Asegurar que se posicione en el viewport
    copiaElem.style.top = "0";
    copiaElem.style.left = "0";
    copiaElem.style.width = "500px";
    copiaElem.style.height = "100%";
    copiaElem.style.minHeight = "1200px";
    copiaElem.style.overflow = "hidden";
    copiaElem.style.zIndex = "1";
    copiaElem.style.borderRadius = "0rem";
  } else {
    copiaElem.style.position = "fixed"; // Asegurar que se posicione en el viewport
    copiaElem.style.top = "0";
    copiaElem.style.left = "0";
    copiaElem.style.width = "500px";
    copiaElem.style.height = "100%";
    copiaElem.style.minHeight = "500px";
    copiaElem.style.overflow = "hidden";
    copiaElem.style.zIndex = "1";
    copiaElem.style.borderRadius = "0rem";
  }

  // Ocultar botones antes de la captura
  ocultarBotones(copiaElem);

  // Ajustar el estilo del contenedor para la captura
  document.body.appendChild(copiaElem);

  html2canvas(copiaElem, {
    scale: 3,
    useCORS: true,
  }).then((canvas) => {
    canvas.toBlob((blob) => {
      const item = new ClipboardItem({ "image/png": blob });
      navigator.clipboard
        .write([item])
        .then(() => {
          alert("Imagen copiada al portapapeles");
        })
        .catch((err) => {
          console.error("Error al copiar al portapapeles: ", err);
        });

      // Eliminar la copia del contenedor después de copiar
      document.body.removeChild(copiaElem);

      // Mostrar botones después de la captura
      mostrarBotones(elemento);

      // Restaura el max-width original
      if (imagenElem) {
        imagenElem.style.maxWidth = "300px";
      }
    }, "image/png");
  });
}

function ocultarBotones(elemento) {
  // Encuentra y oculta los botones dentro del elemento
  const botones = elemento.querySelectorAll(".botones-accion");
  botones.forEach((boton) => (boton.style.display = "none"));
}

function mostrarBotones(elemento) {
  // Muestra los botones dentro del elemento
  const botones = elemento.querySelectorAll(".botones-accion");
  botones.forEach((boton) => (boton.style.display = ""));
}

//Función para desplazar la barra lateral
function toggle() {
  const barraCentral = document.getElementById("barraCentral");
  const barraCentralContenido = document.getElementById(
    "barraCentralContenido"
  );
  const iconMenu = document.getElementById("icon-menu");
  iconMenu.addEventListener("mouseover", () => {
    barraCentral.classList.add("activo");
    barraCentralContenido.classList.add("activo");
  });
  barraCentralContenido.addEventListener("mouseleave", () => {
    barraCentralContenido.classList.remove("activo");
    setTimeout(() => {
      barraCentral.classList.remove("activo");
    }, 1000);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  toggle();
});

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

//Creación dinámica de las categorías del menú en todas las páginas
document.addEventListener("DOMContentLoaded", function () {
  const contenedor = document.getElementById("barraCentralContenido");

  // Crear el contenedor principal
  const fragmento = document.createDocumentFragment();

  // Crear y agregar elementos de forma segura
  const divLogo = document.createElement("div");
  divLogo.className = "icon-logo1";
  const imgLogo = document.createElement("img");
  imgLogo.src = "logo1.png";
  imgLogo.alt = "inicio";
  divLogo.appendChild(imgLogo);
  fragmento.appendChild(divLogo);

  function crearEnlace(href, id, imgSrc, texto) {
    const enlace = document.createElement("a");
    enlace.href = href;
    enlace.className = "contenedor-categoria";
    enlace.id = id;

    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = texto.toLowerCase();

    const span = document.createElement("span");
    span.textContent = texto;

    enlace.appendChild(img);
    enlace.appendChild(span);
    return enlace;
  }

  // Agregar enlaces |               href     id        imgSrc        texto
  fragmento.appendChild(
    crearEnlace("//proyectoja.github.io", "inicio", "inicio.png", "Inicio")
  );
  fragmento.appendChild(
    crearEnlace("devocional", "devocional", "devocional.png", "Devocional")
  );
  fragmento.appendChild(
    crearEnlace("television", "television", "television.png", "Televisión")
  );
  fragmento.appendChild(crearEnlace("radio", "radio", "radio.png", "Radio"));

  // Agregar todo al contenedor sin perder datos previos
  contenedor.appendChild(fragmento);

  ///////////////////////////////////
  //Creacción anuncio encima para la barra inferior para todas las páginas
  const contenedorBarraAnuncio = document.querySelector(
    ".contenedor-barra-inferior"
  );
  const contenedorAnuncio1 = document.createElement('div')
  contenedorAnuncio1.id = 'contenedorAnuncio1';
  contenedorBarraAnuncio.appendChild(contenedorAnuncio1);
  const anuncioElem1 = document.createElement("div");
  anuncioElem1.id = "anuncio-container1";
  contenedorAnuncio1.appendChild(anuncioElem1);
  const anuncioElem11 = document.createElement("div");
  anuncioElem11.id = "anuncio-container11";
  contenedorAnuncio1.appendChild(anuncioElem11);
  const anuncioElem111 = document.createElement("div");
  anuncioElem111.id = "anuncio-container111";
  contenedorAnuncio1.appendChild(anuncioElem111);


  const anuncioElem2 = document.createElement("div");
  anuncioElem2.id = "anuncio-container2";
  
  const anuncioElem3 = document.createElement("div");
  anuncioElem3.id = "anuncio-container3";
  
  anunciosAdsterra();
});

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

//FUNCIONES CANALES DE TELEVISIÓN | IMPORTANTE*
const videoContainer = document.getElementById("contenedor-canales");
const radiosContainer = document.getElementById("contenedor-canales-radios");

// Función para cargar los datos desde el archivo JSON
fetch("contenido.json")
  .then((response) => response.json()) // Convierte la respuesta en JSON
  .then((data) => {
    //Modificar y validar según se agregen categorías del menú
    if (videoContainer) {
      data.television.forEach((video) => {
        crearCarteles(video);
      });
    } else if (radiosContainer) {
      data.radios.forEach((radios) => {
        crearCarteles(radios);
      });
    }
  })
  .catch((error) => {
    console.error("Error al cargar el archivo JSON:", error);
  });

function crearCarteles(cartel) {
  const videoItem = document.createElement("div");
  videoItem.classList.add("contenedor-canal");
  videoItem.onclick = function () {
    window.open("stream?id=" + encodeURIComponent(cartel.id), "_self");
  };

  const poster = document.createElement("img");
  poster.src = cartel.perfilCanal;
  poster.alt = cartel.nombreCanal;
  poster.style.cursor = "pointer";

  const title = document.createElement("h3");
  title.textContent = cartel.nombreCanal;

  videoItem.appendChild(poster);
  videoItem.appendChild(title);

  //Modificar y validar según se agregen categorías del menú
  if (videoContainer) {
    videoContainer.appendChild(videoItem);
  } else if (radiosContainer) {
    radiosContainer.appendChild(videoItem);
  }
}

// Función para obtener parámetros de la URL
function obtenerParametro(parametro) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(parametro);
}

/////////////////////////////////

////////////////////////////////

// Obtener el ID de la URL
const idVideo = obtenerParametro("id");

// Cargar el JSON y encontrar el video correspondiente
fetch("contenido.json")
  .then((response) => response.json())
  .then((data) => {
    // Buscar el video por ID
    const videoEncontrado = Object.values(data)
      .flat()
      .find((video) => video.id === idVideo);

    if (videoEncontrado) {
      // Construir la URL del reproductor con los parámetros
      const iframeSrc = `embedClappr.html?url=${encodeURIComponent(
        videoEncontrado.url
      )}&poster=${encodeURIComponent(
        videoEncontrado.poster
      )}&perfilCanal=${encodeURIComponent(
        videoEncontrado.perfilCanal
      )}&nombreCanal=${encodeURIComponent(videoEncontrado.nombreCanal)}&id=${
        videoEncontrado.id
      }`;

      // Crear el elemento iframe
      const iframe = document.createElement("iframe");
      iframe.src = iframeSrc;
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.allowFullscreen = true;
      iframe.frameBorder = "0";

      // Insertar el iframe en el contenedor
      document.getElementById("contenedor-stream").appendChild(iframe);

      const titulo = document.getElementById("titulo");
      titulo.textContent = videoEncontrado.titulo;
      document.title = videoEncontrado.titulo;

      const perfil = document.getElementById("perfil");
      perfil.src = videoEncontrado.perfilCanal;

      const nombreCanal = document.getElementById("nombreCanal");
      nombreCanal.textContent = videoEncontrado.nombreCanal;

      const descripcion = document.getElementById("descripcion");
      descripcion.textContent = videoEncontrado.descripcion;

      const checkVerificado = document.getElementById("checkVerificado");
      checkVerificado.src = videoEncontrado.checkVerificado;

      const seguidores = document.getElementById("seguidores");
      if (videoEncontrado.seguidores) {
        seguidores.textContent =
          videoEncontrado.seguidores + " " + "de seguidores";
      }

      const miniatura = document.getElementById("miniatura");
      miniatura.src = videoEncontrado.miniatura;

      const contenedorCartel = document.getElementById("contenedorCartel");
      contenedorCartel.style.backgroundImage = `url('${videoEncontrado.poster}')`;

      if (videoEncontrado.poster) {
        document.body.style.backgroundImage = `url('${videoEncontrado.poster}')`;
      } else {
        document.body.style.backgroundImage = "url('poster/proyecto-ja.jpg')";
      }

      const tituloPoster = document.getElementById("tituloPoster");
      tituloPoster.textContent = videoEncontrado.titulo;

      const fechaPoster = document.getElementById("fechaPoster");
      fechaPoster.textContent = "Fecha: " + videoEncontrado.fecha;

      const paisPoster = document.getElementById("paisPoster");
      paisPoster.textContent = "País: " + videoEncontrado.pais;

      const fecha = document.getElementById("fecha");
      fecha.textContent = "Fecha de creación: " + videoEncontrado.fecha;

      const pais = document.getElementById("pais");
      pais.textContent = "Pais de origen: " + videoEncontrado.pais;

      if (videoEncontrado.calidad) {
        const calidad = document.getElementById("calidad");
        const calidadPoster = document.getElementById("calidadPoster");

        switch (videoEncontrado.calidad.toString().trim()) {
          case "1":
            calidad.textContent = "Calidad: SD";
            calidadPoster.textContent = "Calidad: SD";
            break;
          case "2":
            calidad.textContent = "Calidad: HD";
            calidadPoster.textContent = "Calidad: HD";
            break;
          case "3":
            calidad.textContent = "Calidad: FULLHD";
            calidadPoster.textContent = "Calidad: FULLHD";
            break;
          case "4":
            calidad.textContent = "Calidad: 60FPS";
            calidadPoster.textContent = "Calidad: 60FPS";
            break;
          default:
            calidad.textContent = "Calidad: Desconocida";
            calidadPoster.textContent = "Calidad: Desconocida";
            break;
        }
      }

      document
        .querySelector('meta[property="og:title"]')
        .setAttribute("content", videoEncontrado.titulo);
      document
        .querySelector('meta[property="og:description"]')
        .setAttribute("content", videoEncontrado.descripcion);
      document
        .querySelector('meta[property="og:url"]')
        .setAttribute(
          "content",
          "https://proyectoja.github.io/stream?id=" + videoEncontrado.id
        );
      document
        .querySelector('meta[property="og:image"]')
        .setAttribute("content", videoEncontrado.poster);
    } else {
      document.getElementById("").innerHTML = "<p>Video no encontrado</p>";
    }
  })
  .catch((error) => {
    console.error("Error al cargar el JSON:", error);
    document.getElementById("").innerHTML = "<p>Error al cargar los datos.</p>";
  });

//Por defecto imagen de fondo en el body
document.body.style.backgroundImage = "url('poster/proyecto-ja.jpg')";

const verAhora = document.getElementById("contenedorVerAhora");
const contenedorCartel = document.getElementById("contenedorCartel");
const contenedorStreamPrincipal = document.getElementById(
  "contenedorStreamPrincipal"
);

verAhora.addEventListener("click", function () {
  contenedorCartel.style.display = "none";
  contenedorStreamPrincipal.style.display = "flex";
});

//Carga rápida y primaria con el Dow
document.addEventListener("DOMContentLoaded", function () {});

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
//MANEJADOR AUTOMÁTICO DE ANUNCIOS PUBLICITARIOS

function anunciosAdsterra() {
  let contador = 0; // Contador para llevar el seguimiento del número de veces que se han mostrado los anuncios
  const limite = 10; // Número de veces que los anuncios se mostrarán antes de la pausa
  const pausa = 5 * 60 * 1000; // 5 minutos en milisegundos
  let intervaloID; // Variable para almacenar el ID del intervalo

  // Función para actualizar los anuncios
  function actualizarAnuncios() {
    if (contador < limite) {
      // Actualizar los tres anuncios
      actualizarAnuncio1();
      setTimeout(actualizarAnuncio2, 500);
      setTimeout(actualizarAnuncio3, 1000);
      contador++;
    } else {
      // Pausa de 5 minutos
      console.log("Pausa de 5 minutos...");
      setTimeout(() => {
        contador = 0; // Reiniciar el contador después de la pausa
        console.log("Reiniciando presentación de anuncios...");
        actualizarAnuncios(); // Volver a mostrar los anuncios después de la pausa
      }, pausa);
    }
  }

  // Funciones para actualizar cada uno de los anuncios
  function actualizarAnuncio1() {
    const anuncioContainer = document.getElementById("anuncio-container1");
    anuncioContainer.innerHTML = "";

    const scriptElem = document.createElement("script");
    scriptElem.type = "text/javascript";
    window.atOptions = {
      key: "5f392f22d133fff7ad6704df675beeb2",
      format: "iframe",
      height: 60,
      width: 468,
      params: {},
    };
    scriptElem.src =
      "//www.profitablecreativeformat.com/5f392f22d133fff7ad6704df675beeb2/invoke.js";
    anuncioContainer.appendChild(scriptElem);



    const anuncioContainer11 = document.getElementById("anuncio-container11");
    anuncioContainer11.innerHTML = "";

    setTimeout(() => {
      const scriptElem11 = document.createElement("script");
    scriptElem11.type = "text/javascript";
    window.atOptions = {
      key: "5f392f22d133fff7ad6704df675beeb2",
      format: "iframe",
      height: 60,
      width: 468,
      params: {},
    };
    scriptElem11.src =
      "//www.profitablecreativeformat.com/5f392f22d133fff7ad6704df675beeb2/invoke.js";
    anuncioContainer11.appendChild(scriptElem11);
    }, 500);



    const anuncioContainer111 = document.getElementById("anuncio-container111");
    anuncioContainer111.innerHTML = "";

    setTimeout(() => {
      const scriptElem111 = document.createElement("script");
    scriptElem111.type = "text/javascript";
    window.atOptions = {
      key: "5f392f22d133fff7ad6704df675beeb2",
      format: "iframe",
      height: 60,
      width: 468,
      params: {},
    };
    scriptElem111.src =
      "//www.profitablecreativeformat.com/5f392f22d133fff7ad6704df675beeb2/invoke.js";
    anuncioContainer111.appendChild(scriptElem111);
    }, 1000);
  }

  function actualizarAnuncio2() {
    const anuncioContainer = document.getElementById("anuncio-container2");
    anuncioContainer.innerHTML = "";

    const scriptElem = document.createElement("script");
    scriptElem.type = "text/javascript";
    window.atOptions = {
      key: "5087bca611db89252f1fe5a993e26a54",
      format: "iframe",
      height: 90,
      width: 728,
      params: {},
    };
    scriptElem.src =
      "//www.topcreativeformat.com/5087bca611db89252f1fe5a993e26a54/invoke.js";
    anuncioContainer.appendChild(scriptElem);
  }

  function actualizarAnuncio3() {
    const anuncioContainer = document.getElementById("anuncio-container3");
    anuncioContainer.innerHTML = "";

    const scriptElem = document.createElement("script");
    scriptElem.type = "text/javascript";
    window.atOptions = {
      key: "1d1ae1152780bd736b475f226c17a8a6",
      format: "iframe",
      height: 600,
      width: 160,
      params: {},
    };
    scriptElem.src =
      "//www.topcreativeformat.com/1d1ae1152780bd736b475f226c17a8a6/invoke.js";
    anuncioContainer.appendChild(scriptElem);
  }

  // Función para iniciar la actualización de anuncios
  function iniciarActualizacion() {
    if (!intervaloID) {
      console.log("Iniciando actualización de anuncios...");
      intervaloID = setInterval(actualizarAnuncios, 20000);
    }
  }

  // Función para detener la actualización de anuncios
  function detenerActualizacion() {
    if (intervaloID) {
      clearInterval(intervaloID);
      intervaloID = null;
      console.log("Actualización de anuncios detenida.");
    }
  }

  // Detectar cuando la pestaña está visible o el mouse está en la pestaña
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
      iniciarActualizacion();
    } else {
      detenerActualizacion();
    }
  });

  window.addEventListener("mousemove", () => {
    if (document.visibilityState === "visible") {
      iniciarActualizacion();
    }
  });

  // Inicia la actualización si la página está visible al cargar
  if (document.visibilityState === "visible") {
    iniciarActualizacion();
  }
}
