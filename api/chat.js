const GROQ_API_KEY = process.env.GROQ_API_KEY;

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

const BLOCKED = [/api[_\-]?key/i, /token/i, /secret/i, /password/i, /gsk_/i, /bearer/i];

function contieneSecretos(t) {
  return BLOCKED.some(p => p.test(t));
}

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
        max_tokens: 150,
        temperature: 0.6,
      }),
    });

    if (!groqRes.ok) {
      console.error("Error backend:", groqRes.status);
      return res.status(500).json({ error: "Error del servicio" });
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
