const express = require('express');
const app = express();

app.use(express.json());

// Endpoint /tareas exigido en las instrucciones
app.get('/tareas', (req, res) => {
  res.status(200).json([
    { id: 1, titulo: 'Aprender Jest' },
    { id: 2, titulo: 'Crear API en Express' }
  ]);
});

module.exports = app;