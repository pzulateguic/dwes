const { Router } = require('express');

const { verificar } = require('../controllers/verificarAdmin');

const router = Router();

router.post('/',verificar);

module.exports = router;