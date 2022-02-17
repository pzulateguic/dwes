const { Router } = require('express');

const { updateNota } = require('../controllers/updateNota');

const router = Router();

router.put('/notas/:id',updateNota);

module.exports = router;