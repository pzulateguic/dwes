const express = require('express');
const ClienteController = require('../controllers/cliente');

const router = express.Router();

router.get('/', ClienteController.listall)
    .post('/', ClienteController.create)
    .get('/:key/:value', ClienteController.find, ClienteController.show)
    .put('/:key/:value', ClienteController.find, ClienteController.update)
    .delete('/:key/:value', ClienteController.find, ClienteController.deleted)

module.exports = router;