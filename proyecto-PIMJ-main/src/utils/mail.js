const nodemailer = require("nodemailer");
const moment = require('moment');
const CONFIG = require("../config/config");

function sendMailing(req, res) {

  const { user, subject, message } = req.body;

  const phrases = [
    "🚩 Aquí tiene su factura 😉",
    "🚩 Te esperamos en tu próxima compra 🤗",
    "🚩 Muchas gracias por tu compra 😜",
    "🚩 ¡Que disfrutes tu compra! 😁"];


  var transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: `${CONFIG.MAIL}`,
      pass: `${CONFIG.MAILPASS}`,
    },
  });

  var mailOptions = {
    from: `${user} from ropita@tiendita.com`,
    to: 'ditacj78@gmail.com',
    subject: subject,
    html: `<h1>📝 FACTURA 📝</h1>
            <h3>${phrases[Math.floor(phrases.length * Math.random())]}</h3>
            <br></br>
            <p>💬: ${message}</p>
            <b>📅: ${moment().format('MMMM Do YYYY, h:mm:ss a')}</b>`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

module.exports = {
  sendMailing,
};
