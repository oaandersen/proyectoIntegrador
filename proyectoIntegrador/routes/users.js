let express = require('express');
const indexController = require('../controllers/indexController');
const usersController = require('../controllers/usersController');
let router = express.Router();

/* GET users listing. */

router.get('/register', usersController.register);

router.get('/login', usersController.login);

router.get('/profile', usersController.profile)


module.exports = router;
