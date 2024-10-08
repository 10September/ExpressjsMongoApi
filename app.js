var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGO_URI 

mongoose.Promise = global.Promise;

mongoose.set('strictQuery', true)
mongoose.connect(uri)
        .then(() => console.log('connection successfully!'))
        .catch((err) => console.error(err))

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const products = require('./routes/products');
const notifiess = require('./routes/notifiess');
const snlhooks = require('./routes/snlhooks');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', products);
app.use('/notifiess', notifiess);
app.use('/snlhooks', snlhooks);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
