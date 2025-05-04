const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const fs = require("fs");
const moment = require("moment"); // Usamos moment para manejar la fecha fácilmente
const notifier = require("node-notifier"); // Importa node-notifier para las notificaciones

console.log("🚀 Iniciando el bot...");

const grupoConquiguiasWorld = "120363101442994763@g.us";
const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  console.log("Escanea este código QR con WhatsApp Web:");
  qrcode.generate(qr, { small: true });
});

// Cargar el archivo donde guardamos la información de las respuestas de los usuarios
let usersResponses = {};
const loadUsersResponses = () => {
  try {
    const data = fs.readFileSync("usersResponses.json", "utf8");
    usersResponses = JSON.parse(data);
  } catch (error) {
    console.log("No se pudo leer el archivo de respuestas de usuarios.");
  }
};

// Guardar el archivo con la información actualizada
const saveUsersResponses = () => {
  fs.writeFileSync(
    "usersResponses.json",
    JSON.stringify(usersResponses, null, 2)
  );
};

// Verificar si es un nuevo día y limpiar la información
const checkDayChange = () => {
  const currentDay = moment().format("YYYY-MM-DD");
  if (usersResponses.currentDate !== currentDay) {
    usersResponses.currentDate = currentDay; // Actualizar el día
    Object.keys(usersResponses).forEach((user) => {
      // Resetear la fecha de respuestas para los usuarios al nuevo día
      if (user !== "currentDate") {
        usersResponses[user].lastResponse = null;
      }
    });
    console.log("Nuevo día detectado, respuestas reseteadas.");
  }
};

client.on("ready", () => {
  console.log("✅ Bot de WhatsApp está listo.");
  loadUsersResponses(); // Cargar las respuestas de los usuarios al iniciar
});

client.on("message", async (msg) => {
  // Comprobamos si ha cambiado el día y limpiamos las respuestas
  checkDayChange();

  const userId = msg.from;



  // Verificar si el usuario ya ha recibido respuesta hoy
  if (!usersResponses[userId]) {
    // Si el usuario no existe en el registro, lo agregamos
    usersResponses[userId] = { lastResponse: null };
  }

  // Si ya respondimos al usuario hoy, no lo hacemos de nuevo
  if (usersResponses[userId].lastResponse === usersResponses.currentDate) {
    console.log(`Ya se ha respondido al usuario ${userId} hoy.`);
    return;
  }
  

  console.log(`📩 General | Mensaje recibido de ${msg.from}: ${msg.body}`);

  if (!msg.from.includes("@g.us") && !msg.from.includes('status@broadcast')) {
    const contacto = await msg.getContact(); // Obtener información del contacto
    console.log(`📩 Usuario | Mensaje de: ${contacto.pushname || contacto.name || msg.from}`);

    if (msg.body.toLowerCase().includes("hola")) {
      msg.reply(
        "*AUTO REPLY PROYECTO JA* \n_¡Hola! Soy el bot Esperanza 🤖. ¿En qué puedo ayudarte?_"
      );
    } else {
      msg.reply(
        "*AUTO REPLY PROYECTO JA* \n_¡Hola! Soy el bot Esperanza_ 🤖 \n_En este momento no estoy disponible, deja tu mensaje y pronto contestaré._"
      );
      msg.react("🤖");
    }
    
    console.log('------------------------------------------------------------------------');

  } else if (msg.from === grupoConquiguiasWorld && !msg.from.includes('status@broadcast')) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    console.log("ID del grupo:", msg.from);
    const chat = await message.getChat(); // Obtener el chat del mensaje recibido

    if (chat.isGroup) { // Verificar si el mensaje proviene de un grupo
        console.log(`📩 Grupo | Mensaje de: ${chat.name}`);
    }

    if (urlRegex.test(msg.body)) {
      console.log("🔗 Enlace detectado");
      msg.react("🤖");
      // Mostrar una notificación en el sistema
      notifier.notify({
        title: "Enlace Detectado en WhatsApp",
        message: `Nuevo enlace recibido de ${msg.from}: ${msg.body}`,
        sound: true, // activar o desactivar el sonido
        wait: true, // Esperar que el usuario cierre la notificación
      });
    } else{
      msg.react("✔");
    }

    if (msg.body.toLowerCase().includes("hola")) {
      msg.reply(
        "*AUTO REPLY CONQUIGUIAS WORLD* \n_¡Bienvenido/a al grupo ConquiguiasWorld!_ ✨"
      );
    }
    console.log('------------------------------------------------------------------------');
  } else{
    console.log("Respuesta diferente");
  }

  // Marcar que hemos respondido al usuario
  usersResponses[userId].lastResponse = usersResponses.currentDate;
  saveUsersResponses(); // Guardar los cambios en el archivo
});

client.initialize();
