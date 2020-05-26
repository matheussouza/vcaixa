const express = require('express');
const auth = require('./middlewares/authentication');

require('./database');

const middlewares = [
  require('./controllers/CategoriasController'),
  require('./controllers/ContasController'),
  require('./controllers/MovimentacoesController'),
  require('./controllers/LoginController')
]

const app = require('./app')(express, auth, middlewares);

app.server.listen(process.env.PORT || 3333, '0.0.0.0');
