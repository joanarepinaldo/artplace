
const saveLoja = require('./database/saveLoja');
const localLojas = require('./database/localizacao');
const localizaLoja = require('./database/localizaLoja');
const conexao = require("./database/db");
const pool = require("./database/db");

module.exports = {

    index(req, res){
        
    const city = req.query.city
    return res.render('index', { city })
  
    },

   async lojas(req,res){
       const id =req.query.id;
              
        try {
            
            const db = pool;
            localizaLoja(id,db,res)

            

        } catch (error) {
            
            return res.send('Erro banco dados1');
        }
        
    },

    async localizacao(req,res){
        try{
            
            const db = pool;
            localLojas(db,res)
            
            

        } catch(error){
           
            return res.send('Erro banco dados2');

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
            const db = pool;
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
            
            return res.send('Erro banco de dados 3')
        }
        

    }

}