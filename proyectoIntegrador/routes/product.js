let express = require('express');
let router = express.Router();
/* Requerir modulos de multer y path */
let multer = require('multer');
let path = require('path');

/* Configurar multer */

let storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/users'))
    },
    filename : function(req, file, cb) {
      
        /*          name campoDelForm          -   26052022                 .png  */
        cb(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname))
    }
});

let upload = multer({ storage : storage})

const productsController = require('../controllers/productsController');

router.get('/id/:id', productsController.show);

router.get('/productAdd', productsController.create);

router.post('/productAdd', productsController.store);

router.get('/editindex/:id',productsController.edit);

router.post('/editindex/:id',productsController.update);

router.get('/deleteindex/:id', productsController.destroy);

router.post('/id/:id', productsController.comment);
/* GET home page. */
/* router.get('/id/:id', productsController.product)

router.get('/productAdd', productsController.productAdd)*/
module.exports = router;