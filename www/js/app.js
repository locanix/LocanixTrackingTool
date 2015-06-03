'use strict';

angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.controllers',
    'myApp.memoryServices'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/trackcodes', {templateUrl: 'partials/track-list.html', controller: 'EmployeeListCtrl'});
    $routeProvider.when('/trackcodes/:code', { templateUrl: 'partials/track-detail.html', controller: 'EmployeeDetailCtrl' });
    //$routeProvider.when('/trackcodes/:employeeId/reports', { templateUrl: 'partials/report-list.html', controller: 'ReportListCtrl' });
    $routeProvider.otherwise({ redirectTo: '/trackcodes' });
}]);