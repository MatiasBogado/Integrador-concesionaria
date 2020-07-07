const fs = require('fs');
let dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json','utf-8'));

let autosController = {
    listarAutos: function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write('Listado de autos en cada sucursal\n\n');

        dbConcesionarias.forEach(function(concesionaria){
            res.write("-------------------------------------------------"+'\n'); 
            res.write("Concesionaria: "+concesionaria.sucursal+'\n\n\n');
            concesionaria.autos.forEach(function(auto){
                res.write("Marca: "+auto.marca+'\n');
                res.write("Modelo: "+auto.modelo+'\n');  
                res.write("Año: "+auto.anio+'\n');    
                res.write("Color: "+auto.color+'\n\n\n');  
                    
            })
        })
        res.end();
    },
    listarMarcas: function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'})
                
        let idMarca = req.params.marca;
        res.write("Marca seleccionada:"+idMarca+'\n\n');

        dbConcesionarias.forEach(function(concesionaria){
            concesionaria.autos.forEach(function(auto){
                if(auto.marca == idMarca){
                res.write("Marca: "+auto.marca+'\n');
                res.write("Modelo: "+auto.modelo+'\n');  
                res.write("Año: "+auto.anio+'\n');    
                res.write("Color: "+auto.color+'\n\n\n'); 
                }
            })
        })
        res.end();
    },
    datoAuto: function(req,res){
        res.set({'content-type':'text/plain;charset=utf-8'});
        let idMarca = req.params.marca;
        let idDato = req.params.datos;
        res.write("Eston son los autos disponibles segun tus preferencias"+'\n\n')
        
        let autos = [];
        dbConcesionarias.forEach(function(concesionaria){
            concesionaria.autos.forEach(function(auto){
                if(auto.marca == idMarca){
                    if(auto.anio == idDato || auto.color == idDato){
                       autos.push(auto);
                    } 
                }
            });
            
        });

        if(autos.length > 0){
            autos.forEach(function(auto) {
                res.write("Marca: "+auto.marca+'\n');
                res.write("Modelo: "+auto.modelo+'\n');  
                res.write("Año: "+auto.anio+'\n');    
                res.write("Color: "+auto.color+'\n\n\n'); 
            });
        }else{
            res.end("*****404-NOT FOUND*****");
        }
        
        res.end();
    }
}
    
module.exports= autosController;        
            
