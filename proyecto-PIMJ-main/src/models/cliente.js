const mongoose = require("mongoose");

const cliente = new mongoose.Schema({
  id_cliente: {
    required: true,
    type: "Number",
  },
  nombre: {
    required: true,
    type: "String",
  },
  primer_apellido: {
    required: true,
    type: "String",
  },
  segundo_apellido: {
    type: "String",
  },
  email: {
    required: true,
    type: "String",
  },
  direccion: {
    required: true,
    type: "String",
  },
});

const Cliente = mongoose.model("Client", cliente);
module.exports = Cliente;
