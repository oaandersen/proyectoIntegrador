const producto = require('../db/data');
const router = require('../routes/product');

const productsController = { 
  'productAdd': function (req, res) {
    res.render('productAdd');
  },
}

  module.exports = productsController;