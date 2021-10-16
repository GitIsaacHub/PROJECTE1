const inquirer = require("inquirer");
require("colors");

const preguntes = [
  {
    type: "list",
    name: "opcio",
    message: "Què vols fer?",
    choices: [
      {
        value: "1",
        name: `${"1 ".green} Nou tarea`,
      },
      {
        value: "2",
        name: `${"2 ".green} Llistar tareas`,
      },
      {
        value: "3",
        name: `${"3 ".green} Llistar tareas i hores`,
      },
      {
        value: "4",
        name: `${"4 ".green} Introduir hores`,
      },
      {
        value: "5",
        name: `${"5 ".green} Completar`,
      },
      {
        value: "6",
        name: `${"6 ".green} Eliminar tarea`,
      },
      {
        value: "0",
        name: `${"0 ".green} Sortir`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("========================".cyan);
  console.log("   Secciona una opció".yellow);
  console.log("========================\n".cyan);

  const { opcio } = await inquirer.prompt(preguntes);

  return opcio; // retorno un valor entre 0 i 5
};

const pausa = async () => {
  const question = [
    {
      type: "input",
      name: "enter",
      message: `Presiona ${"enter".yellow} per a continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const noutarea = async (message) => {
  const question = [
    {
      type: "input",
      name: "nom",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Si us plau, introdueix un nom";
        }
        return true;
      },
    },
  ];

  const { nom } = await inquirer.prompt(question);
  return nom;
};

const tareaSelect = async (tareas = []) => {
  const choices = tareas.map((tarea, i) => {
    const idx = `${i + 1}.`.green;
    return {
      value: tarea.id,
      name: `${idx} ${tarea.nom}`,
    };
  });

  choices.unshift({
    value: "0",
    name: "0. ".green + "Cancel·lar",
  });

  const pregunta = [
    {
      type: "checkbox",
      name: "id",
      message: "Selecciona tarea",
      choices,
    },
  ];

  const { id } = await inquirer.prompt(pregunta);
  return id;
};

const introcompletar = async (message) => {
  const question = [
    {
      type: "input",
      name: "completar",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Completar?";
        }
        return true;
      },
    },
  ];

  const { hores } = await inquirer.prompt(question);
  return hores;
};

const confirmar = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];

  const { ok } = await inquirer.prompt(question);
  return ok;
};


module.exports = {
  inquirerMenu,
  pausa,
  noutarea,
  tareaSelect,
  introcompletar,
  confirmar,
};
