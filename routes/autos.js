const express = require("express");
const router = express.Router(); 
const autosController =require('../controllers/autosController'); 


router.get('/',autosController.listarAutos)
router.get('/:marca',autosController.listarMarcas)
router.get('/:marca/:datos',autosController.datoAuto)
module.exports =router;