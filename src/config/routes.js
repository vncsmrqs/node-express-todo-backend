const express = require('express')

module.exports = function (server) {
    //API Routes

    const router = express.Router()
    server.use('/api', router) //Middleware

    //TODO Routes
    const todoServices = require('../api/todo/todoService')
    todoServices.register(router, '/todos')
}