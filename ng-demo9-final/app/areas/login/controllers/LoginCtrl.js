(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginCtrl', LoginCtrl);

    LoginCtrl.$inject = ['$scope', '$rootScope','$http', '$location'];

    function LoginCtrl($scope, $rootScope,$http,$location) {  

        $scope.user = {
            name: '',
            password: ''
        };

        $scope.dologin = function () {
            console.log($scope.user);

            var authurl = 'https://run.mocky.io/v3/a6c53021-28fd-47f8-9d5f-b5796e4d862a';

            var data = "grant_type=password&username=andrebaltieri&password=andrebaltieri";

            $http.post(authurl, data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
                .success(function (result) {
                    $rootScope.token = result.access_token;
                    console.log($rootScope.token);
                    $rootScope.isAuthenticated = true;
                    $location.url('/');
                })
                .error(function (result)
                {
                    $rootScope.isAuthenticated = false;
                    tostr.error('Usuário inválido');
            });
        };

    }
})();
