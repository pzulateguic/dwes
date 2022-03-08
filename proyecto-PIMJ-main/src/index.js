const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const Cliente = require("./routes/cliente");
const Venta = require("./routes/venta");
const Producto = require("./routes/producto");

const sendMailing = require("./routes/mail");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ruta de cliente
app.use("/cliente", Cliente);
// ruta de venta
app.use("/venta", Venta);
// ruta de producto
app.use("/producto", Producto);

// ruta a nodemailer
app.use("/send_mail", sendMailing);

module.exports = app;
