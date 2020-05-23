const express = require('express')
const nunjucks = require('nunjucks')

const server = express()  // iniciando el servidor
const videos = require("./data") //Llamando los datos dentro de data

server.use(express.static('public')) // configuracion de lectura de archivos estatico .css

server.set('view engine', 'njk') // setar template engine njk nunjucks

nunjucks.configure('views', {
    express: server
})

server.get('/', function (req, res) {
    return res.render('index')  //llamada a la pagina index
})

server.get('/classes', function (req, res) {
    return res.render('classes', { items: videos})  //llamada a la pagina classes
})

server.listen(5000, function () {
    console.log('server is runing')
})