/* ============================================================
   SISTEMA DE NOTIFICACIONES MODERNAS
============================================================ */
function showNotification(title, message, type = "info", duration = 5000) {
  const container = document.getElementById("notificationsContainer");
  if (!container) return;

  const notification = document.createElement("div");
  notification.className = `notification ${type}`;

  let icon = "ℹ️";
  switch (type) {
    case "success": icon = "✓"; break;
    case "error": icon = "✗"; break;
    case "warning": icon = "⚠"; break;
    case "info": icon = "ℹ"; break;
  }

  notification.innerHTML = `
    <div class="notification-icon">${icon}</div>
    <div class="notification-content">
      <div class="notification-title">${title}</div>
      <div class="notification-message">${message}</div>
    </div>
    <button class="notification-close" onclick="this.parentElement.remove()">×</button>
  `;

  container.appendChild(notification);
  setTimeout(() => {
     if(notification.parentNode) notification.remove();
  }, duration);
}

function showChatNotification(message, isError = false) {
  const type = isError ? "error" : "success";
  showNotification(isError ? "Error" : "Info", message, type, 3000);
}

function showError(message) {
  showNotification("Error", message, "error");
}

/* ============================================================
   SUPABASE CONFIG
============================================================ */
const SUPABASE_URL = "https://hgangxlyytnxdndwjvgf.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhnYW5neGx5eXRueGRuZHdqdmdmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzNDgyNTksImV4cCI6MjA4MDkyNDI1OX0.VL5GgpkfV102lJc_NEi0Ga15gDiNSV92jSIRMuH-5hI";
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* ============================================================
   VARIABLES GLOBALES
============================================================ */
let userid = null;
let displayName = null;
let userPassword = null;
let channel = null; 
const PROYECTO_JA_ADMIN = '@proyectoja'; 
const MAX_MESSAGES = 50;
const PUBLIC_ROOM = "public-chat-v2";
let currentRoom = PUBLIC_ROOM; 

// Context Menu
let contextMenuTargetUser = null;

// Reply
let replyingTo = null;
let replyMessageData = null;

// Anti-Spam
let spamBlocked = false;
let messageCount = 0;
const MAX_MESSAGES_PER_SECOND = 5;
const SPAM_BLOCK_TIME = 60;
let lastTypingSent = 0;
let typingDebounceTimer;
const TYPING_DEBOUNCE_TIME = 1000;
let typingUsers = new Set(); 

/* ============================================================
   INICIALIZACIÓN
============================================================ */
document.addEventListener("DOMContentLoaded", async () => {
  // Global Click Listener for Context Menu
  document.addEventListener('click', (e) => {
    const menu = document.getElementById('userContextMenu');
    if(menu && menu.style.display === 'block') {
      menu.style.display = 'none';
      contextMenuTargetUser = null;
    }
  });

  // Auto Login Check
  if (localStorage.getItem("remember_session") === "true") {
    const savedUserid = localStorage.getItem("userid");
    const savedDisplayName = localStorage.getItem("display_name");
    const savedPassword = localStorage.getItem("user_password");

    if (savedUserid && savedDisplayName && savedPassword) {
      try {
        const { data } = await db.from("users").select("password").eq("username", savedUserid).maybeSingle();
        if (data && data.password === atob(savedPassword)) {
          userid = savedUserid;
          displayName = savedDisplayName;
          userPassword = atob(savedPassword);
          initChat();
          return;
        }
      } catch (e) {
        console.error("Auto-login failed", e);
      }
    }
  }

  document.getElementById("loginContainer").style.display = "flex";
  setupLoginListeners();
});

function setupLoginListeners() {
  const usernameInput = document.getElementById("loginUsername");
  const displayNameGroup = document.getElementById("displayNameGroup");
  const passwordInput = document.getElementById("loginPassword");
  let checkTimeout;

  if (usernameInput) {
    usernameInput.addEventListener("input", () => {
      clearTimeout(checkTimeout);
      checkTimeout = setTimeout(async () => {
        const username = usernameInput.value.trim();
        if (!username) return;
        let formatted = username.toLowerCase().replace(/\s+/g, "");
        if (!formatted.startsWith("@")) formatted = "@" + formatted;

        const { data } = await db.from("users").select("display_name").eq("username", formatted).maybeSingle();
        if (data) {
          displayNameGroup.style.display = "none";
          document.getElementById("loginUsername").value = formatted; // Autoformat
          document.getElementById("loginDisplayName").value = data.display_name;
          document.getElementById("passwordRequirements").style.display = "none";
        } else {
          displayNameGroup.style.display = "block";
          document.getElementById("loginDisplayName").value = "";
          if (passwordInput.value) updatePasswordRequirements(passwordInput.value);
        }
      }, 500);
    });
  }


}

function setupChatInput() {
  const msgInput = document.getElementById("messageInput");
  if(msgInput && !msgInput.dataset.listenerAdded) {
      msgInput.dataset.listenerAdded = "true"; 
      
      const autoResize = function() {
          this.style.height = 'auto'; 
          this.style.height = (this.scrollHeight) + 'px';
          sendTyping(true);
      };

      msgInput.addEventListener("input", autoResize);
      
      // Handle Enter
      msgInput.addEventListener("keydown", function(e) {
          if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault(); // Stop newline
              sendMessage(); // Send
              this.style.height = "44px"; // Reset height immediately
          }
      });
  }
}

