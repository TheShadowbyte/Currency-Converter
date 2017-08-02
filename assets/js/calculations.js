// As soon as changeBaseCurrency() and changeResultCurrency() are called,
// call getExchangeRate() to update the exchange rate
var changeBaseCurrency = function() {

	var selectedBaseCurrency = document.getElementById("base-currency-choices").value;
	var selectedResultCurrency = document.getElementById("result-currency-choices").value;

	// Default base currency
	if (selectedBaseCurrency == null) {
		var baseCurrency = "CAD";
	}
	else {
		var baseCurrency = selectedBaseCurrency;
	}

	getExchangeRate(baseCurrency, selectedResultCurrency);
	return baseCurrency;

}

var changeResultCurrency = function() {

	var selectedBaseCurrency = document.getElementById("base-currency-choices").value;
	var selectedResultCurrency = document.getElementById("result-currency-choices").value;

	// Default result currency
	if (selectedResultCurrency == null) {
		var resultCurrency = "USD";
	}
	else {
		var resultCurrency = selectedResultCurrency;
	}

	getExchangeRate(baseCurrency, resultCurrency);
	return resultCurrency;

}

var baseCurrency = changeBaseCurrency();
var resultCurrency = changeResultCurrency();

// The old-fashioned request format
// If jQuery was allowed, I would use modern AJAX
function getExchangeRate(baseCurrency, resultCurrency) {

	var xmlhttp = new XMLHttpRequest();

	// Fetch rates depending on selected base and result currencies

	xmlhttp.open("GET", "http://api.fixer.io/latest?base=" + baseCurrency + "&symbols=" + resultCurrency, true);
	xmlhttp.send();

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == XMLHttpRequest.DONE ) {
			if (xmlhttp.status == 200) {

				var currencyData = JSON.parse(xmlhttp.responseText);
				// Get exchange rate using a dynamic object key
				var resultCurrencyRate = currencyData.rates[resultCurrency];

				// The symbols GET parameter doesn't fetch rate for the same currency,
				// so if user equals base and result boxes, set currency rate as 1
				// in order to avoid NaN 
				if (baseCurrency == resultCurrency) {
					resultCurrencyRate = 1;
				}

				var baseCurrencyValue = document.getElementById("base-currency-value");
				var resultCurrencyValue = document.getElementById("result-currency-value");

				resultCurrencyValue.value = baseCurrencyValue.value * resultCurrencyRate;

				baseCurrencyValue.onchange = function() {
					resultCurrencyValue.value = baseCurrencyValue.value * resultCurrencyRate;
				}

			}
			else if (xmlhttp.status == 400) {
				alert('There was an error 400');
			}
			// Error handling (API outage)
			else {
				alert('Something unexpected was returned');
			}
		}
	};

}

// Default page load call
getExchangeRate(baseCurrency, resultCurrency);