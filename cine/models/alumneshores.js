const Alumne = require("./alumne");

/**
 * _llista :
 *  { uuid-234235324-234234523: {id: uuid-234235324-234234523, nom: 'pepito', hores: 10 }}
 */

class AlumnesHores {
  _llista = {
    abc: 123,
  };

  get llistatArr() {
    const llistat = [];
    Object.keys(this._llista).forEach((key) => {
      const alumne = this._llista[key];
      llistat.push(alumne);
    });

    return llistat;
  }

  constructor() {
    this._llista = {};
  }

  crearAlumne(fila = "", columna = "") {
    const alumne = new Alumne(fila, columna);
    this._llista[alumne.id] = alumne;
  }

  recaudacio() { let x = 0; this.llistatArr.forEach(n => { x += parseInt(n.preu);}); return x;}

  carregarAlumnesFromArray(alumnes = []) {
    alumnes.forEach((alumne) => {
      this._llista[alumne.id] = alumne;
    });
  };

  llistarbutaques() {

      for (let fila = 0; fila < 7; fila++) {
        let buts = ""
        
        for (let columna = 0; columna < 7; columna++) {
          let x = 0
          this.llistatArr.forEach(e => {
            
            if (e.fila == fila && e.columna == columna) {
              buts += "O "
              x = 1
            }
          });
          buts += x == 1 ? "" : "U "
          }
          
          console.log(buts);
        }
    



  
  }

async eliminarreserva(id) {
    
    delete this._llista[id];

  }
}

module.exports = AlumnesHores;
