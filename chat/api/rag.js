const fs = require("fs");
const path = require("path");

const COHERE_API_KEY = process.env.COHERE_API_KEY;
const MODEL = "embed-multilingual-v3.0";

let embeddingsCache = null;

function loadEmbeddings() {
  if (embeddingsCache) return embeddingsCache;

  const posiblesRutas = [
    path.join(process.cwd(), "data", "embeddings.json"),
    path.join(__dirname, "..", "data", "embeddings.json"),
    path.join(__dirname, "data", "embeddings.json"),
    "/var/task/data/embeddings.json",
  ];

  for (const ruta of posiblesRutas) {
    try {
      if (fs.existsSync(ruta)) {
        const raw = fs.readFileSync(ruta, "utf-8");
        embeddingsCache = JSON.parse(raw).chunks;
        console.log("Embeddings cargados:", embeddingsCache.length, "chunks desde", ruta);
        return embeddingsCache;
      }
    } catch (e) {}
  }

  console.warn("No se encontro embeddings.json");
  return null;
}

function cosineSimilarity(a, b) {
  let dot = 0, normA = 0, normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB) + 1e-10);
}

async function embedQuery(text) {
  if (!COHERE_API_KEY) return null;

  const res = await fetch("https://api.cohere.com/v2/embed", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + COHERE_API_KEY,
    },
    body: JSON.stringify({
      texts: [text],
      model: MODEL,
      input_type: "search_query",
      embedding_types: ["float"],
    }),
  });

  if (!res.ok) {
    console.error("Cohere embed error:", res.status);
    return null;
  }

  const data = await res.json();
  return data.embeddings?.float?.[0] || null;
}

async function vectorSearch(query, topN = 6) {
  const chunks = loadEmbeddings();
  if (!chunks || !chunks.length) return null;

  const queryEmbedding = await embedQuery(query);
  if (!queryEmbedding) return null;

  const scored = chunks
    .map(chunk => ({
      ...chunk,
      score: cosineSimilarity(queryEmbedding, chunk.embedding),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topN);

  console.log("Vector search:", scored.map(c => c.app + "/" + c.title + " (" + c.score.toFixed(4) + ")"));

  return scored;
}

module.exports = { vectorSearch, loadEmbeddings };
