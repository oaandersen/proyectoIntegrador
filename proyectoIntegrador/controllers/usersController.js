const data = require('../database/models');
const user = data.User;

/* const usersController = {
  'register': function (req, res) {
    res.render('register');
  },
  'login': function (req, res) {
    res.render('login')
  },
  'profile': function (req, res) {
    res.render('profile', {
      usuario: data.usuario,
      producto: data.producto
    })
  },
  profileEdit: function (req, res) {
    res.render('profileEdit', {
      usuario: data.usuario
    })
  },
} */
/* Requiriendo el modulo de bcryptjs .. */
const bcrypt = require("bcryptjs");
const db = require('../database/models');

const usersController = {
  login : (req, res) => {

    return res.render("login");
  },
  procesarLogin : (req, res) => {
    
    let info = req.body;
    
    user.findOne({
      where : [{ email :  info.email}]
    }).then((result) => {
      if (result != null) {
              let claveCorrecta = bcrypt.compareSync(info.password, result.password)
                if (claveCorrecta == true && result.email == info.email) {
                  req.session.user = result.dataValues
                  
                  if (req.body.remember != undefined) {
                    res.cookie('userId', req.session.user.id, { maxAge : 1000 * 60 * 5})
                  } 
                  return res.redirect('/')
                  
                }if (claveCorrecta == false){
                  res.send("La contraseña ingresada es incorrecta!")
                  
                }}
                if(result == null)
                res.send(`El email ${info.email} no esta registrado!`)
                
              });
              // return res.redirect("/")
              
              
              
            },
            register : (req, res) => {
              return res.render("register");
            },
    procesarRegister : (req, res) => {
        let info = req.body; //Captura todos los inputs guardados en el formulario
        let passEncriptada = bcrypt.hashSync(info.password, 10);
        let imgPerfil = req.file.filename;
        
        
        let userParaGuardar = {
          // created_at : new Date(),
          //updated_at : new Date(),
          name : info.name,
          email : info.email,
          password : passEncriptada,
          date : info.date,
          dni : info.dni, 
          profile_img : imgPerfil,
          
        }
        
        
        user.create(userParaGuardar)
        .then((result) => {
          return res.redirect("/users/login")
        })
        
    }

}

module.exports = usersController;