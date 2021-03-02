var express = require('express');
var router = express.Router();


// ************ Controller Require ************
const productsController = require('../controllers/productsController');

/* GET shop page. */
router.get('/', productsController.index); 

module.exports = router;
