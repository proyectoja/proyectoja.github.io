#!/usr/bin/env node
// =============================================
// Script para generar embeddings con Cohere
// Ejecutar: npm run embed (desde chat/)
// Requiere: COHERE_API_KEY en .env o variable de entorno
// =============================================

const { CohereClientV2 } = require("cohere-ai");
const fs = require("fs");
const path = require("path");

const COHERE_API_KEY = process.env.COHERE_API_KEY;
if (!COHERE_API_KEY) {
  console.error("Error: COHERE_API_KEY no configurada.");
  console.error("Ejecuta: export COHERE_API_KEY=tu_api_key");
  process.exit(1);
}

const co = new CohereClientV2({ token: COHERE_API_KEY });

const DOCS_DIR = path.join(__dirname, "..", "docs");
const OUTPUT_DIR = path.join(__dirname, "..", "data");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "embeddings.json");

const MODEL = "embed-multilingual-v3.0";
const MAX_CHUNK_CHARS = 500;
const BATCH_SIZE = 96;

function loadAndChunk() {
  if (!fs.existsSync(DOCS_DIR)) {
    console.error("No se encontro carpeta docs:", DOCS_DIR);
    process.exit(1);
  }

  const files = fs.readdirSync(DOCS_DIR).filter(f => f.endsWith(".md"));
  console.log("Docs encontrados:", files);

  const chunks = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(DOCS_DIR, file), "utf-8");
    const appName = file.replace(".md", "");
    const sections = content.split(/^## /m).filter(Boolean);

    for (const section of sections) {
      const lines = section.trim().split("\n");
      const title = lines[0].trim();
      const body = lines.slice(1).join("\n").trim();

      if (body.length < 10) continue;

      const full = title + "\n" + body;

      if (full.length <= MAX_CHUNK_CHARS) {
        chunks.push({ app: appName, title, text: body, full });
      } else {
        const paragraphs = body.split(/\n\n+/).filter(Boolean);
        let current = title + "\n";

        for (const para of paragraphs) {
          if ((current + para).length > MAX_CHUNK_CHARS && current.length > title.length + 10) {
            chunks.push({ app: appName, title, text: current.replace(title + "\n", "").trim(), full: current.trim() });
            current = title + "\n" + para + "\n";
          } else {
            current += para + "\n\n";
          }
        }

        if (current.trim().length > title.length + 10) {
          chunks.push({ app: appName, title, text: current.replace(title + "\n", "").trim(), full: current.trim() });
        }
      }
    }
  }

  return chunks;
}

async function embedBatch(texts) {
  const response = await co.embed({
    texts,
    model: MODEL,
    inputType: "search_document",
    embeddingTypes: ["float"],
  });
  return response.embeddings.float;
}

async function main() {
  console.log("Cargando y procesando documentos...");
  const chunks = loadAndChunk();
  console.log(`Chunks a embebir: ${chunks.length}`);

  const embeddings = [];

  for (let i = 0; i < chunks.length; i += BATCH_SIZE) {
    const batch = chunks.slice(i, i + BATCH_SIZE);
    const texts = batch.map(c => c.full);

    console.log(`Embebiendo batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(chunks.length / BATCH_SIZE)} (${texts.length} textos)...`);

    const vecs = await embedBatch(texts);
    embeddings.push(...vecs);

    if (i + BATCH_SIZE < chunks.length) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  const result = chunks.map((chunk, i) => ({
    app: chunk.app,
    title: chunk.title,
    text: chunk.text,
    embedding: embeddings[i],
  }));

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ chunks: result }, null, 2));
  console.log(`\nEmbeddings generados: ${result.length} chunks`);
  console.log(`Guardado en: ${OUTPUT_FILE}`);
  console.log(`Dimensiones: ${embeddings[0].length}`);
}

main().catch(err => {
  console.error("Error:", err.message);
  process.exit(1);
});
