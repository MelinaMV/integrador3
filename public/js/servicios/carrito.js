//obtiene el carrito de nuestro backend
//guarda asincronicamente

class CarritoService {
    URL_CARRITO = 'https://633ccbe57e19b17829025dff.mockapi.io/carrito/'

    async guardarCarritoServicio(carrito) {
        //                    usa el metodo post declrado en http client
        const carritoGuardado = await htpp.post(this.URL_CARRITO, carrito)
        return carritoGuardado
    }

}

const carritoService = new CarritoService()