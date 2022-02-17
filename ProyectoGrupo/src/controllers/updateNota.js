const fs = require('fs');
const {dameLasnotasYa} = require("../ayuda");
const carpetita = 'data';
const {todaslasNotas} = require("./verificarAdmin");


async function updateNota(req, res, verificar) {
    //const nombre = req.params.nombre;
    const contenido = req.body;
    const id = req.params.id;

    //fs.writeFileSync();
    
    for (let i = 0; i <= todaslasNotas.length; i++) {
        if(i == id){
            fs.writeFileSync(`${dameLasnotasYa}/${carpetita}/${todaslasNotas[i].nombre}`, `${contenido.message}`);        
            console.log(todaslasNotas);
        }
    }
}

module.exports = {updateNota};