async function handleLogin() {
  const usernameInput = document.getElementById("loginUsername").value.trim();
  const passwordInput = document.getElementById("loginPassword").value;
  const displayNameInput = document.getElementById("loginDisplayName").value.trim();
  const rememberMe = document.getElementById("rememberMe").checked;

  if (!usernameInput || !passwordInput) return showError("Faltan datos");

  let formattedUser = usernameInput.toLowerCase().replace(/\s+/g, "");
  if (!formattedUser.startsWith("@")) formattedUser = "@" + formattedUser;

  try {
    const { data: existingUser } = await db.from("users").select("*").eq("username", formattedUser).maybeSingle();

    if (existingUser) {
      if (existingUser.password !== passwordInput) return showError("Contraseña incorrecta");
      userid = formattedUser;
      const newName = displayNameInput && displayNameInput !== existingUser.display_name ? displayNameInput : existingUser.display_name;
      displayName = newName;
      userPassword = passwordInput;

      if (newName !== existingUser.display_name) {
        await db.from("users").update({ display_name: newName }).eq("username", userid);
      }
    } else {
      const val = validatePassword(passwordInput);
      if (!val.valid) return showError("Contraseña insegura (Req: Mayúscula, Num, 6+)");
      if (!displayNameInput) return showError("Nombre requerido");

      userid = formattedUser;
      displayName = displayNameInput;
      userPassword = passwordInput;
      await db.from("users").insert({ username: userid, display_name: displayName, password: userPassword });
    }

    if (rememberMe) {
      localStorage.setItem("userid", userid);
      localStorage.setItem("display_name", displayName);
      localStorage.setItem("user_password", btoa(userPassword));
      localStorage.setItem("remember_session", "true");
    }

    initChat();
  } catch (error) {
    showError("Error de conexión");
  }
}

/* ============================================================
   CHAT LOGIC
============================================================ */
/* ============================================================
   CHAT LOGIC
============================================================ */
// State for saved private chats : { roomId: { name, unread: 0, lastMsg: '' } }
let savedPrivateChats = JSON.parse(localStorage.getItem("saved_private_chats") || "{}");

function initChat() {
  document.getElementById("loginContainer").style.display = "none";
  document.getElementById("container").style.display = "flex";
  
  updateUserInterface();
  setupChatInput();
  initSidebar();
  renderSavedChatsList();
  
  // Start in Public Room
  switchRoom(PUBLIC_ROOM, "Sala Pública");
  
  // Subscribe to ALL messages globally to detect private messages
  const globalChannel = db.channel('global_notifications');
  globalChannel.on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, (payload) => {
      const msg = payload.new;
      if (msg.room_id && msg.room_id.startsWith("private_")) {
          // Check if I am part of this private room
          if (msg.room_id.includes(userid)) {
              handleIncomingPrivateMessage(msg);
          }
      }
  }).subscribe();
  
  setInterval(() => { messageCount = 0; }, 1000);
  
  // Heartbeat for Last Seen (every 30s)
  sendHeartbeat();
  setInterval(sendHeartbeat, 30000);
  
  // Save last_seen on exit
  window.addEventListener("beforeunload", () => {
      sendHeartbeat();
  });
}

async function sendHeartbeat() {
    if (!userid) return;
    const now = new Date().toISOString();
    await db.from("users").update({ last_seen: now }).eq("username", userid);
    
    // Optional: Update presence metadata significantly less often if needed
}

function handleIncomingPrivateMessage(msg) {
    if (msg.room_id === currentRoom) return; // Already looking at it
    
    // Determine the OTHER user's name logic
    if (savedPrivateChats[msg.room_id]) {
        savedPrivateChats[msg.room_id].unread = (savedPrivateChats[msg.room_id].unread || 0) + 1;
        savedPrivateChats[msg.room_id].lastMsg = msg.content.substring(0, 20);
        savePrivateChats();
        renderSavedChatsList();
        showChatNotification(`Mensaje de ${msg.username}`, false);
    } else {
        const parts = msg.room_id.replace("private_", "").split("_");
        const otherId = parts.find(p => p !== userid);
        const senderName = msg.username; 
        
        savedPrivateChats[msg.room_id] = {
            name: senderName, 
            otherId: otherId,
            unread: 1,
            lastMsg: msg.content.substring(0, 20)
        };
        savePrivateChats();
        renderSavedChatsList();
        showChatNotification(`Nuevo chat de ${senderName}`, false);
    }
}

function savePrivateChats() {
    localStorage.setItem("saved_private_chats", JSON.stringify(savedPrivateChats));
}

