// index.js
const express = require("express");
const cors = require("cors");
const db = require("./banco/db"); // Importa a conexão com o banco de dados
//const router = require("./router"); // Importa as rotas

const app = express();
app.use(express.json());
app.use(cors());
//app.use("/", router); // Usa as rotas definidas

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
