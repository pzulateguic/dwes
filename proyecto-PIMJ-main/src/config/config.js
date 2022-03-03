require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 3000,
  DB: process.env.DB,
  MAIL: process.env.MAIL,
  MAILPASS: process.env.MAILPASS,
};
