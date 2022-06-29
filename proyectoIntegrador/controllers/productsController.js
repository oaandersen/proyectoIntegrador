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
  edit:(req,res)=>{
      req.session.idEdit = req.params.id
      res.render(`productEdit`)
  },

  update:(req,res)=>{
    let info = req.body;
    let errors = {};
    let idEdit = req.session.idEdit;
    if (info.brand == ""){
      errors.message="El campo marca esta vacio!"
      res.locals.errors = errors;
      return res.render('productEdit')

    } else if(info.model == ""){
      errors.message="El campo marca esta vacio!"
      res.locals.errors = errors;
      return res.render('productEdit')

    } else if(info.variant == ""){
      errors.message="El campo variante esta vacio!"
      res.locals.errors = errors;
      return res.render('productEdit')

    }else if(info.year == ""){
      errors.message="El campo del año esta vacio!"
      res.locals.errors = errors;
      return res.render('productEdit')

    }else if(info.description == ""){
      errors.message="El campo de descripción esta vacio!"
      res.locals.errors = errors;
      return res.render('productEdit')
    }else{
      
      product.update(
      {
        brand: info.brand,
        model: info.model,
        variant: info.variant,
        year: info.year,
        description: info.description,
        upload_date : info.upload_date,
            },
      {
        where:[
          {id: idEdit}
        ]
      }
    )
    .then((result)=>{
      return res.redirect("/")
    })
  }},
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