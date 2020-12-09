(function () {
    'use strict';

    angular
        .module('app')
        .controller('EditCustomerCtrl', EditCustomerCtrl);

    EditCustomerCtrl.$inject = ['$scope', '$rootScope', '$http', '$location', '$routeParams'];

    function EditCustomerCtrl($scope, $rootScope, $http, $location, $routeParams) {

        $scope.customer = {};

        var serviceUrl = 'https://run.mocky.io/v3/5471b13f-4c34-4d91-a950-858380838150';

        $http.get(serviceUrl + "/" + $routeParams.id)
            .success(function (result, status, headers, config) {
                $scope.customer = result[0];
             });

        $scope.save = function () {
            $http.put(serviceUrl,$scope.customer)
                .success(function (result) {
                    toastr.success('Cliente salvo com sucesso', 'Sucesso');
                });            
        };
    }
})();
