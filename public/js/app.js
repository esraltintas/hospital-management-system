'use strict';

var hospital = angular.module("hospital", ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

hospital.config(['$routeProvider', '$locationProvider', function($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        }).
        when('/doctors', {
            templateUrl: 'partials/doctors.html',
            controller: 'DoctorsController'
        }).
        when('/patients', {
            templateUrl: 'partials/patients.html',
            controller: 'PatientsController'
        }).
        otherwise({
            redirectTo: '/'
        });
}]);
