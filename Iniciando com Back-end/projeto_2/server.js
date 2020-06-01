const express = require('express')
const nunjucks = require('nunjucks')
const routes = require("./routes")

const server = express()  // iniciando el servidor

server.use(express.static('public')) // configuracion de lectura de archivos estatico .css
server.use(routes) // configurando o server para usar routes

server.set('view engine', 'njk') // setar template engine njk nunjucks

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, function () {
    console.log('server is runing')
})