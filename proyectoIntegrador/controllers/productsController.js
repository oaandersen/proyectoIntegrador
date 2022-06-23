const data = require('../database/models');
const product = data.Producto;

const productsController = {

  show: (req, res) => {
   product.findByPk(req.params.id, {all: true, nested: true}) //all: true, nested: true

      .then((result) => {
        console.log(result);
        return res.render("product", {
          producto: result,
          comment: result.Comment,
        });
      });
  },

  create: (req, res) => {
    return res.render('productAdd');

  },
  store: function (req, res) {
    let info = req.body; //Guardamos los datos
    let errors = {};

    
     if (info.brand == "") {
      errors.message = "Falta incluir la marca!"
      res.locals.errors = errors;
      return res.render('productAdd')

    } else if (info.model == "") {
      errors.message = "Falta incluir el modelo!"
      res.locals.errors = errors;
      return res.render('productAdd')

    } else if (info.variant == "") {
      errors.message = "Falta incluir la variante!"
      res.locals.errors = errors;
      return res.render('productAdd')

    } else if (info.year == "") {
      errors.message = "Falta incluir el año!"
      res.locals.errors = errors;
      return res.render('productAdd')

    } else if (info.description == "") {
      errors.message = "Falta incluir la descripción!"
      res.locals.errors = errors;
      return res.render('productAdd')

    } else{

    let producto = { //creamos el producto
      image: req.file.filename,
      brand: info.brand,
      model: info.model,
      variant: info.variant,
      year: info.year,
      description: info.description,
      upload_date: info.upload_date
    }
    product.create(producto)
      .then((result) => {
        return res.redirect("/")
      })}
  },
  update: (req, res) => {
    let productoUpdate = req.body;
    let id = req.params.id;
    producto.update({
        image: req.file.filename,
        brand: productoUpdate.brand,
        model: productoUpdate.model,
        variant: productoUpdate.variant,
        year: productoUpdate.year,
        description: productoUpdate.description,
        upload_date: productoUpdate.upload_date,
      }, {
        where: [{
          id: id
        }]
      })
      .then((result) => {
        return res.redirect("/")
      })
  },
  destroy: (req, res) => {
    let productABorrar = req.params.id;
    product.destroy({
        where: [{
          id: productABorrar
        }]
      })
      .then((result) => {
        return res.redirect("/")
      })
  },
  comment: (req, res) => {
    let comment = {
      cm_user_id: req.session.user.id,
      producto_id: req.params.id,
      comment: req.body.comment,
    };

    data.Comment.create(
        comment
      )
      .then((result) => {
        return res.redirect("/product/id/" + req.params.id)
      })
  },
};


module.exports = productsController;