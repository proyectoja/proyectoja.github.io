const GROQ_API_KEY = process.env.GROQ_API_KEY;

const RATE_LIMIT = {};
const MAX_REQUESTS = 15;
const WINDOW_MS = 60000;

function getClientIP(req) {
  return req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.socket?.remoteAddress || "unknown";
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

const BLOCKED_PATTERNS = [
  /api[_\-]?key/i, /token/i, /secret/i, /password/i, /gsk_/i,
  /bearer/i, /authorization/i, /cookie/i,
];

function contieneSecretos(texto) {
  return BLOCKED_PATTERNS.some(p => p.test(texto));
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("X-Content-Type-Options", "nosniff");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const ip = getClientIP(req);
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Demasiadas peticiones. Espera un momento." });
  }

  if (!GROQ_API_KEY) {
    return res.status(500).json({ error: "API key no configurada" });
  }

  const { messages } = req.body;

  if (!messages || !Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "Messages requerido" });
  }

  if (messages.length > 40) {
    return res.status(400).json({ error: "Demasiados mensajes" });
  }

  for (const m of messages) {
    if (!m.role || !m.content) {
      return res.status(400).json({ error: "Formato de mensaje invalido" });
    }
    if (!["system", "user", "assistant"].includes(m.role)) {
      return res.status(400).json({ error: "Rol de mensaje invalido" });
    }
    if (typeof m.content !== "string" || m.content.length > 4000) {
      return res.status(400).json({ error: "Contenido del mensaje invalido" });
    }
    if (contieneSecretos(m.content)) {
      return res.status(400).json({ error: "Contenido no permitido" });
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
        model: "llama-3.1-8b-instant",
        messages: messages,
        max_tokens: 150,
        temperature: 0.6,
      }),
    });

    if (!groqRes.ok) {
      const status = groqRes.status;
      const body = await groqRes.text().catch(() => "");
      console.error("Groq HTTP " + status + ":", body.slice(0, 200));
      return res.status(status).json({ error: "Error desde Groq: " + status });
    }

    const data = await groqRes.json();
    const respuesta = data.choices?.[0]?.message?.content || null;

    if (!respuesta) {
      return res.status(500).json({ error: "Respuesta vacia de Groq" });
    }

    return res.status(200).json({ respuesta: respuesta });
  } catch (err) {
    console.error("Error Groq:", err.message);
    return res.status(500).json({ error: "Error del servidor" });
  }
};
