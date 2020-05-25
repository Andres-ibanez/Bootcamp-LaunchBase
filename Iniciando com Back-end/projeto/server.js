const express = require('express')
const nunjucks = require('nunjucks')

const server = express()  // iniciando el servidor
const videos = require("./data") //Llamando los datos dentro de data

server.use(express.static('public')) // configuracion de lectura de archivos estatico .css

server.set('view engine', 'njk') // setar template engine njk nunjucks

nunjucks.configure('views', {
    express: server,
    autoescape: false
})

server.get('/', function (req, res) {
    const about = {
        img_url: "https://avatars3.githubusercontent.com/u/6643122?s=460&v=4",
        name:"Mayk Brito",
        role: "Instrutor - Rocketseat",
        description: 'Programador full-stack, focado em trazer o melhor ensino para iniciantes em programação. Colaborador da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
        links: [
            { name: "Github", url: "https://github.com/maykbrito/"},
            { name: "Twitter", url: "https://twitter.com/maykbrito/"},
            { name: "Linkedin", url: "https://www.linkedin.com/in/maykbrito/"}
        ]

    }
    return res.render('index', { about })  //llamada a la pagina index e envio de datos
})

server.get('/classes', function (req, res) {
    return res.render('classes', { items: videos})  //llamada a la pagina classes
})

server.listen(5000, function () {
    console.log('server is runing')
})