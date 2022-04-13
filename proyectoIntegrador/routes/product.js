let express = require('express');
let router = express.Router();
const productsController = require('../controllers/productsController');

/* GET home page. */
router.get('/:id', productsController.product)

router.get('/productAdd', productsController.productAdd)
module.exports = router;