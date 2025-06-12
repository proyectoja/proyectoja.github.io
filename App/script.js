var BASE_URL = "https://proyectoja.github.io/App/";
const contenedorLista = document.querySelector(".contenedor-lista");
const contenedorContPelis = document.querySelector(".contenedor-cont-pelis");
contenedorContPelis.style.cursor = "pointer";
let contPelis = 0;

const jsonUrl = BASE_URL + "contenido.json";
const contenedorJWPLAYER = document.getElementById("contenedorJWPLAYER");

contenedorContPelis.addEventListener("click", function () {
  document.querySelector(".contenedor-lateral-derecho").style.width =
    document.querySelector(".contenedor-lateral-derecho").style.width === "0px"
      ? "auto"
      : "0px";
});

let banderaCartel = false;
let arregloAux = [];
if (document.getElementById("contenedorEspecial")) {
  const contenedorEspecial = document.getElementById("contenedorEspecial");
}

document.getElementById("btnLike").src = BASE_URL + "like.png";
document.getElementById("btnDislike").src = BASE_URL + "dislike.png";

// Función para cargar los datos desde el archivo JSON
fetch(jsonUrl) // PRODUCCIÓN
  //fetch("contenido.json") //DESARROLLO
  .then((response) => response.json()) // Convertir a JSON
  .then((data) => {
    limpiarTodasLasURLs(data);

    // ✅ Filtrar las que tengan url y urlSub válidas
    const soloValidas = data.peliculas.filter(
      (video) =>
        (video.url && video.url.trim() !== "") ||
        (video.urlSub && video.urlSub.trim() !== "") ||
        (video.urlCas && video.urlCas.trim() !== "") ||
        (Array.isArray(video.urlLista) &&
          video.urlLista[0].file &&
          video.urlLista[0].file.trim() !== "")
    );

    // ✅ Tomar los últimos 10 válidos
    arregloAux = soloValidas.slice(-30);

    data.peliculas.sort((a, b) => b.fecha - a.fecha); // PRODUCCIÓN
    const fragment = document.createDocumentFragment();
    const generosSet = new Set();
    let peliculasValidas = [];

    data.peliculas.forEach((video) => {
      //Creación cartel primero de construcción
      if (!banderaCartel) {
        crearCartelEspecial(video, fragment);
        banderaCartel = true;
      }

      // Validar que la película tenga datos correctos
      if (
        video.titulo &&
        !video.titulo.includes("rumble") &&
        !video.titulo.includes(".mp4") &&
        !video.descripcion.includes("rumble") &&
        !video.descripcion.includes(".mp4") &&
        !video.fecha.includes("rumble") &&
        !video.fecha.includes(".mp4") &&
        !video.duracion.includes("rumble") &&
        !video.duracion.includes(".mp4") &&
        !video.titulo.includes(".m3u8") &&
        !video.descripcion.includes(".m3u8") &&
        !video.fecha.includes(".m3u8") &&
        !video.duracion.includes(".m3u8")
      ) {
        peliculasValidas.push(video); // Agregar a la lista de películas válidas
        crearCarteles(video, fragment);

        // Extraer géneros únicos y limpiarlos
        if (video.generos) {
          video.generos
            .split(",")
            .forEach((genero) => generosSet.add(genero.trim()));
        }
      }
    });

    // Agregar todo el fragmento al DOM en una sola operación
    contenedorLista.appendChild(fragment);

    // Actualizar contador
    contPelis = peliculasValidas.length;
    contenedorContPelis.textContent = `Total: ${contPelis} películas y series. `;

    // Guardar películas en un arreglo global para filtrar
    peliculasArreglo = peliculasValidas;

    // Crear botones de géneros una vez
    crearBotonesGenero([...generosSet]);

    //Películas Recientes
    if (banderaCartel) {
      arregloAux.reverse();
      const fragmentRecientes = document.createDocumentFragment();
      arregloAux.forEach((video) => {
        if (
          video.titulo &&
          !video.titulo.includes("rumble") &&
          !video.titulo.includes(".mp4") &&
          !video.descripcion.includes("rumble") &&
          !video.descripcion.includes(".mp4") &&
          !video.fecha.includes("rumble") &&
          !video.fecha.includes(".mp4") &&
          !video.duracion.includes("rumble") &&
          !video.duracion.includes(".mp4") &&
          !video.titulo.includes(".m3u8") &&
          !video.descripcion.includes(".m3u8") &&
          !video.fecha.includes(".m3u8") &&
          !video.duracion.includes(".m3u8")
        ) {
          crearCartelesRecientes(video, fragmentRecientes);
        }
      });
      contenedorEspecial.appendChild(fragmentRecientes);
    }
  })
  .catch((error) => {
    console.error("Error al cargar el archivo JSON:", error);
  });

