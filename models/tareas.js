const Tarea = require("./tarea");
class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];

    //Obtenemos un array de todas las llaves
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });

    return listado;
  }

  constructor() {
    this._listado = {};
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);

    //Al mandar un id, estamos creando una nueva propiedad
    this._listado[tarea.id] = tarea;
  }
}

module.exports = Tareas;
