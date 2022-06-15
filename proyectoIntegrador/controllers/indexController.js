const data = require('../database/models');
const producto = data.Producto;

const indexController = {


/* const indexController = {
index: function (req, res) {
    res.render('index', {
      producto: data.producto
    });
  },
  searchResults: function (req, res) {
    res.render('searchResults')
  },
*/

  findAll: (req, res) => {
    let counter = req.session.contador;
    if (counter != undefined) {
      counter +=1
    } else {
      counter = 1;
    }
    req.session.contador = counter;
    
    producto.findAll()
    .then((result) => {
      console.log('la bd tiene: '+ result[0].variant);
      //return res.send(result)
      return res.render("index", {
        listaProduct: result,
        contador : req.session.contador,
      });
    });
  }, 
  show: (req, res) => {
    let id = req.params.id;
    producto.findByPk(id).then((result) => {
      let fi = new Date(result.fechaCarga);
      fecha = `${fi.getDate()}-${fi.getMonth() + 1}-${fi.getFullYear()}`;
      let producto = {
        image: result.image,
        brand: result.brand,
        model: result.model,
        variant: result.variant,
        year: result.year,
        description: result.description,
        upload_date: result.upload_date,
      }
      return res.render("product", {
        producto: producto,
      });
    });
  },
  showOne: (req, res) => {
    let busqueda = req.query.producto;
    data.Producto.findOne({
      where: [{ title: busqueda }],
    }).then((result) => {
      let fi = new Date(result.release_date);
      fecha = `${fi.getDate()}-${fi.getMonth() + 1}-${fi.getFullYear()}`;
      let producto = {
        image: result.image,
        brand: result.brand,
        model: result.model,
        variant: result.variant,
        year: result.year,
        description: result.description,
        upload_date: result.upload_date,
      }
      return res.render("product", {
        producto: producto,
      });
    });
  },
  create: (req, res) => {
    return res.render('register');
  
  },
  store: function (req, res) {
    let info = req.body; //Guardamos los datos
    let producto = {//creamos el producto
      nombre: info.nombre,
      fechaCarga: info.fecha,
      descripcion: info.descripcion,
      genre_id: info.genre_id,
    }
    db.Producto.create(
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
      return res.redirect("/")
    })
  }
  
};


module.exports = indexController;
