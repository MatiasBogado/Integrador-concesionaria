const express = require("express");
const router = express.Router(); 
const sucursalesController =require('../controllers/sucursalesController'); 


router.get('/',sucursalesController.listarSucursales)
router.get('/:sucursal',sucursalesController.datosSucursal)
module.exports =router;