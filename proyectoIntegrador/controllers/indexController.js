const data = require('../database/models');
const producto = data.Producto;

const indexController = {

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
      //return res.send(result)
      return res.render("index", {
        listaProduct: result,
        contador : req.session.contador,
      });
    });
  }, 

};


module.exports = indexController;
