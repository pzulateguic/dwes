const express = require('express');
const ProductoController = require('../controllers/producto');

const router = express.Router();

router.get('/', ProductoController.listall)
    .post('/', ProductoController.create)
    .get('/:key/:value', ProductoController.find, ProductoController.show)
    .put('/:key/:value', ProductoController.find, ProductoController.update)
    .delete('/:key/:value', ProductoController.find, ProductoController.deleted)

module.exports = router;