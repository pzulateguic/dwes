const mongoose = require("mongoose");

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
  producto: [
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

const Venta = mongoose.model("Sale", venta);
module.exports = Venta;
