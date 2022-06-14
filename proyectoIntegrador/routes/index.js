let express = require('express');
let router = express.Router();
const indexController = require('../controllers/indexController');

router.get('/', indexController.findAll);

router.get('/id/:id', indexController.show);

router.get('/busqueda/', indexController.showOne);

router.get('/register/', indexController.create);

router.post('/register/', indexController.store);

router.get('/editindex/:id',indexController.edit);

router.post('/editindex/:id',indexController.update);

router.get('/deleteindex/:id', indexController.destroy);

// router.get('/searchResults', indexController.searchResults);

module.exports = router;

