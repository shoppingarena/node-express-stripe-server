const stripeAPI = require('../stripe');
/**
 * 
 * @param {*} req 
 * @param {*} res
 * 
 * Documentation https://docs.stripe.com/webhooks 
 */

//going to create webhook function  and req nad response as arguments
function webhook(req, res) {
    const sig = req.headers['stripe-signature'];
    let stripeEvent:

    try {
        stripeEvent = stripeAPI.webhook.constructEvent(
            req['rawBody'], sig, process.env.WEB_HOOK_SECRET)
    } catch(error) {
            return res.status(400).send(`Webhook error ${error.message}`);
        }

    if(stripeEvent.type === 'checkout.session.completed') {
        const session = stripeEvent.data.object;
        console.log('Stripe Event data', session);
    }

    
}
module.exports = webhook