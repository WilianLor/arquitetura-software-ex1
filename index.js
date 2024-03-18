const Aluno = require("./classes/Aluno");
const Turma = require("./classes/Turma");
const TurmaPresencial = require("./classes/TurmaPresencial");

const aluno = new Aluno({ login: "alunoTeste", nome: "aluno", RA: '7376427' });

console.log(aluno);

const turma = new Turma({
  login: "alunoTeste",
  nome: "aluno",
  RA: '7376427',
  codigo: 0,
  nota: 10,
});

console.log(turma);

const turmaPresencial = new TurmaPresencial({
  login: "alunoTeste",
  nome: "aluno",
  RA: '7376427',
  codigo: 0,
  nota: 10,
  frequencia: 90,
});

console.log(turmaPresencial);
