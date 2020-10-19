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

var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 4000);
module.exports = {app}