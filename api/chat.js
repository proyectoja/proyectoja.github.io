const GROQ_API_KEY = process.env.GROQ_API_KEY;
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

  const docsDir = path.join(process.cwd(), "docs");
  chunksCache = [];

  try {
    const files = fs.readdirSync(docsDir).filter(f => f.endsWith(".md"));

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

// === Handler principal ===
module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const ip = getClientIP(req);
  if (isRateLimited(ip)) return res.status(429).json({ error: "Demasiadas peticiones." });
  if (!GROQ_API_KEY) return res.status(500).json({ error: "Servicio no disponible" });

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
  const contextoDocs = searchDocs(ultimoMensaje);

  // Construir sistema con contexto RAG
  let sistema = messages[0]?.role === "system" ? messages[0].content : "";

  if (contextoDocs.length > 0) {
    const contextoStr = contextoDocs
      .map(c => `[${c.app.toUpperCase()}] ${c.title}\n${c.text}`)
      .join("\n\n---\n\n");

    sistema += `\n\nTienes acceso a la siguiente documentacion oficial. Usa esta informacion para responder. Si la respuesta esta en la documentacion, respondela. Si NO esta en la documentacion, di que no tienes esa informacion:\n\n${contextoStr}`;

    // Reemplar el system message
    if (messages[0]?.role === "system") {
      messages[0].content = sistema;
    } else {
      messages.unshift({ role: "system", content: sistema });
    }
  }

  try {
    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + GROQ_API_KEY,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b",
        messages,
        max_tokens: 1024,
        temperature: 0.5,
      }),
    });

    if (!groqRes.ok) {
      console.error("Error backend:", groqRes.status);
      return res.status(500).json({ error: "Error del servicio: mucha gente usando a Cortana..." });
    }

    const data = await groqRes.json();
    const respuesta = data.choices?.[0]?.message?.content || null;
    if (!respuesta) return res.status(500).json({ error: "Sin respuesta" });

    return res.status(200).json({ respuesta });
  } catch (err) {
    console.error("Error backend:", err.message);
    return res.status(500).json({ error: "Error del servicio" });
  }
};
