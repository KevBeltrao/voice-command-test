require('dotenv').config();
module.exports = (app) => {
  app.get('/', (req, res) => {
    app.config.dbConnection.ref('/').once('value').then((data) => {
      if(data.val()){
      res.render('home', {lista: Object.keys(data.val()).map(key => data.val()[key])});
      }
      else {
        res.render('home');
      }
    });
  });

  app.get('/msgs', (req, res) => {
    app.config.dbConnection.ref('/').once('value').then((data) => {
      if(data.val()){
      res.send(Object.keys(data.val()).map(key => data.val()[key]));
      }
      else {
        res.render('Nothing here');
      }
    });
  });

  app.post('/', (req, res) => {
    if(req.body.val === process.env.VAL) {
      // app.config.dbConnection.ref('/').push(req.body.item);
      app.config.dbConnection.ref('/').once('value').then((data) => {
      if(data.val()){
        if(Object.keys(data.val()).map(key => data.val()[key]).includes(req.body.item)) {
          Object.keys(data.val()).forEach(key => {
            if(data.val()[key] === req.body.item) {
              app.config.dbConnection.ref(`/${key}`).remove();
            }
          });
        }
        else {
          app.config.dbConnection.ref('/').push(req.body.item);
        }
      }
      else {
        app.config.dbConnection.ref('/').push(req.body.item);
      }
    });
    }
    else {
      console.log('Wrong password');
    }
    res.redirect('/');
  });
}