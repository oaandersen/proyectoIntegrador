const comentarios = require('../db/comentarios');

const indexController = router.get('/', function(req, res) {
    res.send('respond with a resource');
  });

  module.exports = indexController;