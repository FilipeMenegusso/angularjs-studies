(function () {
    'use strict';

    angular.module('invoice', [])
        .controller('InvoiceController', InvoiceController);

    function InvoiceController() {
        var vm = this; // captura o contexto

        // Bindable Members Up Top
        vm.qty = 1;
        vm.cost = 2;
        vm.inCurr = 'EUR';
        vm.currencies = ['USD', 'EUR', 'CNY'];
        vm.usdToForeignRates = {
            USD: 1,
            EUR: 0.74,
            CNY: 6.09
        };
        
        vm.total = total;
        vm.pay = pay;

        function total(outCurr) {
            return convertCurrency(vm.qty * vm.cost, vm.inCurr, outCurr);
        }

        function convertCurrency(amount, inCurr, outCurr) {
            return amount * vm.usdToForeignRates[outCurr] / vm.usdToForeignRates[inCurr];
        }

        function pay() {
            window.alert('Thanks!');
        }
    }
})();

