const MovieRouter = require('./views/MovieRouter');
const TrabajadoresRouter = require('./views/TrabajadoresRouter');


const router = require('express').Router();


//Rutas
router.use('/movies', MovieRouter);
router.use('/trabajadores', TrabajadoresRouter);


module.exports = router;

