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
                let claveCorrecta = bcryptjs.compareSync(info.password  , result.password )
                if (claveCorrecta) {
                    req.session.user = result.dataValues;

                    /* Evaluar si el checkbox esta en true o existe */

                    if (req.body.remember != undefined) {
                        res.cookie('userId', req.session.user.id, { maxAge : 1000 * 60 * 5})
                    }
                   
                    return res.redirect("/")
                } else {
                    return res.send("Existe el mail " + result.email + " pero la clave es incorrecta")
                }
                
            } else {
                return res.send("No existe el mail " + info.email) 
            }
        });

        

    },
    register : (req, res) => {
        return res.render("register");
    },
    procesarRegister : (req, res) => {
        let info = req.body;
        let passEncriptada = bcrypt.hashSync(info.password, 10);
        let imgPerfil = req.file.filename;

        let userParaGuardar = {
          created_at : new Date(),
          updated_at : new Date(),
          name : info.name,
          email : info.email,
          password : passEncriptada,
          date : info.date,
          dni : info.dni, 
          remember_token: "false",
          img : imgPerfil
        }

        user.create(userParaGuardar)
        .then((result) => {
            return res.redirect("/")
        })
        
    }

}

module.exports = usersController;