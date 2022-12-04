let mostrarCarrito = false

async function renderTablaCarrito(carrito) {
    //console.log(carrito)
    
    try {

        const elemSectionCarrito = document.getElementsByClassName('section-carrito')[0]
        const respuesta = await fetch('plantillas/carrito.hbs')
        const plantillaHbs = await respuesta.text()
        const template = Handlebars.compile(plantillaHbs)
        const html = template({ carrito } )
        //console.log(html)

        elemSectionCarrito.innerHTML = html
        elemSectionCarrito.classList.add('section-carrito--visible')        
        
    } catch (error) {
        console.error(error)
    }

}

function initCarrito() {
    console.warn('initCarrito()')

    const btnCarrito = document.getElementsByClassName('search-bar__carrito-container')[0]
    const elemSectionCarrito = document.getElementsByClassName('section-carrito')[0]

    btnCarrito.addEventListener('click', async () => {
        mostrarCarrito = !mostrarCarrito

        try {
            if(mostrarCarrito) {
                await renderTablaCarrito(carritoController.carrito)
            } else {
                elemSectionCarrito.classList.remove('section-carrito--visible')
            }

        } catch (error) {
            console.error(error)
        }
        
    })
}

initCarrito()