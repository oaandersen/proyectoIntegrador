const data = require('../db/data');
const router = require('../routes/index');

const indexController = {
'index':function(req, res) { 
  res.render('index',{producto:data.producto});
  },

}
  module.exports = indexController;