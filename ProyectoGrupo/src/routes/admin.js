const { Router } = require('express');

const { admin } = require('../controllers/verificarAdmin');

const router = Router();

router.post('/',admin);

module.exports = router;