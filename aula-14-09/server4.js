import express from "express";
const app = express();

const PORT = 3000;

// Utilizar o json para o body das requisições
app.use(express.json());

app.listen(PORT, () => {
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

app.get("/teste", (req, res) => {
  res.send("Olá, Mundo Node.js!");
});

// get /alunos que retorna a lista de alunos
app.get("/alunos", (req, res) => {
  res.json(alunos);
});

let contador = 3;

app.post("/alunos", (req, res) => {
  const aluno = req.body;
  // alunos.push({ id: contador++, ...aluno });
  alunos.push({ id: contador++, nome: aluno.nome, email: aluno.email });
  console.log(alunos);
  res.status(201).json(alunos);
});

app.patch("/alunos/:id", (req, res) => {
  // Extrair o ID do aluno da URL
  const id = Number(req.params.id);
  // Extrair o aluno do corpo da requisição
  const aluno = req.body;

  // Encontrar o aluno pelo ID
  const index = alunos.findIndex((aluno) => aluno.id === id);

  // Se o aluno não for encontrado, retornar o status 404 - Not Found
  if (index === -1) {
    return res.status(404).send("Aluno não encontrado");
  }

  // Atualizar o aluno
  alunos[index] = { ...alunos[index], ...aluno };

  // retorna o status 200 - OK e o aluno atualizado
  res.status(200).send(alunos);
});
