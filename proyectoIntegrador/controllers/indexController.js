const data = require('../database/models');
const index = data.Producto
const indexController = {
  index: function (req, res) {
    res.render('index', {
      producto: data.producto
    });
  },
  searchResults: function (req, res) {
    res.render('searchResults')
  }
}
module.exports = indexController;