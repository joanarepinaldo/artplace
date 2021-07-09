
function saveLoja(db,loja) {
   
    const sql ='INSERT INTO lojas SET ?';
    const values =loja;//loja.lat,loja.lng,loja.name,loja.about,loja.whatsapp,loja.images,loja.instructions,loja.hours,loja.open_on_weekends];
    db.query(sql,values, (erro, resultados) =>{
        if(erro){
            //console.log(erro)
        }else{
            //console.log('Salvo sucesso')
        }
    })
    //return db.query(sql, values);
}
    
module.exports = saveLoja;
