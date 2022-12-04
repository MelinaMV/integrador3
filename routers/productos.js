const express = require('express')
const routerProductos = express.Router()

const controlador = require('../controller/productos')

/* CRUD => CREATE / READ / UPDATE / DELETE */

/* GET ALL/ONE (READ) - request de todos los productos */
// localhost:8080/api/productos/  // => GET ALL
// localhost:8080/api/productos/[objectID] // => GET ONE
routerProductos.get('/:id?', controlador.obtenerProductos) // ?: Parametro no obligatorio

/* POST (CREATE) - request para agregar un producto */
// localhost:8080/api/productos/  // => CREATE
routerProductos.post('/', controlador.guardarProducto)

/* PUT (UDPATE) - request para actualizar un producto */
// localhost:8080/api/productos/[objectID]  // => UDAPTE
routerProductos.put('/:id', controlador.actualizarProducto)

/* PUT (DELETE) - request para borrar un producto */
// localhost:8080/api/productos/[objectID]  // => DELETE
routerProductos.delete('/:id', controlador.borrarProducto)

module.exports = routerProductos