(function () {
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngAnimate']);

    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeCtrl',
                templateUrl: 'app/areas/home/views/index.html'
            })
            .when('/customer/edit/:id', {
                controller: 'EditCustomerCtrl',
                templateUrl: 'app/areas/customers/views/edit.html'
            })
            .when('/customer/delete/:id', {
                controller: 'DeleteCustomerCtrl',
                templateUrl: 'app/areas/customers/views/delete.html'
            })
            .when('/customer/new/', {
                controller: 'NewCustomerCtrl',
                templateUrl: 'app/areas/customers/views/new.html'
            })
            .when('/login', {
                controller: 'LoginCtrl',
                templateUrl: 'app/areas/login/views/login.html'
            })
            .otherwise({
                controller: 'HomeCtrl as vm',
                templateUrl: '404.html',
                requiresLogin: false
            });
    });

    app.run(function ($rootScope) {
        $rootScope.token = '';
        $rootScope.isAuthenticated = false;
    });

    app.controller('AppCtrl', function AppCtrl($scope, $http) {
        $scope.title = 'Demo 06';
        $scope.shoppingCartTotalItems = 5;
        $scope.shoppingCartItems = [
            { title: 'Mouse' },
            { title: 'Teclado' },
            { title: 'Mousepad' },
            { title: 'Monitor' },
            { title: 'Celular' },
        ]
    });
})();