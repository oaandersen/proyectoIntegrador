let express = require('express');
const usersController = require('../controllers/usersController');
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register', usersController.register)

router.get('/login', usersController.register)

module.exports = router;
