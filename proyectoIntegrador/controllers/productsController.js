const data = require('../database/models');
const product = data.Producto;

const productsController = {

  show: (req, res) => {
   product.findByPk(req.params.id, {include:[{association:"Comment"}], all: true, nested: true}) //all: true, nested: true

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
    let producto = {//creamos el producto
      image: req.file.filename,
      brand: info.brand,
      model: info.model,
      variant: info.variant,
      year: info.year,
      description: info.description,
      upload_date : info.upload_date
    }
    product.create(producto)
      .then((result) => {
      return res.redirect("/")
      })
  },
  edit: (req, res) => {
    let id = req.params.id;
    producto.findByPk(id)
      .then(
        (result) => {
          let productEdit = {
            image: req.file.filename,
            brand: result.brand,
            model: result.model,
            variant: result.variant,
            year: result.year,
            description: result.description,
            upload_date : result.upload_date
          }
          return res.render('productAdd',{product:productEdit})
        }
      )
  },
  destroy:(req,res)=>{
    let productABorrar = req.params.id;
    product.destroy(
      {
        where:[{id:productABorrar}]
      }
    )
    .then((result)=>{
      return res.redirect("/")
    })
  },
 comment: (req,res)=>{
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