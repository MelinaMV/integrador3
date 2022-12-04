const Joi = require('joi')

class ProductoValidation {

    static validar(producto) {

        const productoSchema = Joi.object({
            nombre: Joi.string().min(3).max(20).required(),
            precio: Joi.number().required(),
            stock: Joi.number().required(),
            marca: Joi.string().required(),
            categoria: Joi.string().required(),
            detalles: Joi.string().required(),
            foto: Joi.string().empty(''),
            envio: Joi.boolean().required(),
        })

        const { error } = productoSchema.validate(producto) // El método validate te devuelve un obj

        console.log(error) // Si hay error, tiene contenido. Si lo hay contenido dentro error, quiere decir que no ocurrió ningún problema de validación
        return error
    }

}

module.exports = ProductoValidation