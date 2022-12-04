const express = require('express')
const routerCarrito = express.Router()

const controller = require('../controller/carrito.controller')

// POST - request para agregar
// un producto al carrito

routerCarrito.post('/', controller.guardarCarrito)

module.exports = routerCarrito