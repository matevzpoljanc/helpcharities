var express = require('express');
var router = express.Router();
var generator = require('content/generator');
var mongo = require("data/mongo.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/search');
});


router.get('/search', (req,res,next) =>{
	res.render('search');
});

router.post('/search', (req,res,next) => {
	generator.get20Macthes(req.body.category, req.body.location).then(results => {
		res.render('choose',results);
	});
});

router.get('/rate', (req,res,next) =>{
	mongo.updateUserRating(req.query.ID,req.query.value);
});

module.exports = router;
