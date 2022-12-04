const ProductoModel = require("../model/productos");

const model = ProductoModel.get(process.env.PERSISTENCIA || 'MONGODB') // FILE | MONGODB

const obtenerProducto = async id => {
    const producto = await model.readProducto(id)
    return producto
}

const obtenerProductos = async () => {
    const productos = await model.readProductos()
    return productos
}

const guardarProducto = async (producto) => {
    const productoGuardado = await model.createProducto(producto)
    return productoGuardado
}

const actualizarProducto = async (id, producto) => {
    const productoActualizado = await model.updateProducto(id, producto)
    return productoActualizado
}

const borrarProducto = async id => {
    const productoEliminado = await model.deleteProducto(id)
    return productoEliminado
}

module.exports = {
    obtenerProducto,
    obtenerProductos,
    guardarProducto,
    borrarProducto,
    actualizarProducto
}