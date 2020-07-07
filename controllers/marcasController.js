
const fs = require('fs');
let dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const marcasController = {
            listarMarcas: function(req,res){
                res.set({'content-type':'text/plain;charset=utf-8'})
                res.write("Estas son las marcas disponibles"+'\n\n')
                let marcas = [];
            dbConcesionarias.forEach(concesionaria=>{
                concesionaria.autos.forEach(auto=>{
                   if(!marcas.includes(auto.marca)){
                        marcas.push(auto.marca);
                   }
                });
            });

            marcas.forEach(marca => {
                
                res.write(marca +'\n');
            });

            res.end();
        },
        listarAutos: function(req,res){
           
            let idMarcas = req.params.marca;

            res.write("Autos disponibles de la marca : "+idMarcas);

            dbConcesionarias.forEach(concesionaria =>{
                concesionaria.autos.forEach(auto =>{
                    if(auto.marca == idMarcas){
                        res.write(`
                        
                        Marca: ${auto.marca}
                        Modelo: ${auto.modelo}
                        Anio: ${auto.anio}
                        `)
                    }
                })
                
            })
            res.end();
        }
}

module.exports = marcasController;