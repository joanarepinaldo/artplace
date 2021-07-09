

function localizaLoja(id,db,res) {

    const localizacao = db.query('SELECT * FROM lojas WHERE id = ?', [parseInt (id)], (erro, localizacao ) =>{
        if(erro){
            console.log(erro)
        }else{
           
            const lojas = localizacao[0];
            lojas.images = lojas.images.split(",");
            lojas.firstImage = lojas.images[0];

            if(lojas.open_on_weekends == "0"){
                lojas.open_on_weekends = false;
            }else{
                lojas.open_on_weekends = true;
            }
            res.render('lojas',{lojas});
            
        }
    })
           
       
    
}

module.exports = localizaLoja;