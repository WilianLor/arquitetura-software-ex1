const Turma = require("./Turma");

class TurmaPersencial extends Turma {
  #frequencia;

  constructor({ frequencia, ...turmaProps }) {
    super(turmaProps);

    this.#frequencia = frequencia;
  }

  get frequencia() {
    return this.#frequencia;
  }
}

module.exports = TurmaPersencial