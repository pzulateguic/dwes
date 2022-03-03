// importación de mongoose
const mongoose = require("mongoose");

// Schema de venta
const venta = new mongoose.Schema({
  identificator: {
    required: true,
    type: "Number",
  },
  cliente_id: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
  },
  productos: [
    {
      default: null,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Producto",
    },
  ],
  fecha: {
    default: Date.now,
    type: "Date",
  },
});

const Venta = mongoose.model("Venta", venta);
module.exports = Venta;
