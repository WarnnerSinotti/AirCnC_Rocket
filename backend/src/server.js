const express = require('express');
const routes = require('./routes');

const app = express();

// GET, POST , PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(express.json()); // informando para utilizar o json no insomnia
app.use(routes); // após do use.json

app.listen(3333);
