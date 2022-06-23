const data = require('../database/models');
const user = data.User;
const bcrypt = require("bcryptjs");

const usersController = {
  login: (req, res) => {

    return res.render("login");
  },
  procesarLogin: (req, res) => {

    let info = req.body;


    if (info.email == "") {
      res.send("El campo de email esta vacio!")

    } else if (info.password == "") {
      res.send("El campo de la contraseña esta vacio!")

    } else {

      user.findOne({
        where: [{
          email: info.email
        }]
      }).then((result) => {
        if (result != null) {
          let claveCorrecta = bcrypt.compareSync(info.password, result.password)
          if (claveCorrecta) {
            req.session.user = result.dataValues //Se guarda en session la informacion del usuario que trae result.

            if (req.body.remember != undefined) {
              res.cookie('userId', req.session.user.id, {
                maxAge: 1000 * 60 * 5
              })
            } 
            return res.redirect('/')

          }
          if (claveCorrecta == false) {
            res.send("La contraseña ingresada es incorrecta!")

          }
        }
        if (result == null)
          res.send(`El email ${info.email} no esta registrado!`)

      });
      // return res.redirect("/")



    }
  },
  register: (req, res) => {
    return res.render("register");
  },

  procesarRegister: (req, res) => {

    let info = req.body; //Captura todos los inputs guardados en el formulario

    if (info.name == "") {
      res.send("El nombre esta vacio!")
    } else if (info.email == "") {
      res.send("El email esta vacio!")
    } else if (info.password == "") {
      res.send("La contraseña esta vacia!")
    } else {


      let passEncriptada = bcrypt.hashSync(info.password, 10);
      
      let imgPerfil = req.file.filename;


      let userParaGuardar = {
        // created_at : new Date(),
        //updated_at : new Date(),
        name: info.name,
        email: info.email,
        password: passEncriptada,
        date: info.date,
        dni: info.dni,
        profile_img: imgPerfil,

      }


      user.create(userParaGuardar)
        .then((result) => {
          return res.redirect("/users/login")
        })

    }
  },
  logout: (req, res) => {
    req.session.destroy();
    if(req.cookies.userId !== undefined){
    res.clearCookie('userId')
  }
    return res.redirect('/')
  },
  profile: (req, res) => {
    res.render('profile')
  },
  profileEdit: (req, res) => {
    res.render('profileEdit')
  },

  procesarEdit: (req, res) => {

    let info = req.body; //Captura todos los inputs guardados en el formulario
    let passwordEncriptada = bcrypt.hashSync(info.password, 10);
    //let imgPerfil = req.file.filename;

    let userUpdate = {
      email: info.email,
      name: info.name,
     // password: info.passwordEncriptada,
      date: info.date,
      dni: info.dni,
      // profile_img: info.profile_img,
    }
    
    user.update(userUpdate,{
        where: {
          id: user.id
        }
      })
      .then((result) => {
        return res.redirect('/users/profile')
      })

  }
}

module.exports = usersController;