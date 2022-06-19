let express = require('express');
let router = express.Router();
const productsController = require('../controllers/productsController');

router.get('/id/:id', productsController.show, productsController.findAll );

router.get('/productAdd', productsController.create);

router.post('/productAdd', productsController.store);

router.get('/editindex/:id',productsController.edit);

router.post('/editindex/:id',productsController.update);

router.get('/deleteindex/:id', productsController.destroy);
/* GET home page. */
/* router.get('/id/:id', productsController.product)

router.get('/productAdd', productsController.productAdd)*/
module.exports = router;