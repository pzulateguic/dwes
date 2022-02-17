const jwt = require("jsonwebtoken");
const fs = require("fs");
const {dameLasnotasYa} = require("../ayuda");
const carpetita = 'data';

function getCarpetita() {
    return  fs.readdirSync(`${dameLasnotasYa}/${carpetita}`);
}

const guardar = getCarpetita();

const todaslasNotas =  guardar.map(guarda => {
    const contenido = fs.readFileSync(`${dameLasnotasYa}/${carpetita}/${guarda}`, 'utf-8');
    return { nombre: guarda, contenido:  contenido };
});

// Authorization: Bearer <token>
async function verificar(req, res, next){
    const bearerHeader =  await req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
         const bearerToken = bearerHeader.split(" ")[1];
         req.token  = bearerToken;
         next();
    }
    //login del usuario
    jwt.verify(req.token, 'secretkey', (error, authData) => {
        if(error){
            res.sendStatus(403);
        }else{
            /*res.json({
                    mensaje: "bienvenido usuario vip",
                    authData
            });*/
            res.status(200).send(todaslasNotas);
        }
    });
}

module.exports = { verificar, todaslasNotas}
