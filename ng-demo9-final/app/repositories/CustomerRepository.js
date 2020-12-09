(function () {
    'use strict';

    angular
        .module('app')
        .factory('CustomerRepository', CustomerRepository);

    CustomerRepository.$inject = ['$http'];

    function CustomerRepository($http) {
        return {
            getAllCustomers: function (id) {

                var serviceUrl = 'https://run.mocky.io/v3/5471b13f-4c34-4d91-a950-858380838150';
                return $http.get(serviceUrl)
                    .success(function (result, status, headers, config) {
                        console.log(result);
                    });
            }
        }
    }
})();