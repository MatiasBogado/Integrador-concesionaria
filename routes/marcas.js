const express = require("express");
const router = express.Router(); 
const marcasController =require('../controllers/marcasController'); 


router.get('/',marcasController.listarMarcas)
router.get('/:marca',marcasController.listarAutos)
module.exports =router;