const stripeAPI = require('../stripe');

const webHookHandlers = {
    'checkout.session.completed': (data) => {
        console.log('Checkout completed successfully', data);
        // other business logic: write to database, email to user, connect to third party service
    },
    'payment_intent.succeeded': (data) => {
        console.log('Payment succeeded', data);
    },
    'payment_intent.payment_failed': (data) => {
        console.log('Payment Failed', data);
    }
    
}
/**
 * 
 * @param {*} req 
 * @param {*} res
 * 
 * Documentation https://docs.stripe.com/webhooks 
 * https://docs.stripe.com/webhooks/quickstart
 */

//going to create webhook function  and req nad response as arguments
function webhook(req, res) {
    const sig = req.headers['stripe-signature'];
    let stripeEvent;

    try {
        stripeEvent = stripeAPI.webhook.constructEvent(
            req['rawBody'], sig, process.env.WEB_HOOK_SECRET)
    } catch(error) {
            return res.status(400).send(`Webhook error ${error.message}`);
        }

    /* if(stripeEvent.type === 'checkout.session.completed') {
        const session = stripeEvent.data.object;
        console.log('Stripe Event data', session); 
        }
    */

    if ( webHookHandlers[Event.type]) {
        webHookHandlers[Event.type](Event.data.object);
    }
    

    
}
module.exports = webhook;