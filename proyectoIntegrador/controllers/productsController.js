const data = require('../database/models');
const product = data.Producto;

const productsController = {
  product: function (req, res) {
    res.render('product', {
      comentarios: data.comentarios
  }); 

  },
  productAdd: function (req, res) {
    res.render('productAdd', {
      usuario: data.usuario
    });
  },

};



module.exports = productsController;