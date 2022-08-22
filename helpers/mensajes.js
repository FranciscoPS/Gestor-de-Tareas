require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {

    console.log(`${"1.".green} Crear tarea`);
    console.log(`${"2.".green} Listar tareas`);
    console.log(`${"3.".green} Listar tareas completadas`);
    console.log(`${"4.".green} Listar tareas pendientes`);
    console.log(`${"5.".green} Completar tarea(s)`);
    console.log(`${"6.".green} Borrar tarea`);
    console.log(`${"0.".green} Salir\n`);

    //Usamos el readline ya existente de node y creamos una interfaz de la misma instancia
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    //El question se utiliza pra usar el output, que manda una pregunta y de forma de callback regresa lo obtenido en consola
    readline.question("Seleccione una opcion: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPresione ${"ENTER".green} para continuar`, (opt) => {
      readline.close();
      resolve();
    });
  });
};

module.exports = { mostrarMenu, pausa };
