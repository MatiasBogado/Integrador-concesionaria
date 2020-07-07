const fs = require('fs');
let dbConcesionarias = JSON.parse(fs.readFileSync('./data/concesionarias.json', 'utf-8'));

const homeController={ 
   
    listarConcesionarias: function(req,res) {  
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("Bienvenidos al mejor sitio de para adquirir tu auto"),
        dbConcesionarias.forEach(function(concesionaria) {
            
            res.write('\n\n\n')
            
            res.write(concesionaria.sucursal+'\n')
        })
        res.end()
    },

}
module.exports= homeController;