
//convertimos las funciones en metodos
//y ahora es un objeto con metodos

//antes lo podes llamar en cualquier lado y ahora a travez del onj

class Http {

    /* GET */ 
    async get(url, id) {
        try {
            const respuesta = await fetch(url + (id || ''), { 
                method: 'get' 
                }
            )
            const resultado = await respuesta.json()
            return resultado

        } catch (error) {
            console.error('ERROR GET', error)
        }
    }

    /* POST */ 
    async post(url, dato) {
        try {
            
            const respuesta = await fetch(url, {
                method: 'post',
                body: JSON.stringify(dato),
                headers: { 'content-type': 'application/json' }
            })

            const resultado = await respuesta.json()

            return resultado

        } catch (error) {
            console.error('ERROR POST', error)
        }
    }

    /* PUT */
    async put(url, id, dato) {
        try {
            
            const respuesta = await fetch(url + id, {
                method: 'put',
                body: JSON.stringify(dato),
                headers: { 'content-type': 'application/json' }
            })

            const resultado = await respuesta.json()

            return resultado

        } catch (error) {
            console.error('ERROR PUT', error)
        }
    }

    /* DELETE */
    async del(url, id) {
        try {
            const respuesta = await fetch(url + id, {
                method: 'delete'
            })
            const resultado = await respuesta.json()

            return resultado

        } catch (error) {
            console.error('ERROR DELETE', error)
        }
    }
}

const http = new Http()