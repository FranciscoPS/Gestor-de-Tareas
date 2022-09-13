const { guardarDB } = require("./helpers/guardarArchivo");
const { inquirerMenu, pausa, leerInput } = require("./helpers/inquirer");
const Tareas = require("./models/tareas");

require("colors");

const main = async () => {
  let opt = "";
  const tareas = new Tareas();

  do {
    //Esta funcion imprime el menú
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        //Crear opción
        const desc = await leerInput("Descripción: ");
        tareas.crearTarea(desc);
        break;

      case "2":
        console.log(tareas.listadoArr);
        break;
    }

    // guardarDB( tareas.listadoArr );

    await pausa();
  } while (opt !== "0");
};

main();
