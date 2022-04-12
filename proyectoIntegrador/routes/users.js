let express = require('express');
const usersController = require('../controllers/usersController');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/register', usersController.register);

router.get('/login', usersController.login);

router.get('/profile', usersController.profile)

module.exports = router;
