const mysql = require("mysql2");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "libraryapi",
});

db.connect(err => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.message);
  } else {
    console.log("Banco de dados conectado");
  }
});

// Função para verificar/criar tabela e inserir dados
const verifyAndCreateTable = (tableName, createTableQuery, callback = null) => {
  db.query(`SHOW TABLES LIKE '${tableName}'`, (err, result) => {
    if (err) {
      console.error(`Erro ao verificar se a tabela ${tableName} existe:`, err);
      return;
    }
    if (result.length === 0) {
      db.query(createTableQuery, (err) => {
        if (err) {
          console.error(`Erro ao criar a tabela ${tableName}:`, err);
          return;
        }
        console.log(`Tabela '${tableName}' criada com sucesso`);
        if (callback) callback();
      });
    } else {
      console.log(`A tabela '${tableName}' já existe`);
      if (callback) callback();
    }
  });
};

// Função para inserir um usuário
const insertUser = (name, email,endereco, telefone, password, tipoUsuario) => {
  bcrypt.hash(password, saltRounds, (error, hash) => {
    if (error) {
      console.error("Erro ao criptografar senha:", error);
      return;
    }
    db.query(
      `INSERT INTO usuarios (nome, email, endereco, telefone, senha, tipoUsuario) VALUES (?, ?, ?, ?, ?, ?);`,
      [name, email, endereco, telefone, hash,tipoUsuario],
      (err) => {
        if (err) {
          console.error(`Erro ao inserir o usuário '${name}':`, err);
        } else {
          console.log(`Usuário '${name}' inserido com sucesso`);
        }
      }
    );
  });
};

// Função para inserir usuários iniciais
const insertUsers = () => {
  insertUser("Admin", "admin@gmail.com", "casa21", "81912345678","admin1234", "administrador")
};

// Criação da tabela usuários
verifyAndCreateTable('usuarios', `
  CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    telefone VARCHAR(11) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipoUsuario VARCHAR(50) NOT NULL
  );
`, insertUsers);


module.exports = db;