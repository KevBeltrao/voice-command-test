const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./app/static'));
app.use(bodyParser());

consign()
  .include('app/routes')
  .then('app/404')
  .then('config/dbConnection.js')
  .into(app);

module.exports = app;