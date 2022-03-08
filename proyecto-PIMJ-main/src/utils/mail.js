const nodemailer = require("nodemailer");
const moment = require("moment");
const CONFIG = require("../config/config");

function sendMailing(req, res) {
  const { user, subject, message } = req.body;
  const img = "../../img/pimj-logo.png";

  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: `pimjcomponents@gmail.com`,
      pass: `pimjcomponents1@`,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  var mailOptions = {
    from: `${user} from pimjcomponents@gmail.com`,
    to: user,
    subject: subject,
    html: `<h1> FACTURA 📝</h1>
            <h3>Muchas gracias por su compra ❕</h3>
            <br></br>
            <p>🤟 Mensaje: ${message} 🤟</p>
            <b>Fecha: ${moment().format("MMMM Do YYYY, h:mm:ss a")}</b>
            <br>
            🙋‍♂️<img src="${img}">`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      return res.status(200).send({ message: "Correo enviado con exito" });
    }
  });
}

module.exports = {
  sendMailing,
};
