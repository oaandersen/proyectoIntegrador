const data = require('../database/models');
const product = data.Producto;
const comment = data.Comment;

const productsController = {
  findAll: (req, res) => {
    let counter = req.session.contador;
    if (counter != undefined) {
      counter +=1
    } else {
      counter = 1;
    }
    req.session.contador = counter;

  comment.findAll()
  .then((result) => {
    console.log('la bd tiene: '+ result[0].comment);
    //return res.send(result)
    return res.render("product", {
      comment: result,
      contador : req.session.contador,
    });
  });
}, 
  show: (req, res) => {
    let id = req.params.id;
    product.findByPk(id).then((result) => {
      
      return res.render("product", {
        producto: result
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