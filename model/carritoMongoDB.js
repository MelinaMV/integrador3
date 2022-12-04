const mongoose = require('mongoose')

/* Esquema del documento carrito */
const carritoSchema = mongoose.Schema({
    carrito: Array
})

/* Modelo del documento almacenado en una colección */
const CarritoModel = mongoose.model('carritos', carritoSchema)

/* ---------------------------------------------------------- */

class CarritoModelMongoDB {

    /* ----------------------------------------------------- */
    /* CRUD -> C: Create -> http method POST */
    async createCarrito(carrito) {
        try {
            const carritoSave = new CarritoModel({ carrito }) // { carrito: carrito }
            await carritoSave.save()
            return carrito
        } catch (error) {
            console.log(`Error en createCarrito: ${error}`)
            return {}
        }
    }
}

module.exports = CarritoModelMongoDB