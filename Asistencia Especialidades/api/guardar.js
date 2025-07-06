export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Método no permitido');

  const { id, nombre, correo, edad, telefono, asociacion } = req.body;
  const fecha = new Date().toISOString();
  const archivo = `respuestas/${id}/${nombre.replace(/\s/g, "_")}_${Date.now()}.json`;
  const contenido = Buffer.from(JSON.stringify({ nombre, correo, edad, telefono, asociacion, fecha }, null, 2)).toString('base64');

  const response = await fetch(`https://api.github.com/repos/proyectoja/proyectoja.github.io/contents/${archivo}`, {
    method: 'PUT',
    headers: {
      Authorization: `token ${process.env.GITHUB_TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: `Nuevo registro: ${nombre}`,
      content: contenido,
      branch: 'main'
    })
  });

  if (response.ok) {
    res.status(200).send("✅ Registro guardado correctamente.");
  } else {
    const error = await response.json();
    res.status(500).send("❌ Error: " + JSON.stringify(error));
  }
}