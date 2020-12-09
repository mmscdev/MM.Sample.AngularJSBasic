(function () {
    'use strict';

    angular
        .module('app')
        .controller('EditCustomerCtrl', EditCustomerCtrl);

    EditCustomerCtrl.$inject = ['$scope', '$rootScope', '$http', '$location', '$routeParams'];

    function EditCustomerCtrl($scope, $rootScope, $http, $location, $routeParams) {

        console.log('eeee');

    }
})();