function limpiarTodasLasURLs(data) {
  // Limpiar URLs en películas
  if (Array.isArray(data.peliculas)) {
    data.peliculas.forEach((pelicula) => {
      ["url", "urlCas", "urlSub"].forEach((campo) => {
        if (pelicula[campo] && pelicula[campo].includes("key=")) {
          const url = new URL(pelicula[campo]);
          url.searchParams.delete("key");
          pelicula[campo] = url.toString();
        }
      });
    });
  }

  // Limpiar URLs (Listas)
  if (Array.isArray(data.peliculas)) {
    data.peliculas.forEach((serie) => {
      ["urlLista", "urlListaSub", "urlListaCas"].forEach((listaNombre) => {
        if (Array.isArray(serie[listaNombre])) {
          serie[listaNombre].forEach((item) => {
            if (item.file && item.file.includes("key=")) {
              const url = new URL(item.file);
              url.searchParams.delete("key");
              item.file = url.toString();
            }
          });
        }
      });
    });
  }

  return data;
}

// Filtrar películas por género y actualizar contador
function filtrarPorGenero(generoSeleccionado) {
  contenedorLista.innerHTML = ""; // Limpiar el contenedor antes de mostrar resultados

  const peliculasFiltradas = peliculasArreglo.filter(
    (pelicula) =>
      pelicula.generos &&
      pelicula.generos
        .split(",")
        .map((g) => g.trim())
        .includes(generoSeleccionado)
  );

  const fragment = document.createDocumentFragment();
  peliculasFiltradas.forEach((video) => crearCarteles(video, fragment));
  contenedorLista.appendChild(fragment);

  // Actualizar el contador de películas filtradas
  contenedorContPelis.textContent = `Total: ${peliculasFiltradas.length} películas y series en "${generoSeleccionado}". `;
}

// Crear los botones de género optimizados
function crearBotonesGenero(generos) {
  const contenedorFiltros = document.getElementById("contenedorFiltros");
  contenedorFiltros.innerHTML = ""; // Limpiar antes de agregar

  const fragment = document.createDocumentFragment();
  generos.forEach((genero) => {
    const btn = document.createElement("button");
    btn.textContent = genero;
    btn.classList.add("boton-genero");
    btn.addEventListener("click", () => filtrarPorGenero(genero));
    fragment.appendChild(btn);
  });

  contenedorFiltros.appendChild(fragment);
}

function esEstreno(anioPelicula) {
  const anioActual = new Date().getFullYear(); // Obtiene el año actual
  return anioPelicula === anioActual;
}

function debeMostrarAnuncio(idPelicula) {
  const ultimaPelicula = localStorage.getItem("ultimaPeliculaVista");
  const ultimaFecha = localStorage.getItem("ultimaFechaVista");
  const fechaActual = new Date().toISOString().split("T")[0];

  // Mostrar anuncio si la película es diferente o si ha pasado un día
  return ultimaPelicula !== idPelicula || ultimaFecha !== fechaActual;
}

function crearCartelEspecial(cartel) {
  const videoItem = document.createElement("div");
  videoItem.classList.add("contenedor-video-cartel-especial");
  videoItem.id = "contenedorEspecial";

  const etiqueta = document.createElement("h3");
  etiqueta.textContent = "Lista de películas y series:";
  etiqueta.className = "etiquetaListaDePeliculas";
  contenedorLista.appendChild(videoItem);
  contenedorLista.appendChild(etiqueta);
}

