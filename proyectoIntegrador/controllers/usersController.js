const usuario = require('../db/data');
const router = require('../routes/users');

const usersController = {
  'register': function (req, res) {
    res.render('register');
  },
  'login': function (req, res) {
    res.render('login')
  },

}
module.exports = usersController;