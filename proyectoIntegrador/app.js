let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
const session = require('express-session');
const db = require('./db')

const indexRouter = require('./routes/index');
const productsRouter = require('./routes/product');
const usersRouter = require('./routes/users');


let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({secret: "myApp",
resave: false,
saveUninitialized:true
}));
app.use(function(req,res,next){
  if (req.session.user != undefined){
    res.locals.user = req.session.user
  }
  return next();
});

app.use(function(req,res,next){
  if (req.cookies.userId != undefined && req.session == undefined){
let idUsuario = req.cookies.userId;

db.User.findByPk(idUsuario)
.then((user) => {
req.sessinon.user = user.dataValues;
res.locals.user = user.dataValues;
return next();
}).catch((err)=>{

});
  } else {

  }
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/product', productsRouter);
app.use('/users', usersRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;