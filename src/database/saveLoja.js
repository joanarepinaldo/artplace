function saveLoja(db,loja) {
    return db.run(`
        INSERT INTO lojas (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            hours,
            open_on_weekends

        ) VALUES (
            "${loja.lat}",
            "${loja.lng}",
            "${loja.name}",
            "${loja.about}",
            "${loja.whatsapp}",
            "${loja.images}",
            "${loja.instructions}",
            "${loja.hours}",
            "${loja.open_on_weekends}"
                
        );
    `)
}
module.exports = saveLoja;