function crearCarteles(cartel) {
  const videoItem = document.createElement("div");
  videoItem.classList.add("contenedor-video");
  videoItem.addEventListener("click", function () {
    const idPelicula = cartel.id; // Suponiendo que cada cartel tiene un identificador único

    if (debeMostrarAnuncio(idPelicula)) {
      // Mostrar anuncio y luego continuar con la reproducción
      //window.location.href = "go:anuncio";

      // Guardar la película y la fecha para futuras validaciones
      localStorage.setItem("ultimaPeliculaVista", idPelicula);
      localStorage.setItem(
        "ultimaFechaVista",
        new Date().toISOString().split("T")[0]
      );

      // Esperar a que el usuario regrese para continuar con la película
      setTimeout(() => {
        contenedorJWPLAYER.style.display = "flex";
        openPopJW(cartel);
      }, 1000); // Puedes ajustar el tiempo si lo deseas
    } else {
      // Si no se debe mostrar el anuncio, continuar con la reproducción directamente
      contenedorJWPLAYER.style.display = "flex";
      openPopJW(cartel);
    }
  });
  videoItem.style.cursor = "pointer";

  let proxiAux = false;
  let serieAux = false;
  const calidadAux = document.createElement("div");
  calidadAux.className = "contenedor-calidad";

  if (cartel.calidad === "1") {
    calidadAux.textContent = "SD";
  } else if (cartel.calidad === "2") {
    calidadAux.textContent = "HD";
  } else if (cartel.calidad === "3") {
    calidadAux.textContent = "FULLHD";
  } else if (cartel.calidad === "4") {
    calidadAux.textContent = "60FPS";
  } else if (cartel.url.includes("") && cartel.calidad.includes("")) {
    calidadAux.textContent = "No Disponible";
    proxiAux = true;
  }

  if (Array.isArray(cartel.urlLista)) {
    serieAux = true;
  }

  videoItem.appendChild(calidadAux);

  const estrenoAux = document.createElement("div");
  estrenoAux.className = "contenedor-estreno";

  let fechaAux =
    typeof cartel.fecha === "string" && cartel.fecha.includes("-")
      ? new Date(cartel.fecha).getFullYear()
      : Number(cartel.fecha);

  let esEstrenoAux = false;
  if (esEstreno(fechaAux)) {
    estrenoAux.textContent = "Estreno";
    esEstrenoAux = true;
    videoItem.appendChild(estrenoAux);
  } else {
    esEstrenoAux = false;
  }
  if (proxiAux) {
    esEstrenoAux = true;
    estrenoAux.textContent = "Próxima..";
    estrenoAux.style.color = "white";
    estrenoAux.style.fontSize = "12px";
    estrenoAux.style.border = "1px solid green";
    estrenoAux.style.boxShadow = "0 0 1px white,0 0 1px white,";

    videoItem.appendChild(estrenoAux);
  } else {
    proxiAux = false;
  }

  if (serieAux && !esEstrenoAux) {
    const estrenoSerie = document.createElement("div");
    estrenoSerie.className = "contenedor-serie";
    estrenoSerie.textContent = "Serie";
    estrenoSerie.style.color = "yellow";
    estrenoSerie.style.fontSize = "12px";
    estrenoSerie.style.border = "1px solid yellow";
    estrenoSerie.style.boxShadow = "0 0 1px white,0 0 1px white,";
    estrenoSerie.style.top = "25px";
    videoItem.appendChild(estrenoSerie);
  }
  if (serieAux && esEstrenoAux) {
    const estrenoSerie = document.createElement("div");
    estrenoSerie.className = "contenedor-serie";
    estrenoSerie.textContent = "Serie";
    estrenoSerie.style.color = "yellow";
    estrenoSerie.style.fontSize = "12px";
    estrenoSerie.style.border = "1px solid yellow";
    estrenoSerie.style.boxShadow = "0 0 1px white,0 0 1px white,";

    videoItem.appendChild(estrenoSerie);
  } else {
    serieAux = false;
  }

  // Crear imágenes con carga diferida
  const poster = document.createElement("img");
  poster.dataset.src = cartel.miniatura; // Guardamos la URL en data-src
  poster.alt = cartel.nombreCanal;
  poster.classList.add("lazy"); // Agregamos una clase para identificarlas
  poster.style.opacity = "0";
  poster.style.transition = "opacity 0.2s ease-in-out";

  //Crear íconos de los audios
  const contenedorIconosAudios = document.createElement("div");
  contenedorIconosAudios.id = "contenedorIconosAudios";
  if (cartel.url || cartel.urlLista) {
    const iconoAudio = document.createElement("img");
    iconoAudio.dataset.src = BASE_URL + "lat.png";
    iconoAudio.id = "iconoAudio";
    iconoAudio.classList.add("lazy");
    iconoAudio.style.opacity = "0";
    iconoAudio.style.transition = "opacity 0.2s ease-in-out";
    contenedorIconosAudios.appendChild(iconoAudio);
    observer.observe(iconoAudio);
  }
  if (cartel.urlSub || cartel.urlListaSub) {
    const iconoAudio = document.createElement("img");
    iconoAudio.dataset.src = BASE_URL + "sub.png";
    iconoAudio.id = "iconoAudio";
    iconoAudio.classList.add("lazy");
    iconoAudio.style.opacity = "0";
    iconoAudio.style.transition = "opacity 0.2s ease-in-out";
    contenedorIconosAudios.appendChild(iconoAudio);
    observer.observe(iconoAudio);
  }
  if (cartel.urlCas || cartel.urlListaCas) {
    const iconoAudio = document.createElement("img");
    iconoAudio.dataset.src = BASE_URL + "cas.png";
    iconoAudio.id = "iconoAudio";
    iconoAudio.classList.add("lazy");
    iconoAudio.style.opacity = "0";
    iconoAudio.style.transition = "opacity 0.2s ease-in-out";
    contenedorIconosAudios.appendChild(iconoAudio);
    observer.observe(iconoAudio);
  }
  videoItem.appendChild(contenedorIconosAudios);

  // Agregar la imagen al DOM
  //document.body.appendChild(poster);

  const title = document.createElement("h3");
  title.textContent = cartel.titulo;

  const h3Fecha = document.createElement("h2");
  h3Fecha.textContent = cartel.fecha + " | " + cartel.duracion;

  videoItem.appendChild(poster);
  // Observa la imagen recién creada
  observer.observe(poster);

  videoItem.appendChild(title);
  videoItem.appendChild(h3Fecha);

  //Modificar y validar según se agregen categorías del menú
  contenedorLista.appendChild(videoItem);
}

