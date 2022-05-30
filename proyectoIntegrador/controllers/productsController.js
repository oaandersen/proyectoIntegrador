const data = require('../database/models');
const product = data.Producto;

const productsController = {
  product: function (req, res) {
    res.render('product', {
      comentarios: data.comentarios
  }); 

  },
  productAdd: function (req, res) {
    res.render('productAdd', {
      usuario: data.usuario
    });
  },

findAll: (req, res) => {

  let counter = req.session.contador;
  if (counter != undefined) {
    counter +=1
  } else {
    counter = 1;
  }

  req.session.contador = counter;

  product
    .findAll({
    })
    .then((result) => {
      return res.render("index", {
        listaProduct: result,
        contador : req.session.contador
      });
    });
},
show: (req, res) => {
  let id = req.params.id;
  product.findByPk(id).then((result) => {
    let fi = new Date(result.fechaCarga);
    fecha = `${fi.getDate()}-${fi.getMonth() + 1}-${fi.getFullYear()}`;
    let product = {
      nombre: result.nombre,
      fechaCarga: fecha,
      descripcion: result.descripcion,
      genre_id: result.genre_id,
    }
    return res.render("product", {
      product: product,
    });
  });
},
showOne: (req, res) => {
  let busqueda = req.query.pelicula;
  data.Producto.findOne({
    where: [{ title: busqueda }],
  }).then((result) => {
    let fi = new Date(result.release_date);
    fecha = `${fi.getDate()}-${fi.getMonth() + 1}-${fi.getFullYear()}`;
    let product = {
      nombre: result.nombre,
      fechaCarga: fecha,
      descripcion: result.descripcion,
      genre_id: result.genre_id,
    }
    return res.render("product", {
      product: product,
    });
  });
},
create: (req, res) => {
  return res.render('register');

},
store: function (req, res) {
  let info = req.body; //GUardamos los datos
  let product = {//creamos la pelicula
    nombre: info.nombre,
    fechaCarga: info.fecha,
    descripcion: info.descripcion,
    genre_id: info.genre_id,
  }
  db.Producto.create(
    product
  )
    .then((result) => {
      return res.redirect("/product/all")
    })
},
edit: (req, res) => {
  let id = req.params.id;
  product.findByPk(id)
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
        return res.render('productEdit',{product:productEdit})
      }
    )
},
update:(req,res)=>{
  let productUpdate = req.body;
  let id = req.params.id;
  product.update(
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
    return res.redirect("/product/all")
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
    return res.redirect("/product/all")
  })
}
};



module.exports = productsController;