// 1. Importando módulos necessários
// Express é um framework minimalista e flexível para Node.js, fornecendo um conjunto robusto de recursos para construir aplicações web.
import express from "express";

// 2. Iniciando o Express
const app = express();

// 3. Definindo a porta onde a aplicação vai rodar
const PORT = 3000;

// 4. Definindo uma rota
// Quando alguém acessar o caminho "/teste" pelo método GET, esta função será executada.
app.get("/teste", (req, res, next) => {
  // Enviando uma resposta simples ao cliente
  res.send("Olá, Mundo Node.js!");
});

// 5. Iniciando o servidor na porta especificada
// Assim que a aplicação estiver rodando, ela estará escutando requisições feitas na porta 3000.
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
