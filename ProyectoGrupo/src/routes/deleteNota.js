const { Router } = require('express');

const { deleteNota } = require('../controllers/deleteNota');

const router = Router();

router.delete('/notas/:id',deleteNota);

module.exports = router;