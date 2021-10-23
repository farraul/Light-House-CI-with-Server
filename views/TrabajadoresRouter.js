const express = require('express');
const router = express.Router();

//Importo modelo de datos

const TrabajadoresController = require('../controllers/TrabajadoresController');

// End-points CRUD movies
router.get('/', TrabajadoresController.getAll);
router.get('/:id', TrabajadoresController.getById);
router.post('/', TrabajadoresController.create);
router.put('/:id', TrabajadoresController.update);
router.delete('/:id', TrabajadoresController.delete);


module.exports = router;