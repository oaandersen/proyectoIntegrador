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
    producto.findAll({
        include: [{
            association: 'User'
          },
          {
            association: 'Comment'
          }
        ],
        where: [{
            name: {
              [op.like]: '%' + req.query.search + '%'
            }
          },
          {
            description: {
              [op.like]: '%' + req.query.search + '%'
            }
          }
        ]
      })
      .then((result) => {
        return res.render('search', {
          listaProduct: result,
          contador: req.session.contador
        })
      }).catch(error => console.log('El error es: ' + error))
  },
};


module.exports = indexController;