const producto = require('../db/data');
const router = require('../routes/product');

const productsController = { 
  'productAdd': function (req, res) {
    res.render('productAdd');
  },
  'product': function (req, res){
    res.render('product')
  }
}

  module.exports = productsController;