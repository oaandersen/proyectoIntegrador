let express = require('express');
const usersController = require('../controllers/usersController');
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

/* GET users listing. */
router.get('/register', usersController.register);
router.post('/register',  upload.single('imgPerfil') , usersController.procesarRegister);


router.get('/login', usersController.login);
router.post('/login', usersController.procesarLogin); 
// router.get('/profile', usersController.profile)

// router.get('/profileEdit', usersController.profileEdit)




module.exports = router;