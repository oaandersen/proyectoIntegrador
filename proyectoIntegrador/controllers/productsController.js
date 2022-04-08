const producto = require('../db/productos');
const router = require('../routes/product');

const productsController = { 
  'productAdd': function (req, res) {
    res.render('productAdd');
  },
}

  module.exports = productsController;