'use strict';

angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
        $scope.slide = '';
        $rootScope.back = function () {
            $scope.slide = 'slide-right';
            $window.history.back();
        }
        $rootScope.go = function (path) {
            $scope.slide = 'slide-left';
            $location.url(path);
        }
    }])
    .controller('EmployeeListCtrl', ['$scope', function ($scope) {
        //$scope.employees = Employee.query();
        //$scope.employees = localStorage.getItem('todos');
        $scope.trackCode = '';

        $scope.trackCodeArray = [];

        $scope.addTrackCode = function () {
            if ($scope.trackCode == '') {
                alert("Please enter code.");
            }
            else {

                $scope.trackCodeArray.push({ code: "'" + $scope.trackCode + "'" });

                $scope.trackCode = ''; //clear the input after adding
                localStorage.setItem('trackCodeArray', JSON.stringify($scope.trackCodeArray));

                $scope.trackCodeArray = JSON.parse(localStorage.getItem('trackCodeArray'));
            }
        }
        $scope.trackCodeArray = (localStorage.getItem('trackCodeArray') !== null) ? JSON.parse(localStorage.getItem('trackCodeArray')) : [];

        $scope.deleteTrackCode = function (index) {
            $scope.trackCodeArray.splice(index, 1);
            localStorage.setItem('trackCodeArray', JSON.stringify($scope.trackCodeArray));
        }


    }])
    .controller('EmployeeDetailCtrl', ['$scope', '$routeParams', '$sce', function ($scope, $routeParams, $sce) {


        $scope.trackCodeCode = $routeParams.code;

        $scope.trackURL = $sce.trustAsResourceUrl('http://server' + $routeParams.code.charAt(0) + '.locanix.net/TrackingTool/?t=' + $routeParams.code);
    }])
    .controller('ReportListCtrl', ['$scope', '$routeParams', 'Report', function ($scope, $routeParams, Report) {
        $scope.employees = Report.query({ employeeId: $routeParams.employeeId });
    }])
