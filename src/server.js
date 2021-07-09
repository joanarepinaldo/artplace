const express = require('express');
const conexao = require("./database/db");
const path = require('path');
const pages = require('./pages.js');
const server = express();
const Tabelas = require('./database/tabelas');



server.use(express.urlencoded({ extended: true}))
server.use(express.static('public'));
server.set ('views', path.join(__dirname, "views"))
server.set('view engine', 'hbs')

server.get('/', pages.index)
server.get('/lojas', pages.lojas)
server.get('/localizacao', pages.localizacao)
server.get('/create-loja', pages.createLoja)
server.post('/save-loja', pages.saveLoja)
//server.listen(5500)
// var porta = process.env.PORT || 8080;
// app.listen(porta);
conexao.connect((erro) =>{
    if(erro){
        console.log(erro)
    }else{
        Tabelas.init(conexao);
        const port = process.env.PORT || 3000;
        app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
    }
})