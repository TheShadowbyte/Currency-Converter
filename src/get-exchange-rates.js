import fetch from 'node-fetch';
import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const fetchCurrencies = (apiKey, baseCurrency, resultCurrency) => {

    const freecurrencyapi = new Freecurrencyapi(apiKey);

    return freecurrencyapi.latest({
        base_currency: baseCurrency,
        currencies: resultCurrency
    })
    .then(response => {
        if (!response || typeof response !== 'object') {
            throw new Error('Invalid response format from the currency API.');
        }
        return response.data;
    })
    .catch(error => {
        console.error('Error fetching currencies:', error);
        throw error;
    });

};

const getExchangeRates = (req, res) => {
    fetch('http://localhost:3000/config')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(config => {
            return fetchCurrencies(config.apiKey, req.params.baseCurrency, req.params.resultCurrency);
        })
        .then(exchangeRates => {
            res.json(exchangeRates);
        })
        .catch(error => {
            console.error('Error fetching configuration:', error);
            res.status(500).json({
                error: 'Error fetching configuration',
                message: error.message
            });
        });
};

export default getExchangeRates;