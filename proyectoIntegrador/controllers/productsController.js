const data = require('../db/data');
const router = require('../routes/product');

const productsController = { 
  'product': function (req, res){
    res.render('product', {comentarios: data.comentarios});
    
  },
  'productAdd': function (req, res) {
    res.render('productAdd');
  }

}

  module.exports = productsController;