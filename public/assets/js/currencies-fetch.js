const currencies = fetch('/get-currencies')
    .then(response => response.json())
    .then(currencyList => {
        console.log(currencyList); // Logs the array of currencies to the console
        // You can now use this list to populate a drop-down or for other purposes
    })
    .catch(error => {
        console.error('Error fetching the list of currencies:', error);
    });


$.each(currencies, function(index, value) {
    $('#base-currency-choices').append($('<option>').text(value).attr('value', value));
    $('#result-currency-choices').append($('<option>').text(value).attr('value', value));

});

    jQuery('.calculate-button').click(function() {

        let baseCurrency = jQuery('#base-currency-choices').val();
        let resultCurrency = jQuery('#result-currency-choices').val();

        let result = response.data[resultCurrency] * jQuery('#base-currency-value').val();

    });




// Change the text of the result (it's an input field of type number)
jQuery('#result-currency-value').val(result.toFixed(2));

const fetchCurrencies = (freecurrencyapi) => {

    // get currencies from /get-currencies
    const currencies = fetch('/get-currencies')
        .then(response => response.json())
        .then(currencyList => {
            console.log(currencyList); // Logs the array of currencies to the console
            // You can now use this list to populate a drop-down or for other purposes
        })
        .catch(error => {
            console.error('Error fetching the list of currencies:', error);
        });


    $.each(currencies, function(index, value) {
        $('#base-currency-choices').append($('<option>').text(value).attr('value', value));
        $('#result-currency-choices').append($('<option>').text(value).attr('value', value));
    });

    jQuery('.calculate-button').click(function() {

        let baseCurrency = jQuery('#base-currency-choices').val();
        let resultCurrency = jQuery('#result-currency-choices').val();

        freecurrencyapi.latest({
            base_currency: baseCurrency,
            currencies: resultCurrency
        }).then(response => {
            console.log(response);
            // Take the result from response.data and multiply it by the base currency value, rounded to 2 decimal places
            let result = response.data[resultCurrency] * jQuery('#base-currency-value').val();

            // Change the text of the result (it's an input field of type number)
            jQuery('#result-currency-value').val(result.toFixed(2));
        });
    });

};

