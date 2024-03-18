const Aluno = require("./Aluno");

class Turma extends Aluno {
  #codigo;
  #nota;

  constructor({ codigo, nota, ...alunoProps }) {
    super(alunoProps);

    this.#codigo = codigo;
    this.#nota = nota;
  }

  get codigo() {
    return this.#codigo;
  }

  get nota() {
    return this.#nota;
  }
}

module.exports = Turma;
