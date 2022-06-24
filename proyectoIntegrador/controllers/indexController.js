const data = require('../database/models');
const producto = data.Producto;
const op = data.Sequelize.Op;
const indexController = {

  findAll: (req, res) => {
    let counter = req.session.contador;
    if (counter != undefined) {
      counter += 1
    } else {
      counter = 1;
    }
    req.session.contador = counter;

    producto.findAll()
      .then((result) => {
        //return res.send(result)
        return res.render("index", {
          listaProduct: result,
          contador: req.session.contador,
        });
      });
  },
  search: (req, res) => {
    let search = req.query.search;
    producto.findAll({
        include: [{
            association: 'User'
          },
          {
            association: 'Comment'
          }
        ],
        where: [{
            brand: {
              [op.like]: '%' + search + '%'
            }
          },
          {
            description: {
              [op.like]: '%' + search + '%'
            }
          }
        ]
      })
      .then((result) => {
        return res.render('searchResults', {
          listaProduct: result,
          contador: req.session.contador
        })
      }).catch(error => console.log('El error es: ' + error))
  },
};


module.exports = indexController;