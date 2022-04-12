const data = require('../db/data');
const router = require('../routes/users');

const usersController = {
  'register': function (req, res) {
    res.render('register');
  },
  'login': function (req, res) {
    res.render('login')
  },
  'profile': function (req, res) {
    res.render('profile', {usuario: data.usuario, producto:data.producto})
  },
  'profileEdit': function (req, res) {
    res.render('profileEdit')
  },
}
module.exports = usersController;