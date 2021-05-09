const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const env = require('dotenv');

env.config();

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

const pool = require('./db');
app.use(function(req, _, next) {
  try {
    req.pool = pool;
  } catch (e) {
    console.error('error : ', e);
  }

  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
