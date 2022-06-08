const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
    'sk_test_51KqrJ2DL5g3Mx38zYHgxPte3zdhSrA72o0gsRJdThatUkajV5kuCeivATZouG2H8xgF7Ejkt4AGuAMrgVHTcGm7v00orcMNDKU'
);
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// API

// App Configurator
const app = express();

// Middleware
app.use(
    cors({
        origin: true,
        corsAllowHeaders: true,
        contentType: 'application/json',
    })
);
app.use(express.json());
// API routers
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'vnd',
    });
    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});
app.get('/', (request, response) => response.status(200).send('Hello World'));
// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-c0db1/us-central1/api
