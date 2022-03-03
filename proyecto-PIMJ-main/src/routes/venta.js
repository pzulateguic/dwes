const express = require("express");
const VentaController = require("../controllers/venta");

const router = express.Router();

router
  .get("/", VentaController.listall)
  .post("/", VentaController.create)
  .get("/:key/:value", VentaController.find, VentaController.show)
  .put("/:key/:value", VentaController.find, VentaController.update)
  .delete("/:key/:value", VentaController.find, VentaController.deleted);

module.exports = router;