function renderSavedChatsList() {
    // Inject list if missing
    let list = document.getElementById("privateChatsList");
    if (!list) {
        const sidebar = document.getElementById("sidebar");
        const usersTitle = document.getElementById("usersTitle");
        if(sidebar && usersTitle) {
            const container = document.createElement("div");
            // Changed title to CHATS
            container.innerHTML = `<h3 style="margin-top:20px; color:var(--accent-color);">CHATS</h3><div id="privateChatsList"></div>`;
            sidebar.insertBefore(container, usersTitle);
            list = document.getElementById("privateChatsList");
        }
    }
    
    if (!list) return;
    list.innerHTML = "";
    
    // 1. PUBLIC ROOM ITEM
    const publicDiv = document.createElement("div");
    publicDiv.className = "userItem";
    if (currentRoom === PUBLIC_ROOM) publicDiv.style.background = "rgba(14, 165, 233, 0.1)";
    
    publicDiv.innerHTML = `
        <div class="avatar" style="background:var(--primary-gradient); color:white; font-size:1.2rem;">📢</div>
        <div style="flex:1; min-width:0; padding-left:10px;" onclick="returnToGlobalChat()">
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:600; font-size:0.9rem; color:white;">Sala Pública</span>
                <span style="background:var(--accent-color); font-size:0.6rem; padding:2px 6px; border-radius:4px; color:white; font-weight:700;">PUBLICO</span>
            </div>
            <div style="font-size:0.75rem; color:var(--text-secondary);">Chat general</div>
        </div>
    `;
    list.appendChild(publicDiv);
    
    // 2. PRIVATE CHATS
    Object.entries(savedPrivateChats).forEach(([roomId, data]) => {
        const div = document.createElement("div");
        div.className = "userItem"; 
        if (currentRoom === roomId) div.style.background = "rgba(14, 165, 233, 0.1)";
        
        div.innerHTML = `
            <div class="avatar" style="background:var(--secondary-bg); color:var(--text-secondary); font-size:0.8rem;">💬</div>
            <div style="flex:1; min-width:0; padding-left:10px;" onclick="switchRoom('${roomId}', '${data.name}')">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:600; font-size:0.9rem; color:white;">${data.name}</span>
                    ${data.unread > 0 ? `<span style="background:var(--danger-color); font-size:0.7rem; padding:2px 6px; border-radius:10px; color:white;">${data.unread}</span>` : ''}
                </div>
                <div style="font-size:0.75rem; color:var(--text-secondary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${data.lastMsg || "..."}</div>
            </div>
            <button onclick="removeSavedChat('${roomId}')" style="background:none; border:none; color:var(--text-secondary); cursor:pointer; font-size:1.2rem; margin-left:5px;">×</button>
        `;
        list.appendChild(div);
    });
}

// Expose removal function
window.removeSavedChat = async function(roomId) {
    // Prevent event propagation if possible
    if(window.event) window.event.stopPropagation();

    if(await showCustomConfirm("¿Eliminar este chat privado?")) {
        delete savedPrivateChats[roomId];
        savePrivateChats();
        renderSavedChatsList();
        if(currentRoom === roomId) returnToGlobalChat();
    }
};

function switchRoom(newRoomId, newRoomTitle) {
  const chatDiv = document.getElementById("chat");
  chatDiv.innerHTML = "";
  typingUsers.clear();
  document.getElementById('typing').textContent = "";
  
  // Clear unread
  if (savedPrivateChats[newRoomId]) {
      savedPrivateChats[newRoomId].unread = 0;
      savePrivateChats();
      renderSavedChatsList();
  }
  
  currentRoom = newRoomId;
  
  document.getElementById("roomName").textContent = newRoomTitle || "Chat";
  const badge = document.getElementById("roomBadge");
  const isPublic = currentRoom === PUBLIC_ROOM;
  
  if(isPublic) {
     badge.textContent = "Global";
     badge.style.background = "rgba(16, 185, 129, 0.2)";
     badge.style.color = "#10b981";
     document.getElementById('backToGeneralBtn').style.display = 'none';
  } else {
     badge.textContent = "Privado";
     badge.style.background = "rgba(239, 68, 68, 0.2)";
     badge.style.color = "#ef4444";
     document.getElementById('backToGeneralBtn').style.display = 'block';
  }
  
  renderSavedChatsList(); // Update active highlight

  initRealtime(currentRoom);
  loadMessages(currentRoom);
  checkPrivateChatStatus(); // Check status immediately
}

function returnToGlobalChat() {
  switchRoom(PUBLIC_ROOM, "Sala Pública");
}

let globalPresenceChannel = null;

function initGlobalPresence() {
    if (globalPresenceChannel) return;
    
    // Conectar siempre al canal público para presencia global
    globalPresenceChannel = db.channel('global_presence_tracking', { 
        config: { presence: { key: userid } }
    });
    
    globalPresenceChannel
        .on("presence", { event: "sync" }, () => {
            updateOnlineUsersList(globalPresenceChannel.presenceState());
        })
        .subscribe(async (status) => {
            if (status === "SUBSCRIBED") {
                 const isAdmin = userid === PROYECTO_JA_ADMIN;
                 await globalPresenceChannel.track({
                  userid: userid,
                  display_name: displayName,
                  is_admin: isAdmin,
                  online_at: new Date().toISOString(),
                });
            }
        });
}

function initRealtime(roomId) {
  initGlobalPresence(); // Asegurar que siempre estamos "visibles" globalmente

  if (channel) db.removeChannel(channel);

  console.log(`🔌 Conectando a: ${roomId}`);
  
  channel = db.channel(roomId);

  channel
    .on("broadcast", { event: "typing" }, ({ payload }) => handleTypingEvent(payload))
    .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages" }, (payload) => {
        // Filtrar mensajes que no sean de esta sala
        const msgRoom = payload.new.room_id || PUBLIC_ROOM; // Compatibility
        if (msgRoom === currentRoom) addMessage(payload.new);
    })
    .on("postgres_changes", { event: "UPDATE", schema: "public", table: "messages" }, (payload) => {
        handleMessageUpdate(payload.new);
    })
    .subscribe();
}

// Global state
let onlineUsersState = {};

