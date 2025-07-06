import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { id } = req.query;
  const filePath = path.resolve('./data/formularios.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  if (!data[id]) return res.status(404).json({ error: "Formulario no encontrado" });

  const fechaCierre = new Date(data[id].fechaCierre);
  const ahora = new Date();
  const estado = ahora > fechaCierre ? "cerrado" : "abierto";
  res.status(200).json({ ...data[id], estado });
}