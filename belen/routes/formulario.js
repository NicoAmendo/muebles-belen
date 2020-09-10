var express = require('express');
var router = express.Router();
const formularioController = require('../Controllers/formularioController');

/* GET home page. */
router.get('/formulario', formularioController.principal);

module.exports = router;
