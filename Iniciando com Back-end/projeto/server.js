const express = require('express')
const nunjucks = require('nunjucks')

const server = express()  // iniciando el servidor

server.use(express.static('public')) // configuracion de lectura de archivos estatico .css

server.set('view engine', 'html')

nunjucks.configure('views', {
    express: server
})

server.get('/', function(req, res){
    return res.render('index')
})

server.listen(5000, function(){
    console.log('server is runing')
})