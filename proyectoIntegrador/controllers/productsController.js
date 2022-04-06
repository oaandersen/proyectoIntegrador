const producto = require('../db/productos');

const productsController = router.get('/', function(req, res) {
    res.send('respond with a resource');
  });

  module.exports = productsController;