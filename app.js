const express = require('express');
const path = require('path');
const port = 3000;

const data = require('./routes/data');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/products/:id', (req, res) => {
    const id = req.params.id;
    const product = data.products.find(item => item._id == id);
    res.send(product);
});

app.get('/api/products', (req, res) => {
    res.send(data.products);
});

app.listen(port, () => console.log(`Server running on port ${port}`));