const changeBaseCurrency = () => {
	const selectedBaseCurrency = $("#base-currency-choices").val() || "CAD";
	const selectedResultCurrency = $("#result-currency-choices").val();

	getExchangeRate(selectedBaseCurrency, selectedResultCurrency);

	return selectedBaseCurrency;
}

const changeResultCurrency = () => {
	const selectedBaseCurrency = $("#base-currency-choices").val();
	const selectedResultCurrency = $("#result-currency-choices").val() || "USD";

	getExchangeRate(selectedBaseCurrency, selectedResultCurrency);

	return selectedResultCurrency;
}

const baseCurrency = changeBaseCurrency();
const resultCurrency = changeResultCurrency();

/**
 * The old-fashioned request format. If jQuery was allowed, I would use modern AJAX
 *
 * @param {string} baseCurrency - Testing ESDoc param 1
 * @param {string} resultCurrency - Testing ESDoc param 2
 * @return {string} Testing return
 *
 * @example
 *
 *     foo('hello')
 */
function getExchangeRate(baseCurrency, resultCurrency) {
	// Define your API Key (replace 'YOUR_API_KEY' with your actual API key from freecurrencyapi.net)
	const apiKey = 'fca_live_UOgvKXK58X9UMczpGZz2IB3NupxlCazZk2tYRu5D';

	// Ensure the DOM elements for input and output values are present
	const baseCurrencyValue = document.getElementById("base-currency-value");
	const resultCurrencyValue = document.getElementById("result-currency-value");

	// freecurrencyapi.com endpoint to get the latest exchange rate data
	const url = `https://api.freecurrencyapi.comv1/latest?apikey=fca_live_UOgvKXK58X9UMczpGZz2IB3NupxlCazZk2tYRu5D`;

	// Use fetch API to get the exchange rates
	fetch(url)
		.then(response => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		})
		.then(data => {
			// Check if the requested result currency is available in the response
			let resultCurrencyRate = data.data[resultCurrency];

			if (!resultCurrencyRate) {
				throw new Error('Requested currency not available');
			}

			// Handle same currency conversion case
			if (baseCurrency === resultCurrency) {
				resultCurrencyRate = 1;
			}

			// Update the result input with the converted value
			const updateConversion = () => {
				const inputValue = baseCurrencyValue.value || 0;
				resultCurrencyValue.value = (inputValue * resultCurrencyRate).toFixed(2);
			};

			updateConversion();

			// Attach the event listener to the input element for dynamic conversion
			baseCurrencyValue.addEventListener('input', updateConversion);
		})
		.catch(error => {
			console.error("Could not retrieve currency data:", error);
		});
}


// Default page load call
getExchangeRate(baseCurrency, resultCurrency);
