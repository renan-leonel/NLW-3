// importar dependencia
const express = require('express'); // função que vai chamar os pacotes do express
const path = require('path')
const pages = require('./pages.js')

//iniciando o express
const server = express()
server
    //utilizar body do req
    .use(express.urlencoded({extended: true}))
    //utilizando os arquivos estáticos
    .use(express.static('public'))

    //configurar template engine
    .set('views', path.join(__dirname,"views"))
    .set('view engine', 'hbs')

    // rotas da aplicação
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//ligar o serviror
server.listen(5500) // abre a porta 5500