function crearCartelesRecientes(cartel) {
  const videoItem = document.createElement("div");
  videoItem.classList.add("contenedor-video-recientes");
  videoItem.addEventListener("click", function () {
    const idPelicula = cartel.id; // Suponiendo que cada cartel tiene un identificador único

    if (debeMostrarAnuncio(idPelicula)) {
      // Mostrar anuncio y luego continuar con la reproducción
      //window.location.href = "go:anuncio";

      // Guardar la película y la fecha para futuras validaciones
      localStorage.setItem("ultimaPeliculaVista", idPelicula);
      localStorage.setItem(
        "ultimaFechaVista",
        new Date().toISOString().split("T")[0]
      );

      // Esperar a que el usuario regrese para continuar con la película
      setTimeout(() => {
        contenedorJWPLAYER.style.display = "flex";
        openPopJW(cartel);
      }, 1000); // Puedes ajustar el tiempo si lo deseas
    } else {
      // Si no se debe mostrar el anuncio, continuar con la reproducción directamente
      contenedorJWPLAYER.style.display = "flex";
      openPopJW(cartel);
    }
  });
  videoItem.style.cursor = "pointer";

  let proxiAux = false;
  let serieAux = false;
  const calidadAux = document.createElement("div");
  calidadAux.className = "contenedor-calidad";

  if (cartel.calidad === "1") {
    calidadAux.textContent = "SD";
  } else if (cartel.calidad === "2") {
    calidadAux.textContent = "HD";
  } else if (cartel.calidad === "3") {
    calidadAux.textContent = "FULLHD";
  } else if (cartel.calidad === "4") {
    calidadAux.textContent = "60FPS";
  } else if (cartel.url.includes("") && cartel.calidad.includes("")) {
    calidadAux.textContent = "No Disponible";
    proxiAux = true;
  }

  if (Array.isArray(cartel.urlLista)) {
    serieAux = true;
  }

  videoItem.appendChild(calidadAux);

  const estrenoAux = document.createElement("div");
  estrenoAux.className = "contenedor-estreno";

  let fechaAux =
    typeof cartel.fecha === "string" && cartel.fecha.includes("-")
      ? new Date(cartel.fecha).getFullYear()
      : Number(cartel.fecha);

  let esEstrenoAux = false;
  if (esEstreno(fechaAux)) {
    estrenoAux.textContent = "Estreno";
    esEstrenoAux = true;
    videoItem.appendChild(estrenoAux);
  } else {
    esEstrenoAux = false;
  }
  if (proxiAux) {
    estrenoAux.textContent = "Próxima..";
    estrenoAux.style.color = "white";
    estrenoAux.style.fontSize = "12px";
    estrenoAux.style.border = "1px solid green";
    estrenoAux.style.boxShadow = "0 0 1px white,0 0 1px white,";

    videoItem.appendChild(estrenoAux);
  } else {
    proxiAux = false;
  }

  if (serieAux && !esEstrenoAux) {
    const estrenoSerie = document.createElement("div");
    estrenoSerie.className = "contenedor-serie";
    estrenoSerie.textContent = "Serie";
    estrenoSerie.style.color = "yellow";
    estrenoSerie.style.fontSize = "12px";
    estrenoSerie.style.border = "1px solid yellow";
    estrenoSerie.style.boxShadow = "0 0 1px white,0 0 1px white,";
    estrenoSerie.style.top = "25px";
    videoItem.appendChild(estrenoSerie);
  }
  if (serieAux && esEstrenoAux) {
    const estrenoSerie = document.createElement("div");
    estrenoSerie.className = "contenedor-serie";
    estrenoSerie.textContent = "Serie";
    estrenoSerie.style.color = "yellow";
    estrenoSerie.style.fontSize = "12px";
    estrenoSerie.style.border = "1px solid yellow";
    estrenoSerie.style.boxShadow = "0 0 1px white,0 0 1px white,";

    videoItem.appendChild(estrenoSerie);
  } else {
    serieAux = false;
  }

  // Crear imágenes con carga diferida
  const poster = document.createElement("img");
  poster.dataset.src = cartel.miniatura; // Guardamos la URL en data-src
  poster.alt = cartel.nombreCanal;
  poster.classList.add("lazy"); // Agregamos una clase para identificarlas
  poster.style.opacity = "0";
  poster.style.transition = "opacity 0.2s ease-in-out";

  //Crear íconos de los audios
  const contenedorIconosAudios = document.createElement("div");
  contenedorIconosAudios.id = "contenedorIconosAudios";
  if (cartel.url || cartel.urlLista) {
    const iconoAudio = document.createElement("img");
    iconoAudio.dataset.src = BASE_URL + "lat.png";
    iconoAudio.id = "iconoAudio";
    iconoAudio.classList.add("lazy");
    iconoAudio.style.opacity = "0";
    iconoAudio.style.transition = "opacity 0.2s ease-in-out";
    contenedorIconosAudios.appendChild(iconoAudio);
    observer.observe(iconoAudio);
  }
  if (cartel.urlSub || cartel.urlListaSub) {
    const iconoAudio = document.createElement("img");
    iconoAudio.dataset.src = BASE_URL + "sub.png";
    iconoAudio.id = "iconoAudio";
    iconoAudio.classList.add("lazy");
    iconoAudio.style.opacity = "0";
    iconoAudio.style.transition = "opacity 0.2s ease-in-out";
    contenedorIconosAudios.appendChild(iconoAudio);
    observer.observe(iconoAudio);
  }
  if (cartel.urlCas || cartel.urlListaCas) {
    const iconoAudio = document.createElement("img");
    iconoAudio.dataset.src = BASE_URL + "cas.png";
    iconoAudio.id = "iconoAudio";
    iconoAudio.classList.add("lazy");
    iconoAudio.style.opacity = "0";
    iconoAudio.style.transition = "opacity 0.2s ease-in-out";
    contenedorIconosAudios.appendChild(iconoAudio);
    observer.observe(iconoAudio);
  }
  videoItem.appendChild(contenedorIconosAudios);

  const title = document.createElement("h3");
  title.textContent = cartel.titulo;

  videoItem.appendChild(poster);
  // Observa la imagen recién creada
  observer.observe(poster);

  videoItem.appendChild(title);

  //Modificar y validar según se agregen categorías del menú
  contenedorEspecial.appendChild(videoItem);
}

