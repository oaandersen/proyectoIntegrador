let express = require('express');
const usersController = require('../controllers/usersController');
let router = express.Router();

/* GET users listing. */

router.get('/register', usersController.register);

router.get('/login', usersController.login);

router.get('/profile', usersController.profile)

router.get('/profileEdit', usersController.profileEdit)

module.exports = router;
