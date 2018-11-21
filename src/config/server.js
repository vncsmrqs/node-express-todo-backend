const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')

//O expresse é fortemente baseado no padrão "Chain Of Responsability", também conhecido como Middlware uqe vai trabalhar com a cadeia de requisições

server.use(bodyParser.urlencoded({ extended: true })) //sempre que chegar uma requisição que usa esse padrão "urlencoded" para supmissão de fomrulario
server.use(bodyParser.json())
server.use(allowCors) //Vai permitir que uma requisição para o webservice possa vir de uma origem diferente

server.listen(port, function(){
    console.log(`O backend está rodando na porta ${port}!`)
})

module.exports = server