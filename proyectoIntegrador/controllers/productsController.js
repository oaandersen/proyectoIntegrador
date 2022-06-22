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
      image: info.image,
      brand: info.brand,
      model: info.model,
      variant: info.variant,
      year: info.year,
      description: info.description,
      upload_date: info.uploaddate,
    }
    data.Producto.create(
      producto
    )
      .then((result) => {
        return res.redirect("/")
      })
  },
  edit: (req, res) => {
    let id = req.params.id;
    producto.findByPk(id)
      .then(
        (result) => {
          let fechaFormateada = new Date(result.release_date).toISOString().slice(0,10);
  
          let productEdit = {
            nombre: result.nombre,
            release_date: fechaFormateada,
            descripcion: result.descripcion,
            genre_id: result.genre_id,
            id:id
          }
          return res.render('productAdd',{product:productAdd})
        }
      )
  },
  update:(req,res)=>{
    let productUpdate = req.body;
    let id = req.params.id;
    producto.update(
      {
        nombre: productUpdate.nombre,
        release_date: productUpdate.fecha,
        descripcion: productUpdate.descripcion,
        genre_id: productUpdate.genre_id,
      },
      {
        where:[
          {id:id}
        ]
      }
    )
    .then((result)=>{
      return res.redirect("/")
    })
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
 }
  


 /* product: function (req, res) {
    res.render('product', {
      comment: data.comentarios
  }); 

  },
  productAdd: function (req, res) {
    res.render('productAdd', {
      usuario: data.usuario
    });
  },
*/
};



module.exports = productsController;