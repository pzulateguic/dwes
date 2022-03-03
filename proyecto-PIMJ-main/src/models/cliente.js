// importación de mongoose
const mongoose = require("mongoose");

// Schema de cliente
const cliente = new mongoose.Schema({

    "n_socio": { // 0 va a ser admin
        "required": true,
        "type": "Number"
    },
    "nombre": {
        "required": true,
        "type": "String"
    },
    "primer_apellido": {
        "required": true,
        "type": "String"
    },
    "segundo_apellido": {
        "type": "String"
    },
    "email": {
        "required": true,
        "type": "String"
    },
    "direccion": {
        "required": true,
        "type": "String"
    },
})

const Cliente = mongoose.model('Cliente', cliente)
module.exports = Cliente


