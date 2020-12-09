(function () {
    'use strict';

    angular
        .module('app')
        .directive('customerBadgeDirective', CustomerBadgeDirective);

    CustomerBadgeDirective.$inject = ['$window'];

    function CustomerBadgeDirective($window) {
        return {
            templateUrl: 'app/directives/my-customer-badge.html',
            scope: {
                customer: '='
            }
        }
    }

})();