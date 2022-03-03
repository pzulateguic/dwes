// importación de mongoose
const mongoose = require("mongoose");

// Schema de producto
const producto = new mongoose.Schema({
  identificator: {
    required: true,
    type: "Number",
  },
  marca: {
    required: true,
    type: "String",
  },
  talla: {
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

const Producto = mongoose.model("Producto", producto);
module.exports = Producto;
