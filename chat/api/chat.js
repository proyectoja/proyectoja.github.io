const GROQ_API_KEY = process.env.GROQ_API_KEY;
const CEREBRAS_API_KEY = process.env.CEREBRAS_API_KEY;
const fs = require("fs");
const path = require("path");

// === Rate Limiting ===
const RATE_LIMIT = {};
const MAX_REQUESTS = 15;
const WINDOW_MS = 60000;

function getClientIP(req) {
  return req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip) {
  const now = Date.now();
  if (!RATE_LIMIT[ip] || now - RATE_LIMIT[ip].start > WINDOW_MS) {
    RATE_LIMIT[ip] = { start: now, count: 1 };
    return false;
  }
  RATE_LIMIT[ip].count++;
  return RATE_LIMIT[ip].count > MAX_REQUESTS;
}

// === Proteccion ===
const BLOCKED = [/api[_\-]?key/i, /token/i, /secret/i, /password/i, /gsk_/i, /bearer/i];
function contieneSecretos(t) { return BLOCKED.some(p => p.test(t)); }

// === RAG: Carga y chunking de documentos ===
let chunksCache = null;

function loadDocs() {
  if (chunksCache) return chunksCache;

  // Buscar docs en multiples rutas posibles (Vercel, local, etc.)
  const posiblesRutas = [
    path.join(process.cwd(), "docs"),
    path.join(__dirname, "..", "docs"),
    path.join(__dirname, "docs"),
    "/var/task/docs",
  ];

  let docsDir = null;
  for (const ruta of posiblesRutas) {
    try {
      if (fs.existsSync(ruta)) {
        docsDir = ruta;
        break;
      }
    } catch (e) {}
  }

  if (!docsDir) {
    console.error("No se encontro carpeta docs en ninguna ruta");
    chunksCache = [];
    return chunksCache;
  }

  chunksCache = [];

  try {
    const files = fs.readdirSync(docsDir).filter(f => f.endsWith(".md"));
    console.log("Docs encontrados en:", docsDir, "->", files);

    for (const file of files) {
      const content = fs.readFileSync(path.join(docsDir, file), "utf-8");
      const appName = file.replace(".md", "");
      const sections = content.split(/^## /m).filter(Boolean);

      for (const section of sections) {
        const lines = section.trim().split("\n");
        const title = lines[0].trim();
        const body = lines.slice(1).join("\n").trim();

        if (body.length > 10) {
          chunksCache.push({
            app: appName,
            title: title,
            text: body,
            full: title + "\n" + body,
          });
        }
      }
    }
    console.log("Chunks cargados:", chunksCache.length);
  } catch (e) {
    console.error("Error cargando docs:", e.message);
  }

  return chunksCache;
}

// === RAG: Busqueda por relevancia (TF-IDF simplificado) ===
function normalize(text) {
  return text.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter(w => w.length > 2);
}

function tokenize(text) {
  return normalize(text);
}

function scoreChunk(queryTokens, chunk) {
  const chunkText = normalize(chunk.full).join(" ");
  let score = 0;

  for (const token of queryTokens) {
    const regex = new RegExp(token, "gi");
    const matches = chunkText.match(regex);
    if (matches) {
      score += matches.length;
    }
    // Buscar aussi la raiz (sin ultimas letras) para plurales/conjugaciones
    if (token.length > 4) {
      const raiz = token.slice(0, -2);
      const regexRaiz = new RegExp(raiz, "gi");
      const matchesRaiz = chunkText.match(regexRaiz);
      if (matchesRaiz) {
        score += matchesRaiz.length * 0.5;
      }
    }
  }

  // Bonus por coincidencia en el titulo normalizado
  const titleNorm = normalize(chunk.title).join(" ");
  for (const token of queryTokens) {
    if (titleNorm.includes(token)) score += 3;
  }

  return score;
}

function searchDocs(query, topN = 6) {
  const chunks = loadDocs();
  if (!chunks.length) return [];

  const queryTokens = tokenize(query);
  if (!queryTokens.length) return [];

  const scored = chunks
    .map(chunk => ({ ...chunk, score: scoreChunk(queryTokens, chunk) }))
    .filter(c => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topN);

  return scored;
}

// Detectar si la pregunta es sobre las aplicaciones del proyecto
function esPreguntaDeSoftware(query) {
  const q = (query || "").toLowerCase();
  const apps = [
    "himnario", "adventista", "himno", "cancionero",
    "arcan", "player", "reproductor", "musica",
    "conexan", "chat", "mensaje",
    "proyectoja", "proyecto ja", "app", "aplicacion",
    "descargar", "instalar", "requisitos", "tutorial", "como usar",
  ];
  return apps.some(a => q.includes(a));
}

// === Handler principal ===
module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const ip = getClientIP(req);
  if (isRateLimited(ip)) return res.status(429).json({ error: "Demasiadas peticiones." });
  if (!GROQ_API_KEY && !CEREBRAS_API_KEY) return res.status(500).json({ error: "Servicio no disponible" });

  const { messages } = req.body;
  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Mensaje requerido" });
  }
  if (messages.length > 40) return res.status(400).json({ error: "Demasiados mensajes" });

  for (const m of messages) {
    if (!m.role || !m.content) return res.status(400).json({ error: "Formato invalido" });
    if (!["system", "user", "assistant"].includes(m.role)) return res.status(400).json({ error: "Formato invalido" });
    if (typeof m.content !== "string" || m.content.length > 4000) return res.status(400).json({ error: "Mensaje muy largo" });
    if (contieneSecretos(m.content)) return res.status(400).json({ error: "Contenido no permitido" });
  }

  // Obtener el ultimo mensaje del usuario para buscar contexto
  const ultimoMensaje = [...messages].reverse().find(m => m.role === "user")?.content || "";
  const contextoDocs = searchDocs(ultimoMensaje, 6);

  console.log("Query:", ultimoMensaje);
  console.log("Docs encontrados:", contextoDocs.length);
  if (contextoDocs.length > 0) {
    console.log("Top chunks:", contextoDocs.map(c => c.app + "/" + c.title + " (score:" + c.score + ")"));
  }

  // Construir sistema con contexto RAG
  let sistema = messages[0]?.role === "system" ? messages[0].content : "";

  if (contextoDocs.length > 0) {
    const contextoStr = contextoDocs
      .map(c => {
        const textoCorto = c.text.length > 400 ? c.text.slice(0, 400) + "..." : c.text;
        return `[${c.app.toUpperCase()}] ${c.title}\n${textoCorto}`;
      })
      .join("\n\n---\n\n");

    sistema += `\n\n=== INSTRUCCIONES CRITICAS PARA RESPUESTAS SOBRE EL PROYECTO ===\n\nTienes acceso a la documentacion oficial del proyecto. DEBES usar EXCLUSIVAMENTE esta informacion para responder. PROHIBIDO inventar, agregar o suplir informacion que no este en la documentacion. Si algo no esta en la documentacion, di literalmente: "No tengo esa informacion disponible ahora mismo. Puedes preguntarme otra cosa o intentar mas tarde."\n\nREGLAS ESTRICTAS:\n1. Los precios, funciones, plataformas, categorias y caracteristicas DEBEN coincidir EXACTAMENTE con lo que dice la documentacion.\n2. NUNCA inventes precios, versiones de la app, tiendas de descarga o funcionalidades.\n3. NUNCA menciones App Store, Google Play, iOS, Android o moviles, a menos que la documentacion lo diga explicitamente.\n4. Si la documentacion dice que algo es de escritorio (Windows/Mac/Linux), NO lo pidas como app movil.\n5. Si no sabes algo, di que no tienes esa informacion.\n6. NUNCA compartas correos electronicos, direcciones IP, codigos fuente, enlaces ni datos personales.\n7. Tu nombre es Cortana - eres el medio de contacto del usuario, nunca des otros canales de contacto.\n\nDOCUMENTACION OFICIAL:\n\n${contextoStr}`;

    // Reemplar el system message
    if (messages[0]?.role === "system") {
      messages[0].content = sistema;
    } else {
      messages.unshift({ role: "system", content: sistema });
    }
  } else if (esPreguntaDeSoftware(ultimoMensaje)) {
    // Pregunta sobre software pero no se encontro contexto relevante
    let sistemaExtra = `\n\n=== PREGUNTA SOBRE EL PROYECTO (sin documentacion encontrada) ===\n\nEl usuario pregunta sobre una de nuestras aplicaciones. NO inventes informacion. Si no tienes la documentacion relevante, responde: "No tengo la informacion exacta sobre eso ahora mismo. Puedes preguntarme otra cosa o intentar mas tarde."\n\nTu nombre es Cortana - eres el medio de contacto. NUNCA compartas correos electronicos ni datos personales. Solo responde con informacion que seas 100% seguro de que es correcta basandote en lo que ya sabes. NUNCA inventes precios, plataformas de descarga, o funcionalidades que no existan.`;
    if (messages[0]?.role === "system") {
      messages[0].content += sistemaExtra;
    } else {
      messages.unshift({ role: "system", content: sistemaExtra });
    }
  }

  // === Llamada a proveedor con fallback ===
  async function llamarProveedor(url, apiKey, model, msgs) {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + apiKey,
      },
      body: JSON.stringify({
        model,
        messages: msgs,
        max_tokens: 1200,
        temperature: 0.5,
      }),
    });
    return res;
  }

  try {
    let respuesta = null;
    let proveedor = null;
    let errores = [];

    // Intentar Groq primero
    if (GROQ_API_KEY) {
      let intentos = 0;
      while (intentos <= 2) {
        const groqRes = await llamarProveedor(
          "https://api.groq.com/openai/v1/chat/completions",
          GROQ_API_KEY,
          "openai/gpt-oss-20b",
          messages
        );
        if (groqRes.ok) {
          const data = await groqRes.json();
          respuesta = data.choices?.[0]?.message?.content || null;
          proveedor = "groq";
          break;
        }
        errores.push("groq:" + groqRes.status);
        if (groqRes.status === 429 || groqRes.status === 503) {
          intentos++;
          if (intentos <= 2) await new Promise(r => setTimeout(r, 1500 * intentos));
          continue;
        }
        break;
      }
    } else {
      errores.push("groq:no_key");
    }

    // Si Groq fallo, intentar Cerebras
    if (!respuesta && CEREBRAS_API_KEY) {
      console.log("Groq fallo, intentando Cerebras...");
      const cerebrasRes = await llamarProveedor(
        "https://api.cerebras.ai/v1/chat/completions",
        CEREBRAS_API_KEY,
        "gpt-oss-120b",
        messages
      );
      if (cerebrasRes.ok) {
        const data = await cerebrasRes.json();
        respuesta = data.choices?.[0]?.message?.content || null;
        proveedor = "cerebras";
      } else {
        errores.push("cerebras:" + cerebrasRes.status);
        console.error("Cerebras tambien fallo:", cerebrasRes.status);
      }
    } else if (!respuesta) {
      errores.push("cerebras:no_key");
    }

    if (!respuesta) {
      console.error("Todos los proveedores fallaron:", errores.join(", "));
      return res.status(500).json({
        error: "Servicio temporalmente no disponible. Intenta de nuevo.",
        proveedores_fallidos: errores,
      });
    }

    return res.status(200).json({ respuesta, proveedor });
  } catch (err) {
    console.error("Error backend:", err.message);
    return res.status(500).json({ error: "Error de conexion. Verifica tu internet." });
  }
};
