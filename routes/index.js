var express = require('express');
var router = express.Router();
var generator = require('content/generator');
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

module.exports = router;
