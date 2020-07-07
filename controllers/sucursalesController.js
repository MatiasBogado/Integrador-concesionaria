const fs = require('fs');
let dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const sucursalesController={ 
   
    listarSucursales: function(req,res) {  
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("En esta seccion estan todas las sucursales incluido direccion y telefono"),
        dbConcesionarias.forEach(function(concesionaria) {
            res.write('\n\n\n')
            res.write(concesionaria.sucursal+": "+concesionaria.direccion+" *** "+concesionaria.telefono+'\n\n\n')
        })
        res.end()
    },
    datosSucursal:function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'});
        res.write("En esta seccion esta toda la info de la sucursal solicitada\n\n\n");
         
        let idSucursal= req.params.sucursal;   
            dbConcesionarias.forEach(function(concesionaria) {   
                if(concesionaria.sucursal == idSucursal){
                res.write("Sucursal: "+concesionaria.sucursal+'\n');
                res.write("Direccion: " +concesionaria.direccion+'\n');
                res.write("Telefono: "+ concesionaria.telefono+'\n\n\n');
                res.write("VEHÍCULOS: "+'\n\n');

                concesionaria.autos.forEach(function(auto){
                    res.write( auto.marca + ", " + auto.modelo + ", " + auto.anio + '\n');
                });

                res.write('\n---------------------------\n');
                res.write('TOTAL: ' + concesionaria.autos.length);
                res.write('\n---------------------------\n');
                res.end();
        
            }

        });
        res.end("Lo siento, no disponemos de sucursales en " + req.params.sucursal);
    }
                                    
}

module.exports= sucursalesController;