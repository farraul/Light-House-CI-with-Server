let dbtrabajadores = require('../trabajadores');

TrabajadorModel = {};

TrabajadorModel.findAll = () => dbtrabajadores;

TrabajadorModel.findById = (id) => dbtrabajadores.find(trabajador => trabajador.id == id);

TrabajadorModel.post = (newTrabajador) => {
    //let movies = db.filter(movie => movie.id != newMovie.id);
    db.push(newTrabajador);
    return newTrabajador;
}

TrabajadorModel.update = (newTrabajador) => {
    let trabajadores = dbtrabajadores.filter(trabajador => trabajador.id != newTrabajador.id);
    trabajadores.push(newTrabajador);
    dbtrabajadores = trabajadores;
    return newTrabajador;
}

TrabajadorModel.delete = (id) => {
    let trabajadores = dbtrabajadores.filter(trabajador => trabajador.id != id);
    dbtrabajadores = trabajadores;
    return `Registro ${id} eliminado correctamente`;
}


module.exports = TrabajadorModel;

