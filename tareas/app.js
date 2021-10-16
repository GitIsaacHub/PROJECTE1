require("colors");

const {
  inquirerMenu,
  pausa,
  noutarea,
  tareaSelect,
  introcompletar,
  confirmar,
} = require("./helpers/inquirer");
const { guardarDB, readDB } = require("./helpers/guardarFitxer");

const tareasHores = require("./models/tareashores");
const tarea = require("./models/tarea");

const main = async () => {
  let opt = "";
  const tareas = new tareasHores();

  const tareasDB = readDB();

  if (tareasDB) {
    // si hi ha dades, carrégales
    tareas.carregartareasFromArray(tareasDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        const nomtarea = await noutarea("Nom tarea:");
        tareas.creartarea(nomtarea, 0);
        // const tarea = new tarea("Ricard", 10);
        // console.log(tarea);
        break;

      case "2":
        tareas.llistartareas();
        break;

      case "3":
        tareas.llistartareasHores();
        break;

      case "4":
        const id1 = await tareaSelect(tareas.llistatArr);

        if (id1 !== "0") {
          const hores = await introHores("Hores fetes:");
          const nomtarea = await tareas.introNumHores(id1, hores);
          console.log(
            `tarea: ${nomtarea} ${"::".yellow} ${hores} hores guardades! `
          );
        }

        break;

        case "5":
        const id2 = await tareaSelect(tareas.llistatArr);
        console.log(id2);
        if (id2 !== "0") {
          const nomtarea = await tareas.completar(id2);
        }

        break;

      case "6":
        const id3 = await tareaSelect(tareas.llistatArr);

        if (id3 !== "0") {
          const confirmar2 = await confirmar(`Segur que vols eliminar?`);
          if (confirmar2) {

          const nomtarea = await tareas.eliminartarea(id3);
          console.log(
            `tarea eliminat! `
          );
          }
          else {
            console.log(`L'tarea no s'ha eliminat`);
          }
        }
        break;

      default:
        break;
    }

    guardarDB(tareas.llistatArr);

    await pausa();
  } while (opt !== "0");
};

main();
