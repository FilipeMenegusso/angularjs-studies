(function () {
    'use strict';

    angular.module('invoice', ['finance'])
        .controller('InvoiceController', ['currencyConverter', InvoiceController]);

    function InvoiceController(currencyCoverter) {
        var vm = this;

        // Bindable Members Up Top
        vm.qty = 1;
        vm.cost = 2;
        vm.inCurr = 'EUR';
        vm.currencies = currencyCoverter.currencies;
        vm.total = total;
        vm.pay = pay;

        function total(outCurr) {
            return currencyCoverter.convert(vm.qty * vm.cost, vm.inCurr, outCurr);
        }

        function pay() {
            window.alert('Thanks!');
        }
    }
})();