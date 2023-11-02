# Currency Converter

This project provides both an API and a frontend interface for converting currencies using the latest exchange rates from the Free Currency API. The backend offers a RESTful API endpoint for programmatic access, while the frontend provides a user-friendly web interface for direct currency conversion.

## Features

- Fetch real-time exchange rates via the API.
- Convert currencies directly using the frontend interface.
- Simple and RESTful API endpoint for easy integration.
- Flexible query parameters for API requests.
- A web frontend for immediate currency conversion without the need for API calls.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. This project was built using Node.js version `20.8.0`.

### Installing

First, clone the repository to your local machine:

    git clone https://github.com/TheShadowbyte/Currency-Converter.git
    cd Currency-Converter

Next, install the dependencies using npm:

    npm install

### Configuration

Create a `.env` file in the root directory of the project and add the following environment variable for the Free Currency API Key:

    FREE_CURRENCY_API_KEY=your_api_key_here

Replace `your_api_key_here` with your actual API key from Free Currency API.

### Running the Server

To start the server, run:

    npm start

The server will start on `http://localhost:3000`.

### Using the API

To convert currencies using the API, make a `GET` request to the endpoint with the base and target currencies as URL segments:

    GET /get-exchange-rates/baseCurrency/resultCurrency

For example, to convert from US Dollar (USD) to Euro (EUR), you would send a `GET` request to:

    GET /get-exchange-rates/USD/EUR

This request will return the exchange rate from USD to EUR.

## API Reference

The following endpoint is available:

- `GET /get-currencies`: List all available currencies.
- `GET /get-exchange-rates`: Get the exchange rate for the specified base and target currencies.

### Parameters

- `baseCurrency`: The currency code of the currency you want to convert from.
- `resultCurrency`: The currency code of the currency you want to convert to.

## Running the Tests

Explain how to run the automated tests for this system.

    npm test

## Built With

- [Node.js](https://nodejs.org/) - The runtime server environment.
- [Express.js](https://expressjs.com/) - The web application framework.
- [@everapi/freecurrencyapi-js](https://github.com/link-to/freecurrencyapi-js) - Used to interact with the Free Currency API.

## Authors

- **TheShadowbyte** - *Initial work* - [TheShadowbyte](https://github.com/TheShadowbyte)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Thanks to the Free Currency API for providing exchange rate data.
