const mongoose = require("mongoose");

const producto = new mongoose.Schema({
  identificator: {
    required: true,
    type: "Number",
  },
  marca: {
    required: true,
    type: "String",
  },
  tipo: {
    required: true,
    type: "String",
  },
  precio: {
    required: true,
    type: "Number",
  },
  venta_id: {
    default: null,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Venta",
  },
});

const Producto = mongoose.model("Product", producto);
module.exports = Producto;
