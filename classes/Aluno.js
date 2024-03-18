class Aluno {
  nome;
  login;
  RA;

  constructor({ nome, login, RA }) {
    this.nome = nome;
    this.login = login;
    this.RA = RA;
  }
}

module.exports = Aluno;
