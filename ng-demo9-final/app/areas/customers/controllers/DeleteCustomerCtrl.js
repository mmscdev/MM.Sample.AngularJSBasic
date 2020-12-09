(function () {
    'use strict';

    angular
        .module('app')
        .controller('DeleteCustomerCtrl', DeleteCustomerCtrl);

    DeleteCustomerCtrl.$inject = ['$scope', '$rootScope', '$http', '$location', '$routeParams'];

    function DeleteCustomerCtrl($scope, $rootScope, $http, $location, $routeParams) {
        $scope.customer = {};

        var serviceUrl = 'https://run.mocky.io/v3/5471b13f-4c34-4d91-a950-858380838150';

        $http.get(serviceUrl + "/" + $routeParams.id)
            .success(function (result, status, headers, config) {
                $scope.customer = result[0];
                console.log('DeleteCustomerCtrl', $scope.customer);
       });

        $scope.delete = function () {
            $http.delete(serviceUrl,$scope.customer.email)
                .success(function (result) {
                    toastr.success('Cliente excluído com sucesso', 'Sucesso');
                });            
        };
    }
})();
