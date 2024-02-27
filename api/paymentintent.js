const stripeAPI = require('../stripe');

function calculateOrderAmount(cartItems) {
    return cartItems.reduce((total, product) => {
        return total + product.price * product.quantity;
    }, 0) * 100;
    
}

async function paymentIntent(req, res) {
    // pull off
    const { cartItems, description, receipt_email, shipping } = req.body;
    let paymentIntent;

    try {
        // going to update the payment intent variebla
        paymentIntent = await stripeAPI.paymentIntents.create({
            // that takes an object and inside of object we going to define our parameters
            amount: calculateOrderAmount(cartItems),
            currency: 'eur',
            description,
            payment_method_types: ['card'],
            receipt_email,
            shipping,
        });

        res.status(200).json({clientSecret: paymentIntent.client_secret, })
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'an error occured, unable to create payment intent'})
    }
}

module.exports = paymentIntent;