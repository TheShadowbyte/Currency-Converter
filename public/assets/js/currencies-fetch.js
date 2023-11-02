jQuery(document).ready(function() {
    fetch('http://localhost:3000/get-currencies')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            $.each(data, function(index, value) {
                $('#base-currency-choices').append($('<option>').text(value).attr('value', value));
                $('#result-currency-choices').append($('<option>').text(value).attr('value', value));

            });
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });

        jQuery('.calculate-button').click(function() {

            let baseCurrency = jQuery('#base-currency-choices').val();
            let resultCurrency = jQuery('#result-currency-choices').val();

            fetch('/get-exchange-rates/' + baseCurrency + '/' + resultCurrency)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    let result = data[resultCurrency] * jQuery('#base-currency-value').val();
                    jQuery('#result-currency-value').val(result.toFixed(2));
                });

        });

});