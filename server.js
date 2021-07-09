const express = require('express');
const conexao = require("./database/db");
const path = require('path');
const pages = require('./pages.js');
const server = express();
const Tabelas = require('./database/tabelas');

const app = express();

app.use(express.urlencoded({ extended: true}))
app.use(express.static('public'));
app.set ('views', path.join(__dirname, "views"))
app.set('view engine', 'hbs')

app.get('/', pages.index)
app.get('/lojas', pages.lojas)
app.get('/localizacao', pages.localizacao)
app.get('/create-loja', pages.createLoja)
app.post('/save-loja', pages.saveLoja)
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