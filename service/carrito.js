const CarritoModel = require("../model/carrito");

//aca tengo la instancia del modelo (en model)
const model = CarritoModel.get(process.env.PERSISTENCIA || 'MONGODB')

const guardarCarrito = async carrito => {
    const carritoGuardado = await model.createCarrito(carrito)
    return carritoGuardado
}

module.exports = {
    guardarCarrito
}
//esto se utiliza en controller