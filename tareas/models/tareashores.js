const tarea = require("./tarea");

/**
 * _llista :
 *  { uuid-234235324-234234523: {id: uuid-234235324-234234523, nom: 'pepito', hores: 10 }}
 */

class tareasHores {
  _llista = {
    abc: 123,
  };

  get llistatArr() {
    const llistat = [];
    Object.keys(this._llista).forEach((key) => {
      const tarea = this._llista[key];
      llistat.push(tarea);
    });

    return llistat;
  }

  constructor() {
    this._llista = {};
  }

  creartarea(nom = "", hores) {
    const tarea = new tarea(nom, completat);
    this._llista[tarea.id] = tarea;
  }

  carregartareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._llista[tarea.id] = tarea;
    });
  }

  llistartareas() {
    console.log(); // sóc un salt de línia

    let conta = 0;
    this.llistatArr.forEach((tarea) => {
      const { nom } = tarea;
      conta += 1;
      console.log(`${(conta + ".").green} ${nom}`);
    });
  }

  llistartareasHores() {
    console.log();
    let conta = 0;

    this.llistatArr.forEach((tarea) => {
      const { nom, completat } = tarea;

      // la condició 'ternaria' resol el if en una sola línia utilitzant el
      // format CONDICIÓ ? EXECUTA IF TRUE : EXECUTA IF FALSE

      const isCompletat =
        completat === true ? `Completat`.green : `No completat`.red;

      conta += 1;
      console.log(
        `${(conta + ".").green} ${"Nom:".yellow} ${(nom + "").cyan} ${
          "::".green
        } ${"Hores:".yellow} ${isCompletat}`
      );
    });
  }

  async introNumHores(id, hores) {
    const tarea = this._llista[id];
          const completar = await introcompletar("Completat:");
          tarea.horesFetes = hores;
    return tarea.nom;
  }

  async eliminartarea(id) {
    
    delete this._llista[id];

  }
  async completar(id = []) {
    id.forEach(element => {
      const tarea = this._llista[element];
      tarea.completat = true;
    });
    // id.forEach((completar) => {
    //   const tarea = this._llista[completar];
    //   tarea.completat = true;
    // });
  }
}

module.exports = tareasHores;
