const { Router } = require('express');

const { createNota } = require('../controllers/createNota');

const router = Router();

router.post('/notas/:nombre',createNota);

module.exports = router;