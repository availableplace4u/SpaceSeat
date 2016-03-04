'use strict';

angular.module('myApp.cabin', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/cabin', {
            templateUrl: 'cabin/cabin.html',
            controller: 'CabinCtrl'
        });
    }])

    .controller('CabinCtrl', [function () {

    }]);