/*const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

app.get('/api/products', (req, res) => {
  fs.readFile('products.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error interno del servidor');
      return;
    }
    const products = JSON.parse(data);
    res.json(products);
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor API de productos en el puerto ${port}`);
});

*/