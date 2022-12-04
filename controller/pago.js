const mercadopago = require('mercadopago')

// Agrega credenciales (ACCESS TOKEN - Del vendedor)
mercadopago.configure({
    access_token: process.env.TOKEN,
});

console.log('----- configuración de SDK de mercadopago ok! -----')

const feedBack = (req,res) => {
    let infoPago = {
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	};

    console.log('prueba', infoPago)

    res.redirect('/')
}

module.exports = {
    feedBack
}