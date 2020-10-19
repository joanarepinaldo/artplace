const Database = require('./database/db');
const saveLoja = require('./database/saveLoja');

module.exports = {

    index(req, res){
        
    const city = req.query.city
    return res.render('index', { city })
  
    },

   async lojas(req,res){
       const id =req.query.id;

        try {
            const db = await Database;
            const results = await db.all(`SELECT * FROM lojas WHERE id ='${id}'`);
            const lojas = results[0];
            
          
            lojas.images = lojas.images.split(",");
            lojas.firstImage = lojas.images[0];

            if(lojas.open_on_weekends == "0"){
                lojas.open_on_weekends = false;
            }else{
                lojas.open_on_weekends = true;
            }
            return res.render('lojas',{lojas});

        } catch (error) {
            console.log(error);
            return res.send('Erro banco dados');
        }
        
    },

    async localizacao(req,res){
        try{
            const db = await Database;
            const localizacao = await db.all("SELECT * FROM lojas"); 
            return res.render('localizacao', { localizacao });

        } catch(error){
            console.log(error);
            return res.send('Erro banco dados');

        }
        
    },

    createLoja(req, res){
        return res.render('create-loja')
    },

    async saveLoja(req, res){
        const fields = req.body

        if(Object.values(fields).includes('')){
            return res.send('Todos os campos devem ser preenchidos!')
        }

        try {
            const db = await Database
            await saveLoja(db, {
                lat:fields.lat,
                lng:fields.lng,
                name:fields.name,
                about:fields.about,
                whatsapp:fields.whatsapp,
                images:fields.images.toString(),
                instructions:fields.instructions,
                hours:fields.hours,
                open_on_weekends:fields.open_on_weekends,


            })

            return res.redirect('/localizacao')

        } catch (error) {
            console.log(error)
            return res.send('Erro banco de dados')
        }
        

    }

}