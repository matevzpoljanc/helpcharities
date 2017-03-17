var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/choose', function(req, res, next) {
  res.render('error', {});
});

/* GET home page. */
router.get('/results', function(req, res, next) {
  res.render('results', {});
});

module.exports = router;
