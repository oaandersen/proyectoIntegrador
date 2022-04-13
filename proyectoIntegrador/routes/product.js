let express = require('express');
let router = express.Router();
const productsController = require('../controllers/productsController');
const data = require('../db/data')

/* GET home page. */
router.get('/:id', function(req, res) {
  res.render('product', {comentarios: data.comentarios});
});

router.get('/productAdd', productsController.productAdd)
module.exports = router;
