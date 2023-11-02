import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import fetch from 'node-fetch';

const fetchCurrencies = (freecurrencyapi, baseCurrency, resultCurrency) => {

    freecurrencyapi.latest({
        base_currency: baseCurrency,
        currencies: resultCurrency
    }).then(response => {
        return response.data;
    });

};

const getExchangeRates = () => {

    // fetch('/config') in express js
    fetch('http://localhost:3000/config')
        .then(response => response.json())
        .then(config => {
            const freecurrencyapi = new Freecurrencyapi(config.apiKey);
            return config.apiKey;
        })
        .catch(error => console.error('Error fetching configuration:', error));

};

export default getExchangeRates;