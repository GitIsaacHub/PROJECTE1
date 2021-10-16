require("colors");

const {
  inquirerMenu,
  pausa,
  nouAlumne,
  alumneSelect,
  confirmar,
} = require("./helpers/inquirer");
const { guardarDB, readDB } = require("./helpers/guardarFitxer");

const AlumnesHores = require("./models/alumneshores");
const Alumne = require("./models/alumne");

const main = async () => {
  let opt = "";
  const alumnes = new AlumnesHores();

  const alumnesDB = readDB();

  if (alumnesDB) {
    // si hi ha dades, carrégales
    alumnes.carregarAlumnesFromArray(alumnesDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const filares = await nouAlumne("Fila 1-7:");
        const columnares = await nouAlumne("Columna 1-7:");
        alumnes.crearAlumne(filares, columnares);
        // const alumne = new Alumne("Ricard", 10);
        // console.log(alumne);
        break;

      case "2":
        alumnes.llistarbutaques();
        break;

      case "3":
        console.log(alumnes.recaudacio());
        break;

      case "4":
        const id2 = await alumneSelect(alumnes.llistatArr);

        if (id2 !== "0") {
          const confirmar2 = await confirmar(`Segur que vols eliminar?`);
          if (confirmar2) {

          const filares = await alumnes.eliminarreserva(id2);
          console.log(
            `Reserva eliminada! `
          );
          }
          else {
            console.log(`La reserva no s'ha eliminat`);
          }
        }
        break;

      default:
        break;
    }

    guardarDB(alumnes.llistatArr);

    await pausa();
  } while (opt !== "0");
};

main();
