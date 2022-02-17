const fs = require('fs');
const {dameLasnotasYa} = require("../ayuda");
const carpetita = 'data';
const {todaslasNotas} = require("./verificarAdmin");

async function deleteNota(req, res) {
    const id = req.params.id;

    //fs.writeFileSync();
    
    for (let i = 0; i <= todaslasNotas.length; i++) {
        if(i == id){
            console.log(todaslasNotas);
            fs.unlinkSync(`${dameLasnotasYa}/${carpetita}/${todaslasNotas[i].nombre}`);
            console.log(todaslasNotas);
        }
    }
}

module.exports = {deleteNota};