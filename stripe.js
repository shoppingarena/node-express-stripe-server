// going instantie stripe object
const stripeAPI = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.export = stripeAPI;
