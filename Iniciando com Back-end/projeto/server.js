const express = require('express')
const nunjucks = require('nunjucks')

const server = express()  // iniciando el servidor

server.use(express.static('public')) // configuracion de lectura de archivos estatico .css

server.set('view engine', 'html') // setar template engine

nunjucks.configure('views', {
    express: server
})

server.get('/', function (req, res) {
    return res.render('index')  //llamada a la pagina index
})

server.get('/classes', function (req, res) {
    return res.render('classes')  //llamada a la pagina classes
})

server.listen(5000, function () {
    console.log('server is runing')
})