function updateOnlineUsersList(state) {
  onlineUsersState = state; // Save state
  checkPrivateChatStatus(); // Update header if in private chat

  const list = document.getElementById("usersList");
  if (!list) return;
  list.innerHTML = "";

  const users = [];
  for (const id in state) {
    const userConnections = state[id];
    if (userConnections && userConnections.length > 0) users.push(userConnections[0]);
  }
  users.sort((a, b) => (a.display_name || "").localeCompare(b.display_name || ""));
  
  const title = document.getElementById("usersTitle");
  if (title) title.textContent = `CONECTADOS (${users.length})`;

  users.forEach((u) => {
    const div = document.createElement("div");
    div.className = "userItem";
    
    if (u.userid === userid) {
        div.style.background = "rgba(255,255,255,0.05)";
        div.style.cursor = "default";
    } else {
        // Click derecho
        div.oncontextmenu = (e) => showContextMenu(e, u);
    }

    const isAdmin = u.is_admin;
    const initial = (u.display_name || "?").charAt(0).toUpperCase();

    div.innerHTML = `
      <div class="avatar">
        ${initial}
         ${isAdmin ? '<div style="position: absolute; bottom: -2px; right: -2px; background: gold; color: #8B4513; width: 12px; height: 12px; border-radius: 50%; font-size: 8px; display: flex; align-items: center; justify-content: center;">A</div>' : ""}
      </div>
      <div style="flex: 1; min-width: 0;">
        <div style="font-weight: 600; font-size: 0.9rem; color:white; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${u.display_name}</div>
        <div style="font-size: 0.75rem; opacity: 0.6; color: white;">${u.userid}</div>
      </div>
    `;
    list.appendChild(div);
  });
}

async function checkPrivateChatStatus() {
    if(!currentRoom.startsWith("private_")) return;
    
    // Extract other user ID
    const parts = currentRoom.replace("private_", "").split("_");
    const otherId = parts.find(p => p !== userid);
    if(!otherId) return;

    const titleEl = document.getElementById("roomName");
    // Preserve base title from saved chats or just use otherId if not found (fallback)
    const baseTitle = savedPrivateChats[currentRoom] ? savedPrivateChats[currentRoom].name : otherId;
    
    // Check if online
    let isOnline = false;
    for (const id in onlineUsersState) {
        // Presence state keys might be user IDs or generated IDs depending on tracking
        // In our `track` call we sent `userid`. But presence state keys are usually random session IDs.
        // We need to iterate values.
        const sessions = onlineUsersState[id];
        if (sessions.some(s => s.userid === otherId)) {
            isOnline = true;
            break;
        }
    }

    let statusHtml = "";
    if (isOnline) {
        statusHtml = `<span style="font-size:0.8rem; color:#4ade80; margin-left:10px;">● En línea</span>`;
    } else {
        // Fetch last seen
        const { data } = await db.from("users").select("last_seen").eq("username", otherId).maybeSingle();
        if (data && data.last_seen) {
             const timeStr = formatLastSeen(data.last_seen);
             statusHtml = `<span style="font-size:0.75rem; color:#94a3b8; margin-left:10px; font-weight:400;">${timeStr}</span>`;
        } else {
             statusHtml = `<span style="font-size:0.8rem; color:#94a3b8; margin-left:10px;">○ Desconectado</span>`;
        }
    }
    
    titleEl.innerHTML = `${baseTitle} ${statusHtml}`;
}

function formatLastSeen(isoStr) {
    const date = new Date(isoStr);
    const now = new Date();
    const diff = now - date;
    const oneDay = 24 * 60 * 60 * 1000;
    
    const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    
    if (diff < oneDay && now.getDate() === date.getDate()) {
        return `ult. vez hoy a las ${time}`;
    } else if (diff < 2 * oneDay) {
        return `ult. vez ayer a las ${time}`;
    } else {
        return `ult. vez ${date.toLocaleDateString()} a las ${time}`;
    }
}

// CONTEXT MENU
function showContextMenu(e, user) {
  e.preventDefault();
  contextMenuTargetUser = user;
  const menu = document.getElementById("userContextMenu");
  if(!menu) return;
  menu.style.left = `${e.pageX}px`;
  menu.style.top = `${e.pageY}px`;
  menu.style.display = "block";
}

function startPrivateChatFromMenu() {
  if (!contextMenuTargetUser) return;
  
  const targetId = contextMenuTargetUser.userid;
  const targetName = contextMenuTargetUser.display_name;
  
  // ID único de sala: sort(id1, id2).join
  const ids = [userid, targetId].sort();
  const roomId = `private_${ids[0]}_${ids[1]}`;
  
  // Guardar en la lista si no existe
  if (!savedPrivateChats[roomId]) {
      savedPrivateChats[roomId] = {
          name: targetName,
          otherId: targetId,
          unread: 0,
          lastMsg: "Chat iniciado"
      };
      savePrivateChats();
  }
  
  switchRoom(roomId, `Privado: ${targetName}`);
}

// SENDING & LOADING
async function loadMessages(roomId) {
  // Intentamos filtrar. Si falla la columna, probamos fallback.
  try {
      let query = db.from("messages").select("*").order("id", { ascending: false }).limit(MAX_MESSAGES);
      
      // FIX PARA ERROR "42703 column does not exist"
      // Como no podemos modificar la BD del usuario, eliminamos el filtro .eq('room_id') de la query
      // y filtramos en memoria (cliente).
      const { data, error } = await query;
      
      // Filtrado en cliente
      if (data) {
         // Si el mensaje tiene room_id, comparamos. Si no tiene, asumimos Public.
         const filtered = data.filter(m => {
             const mRoom = m.room_id || PUBLIC_ROOM;
             return mRoom === roomId;
         });
         renderMessages(filtered);
      } else if (error) {
         throw error;
      }
      
      // const { data, error } = await query.eq('room_id', roomId); // ESTO CAUSABA EL ERROR

      if (error) throw error;
      if (data) renderMessages(data);

  } catch (error) {
     console.warn("Fallo en loadMessages (posible falta de columna room_id)", error);
     
     // Fallback solo para sala pública para no romper todo
     if (roomId === PUBLIC_ROOM) {
         const { data } = await db.from("messages").select("*").order("id", { ascending: false }).limit(MAX_MESSAGES);
         // Mostramos solo los que NO tienen room_id o es pública
         if(data) renderMessages(data.filter(m => !m.room_id || m.room_id === PUBLIC_ROOM));
     } else {
         showChatNotification("Error: Base de datos no soporta chat privado (falta room_id)", true);
     }
  }
}