// Usamos IntersectionObserver para cargar solo cuando la imagen sea visible
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; // Cargar la imagen
        img.removeAttribute("data-src"); // Eliminar el atributo una vez cargado
        img.onload = () => {
          // Esperar a que la imagen se cargue completamente
          img.style.opacity = "1"; // Aparecer suavemente
        };
        observer.unobserve(img); // Dejar de observarla
      }
    });
  },
  {
    rootMargin: "100px", // Carga imágenes antes de que entren en pantalla
  }
);

const inputBuscar = document.getElementById("buscar");
let peliculasArreglo = [];

function filtrarPeliculas() {
  const consulta = inputBuscar.value.trim().toLowerCase();

  // Limpiar el contenedor antes de agregar nuevos resultados
  contenedorLista.innerHTML = "";

  // Si no hay consulta, mostrar todas las películas
  if (consulta === "") {
    peliculasArreglo.forEach((pelicula) => {
      if (pelicula.titulo) {
        crearCarteles(pelicula);
      }
    });
  } else if (consulta.length > 3) {
    const resultados = peliculasArreglo.filter((pelicula) =>
      pelicula.titulo.toLowerCase().includes(consulta)
    );
    resultados.forEach(crearCarteles);
  }
}

// Evento para la búsqueda en tiempo real
inputBuscar.addEventListener("input", filtrarPeliculas);

const contenedorTituloPop = document.getElementById("titulo-pop");
const contenedorDescripcionPop = document.getElementById("descripcion-pop");
const contenedorMetadataPop = document.getElementById("metadata-pop");
const contenedorCerrarPop = document.getElementById("cerrar-pop");

const vast = "";
const posterPlayer = document.getElementById("player");

function openPopJW(cartel) {
  posterPlayer.style.backgroundImage = `url("${cartel.poster}")`;
  posterPlayer.style.width = "100%";
  posterPlayer.style.minHeight = "300px";
  posterPlayer.style.backgroundPosition = "center";
  posterPlayer.style.backgroundRepeat = "norepeat";
  posterPlayer.style.backgroundSize = "cover";

  const contenedorBotonesAudio = document.getElementById("audios-pop");

  // Eliminar iconos de audio anteriores antes de agregar los nuevos
  document.getElementById("audioLat")?.remove();
  document.getElementById("audioCas")?.remove();
  document.getElementById("audioSub")?.remove();

  // Icono Latino
  if (cartel.url) {
    // Verifica si el URL de audio existe
    const iconoLat = document.createElement("img");
    iconoLat.id = "audioLat";
    iconoLat.src = BASE_URL + "lat.png";
    iconoLat.addEventListener("click", function () {
      reproductorClapprAudios(cartel, vast, cartel.url);
    });
    contenedorBotonesAudio.appendChild(iconoLat);
  }

  // Icono Castellano
  if (cartel.urlCas) {
    // Verifica si el URL de audio existe
    const iconoCas = document.createElement("img");
    iconoCas.id = "audioCas";
    iconoCas.src = BASE_URL + "cas.png";
    iconoCas.addEventListener("click", function () {
      reproductorClapprAudios(cartel, vast, cartel.urlCas);
    });
    contenedorBotonesAudio.appendChild(iconoCas);
  }

  // Icono Subtitulado | Inglés
  if (cartel.urlSub) {
    // Verifica si el URL de audio existe
    const iconoSub = document.createElement("img");
    iconoSub.id = "audioSub";
    iconoSub.src = BASE_URL + "sub.png";
    iconoSub.addEventListener("click", function () {
      reproductorClapprAudios(cartel, vast, cartel.urlSub);
    });
    contenedorBotonesAudio.appendChild(iconoSub);
  }

  // Icono Latino Lista
  if (Array.isArray(cartel.urlLista)) {
    const iconoLat = document.createElement("img");
    iconoLat.id = "audioLat";
    iconoLat.src = BASE_URL + "lat.png";
    iconoLat.addEventListener("click", function () {
      reproductorClapprAudios(cartel, vast, cartel.urlLista);
    });
    contenedorBotonesAudio.appendChild(iconoLat);
  }

  // Icono Castellano Lista
  if (Array.isArray(cartel.urlListaCas)) {
    const iconoCas = document.createElement("img");
    iconoCas.id = "audioCas";
    iconoCas.src = BASE_URL + "cas.png";
    iconoCas.addEventListener("click", function () {
      reproductorClapprAudios(cartel, vast, cartel.urlListaCas);
    });
    contenedorBotonesAudio.appendChild(iconoCas);
  }

  // Icono Subtiltulado | Inglés Lista
  if (Array.isArray(cartel.urlListaSub)) {
    const iconoSub = document.createElement("img");
    iconoSub.id = "audioSub";
    iconoSub.src = BASE_URL + "sub.png";
    iconoSub.addEventListener("click", function () {
      reproductorClapprAudios(cartel, vast, cartel.urlListaSub);
    });
    contenedorBotonesAudio.appendChild(iconoSub);
  }

  const logoMovie24 = document.getElementById("logoMovie24");
  logoMovie24.src = BASE_URL + "logo1.png";
  contenedorTituloPop.textContent = cartel.titulo;
  contenedorDescripcionPop.textContent = cartel.descripcion;
  contenedorMetadataPop.textContent =
    "Año: " +
    cartel.fecha +
    " | Duración: " +
    cartel.duracion +
    (Array.isArray(cartel.urlLista)
      ? " | Capítulos: " +
        cartel.urlLista.filter((item) => item.file && item.file.trim() !== "")
          .length
      : "");
}

