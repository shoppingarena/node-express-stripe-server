const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env' });
const createCheckoutSession = require('./api/checkout');
const webhook = require('./api/webhook');
const paymentIntent = require('./api/paymentintent');

// going to initiate app
const app = express();
const port = 8080;
//going to use json middleware
app.use(express.json({
    // endpoint is public so we need to verify that data is comming from our Stripe account
    verify: (req, res, buffer) => req['rawBody'] = buffer,
}));
//we need cors module that react app  can send requests to node server
app.use(cors({ origin: true }));
//going to create a get route just to make sure the server is working
app.get('/', (req, res) => res.send('Hello Server'));

app.post('/create-checkout-session', createCheckoutSession);
// create-payment-intent is endpoint and paymentIntent is function which will handle this endpoint
app.post('create-payment-intent', paymentIntent);

app.post('/webhook', webhook);

//going to call the listen function that we can connect to the server and inside is callback function console.log
app.listen(port, () => console.log('server listening on port', port));
