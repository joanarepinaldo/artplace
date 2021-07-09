// async function connect(){
//     if(global.connection && global.connection.state !== 'disconnected')
//         return global.connection;
 
//     const mysql = require("mysql2/promise");
//     const connection = await mysql.createConnection("mysql://b9bd6fe9041bdd:ab25589f@us-cdbr-east-04.cleardb.com/heroku_97274e6da3038a4");
//     console.log("Conectou no MySQL!");
//     global.connection = connection;
//     return connection;
// }

// module.exports = connect;


const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com', // O host do banco. Ex: localhost
    user: 'b9bd6fe9041bdd', // Um usuário do banco. Ex: user 
    password: 'ab25589f', // A senha do usuário. Ex: user123
    database: 'heroku_97274e6da3038a4', // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

// con.connect((err) => {
//     if (err) {
//         console.log('Erro connecting to database...', err)
//         return
//     }
//     console.log('Connection established!')
// })



module.exports = conexao;


