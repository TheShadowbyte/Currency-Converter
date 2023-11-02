import dotenv from 'dotenv';
import getExchangeRates from './src/get-exchange-rates.js';
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

const currencies = [
    'AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK',
    'DKK', 'EUR', 'GBP', 'HKD', 'HRK', 'HUF', 'IDR',
    'ILS', 'INR', 'ISK', 'JPY', 'KRW', 'MXN', 'MYR',
    'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK',
    'SGD', 'THB', 'TRY', 'USD', 'ZAR'
];

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/get-currencies', (req, res) => {
    res.json(currencies);
});

app.get('/get-exchange-rates', (req, res) => {
    getExchangeRates(req, res);
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Provide an endpoint to get environment variables
app.get('/config', (req, res) => {
    // Selectively send environment variables to the client
    const clientConfig = {
        apiKey: dotenv.config().parsed.FREE_CURRENCY_API_KEY
    };
    res.json(clientConfig);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