function renderMessages(messages) {
    const chatDiv = document.getElementById("chat");
    chatDiv.innerHTML = "";
    messages.sort((a, b) => a.id - b.id).forEach(addMessage);
    chatDiv.scrollTop = chatDiv.scrollHeight;
}

function addMessage(msg) {
  // Filter Client Side Double Check
  const msgRoom = msg.room_id || PUBLIC_ROOM;
  if (msgRoom !== currentRoom) return;

  const chatDiv = document.getElementById("chat");
  // Dedup
  if (chatDiv.querySelector(`[data-message-id="${msg.id}"]`)) return;

  const div = document.createElement("div");
  const isOwn = displayName && msg.username === displayName;
  
  // Check if CURRENT USER is admin (to allow deleting others)
  const isCurrentUserAdmin = userid === PROYECTO_JA_ADMIN || userid === '@proyectoja' || (userid && userid.toLowerCase() === '@proyectoja');

  // Check if MESSAGE author is admin (for styling or other logic - legacy)
  const isMsgFromAdmin = msg.userid === PROYECTO_JA_ADMIN || msg.username === 'proyectoja'; 
  
  div.className = isOwn ? "msg own" : "msg other";
  div.dataset.messageId = msg.id;

  const isDeleted = msg.deleted || msg.content === "[Mensaje eliminado]";
  let content = isDeleted ? "🚫 Mensaje eliminado" : msg.content || "";
  if (isDeleted) div.classList.add("deleted");
  
  const initial = (msg.username || "?").charAt(0).toUpperCase();

  div.innerHTML = `
    <div class="msg-container">
      ${!isOwn ? `<div class="msg-avatar">${initial}</div>` : ""}
      <div class="msg-bubble">
          ${!isOwn ? `<div class="msg-user">${msg.username}</div>` : ""}
          ${msg.reply_to ? `<div class="msg-reply" style="font-size:0.8em; opacity:0.8; border-left:2px solid; padding-left:5px; margin-bottom:5px;">Respuesta a: ${msg.reply_username || "..."}</div>` : ""}
          <div class="msg-text">${content.replace(/</g, "&lt;").replace(/\n/g, "<br>")}</div>
          <div class="msg-time">${new Date(msg.created_at).toLocaleDateString()} | ${new Date(msg.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true })}</div>
          
          ${!isDeleted ? `
          <div class="msg-actions" style="margin-top:5px; font-size:0.8rem; opacity:0.7;">
              <span onclick="startReply(${msg.id}, '${encodeURIComponent(msg.username)}', '${encodeURIComponent(msg.content)}')" style="cursor:pointer; margin-right:10px;">↩ Responder</span>
              ${(isOwn || isCurrentUserAdmin) ? `<span onclick="deleteMessage(${msg.id})" style="cursor:pointer; color:#ef4444;">🗑 Eliminar</span>` : ''}
          </div>
          ` : ""} 
      </div>
    </div>
  `;
  
  chatDiv.appendChild(div);
  if (chatDiv.scrollHeight - chatDiv.scrollTop - chatDiv.clientHeight < 500) {
    chatDiv.scrollTop = chatDiv.scrollHeight;
  }
}

// HANDLE UPDATES (Delete, Edit)
function handleMessageUpdate(newMsg) {
  const el = document.querySelector(`.msg[data-message-id="${newMsg.id}"]`);
  if (!el) return;
  
  if (newMsg.deleted) {
      el.classList.add("deleted");
      const textEl = el.querySelector(".msg-text");
      if(textEl) textEl.textContent = "🚫 Mensaje eliminado";
      
      // Hide actions if deleted
      const actions = el.querySelector(".msg-actions");
      if(actions) actions.style.display = "none";
  }
}

async function deleteMessage(id) {
    if(!await showCustomConfirm("¿Eliminar mensaje?")) return;
    
    // Check if user is admin
    const isAdmin = userid === PROYECTO_JA_ADMIN || userid === '@proyectoja';
    
    const updates = { deleted: true };
    if(isAdmin) updates.deleted_by_admin = true;
    
    const { error } = await db.from("messages").update(updates).eq("id", id);
    
    if(error) {
        console.error("Delete failed", error);
        showChatNotification("Error al eliminar (permisos insuficientes)", true);
    }
}

