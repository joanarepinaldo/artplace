const Database = require('./db.js');
const saveLoja = require('./saveLoja');

Database.then(async (db) => {

     await saveLoja(db, {
        lat: "-23.3188112",
        lng: "-51.177262",
        name: "Lar dos e f r meninas",
        about: "Presta a atenca",
        whatsapp: "98423928498349",
        images: [
            "https://images.unsplash.com/photo-1597385573201-7257c53f11cc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1600711724564-526eda91ac29?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha conhecer",
        hours: "Segunda sexta",
        open_on_weekends: "1"
    }); 
        

    const selectedLojas = await db.all("SELECT * FROM lojas"); 
    console.log(selectedLojas)
    const lojas = await db.all("SELECT * FROM lojas WHERE id ='4'");
    console.log(lojas); 

  //   console.log(await db.run("DELETE FROM lojas WHERE id = '4'"))
});