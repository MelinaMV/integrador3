const mongoose = require('mongoose')

// Creamos esquema del documento carrito

const carritoSchema = mongoose.Schema({
    carrito: Array
})

// Definimos el modelo del documento almacenado
//en una coleccion

const CarritoModel = mongoose.model('carritos', carritoSchema)

//---------------------------------

class CarritoModelMongoDB{

    //-----------------------------
    //averiguar como agregar el read o update
    //de la misma manera q en prodmongodb

    //CRUD -> C: create --> http metod post
    async createCarrito(carrito) {
        try {
            const carritoSave = new CarritoModel({carrito}) //carrito:carrito
            await carritoSave.save()
            return carrito
        } catch (error) {
            console.log(`Error en createCarrito: ${error}`)
            return {} // controlo en caso que venga al catch y 
            //me devuelve un array vacio
        }
    }
}

module.exports = CarritoModelMongoDB