const data = require('../database/models');
const user = data.User;
const bcrypt = require("bcryptjs");

const usersController = {
  login: (req, res) => {

    return res.render("login");
  },
  procesarLogin: (req, res) => {

    let info = req.body;
    let errors = {};
    

    if (info.email == "") {
      errors.message="El campo email esta vacio!"
      res.locals.errors = errors;
      return res.render('login')
        
    } else if (info.password == "") {
      errors.message="El campo contraseña esta vacio!"
      res.locals.errors = errors;
      return res.render('login')

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
            errors.message="La contraseña ingresada es incorrecta!"
            res.locals.errors = errors;
            return res.render('login')

          }
        }
        if (result == null)
        errors.message=`El email ${info.email} no esta registrado!`
        res.locals.errors = errors;
        return res.render('login')

      });
      // return res.redirect("/")



    }
  },
  register: (req, res) => {
    return res.render("register");
  },

  procesarRegister: (req, res) => {

    let info = req.body; //Captura todos los inputs guardados en el formulario
    let errors = {}
    if (info.name == "") {
            errors.message="El nombre de usuario es obligatorio!"
            res.locals.errors = errors;
            return res.render('register')
    } else if (info.email == "") {
            errors.message="El campo email es obligatorio!"
            res.locals.errors = errors;
            return res.render('register')
    } else if (info.password == "") {
            errors.message="La contraseña es obligatoria!"
            res.locals.errors = errors;
            return res.render('register')
    } else if (info.date == "") {
            errors.message="La fecha de nacimiento es obligatoria!"
            res.locals.errors = errors;
            return res.render('register')
    } else if (info.dni == "") {
            errors.message="El documento es obligatorio!"
            res.locals.errors = errors;
            return res.render('register')
    } else {
      user.findOne({
        where: [{
          email: info.email
        }]
      }).then((result) => {
        if(result != null){
            errors.message="El email ingresado ya existe!"
            res.locals.errors = errors;
            return res.render('register')
        }
      })


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
        .catch(error => console.log (error))
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
      .catch(error => console.log (error))
  }
}

module.exports = usersController;