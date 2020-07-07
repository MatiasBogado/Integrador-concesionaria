//Express
const express = require("express");
const app = express();

//Rutas
const homeRouter = require("./routes/home");
const autosRouter = require("./routes/autos");
const marcasRouter= require("./routes/marcas");
const sucursalesRouter=require("./routes/sucursales");

//Servidor
app.listen(3030,()=> console.log("El servidor esta funcionando en el puerto 3030"))


//Usar los modulos de rutas
app.use('/',homeRouter);
app.use('/sucursales',sucursalesRouter);
app.use('/marcas',marcasRouter);
app.use('/autos',autosRouter);