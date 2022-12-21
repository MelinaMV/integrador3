// Agrega credenciales de SDK (Public KEY - Del vendedor)
const mercadopago = new MercadoPago("TEST-a6a360a3-5c27-42b0-b12c-e8df8b1a9a1d", {
    locale: "es-AR",
});


async function renderPago(preference) {
    let html = await fetch('vistas/pago.html').then(r => r.text())

    document.querySelector('main').style.display = 'none'
    document.querySelector('.section-pago').innerHTML = html

    createCheckoutButton(preference.id)

    const items = preference.items
    const refItems = document.querySelector('.item')
    const refTotal = document.querySelector('#summary-total')

    let total = 0
    for(let i=0; i<items.length; i++) {
        let price = items[i].unit_price
        let quantity = items[i].quantity
        let title = items[i].title

        let subtotal = price * quantity
        total += subtotal

        refItems.innerHTML += `
            <span class="price" class="summary-price">${subtotal}</span>
            <p class="item-name">${title} x <span class="summary-quantity">${quantity}</span></p>
        `
    }
    refTotal.innerHTML = total


    // Go back
    document.getElementById("go-back").addEventListener("click", function () {
        document.querySelector('main').style.display = 'block'
        document.querySelector('.section-pago').innerHTML = ''
    });
}


// Create preference when click on checkout button
function createCheckoutButton(preferenceId) {
    // Initialize the checkout
    mercadopago.checkout({
        preference: {
            id: preferenceId
        },
        render: {
            container: '#button-checkout', // Class name where the payment button will be displayed
            label: 'Pagar', // Change the payment button text (optional)
        }
    });
}