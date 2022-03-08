require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 1515,
  DB: "mongodb+srv://ismael:passwd@cluster0.q1wq3.mongodb.net/PIMJ?retryWrites=true&w=majority",
  MAIL: process.env.MAIL,
  MAILPASS: process.env.MAILPASS,
};