const url =
  "https://script.google.com/macros/s/AKfycbzzO1wPlALoC7xRr3H_53jrcttUxllRvZS0MJjAopNd7lIUQEZYPHidWFD2yZupjVkVEA/exec";
const cooldown = 10 * 1000;
var cartelAux;
function contadorDeVistas(cartel) {
  cartelAux = "proyectoja_" + cartel.id;
  fetch(`${url}?id=${cartelAux}&action=visita`)
    .then((res) => res.json())
    .then((data) => actualizarStats(data), marcarBotonVotado(getVotoAnterior()))

    .catch((err) => {
      document.getElementById("vistas").textContent = "Error al cargar vistas.";
      console.error(err);
    });
}
function actualizarStats(data) {
  document.getElementById("vistas").textContent = data.visitas + " de vistas";
  document.getElementById("textLike").textContent = data.likes;
  document.getElementById("textDislike").textContent = data.dislikes;
}

function puedeEnviar(accion) {
  const clave = `${cartelAux}_${accion}_cooldown`;
  const ultima = localStorage.getItem(clave);
  const ahora = Date.now();
  if (!ultima || ahora - ultima > cooldown) {
    localStorage.setItem(clave, ahora);
    return true;
  }
  return false;
}

function getVotoAnterior() {
  return localStorage.getItem(`${cartelAux}_voto`);
}

function setVoto(voto) {
  localStorage.setItem(`${cartelAux}_voto`, voto);
}

function votar(nuevoVoto) {
  const anterior = getVotoAnterior();
  if (anterior === nuevoVoto) {
    return;
  }

  if (!puedeEnviar(nuevoVoto)) {
    return;
  }

  let urlFinal = `${url}?id=${cartelAux}&action=${nuevoVoto}`;
  if (anterior) {
    urlFinal += `&undo=${anterior}`;
  }

  fetch(urlFinal)
    .then((res) => res.json())
    .then((data) => {
      actualizarStats(data);
      setVoto(nuevoVoto);
      marcarBotonVotado(nuevoVoto);
    })
    .catch((err) => console.error("Error:", err));
}

function marcarBotonVotado(voto) {
  const btnLike = document.getElementById("btnLike");
  const btnDislike = document.getElementById("btnDislike");

  if (voto === "like") {
    btnLike.src = BASE_URL + "like2.png";
    btnDislike.src = BASE_URL + "dislike.png";
  } else if (voto === "dislike") {
    btnLike.src = BASE_URL + "like.png";
    btnDislike.src = BASE_URL + "dislike2.png";
  }
}

const playerElement = document.getElementById("player");
const messageElement = document.getElementById("next-message");
const shelfElement = document.getElementById("shelf");
const labelElement = document.getElementById("more-label");

let currentIndex = 0;
let autoplayTimer = null;
let clappr = null;
let autoplayAux = false;
let index = 0;
let saveInterval = null;

