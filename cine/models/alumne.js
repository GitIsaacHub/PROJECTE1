const { v4: uuidv4 } = require("uuid");

class Alumne {
  id = "";
  fila = "";
  columna = "";
  preu = "6€";

  constructor(fila, columna) {
    this.id = uuidv4();
    this.fila = fila;
    this.columna = columna;
    this.preu = "6€";
  }
}

module.exports = Alumne;
