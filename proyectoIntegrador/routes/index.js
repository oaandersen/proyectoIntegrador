let express = require('express');
let router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.findAll);



// router.get('/searchResults', indexController.searchResults);

module.exports = router;

