(function () {
    'use strict';

    angular.module('finance', [])
        .factory('currencyConverter', ['$http', currencyConverter]);

    function currencyConverter($http) {
        var currencies = ['USD', 'EUR', 'CNY'];
        var usdToForeignRates = {};

        function convert(amount, inCurr, outCurr) {
            return amount * usdToForeignRates[outCurr] / usdForeignRates[inCurr];
        }

        function refresh() {
            var url = 'https://api.fixer.io/latest?base=USD&symbols=' + currencies.join(','); // .join(',') = 'USD, EUR, CNY'

            return $http.get(url).then(function (response) {
                usdToForeignRates = response.data.rates;
                usdToForeignRates['USD'] = 1;
            });
        }

        refresh();

        return {
            currencies: currencies,
            convert: convert
        };
    }
})();