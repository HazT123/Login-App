var mongoose = require('mongoose');

// Product Schema
var productSchema = mongoose.Schema({
	imagePath: {
		type: String,
		required: true
	},
	drink_name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Product', productSchema);