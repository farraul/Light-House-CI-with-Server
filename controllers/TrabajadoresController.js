//Importo modelo de datos
const trabajadores = require('../models/TrabajadoresModel');


const TrabajadoresController = {};

TrabajadoresController.getAll = (req, res) => {
    res.json(trabajadores.findAll());
};

TrabajadoresController.getById = (req, res) => {
    const id = req.params.id;
    res.json(trabajadores.findById(id));
}

TrabajadoresController.create = (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const movie = {id, title};
    res.json(trabajadores.post(movie));
};

TrabajadoresController.update = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(TrabajadorModel.update({id, ...body}));
};

TrabajadoresController.delete = (req, res) => {
    const {id} = req.params;
    res.json(TrabajadorModel.delete(id));
};


module.exports = TrabajadoresController;