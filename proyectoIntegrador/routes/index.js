let express = require('express');
let router = express.Router();
const indexController = require('../controllers/indexController');
const data = require('../db/data')

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { producto: data.producto });
});
router.get('/index', indexController.index)
module.exports = router;