function reproductorClapprAudios(cartel, vast, playlist, index = 0) {
  messageElement.textContent = "";
  currentIndex = index;
  labelElement.style.display = "none";
  messageElement.textContent = "";
  messageElement.style.display = "none";
  shelfElement.textContent = "";
  shelfElement.style.display = "none";
  posterPlayer.style.backgroundImage = 'url("")';

  if (clappr) clappr.destroy();

  const isSingleVideo = !Array.isArray(playlist);
  var videoKey = "progreso_" + cartel.id;

  //Nombre en la meta del video o de la lista
  document.title = isSingleVideo ? cartel.titulo : playlist[index].title;
console.log(document.title);
  // Reiniciar votos y vistas
  document.getElementById("vistas").textContent = "";
  document.getElementById("textLike").textContent = "0";
  document.getElementById("textDislike").textContent = "0";
  document.getElementById("contenedorVotar").style.display = "flex";
  document.getElementById("btnLike").src = BASE_URL + "like.png";
  document.getElementById("btnDislike").src = BASE_URL + "dislike.png";

  // Contador de vistas
  contadorDeVistas(cartel);

  //Reproductor
  clappr = new Clappr.Player({
    source: isSingleVideo ? playlist : playlist[index].file,
    poster: isSingleVideo ? cartel.poster : playlist[index].image,
    parentId: "#player",
    autoPlay: autoplayAux,
    width: "100%",
    height: "300px",
    hideVolumeBar: true, //DESARROLLO
    actualLiveTime: true,
    actualLiveServerTime: "2024/09/30 00:00:00",
    hideMediaControl: true, //Desarrollo
    disableVideoTagContextMenu: true,
    playbackNotSupportedMessage: "No se puede reproducir.",
    plugins: [
      AudioTrackSelector,
      HlsjsPlayback,
      LevelSelector,
      //PlaybackRatePlugin,
    ],
    hlsUseNextLevel: true, // Permite cambiar de calidad automáticamente
    hlsMinimumDvrSize: 120, // Buffer mínimo de 2 minutos para DVR
    hlsRecoverAttempts: 16, // Reduce los intentos de recuperación para evitar loops infinitos
    hlsPlayback: {
      preload: true, // Precarga el video antes de presionar "play"
      customListeners: [], // Espacio para eventos personalizados
    },
    playback: {
      crossOrigin: "anonymous",
      extrapolatedWindowNumSegments: 2,
      triggerFatalErrorOnResourceDenied: false,
      hlsjsConfig: {
        enableWebVTT: true,
        captions: true, // Activa subtítulos en HLS
        maxBufferLength: 30, // Mantiene un buffer de 30 segundos
        maxBufferSize: 60 * 1000 * 1000, // Máximo de 60 MB de buffer
        liveSyncDuration: 5, // Sincronización de 5 segundos con la transmisión en vivo
        liveMaxLatencyDuration: 60, // Retraso máximo de 10 segundos en vivo
        enableWorker: true, // Usa workers para mejorar el rendimiento
        enableSoftwareAES: true, // Mejora la compatibilidad con flujos cifrados
        capLevelToPlayerSize: true, // Ajusta la calidad según el tamaño del reproductor
        autoStartLoad: true, // Carga automáticamente los fragmentos
        startPosition: -1, // Inicia desde el punto más reciente en transmisión en vivo
        maxRetries: 9999, // Intentos máximos antes de detener la reproducción
        retryDelay: 2000, // Retraso de 2 segundos entre intentos de recuperación
        lowLatencyMode: true, // Habilita el modo de baja latencia
      },
    },
    /*playbackRateConfig: {
      defaultValue: 1,
      options: [
        { value: 0.1, label: "0.1x" },
        { value: 0.5, label: "0.5x" },
        { value: 0.75, label: "0.75x" },
        { value: 1, label: "Normal" },
        { value: 1.5, label: "1.5x" },
        { value: 2, label: "2x" },
      ],
      // rateSuffix: 'x',
    },*/
    levelSelectorConfig: {
      title: "Calidad",
      labels: {
        7: "",
        6: "",
        5: "",
        4: "",
        3: "",
        2: "", // 500kbps
        1: "", // 240kbps
        0: "", // 120kbps
      },
      labelCallback: function (playbackLevel, customLabel) {
        return customLabel + playbackLevel.level.height + "p"; // High 720p
      },
      onLevelsAvailable: function (levels) {
        return levels.reverse(); // For example, reverse levels order
      },
    },

    watermark: BASE_URL + "logo1.png",
    position: "top-right",
  });

  window.location.href = "go:anuncio";
  window.location.href = "go:anuncio";
  clappr.on(Clappr.Events.PLAYER_READY, function () {
    console.log("Disparo ready");

    const lastTime = localStorage.getItem(videoKey);
    if (lastTime) {
      clappr.seek(parseFloat(lastTime));
      console.log(`⏪ Reanudando desde ${lastTime} segundos`);
    }
  });

  let lastSavedTime = 0;
  clappr.on(Clappr.Events.PLAYER_TIMEUPDATE, () => {
    const currentTime = clappr.getCurrentTime();
    if (Math.abs(currentTime - lastSavedTime) >= 10) {
      localStorage.setItem(videoKey, currentTime);
      console.log(`💾 Tiempo guardado: ${currentTime.toFixed(2)} segundos`);
      lastSavedTime = currentTime;
    }
  });

  clappr.on(Clappr.Events.PLAYER_PLAY, function () {
    console.log("Disparo play");
  });

  clappr.on(Clappr.Events.PLAYER_ENDED, () => {
    localStorage.removeItem(videoKey);
    clearInterval(saveInterval);

    const nextIndex = index + 1;
    autoplayAux = true;

    if (!isSingleVideo && nextIndex < playlist.length) {
      let seconds = 10;
      messageElement.textContent = `"${playlist[nextIndex].title}" se reproducirá en ${seconds} segundos...`;
      autoplayTimer = setInterval(() => {
        seconds--;
        messageElement.textContent = `"${playlist[nextIndex].title}" se reproducirá en ${seconds} segundos...`;
        if (seconds === 0) {
          clearInterval(autoplayTimer);
          // Actualizar título y descripción cuando se hace clic en una miniatura
          var videoTitle = playlist[nextIndex].title || "Sin título";
          var videoDescription =
            playlist[nextIndex].description || "Sin descripción";
          contenedorTituloPop.textContent = videoTitle;
          contenedorDescripcionPop.textContent = videoDescription;
          reproductorClapprAudios(cartel, vast, playlist, nextIndex);
        }
      }, 1000);
    } else {
      messageElement.textContent = "Fin de la lista de reproducción.";
    }
  });

  // Datos visuales
  if (!isSingleVideo) {
    // Cargar miniaturas
    messageElement.style.display = "flex";
    shelfElement.style.display = "flex";
    labelElement.style.display = "flex";

    playlist.forEach((item, i) => {
      if (item.image && item.title && item.file) {
        const div = document.createElement("div");
        div.className = "shelf-item";
        div.innerHTML = `<img src="${item.image}"><div class="title">${item.title}</div>`;
        div.addEventListener("click", () => {
          clearInterval(autoplayTimer);
          autoplayAux = true;

          // Actualizar título y descripción cuando se hace clic en una miniatura
          var videoTitle = item.title || "Sin título";
          var videoDescription = item.description || "Sin descripción";
          contenedorTituloPop.textContent = videoTitle;
          contenedorDescripcionPop.textContent = videoDescription;

          reproductorClapprAudios(cartel, vast, playlist, i);
        });

        shelfElement.appendChild(div);
      }
    });
  }
}

