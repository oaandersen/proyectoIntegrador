const usuario = require('../db/usuario');

const usersController = {
    register: router.get('/', function(req, res) {
    res.render('register');
  }),
}
  module.exports = usersController;