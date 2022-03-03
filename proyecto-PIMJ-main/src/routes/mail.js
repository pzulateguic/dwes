const express = require("express");
const nodemailer = require("nodemailer");
const { sendMailing } = require("../utils/mail");

const router = express.Router();

router.post("/", sendMailing);

module.exports = router;
