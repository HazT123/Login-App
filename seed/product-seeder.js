var express = require('express');
var router = express.Router();
var Product = require('../models/product')
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/loginapp');

var products = [
    new Product({
        imagePath: 'https://goo.gl/1mqBYN',
        drink_name: 'Cappucino',
        description: 'Strong, medium roast with a smoky flavour'
    }),
    new Product({
        imagePath: 'https://goo.gl/1mqBYN',
        drink_name: 'Americano',
        description: 'Medium roast with a full body flavour'
    }),
    new Product({
        imagePath: 'https://goo.gl/1mqBYN',
        drink_name: 'Latte',
        description: 'Dark and intense, well rounded flavour'
    }),
    new Product({
        imagePath: 'https://goo.gl/1mqBYN',
        drink_name: 'Espresso',
        description: 'Strong, medium roast with a smoky flavour'
    }),
    new Product({
        imagePath: 'https://goo.gl/1mqBYN',
        drink_name: 'Espresso Romana',
        description: 'Strong, medium roast with a smoky flavour'
    }),
    new Product({
        imagePath: 'https://goo.gl/1mqBYN',
        drink_name: 'Cortada',
        description: 'Strong, medium roast with a smoky flavour'
    }),
    new Product({
        imagePath: 'https://goo.gl/1mqBYN',
        drink_name: 'Macchiato',
        description: 'Strong, medium roast with a smoky flavour'
    }),
    new Product({
        imagePath: 'https://goo.gl/1mqBYN',
        drink_name: 'Hot Chocolate',
        description: 'Strong, medium roast with a smoky flavour'
    }),
    new Product({
        imagePath: 'https://goo.gl/1mqBYN',
        drink_name: 'Mocha',
        description: 'Strong, medium roast with a smoky flavour'
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        if (err) throw err;
        done++;
        if (done === products.length) {
            exit();
        }
    })
}

function exit() {
    mongoose.disconnect();
}
