const http = require("http");

const express = require("express");
const app = express();
const PORT = 3000;

app.set("port", PORT);
app.use(express.json());

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

const alunos = [
  {
    id: 1,
    nome: "Maria",
    email: "maria@email.com",
  },
  {
    id: 2,
    nome: "Joao",
    email: "joao@email.com",
  },
];

app.get("/teste", (req, res, next) => {
  res.send("Olá, Mundo Node.js!");
});

// get /alunos que retorna a lista de alunos
app.get("/alunos", (req, res, next) => {
  res.json(alunos);
});

let contador = 3;

app.post("/alunos", (req, res, next) => {
  const aluno = req.body;
  // alunos.push({ id: contador++, ...aluno });
  alunos.push({ id: contador++, nome: aluno.nome, email: aluno.email });
  console.log(alunos);
  res.status(201).json(alunos);
});
