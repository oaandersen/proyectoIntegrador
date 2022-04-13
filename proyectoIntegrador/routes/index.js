let express = require('express');
let router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */

router.get('/', indexController.index)

router.get('/searchResults', indexController.searchResults)
module.exports = router;
