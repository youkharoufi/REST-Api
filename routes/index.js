var express = require('express');
var router = express.Router();
const clientController=require('../controllers/clientController');
const policiesController=require('../controllers/policiesController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',clientController.login);

router.get('/policies',policiesController.show)

module.exports = router;
