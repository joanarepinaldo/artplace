

function localLojas(db,res) {
  
    const sql = 'SELECT * FROM lojas';
    
    const localizacao = db.query('SELECT * FROM lojas', (erro, localizacao ) =>{
        if(erro){
            
        }else{
            //console.log('Consulta',resultados)
            res.render('localizacao',{localizacao })
        }
    })
}

module.exports = localLojas;