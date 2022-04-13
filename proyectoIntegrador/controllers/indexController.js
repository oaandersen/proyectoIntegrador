const data = require('../db/data');
const router = require('../routes/index');

const indexController = {
'index':function(req, res) { 
  res.render('index',{producto:data.producto});
  },
'searchResults':function(req, res){
  res.render('searchResults')
}
}
  module.exports = indexController;