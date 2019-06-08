const express = require('express');
const consign = require('consign');

const app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./app/static'));

consign()
  .include('app/routes')
  .then('app/404')
  .into(app);

module.exports = app;