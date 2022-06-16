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

};


module.exports = indexController;
