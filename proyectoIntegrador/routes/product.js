let express = require('express');
let router = express.Router();

let multer = require('multer');
let path = require('path');

/* Configurar multer */

let storage = multer.diskStorage({
    destination : function(req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/products'))
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

router.post('/productAdd', upload.single('image') ,productsController.store);

router.get('/productEdit',productsController.edit);

router.post('/productEdit',productsController.update);

router.get('/deleteProduct/:id', productsController.destroy);

router.post('/id/:id', productsController.comment);


/* GET home page. */
/* router.get('/id/:id', productsController.product)

router.get('/productAdd', productsController.productAdd)*/
module.exports = router;