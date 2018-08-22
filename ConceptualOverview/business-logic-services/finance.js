(function() {
    'use strict';

    /*
        * services -> .factory 
    * */

    angular.module('finance', [])
        .factory('currencyConverter', currencyConverter);

    function currencyConverter() {
        var currencies = ['USD', 'EUR', 'CNY'];
        var usdToForeignRates = {
            USD: 1,
            EUR: 0.74,
            CNY: 6.09
        };
        
        function convert(amount, inCurr, outCurr) {
            return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
        }

        return {
            currencies: currencies,
            convert: convert
        }
    }
})();