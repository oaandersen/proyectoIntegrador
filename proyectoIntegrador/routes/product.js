let express = require('express');
let router = express.Router();
const productsController = require('../controllers/productsController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('product');
});

router.get('/product/productAdd', productsController.productAdd)
module.exports = router;