async function sendMessage() {
  if (spamBlocked) return;
  const inp = document.getElementById("messageInput");
  const text = inp.value.trim();
  if (!text) return;

  const msgData = {
    username: displayName,
    content: text.substring(0, 1000),
    created_at: new Date().toISOString(),
    room_id: currentRoom 
  };
  
  if (replyingTo) {
    msgData.reply_to = replyingTo;
    msgData.reply_username = replyMessageData.username;
    msgData.reply_content = replyMessageData.content.substring(0, 50);
  }

  // Si room_id no existe, esto da error.
  let { error } = await db.from("messages").insert(msgData);

  // MANEJO DE ERROR: Si falla por columna room_id inexistente
  if (error && (error.code === '42703' || error.message.includes('room_id'))) {
      if(currentRoom === PUBLIC_ROOM) {
         console.warn("Retrying sending message without room_id (Legacy)");
         delete msgData.room_id;
         const retry = await db.from("messages").insert(msgData);
         error = retry.error;
      } else {
         showChatNotification("Error: Base de datos no soporta chat privado", true);
         return;
      }
  }

  if (!error) {
    inp.value = "";
    inp.style.height = "44px"; // Reset to base height
    if (replyingTo) cancelReply();
    sendTyping(false);
    inp.focus();
    
    // Actualizar lista de chats guardados si es chat privado
    if(currentRoom !== PUBLIC_ROOM && savedPrivateChats[currentRoom]) {
        savedPrivateChats[currentRoom].lastMsg = "Tú: " + text.substring(0, 15) + "...";
        savedPrivateChats[currentRoom].unread = 0; // Leído porque lo escribí yo
        savePrivateChats();
        renderSavedChatsList();
    }
  } else {
    // on error also keep focus but don't clear? actually for UX maybe don't clear so they can retry.
    console.error(error);
    showChatNotification("Error enviando mensaje", true);
  }
} // End sendMessage

function sendTyping(isTyping) {
  if (!channel) return;
  const now = Date.now();
  if (isTyping && now - lastTypingSent < TYPING_DEBOUNCE_TIME) return;
  lastTypingSent = now;
  channel.send({ type: "broadcast", event: "typing", payload: { userid, display_name: displayName, isTyping } });
  if (isTyping) { clearTimeout(typingDebounceTimer); typingDebounceTimer = setTimeout(() => sendTyping(false), 2000); }
}

function handleTypingEvent(payload) {
  if (payload.userid === userid) return;
  const typingDiv = document.getElementById("typing");
  if (payload.isTyping) typingUsers.add(payload.display_name);
  else typingUsers.delete(payload.display_name);
  
  typingDiv.textContent = typingUsers.size > 0 ? `${Array.from(typingUsers).join(", ")} escribe...` : "";
  setTimeout(() => { 
     if(typingUsers.has(payload.display_name)) { typingUsers.delete(payload.display_name); typingDiv.textContent = ""; }
  }, 3000); 
}

// UTILS MOVED UP
function startReply(id, encodedUser, encodedContent) {
  replyingTo = id;
  replyMessageData = {
    username: decodeURIComponent(encodedUser),
    content: decodeURIComponent(encodedContent),
  };

  const area = document.getElementById("replyArea");
  if (area) {
    area.style.display = "block";
    document.getElementById("replyAuthor").textContent = replyMessageData.username;

    let preview = replyMessageData.content;
    if (preview.length > 50) preview = preview.substring(0, 50) + "...";
    document.getElementById("replyText").textContent = preview;
  }
  document.getElementById("messageInput").focus();
}

function cancelReply() {
  replyingTo = null;
  replyMessageData = null;
  const area = document.getElementById("replyArea");
  if (area) area.style.display = "none";
}

/* CUSTOM MODALS LOGIC */
function showModal(title, body, type = 'alert', placeholder = '') {
    return new Promise((resolve) => {
        const modal = document.getElementById('customModal');
        const mTitle = document.getElementById('modalTitle');
        const mBody = document.getElementById('modalBody');
        const mInput = document.getElementById('modalInput');
        const confirmBtn = document.getElementById('modalConfirmBtn');
        const cancelBtn = document.getElementById('modalCancelBtn');

        if(!modal) {
             if(type === 'prompt') resolve(prompt(body, placeholder));
             else if(type === 'confirm') resolve(confirm(body));
             else { alert(body); resolve(true); }
             return;
        }

        mTitle.textContent = title;
        mBody.textContent = body;
        
        mInput.style.display = 'none';
        mInput.value = '';
        cancelBtn.style.display = 'block';
        confirmBtn.textContent = 'Aceptar';

        if (type === 'alert') {
            cancelBtn.style.display = 'none';
        } else if (type === 'prompt') {
            mInput.style.display = 'block';
            mInput.placeholder = placeholder;
            setTimeout(() => mInput.focus(), 50);
        }

        const close = (val) => {
            modal.classList.remove('show');
            confirmBtn.onclick = null;
            cancelBtn.onclick = null;
            mInput.onkeydown = null;
            resolve(val);
        };

        confirmBtn.onclick = () => {
            if (type === 'prompt') close(mInput.value.trim());
            else close(true);
        };
        
        cancelBtn.onclick = () => {
            if(type === 'prompt') close(null);
            else close(false);
        };
        
        mInput.onkeydown = (e) => { 
            if(e.key === 'Enter') confirmBtn.click(); 
            if(e.key === 'Escape') cancelBtn.click();
        };

        modal.classList.add('show');
    });
}

async function showCustomAlert(msg, title='Aviso') {
    await showModal(title, msg, 'alert');
}

async function showCustomConfirm(msg) {
    return await showModal('Confirmar', msg, 'confirm');
}

async function showCustomPrompt(msg, placeholder = '') {
    return await showModal('Ingresar dato', msg, 'prompt', placeholder);
}

// Override/Define showError
function showError(msg) {
    showCustomAlert(msg, "Error");
    return false;
}

