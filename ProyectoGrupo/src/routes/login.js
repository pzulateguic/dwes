const { Router } = require('express');

const { getToken } = require('../controllers/login');

const router = Router();

router.post('/',getToken);

module.exports = router;