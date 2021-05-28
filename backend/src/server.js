const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

mongoose.connect(
  "mongodb+srv://semana9:semana9@cluster0.hkl7l.mongodb.net/Semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// GET, POST , PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

app.use(cors()); //qualquer tipo de acesso pode utilizar a api
app.use(express.json()); // informando para utilizar o json no insomnia
app.use("/files", express.static(path.resolve(__dirname, '..', 'uploads'))); //utilizando quando tem um arquivo de upload
app.use(routes); // após do use.json

app.listen(3333);
