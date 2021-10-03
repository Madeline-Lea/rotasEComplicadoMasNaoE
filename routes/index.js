var express = require('express');
const EstudantesController = require('../controllers/EstudantesController');
const HomeController = require('../controllers/HomeController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/estudantes", EstudantesController.index)
router.get("/", HomeController.index)

module.exports = router;
