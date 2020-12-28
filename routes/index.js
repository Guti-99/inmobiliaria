var express = require('express');
var router = express.Router();
const indexController = require ('../controllers/indexController')

/* GET inicio de pagina */
router.get('/',indexController.inicio);

/* GET contacto */
router.get('/contacto',indexController.contacto);

/* GET nosotros */
router.get('/nosotros',indexController.nosotros);



module.exports = router;
