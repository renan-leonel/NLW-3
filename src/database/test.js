const Database = require('./db');
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-27.222633",
        lng: "-49.6455874",
        name:"Lar de meninas",
        about: "Presta assistência a crianças de 6 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social",
        whatsapp: "788979898",
        images: [
            "https://images.unsplash.com/photo-1603698188206-3ffb56419b7f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitar Das 18h até 8h",
        open_on_weekends: "1",

    })

    // // consultar dados da tabela
    const selectecOrphanages = await db.all("SELECT * FROM orphanages") // * seria tudo, ou seja, id name etc
    console.log(selectecOrphanages)

    // // consultar somente 1 orfanato, pelo id  
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // // deletar dado da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '7'"))
})