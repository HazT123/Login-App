var express = require('express');
var router = express.Router();
var Product = require('../models/product')

// Get Homepage
router.get('/', ensureAuthenticated, function (req, res) {
	Product.find(function(err, docs) {
		var productChunk = [];
		var chunkSize = 3;
		for(i=0; i < docs.length; i += chunkSize) {
			productChunk.push(docs.slice(i, i + chunkSize));
		}
		res.render('index', {title: 'Shopping Cart', products: productChunk });
	});
});

function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	} else {
		req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;