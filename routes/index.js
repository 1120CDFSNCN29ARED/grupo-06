var express = require('express');
var router = express.Router();


// ************ Controller Require ************
const mainController = require('../controllers/mainController');

/* GET home page. */
router.get('/', mainController.index); 

module.exports = router;
