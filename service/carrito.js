const CarritoModel = require("../model/carrito");

// Acá tengo la instancia del modelo (model)
const model = CarritoModel.get(process.env.PERSISTENCIA || 'MONGODB')

const guardarCarrito = async carrito => {
    const carritoGuardado = await model.createCarrito(carrito)
    return carritoGuardado
}

module.exports = {
    guardarCarrito
}
//esto se utiliza en controller