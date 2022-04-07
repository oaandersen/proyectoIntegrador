const usuario = require('../db/usuario');
const router = require('../routes/users');

const usersController = {
  'register': router.get('/', function (req, res) {
    res.render('register');
  }),
  'login': router.get('/', function (req, res) {
    res.render('login')
  }),

}
module.exports = usersController;