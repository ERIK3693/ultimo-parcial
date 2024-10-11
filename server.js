const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json()); // Permitir la recepción de JSON en las solicitudes

app.get('/', (req, res) => {
  res.send('Servidor está corriendo en el puerto 4000');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mi_base_de_datos', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch((error) => {
  console.error('Error conectando a MongoDB:', error);
});