const contenedorDisqus = document.getElementById("disqus_thread");
function closePopJW() {
  if (clappr) {
    clappr.destroy();
    clappr = null;
    contenedorDisqus.textContent = "";
    contenedorJWPLAYER.style.display = "none";
    //window.location.href = "go:anuncio";
  }
  labelElement.style.display = "none";
  messageElement.textContent = "";
  messageElement.style.display = "none";
  shelfElement.textContent = "";
  shelfElement.style.display = "none";
  contenedorDisqus.textContent = "";
  contenedorJWPLAYER.style.display = "none";
  document.getElementById("vistas").textContent = "";
  document.getElementById("textLike").textContent = "0";
  document.getElementById("textDislike").textContent = "0";
  document.getElementById("contenedorVotar").style.display = "none";
  document.getElementById("btnLike").src = BASE_URL + "like.png";
  document.getElementById("btnDislike").src = BASE_URL + "dislike.png";
}

//anunciosAdsterra();
//Anucios publicitarios
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
      setTimeout(actualizarAnuncio2, 1000);
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
      key: "88a6bb18554c71538bb646e14b162cc5",
      format: "iframe",
      height: 50,
      width: 320,
      params: {},
    };
    scriptElem.src =
      "//www.highperformanceformat.com/88a6bb18554c71538bb646e14b162cc5/invoke.js";
    anuncioContainer.appendChild(scriptElem);
  }

  function actualizarAnuncio2() {
    const anuncioContainer = document.getElementById("anuncio-container2");
    anuncioContainer.innerHTML = "";

    const scriptElem = document.createElement("script");
    scriptElem.type = "text/javascript";
    window.atOptions = {
      key: "46e27ebf2835db11826f50ace565bd99",
      format: "iframe",
      height: 60,
      width: 468,
      params: {},
    };
    scriptElem.src =
      "//www.highperformanceformat.com/46e27ebf2835db11826f50ace565bd99/invoke.js";
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

// Función para cargar Disqus dinámicamente usando el ID como identificador
function cargarChat() {
  const idAux = contenedorTituloPop.textContent.replace(/\s+/g, "_");
  const url = `https://proyectoja.com/${idAux}`;
  console.log(url);

  if (window.DISQUS) {
    DISQUS.reset({
      reload: true,
      config: function () {
        this.page.identifier = idAux;
        this.page.url = url;
      },
    });
  } else {
    window.disqus_config = function () {
      this.page.identifier = idAux;
      this.page.url = url;
    };

    const d = document,
      s = d.createElement("script");
    s.src = "https://https-proyectoja-github-io-proyectoja.disqus.com/embed.js"; // tu subdominio
    s.setAttribute("data-timestamp", +new Date());
    s.id = "disqus-script";
    (d.head || d.body).appendChild(s);
  }
}

const contUsuarios = document.getElementById("contUsuarios");
