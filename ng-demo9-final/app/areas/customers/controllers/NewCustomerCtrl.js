(function () {
    'use strict';

    angular
        .module('app')
        .controller('NewCustomerCtrl', NewCustomerCtrl);

    NewCustomerCtrl.$inject = ['$scope', '$rootScope', '$http', '$location', '$routeParams'];

    function NewCustomerCtrl($scope, $rootScope, $http, $location, $routeParams) {

        $scope.customer = {};
        var serviceUrl = 'https://run.mocky.io/v3/5471b13f-4c34-4d91-a950-858380838150';

        $scope.save = function () {

            $http.post(serviceUrl, $scope.customer)
                .success(function (result) {
                    console.log($scope.customer);
                    toastr.success('Cliente salvo com sucesso', 'Sucesso');
                })
                .error(function (result) {
                    tostr.error('Cliente inválido');
                });
        };
    }
})();
