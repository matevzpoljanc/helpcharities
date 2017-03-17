var express = require('express');
var router = express.Router();
var generator = require('../content/generator');
var mongo = require("../data/mongo.js");

/* GET home page. */
router.get('/', function(req, res, next) {
   res.redirect('/search');
});

/* GET home page. 
router.get('/choose', function(req, res, next) {
  res.render('choose', {});
});
*/
/* GET home page. */
router.get('/results', function(req, res, next) {
  res.render('results', {});
});


router.get('/search', (req,res,next) =>{
	res.render('search');
});

router.get('/choose', (req,res,next) => {
	console.log(req.query.type, req.query.location);
	generator.get20Matches(req.query.type, req.query.location).then(results => {
		console.log("results",results);
		res.render('choose',results);
	});
	
	
});

router.get('/rate', (req,res,next) =>{
	mongo.updateUserRating(req.query.ID,req.query.value);
});

module.exports = router;
