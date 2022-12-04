//obtiene el carrito de nuestro backend
//guarda asincronicamente

class CarritoService {
    //URL_CARRITO = 'https://615d8b5212571a00172076ba.mockapi.io/carrito/'
    URL_CARRITO = '/api/carrito/'

    async guardarCarritoServicio(carrito) {
        const carritoGuardado = await http.post(this.URL_CARRITO, carrito)
        return carritoGuardado
    }

}

const carritoService = new CarritoService()