// UI HELPERS & EMOJIS
function updateUserInterface() {
  const isAdmin = userid === PROYECTO_JA_ADMIN;
  let html = `<span>${displayName}</span> <small>${userid}</small>`;
  document.getElementById("usernameDisplay").innerHTML = html;
  const avatar = document.getElementById("userAvatarTop");
  if (avatar) avatar.textContent = displayName.charAt(0).toUpperCase();
}

function initSidebar() {
  const toggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  if (toggle && sidebar) {
    const newToggle = toggle.cloneNode(true);
    toggle.parentNode.replaceChild(newToggle, toggle);
    const update = (hidden) => {
       newToggle.style.left = hidden ? "0" : "280px";
       newToggle.querySelector('.toggle-icon').textContent = hidden ? "▶" : "◀";
    };
    newToggle.onclick = () => { sidebar.classList.toggle("sidebar-hidden"); update(sidebar.classList.contains("sidebar-hidden")); };
  }
}

// Emojis & Utils
function toggleEmojiPicker() { document.getElementById("emojiPicker").classList.toggle("show"); if(!window.emojisInit) { initEmojis(); window.emojisInit = true; } }
function initEmojis() {
    const faces = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "🥲", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕"];
    const hands = ["👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤌", "🤏", "✌️", "🤞", "🤟", "🤘", "🤙", "👈", "👉", "👆", "👇", "☝️", "👍", "👎", "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", "✍️", "💅", "🤳", "💪"];
    const objects = ["👓", "🕶️", "🥽", "🥼", "🦺", "👔", "👕", "👖", "🧣", "🧤", "🧥", "🧦", "👗", "👘", "🥻", "🩱", "🩲", "🩳", "👙", "👚", "👛", "👜", "👝", "🛍️", "🎒", "👞", "👟", "🥾", "🥿", "👠", "👡", "🩰", "👢", "👑", "👒", "🎩", "🎓", "🧢", "⛑️", "💄", "💍", "💎"];
    const symbols = ["❤️", "🧡", "💛", "💚", "💙", "💜", "🖤", "🤍", "🤎", "💔", "❣️", "💕", "💞", "💓", "💗", "💖", "💘", "💝", "💟", "☮️", "✝️", "☪️", "🕉️", "☸️", "✡️", "🔯", "🕎", "☯️", "☦️", "⛎", "♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓", "🆔", "⚛️", "🉑", "☢️", "☣️", "📴", "📳", "🈶", "🈚", "🈸", "🈺", "🈷️", "✴️", "🆚", "💮", "🉐", "㊙️", "㊗️", "🈴", "🈵", "🈹", "🈲", "🅰️", "🅱️", "🆎", "🆑", "🅾️", "🆘", "❌", "⭕", "🛑", "⛔", "📛", "🚫", "💯", "💢", "♨️", "🚷", "🚯", "🚳", "🚱", "🔞", "📵", "🚭", "❗️", "❕", "❓", "❔", "‼️", "⁉️", "🔅", "🔆", "〽️", "⚠️", "🚸", "🔱", "⚜️", "🔰", "♻️", "✅", "❇️", "✳️", "❎", "🌐", "💠", "Ⓜ️", "🌀", "💤", "🏧", "🚾", "♿", "🅿️", "🈳", "🈂️", "🛂", "🛃", "🛄", "🛅", "🚹", "🚺", "🚼", "🚻", "🚮", "🎦", "📶", "🈁", "🔣", "ℹ️", "🔤", "🔡", "🔠", "🆖", "🆗", "🆙", "🆒", "🆕", "🆓", "0️⃣", "1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣", "🔟", "🔢", "#️⃣", "*️⃣", "⏏️", "▶️", "⏸️", "⏯️", "⏹️", "⏺️", "⏭️", "⏮️", "⏩", "⏪", "⏫", "⏬", "◀️", "🔼", "🔽", "➡️", "⬅️", "⬆️", "⬇️", "↗️", "↘️", "↙️", "↖️", "↕️", "↔️", "↪️", "↩️", "⤴️", "⤵️", "🔀", "🔁", "🔂", "🔄", "🔃", "🎵", "🎶", "➕", "➖", "➗", "✖️", "♾", "💲", "💱", "™️", "©️", "®️", "〰️", "➰", "➿", "🔚", "🔙", "🔛", "🔝", "🔜", "✔️", "☑️", "🔘", "🔴", "🟠", "🟡", "🟢", "🔵", "🟣", "⚫", "⚪", "🟤", "🔺", "🔻", "🔸", "🔹", "🔶", "🔷", "🔳", "🔲", "▪️", "▫️", "◾", "◽", "◼️", "◻️", "🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "⬛", "⬜", "🟫", "🔈", "🔇", "🔉", "🔊", "🔔", "🔕", "📣", "📢", "👁️‍🗨️", "💬", "💭", "🗯️", "♠️", "♣️", "♥️", "♦️", "🃏", "🎴", "🀄"];
    
    document.getElementById("emojiFaces").innerHTML = faces.map(e => `<div class="emoji-item" onclick="insertEmoji('${e}')">${e}</div>`).join('');
    document.getElementById("emojiHands").innerHTML = hands.map(e => `<div class="emoji-item" onclick="insertEmoji('${e}')">${e}</div>`).join('');
    document.getElementById("emojiObjects").innerHTML = objects.map(e => `<div class="emoji-item" onclick="insertEmoji('${e}')">${e}</div>`).join('');
    document.getElementById("emojiSymbols").innerHTML = symbols.map(e => `<div class="emoji-item" onclick="insertEmoji('${e}')">${e}</div>`).join('');
}
function insertEmoji(e) { 
    const i = document.getElementById("messageInput"); 
    i.value += e; 
    i.dispatchEvent(new Event('input', { bubbles: true })); // Trigger resize & typing
    i.focus(); 
}
// function cancelReply() was moved up
function validatePassword(p) { return { valid: /[A-Z]/.test(p) && /[0-9]/.test(p) && p.length >= 6 }; }
function validateUsernameLength() { const i = document.getElementById("loginUsername"); if (i.value.length > 12) i.value = i.value.substring(0, 12); }
function togglePasswordVisibility() { const i = document.getElementById("loginPassword"); i.type = i.type === "password" ? "text" : "password"; }
function logout() { 
    localStorage.removeItem("userid");
    localStorage.removeItem("display_name");
    localStorage.removeItem("user_password");
    localStorage.removeItem("remember_session");
    window.location.reload(); 
}
async function changeName() { 
    const n = await showCustomPrompt("Nuevo nombre:"); 
    if(n) { 
        displayName = n; 
        localStorage.setItem("display_name", n);
        await db.from('users').update({display_name: n}).eq('username', userid);
        updateUserInterface(); 
    } 
}
function updatePasswordRequirements(p) { document.getElementById("passwordRequirements").style.display = "block"; }
async function updateCharCounter() {} // Empty

/* USER SEARCH LOGIC */
let searchDebounceTimer;

function openUserSearch() {
  const modal = document.getElementById('userSearchModal');
  if(modal) {
      modal.classList.add('show');
      const input = document.getElementById('userSearchInput');
      input.value = '';
      input.oninput = (e) => {
          clearTimeout(searchDebounceTimer);
          searchDebounceTimer = setTimeout(() => searchUsers(e.target.value), 300);
      };
      setTimeout(() => input.focus(), 50);
      document.getElementById('userSearchResults').innerHTML = '<div style="text-align:center; color:gray; padding:20px;">Escribe para buscar...</div>';
  }
}

function closeUserSearch() {
  const modal = document.getElementById('userSearchModal');
  if(modal) modal.classList.remove('show');
}

async function searchUsers(query) {
    const resDiv = document.getElementById('userSearchResults');
    if(!query || query.length < 2) {
        resDiv.innerHTML = '<div style="text-align:center; color:gray; padding:20px;">Escribe al menos 2 caracteres...</div>';
        return;
    }
    
    resDiv.innerHTML = '<div style="text-align:center; color:gray; padding:20px;">Buscando...</div>';
    
    // Search in DB
    const { data: users, error } = await db.from('users')
        .select('username, display_name, last_seen')
        .ilike('username', `%${query}%`)
        .limit(10);
        
    if(error) {
        resDiv.innerHTML = '<div style="text-align:center; color:#ef4444; padding:20px;">Error al buscar</div>';
        return;
    }
    
    if(!users || users.length === 0) {
        resDiv.innerHTML = '<div style="text-align:center; color:gray; padding:20px;">No se encontraron usuarios</div>';
        return;
    }
    
    resDiv.innerHTML = '';
    users.forEach(u => {
        if(u.username === userid) return; // Don't show myself
        
        const div = document.createElement('div');
        div.className = 'user-result-item';
        // Secure display name passing
        const safeName = u.display_name.replace(/'/g, "\\'"); 
        div.innerHTML = `
            <div class="avatar" style="width:32px; height:32px; font-size:0.9rem; background:rgba(255,255,255,0.1); margin-right:10px;">${u.display_name.charAt(0).toUpperCase()}</div>
            <div style="flex:1;">
                <div style="font-weight:600; color:white;">${u.display_name}</div>
                <div style="font-size:0.8rem; color:var(--text-secondary);">${u.username}</div>
            </div>
            <button style="background:var(--primary-gradient); border:none; border-radius:6px; padding:6px 12px; color:white; cursor:pointer;" onclick="startPrivateChatFromSearch('${u.username}', '${safeName}')">Mensaje</button>
        `;
        resDiv.appendChild(div);
    });
}

window.startPrivateChatFromSearch = function(targetId, targetName) {
    closeUserSearch();
    const ids = [userid, targetId].sort();
    const roomId = `private_${ids[0]}_${ids[1]}`;
    
    if (!savedPrivateChats[roomId]) {
        savedPrivateChats[roomId] = {
            name: targetName,
            otherId: targetId,
            unread: 0,
            lastMsg: "Chat iniciado"
        };
        savePrivateChats();
        renderSavedChatsList();
    }
    switchRoom(roomId, `Privado: ${targetName}`);
};

// EXPORTS
window.handleLogin = handleLogin;
window.logout = logout;
window.startPrivateChatFromMenu = startPrivateChatFromMenu;
window.sendMessage = sendMessage;
window.sendTyping = sendTyping;
window.cancelReply = cancelReply;
window.startReply = startReply;
window.deleteMessage = deleteMessage;
window.toggleEmojiPicker = toggleEmojiPicker;
window.insertEmoji = insertEmoji;
window.changeName = changeName;
window.returnToGlobalChat = returnToGlobalChat;
window.validateUsernameLength = validateUsernameLength;
window.togglePasswordVisibility = togglePasswordVisibility;
window.removeSavedChat = removeSavedChat;
window.updatePasswordRequirements = updatePasswordRequirements;
window.updateCharCounter = updateCharCounter;
window.handleMessageUpdate = handleMessageUpdate;
window.openUserSearch = openUserSearch;
window.closeUserSearch = closeUserSearch;
