var express = require('express');
var router = express.Router();
const indexController=require('../controllers/indexcontroller')
const validatelog = require('../middlewares/validatelog')

/* GET home page. */
router.get('/', indexController.index);
router.post('/', validatelog , indexController.logueado);
router.post('/logout', indexController.olvidarColor)


module.exports = router;
