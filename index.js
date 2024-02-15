const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './.env' });

// going to initiate app
const app = express();
const port = 8080;
//going to use json middleware
app.use(express.json());
//we need cors module that react app  can send requests to node server
app.use(cors({ origin: true }));
//going to create a get route just to make sure the server is working
app.get('/', (req, res) => res.send('Hello Server'));
//going to call the listen function that we can connect to the server and inside is callback function console.log
app.listen(port, () => console.log('server listening on port', port));
