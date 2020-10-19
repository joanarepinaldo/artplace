const express = require('express');
const path = require('path');
const pages = require('./pages.js');

const server = express();


server.use(express.urlencoded({ extended: true}))
server.use(express.static('public'));
server.set ('views', path.join(__dirname, "views"))
server.set('view engine', 'hbs')

server.get('/', pages.index)
server.get('/lojas', pages.lojas)
server.get('/localizacao', pages.localizacao)
server.get('/create-loja', pages.createLoja)
server.post('/save-loja', pages.saveLoja)
server.listen(port,)

const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running in ${port}`);
});