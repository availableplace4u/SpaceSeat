'use strict';

angular.module('myApp.train', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/train', {
            templateUrl: 'train/train.html',
            controller: 'TrainCtrl'
        });
    }])

    .controller('TrainCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

        $scope.trains = [
            {
                id: 1,
                name: '',
                color: '#941515'
            },
            {
                id: 2,
                name: '',
                color: '#252590'
            },
            {
                id: 3,
                name: '',
                color: '#3F943F'
            },
            {
                id: 4,
                name: '',
                color: '#F15A74'
            },
            {
                id: 5,
                name: '',
                color: '#E0A226'
            }
        ];

        $scope.getTrainStyle = function (train) {
            return {'background': train.color};
        };

        $scope.getSelectedTrainStyle = function (train) {
            if ($scope.isTrainSelected(train)) {
                return {'background': train.color};
            } else {
                return {};
            }
        };

        $scope.selectedTrain = null;

        $scope.isTrainSelected = function (train) {
            return $scope.selectedTrain == train;
        };

        function getRandomNumber(max) {
            return parseInt(Math.random() * max, 10);
        }

        $scope.selectTrain = function (train) {
            if ($scope.selectedTrain == train || $scope.loading) return; // do not select train more than once

            $scope.loading = true;
            $scope.selectedTrain = train;

            $timeout(function () {
                var pointerElem = $('#cabin-pointer')[0];
                var deg = getRandomNumber(360);

                $scope.platformNumber = getRandomNumber(6) + 1;
                $scope.loading = false;
                $timeout(function () {
                    pointerElem.style.transform = 'rotate(' + deg + 'deg)';
                }, 100);
            }, 2000);

        };

    }
    ]);