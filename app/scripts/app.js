'use strict';

/**
 * @ngdoc overview
 * @name healthConnectionLlcApp
 * @description
 * # healthConnectionLlcApp
 *
 * Main module of the application.
 */
angular
  .module('healthConnectionLlcApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
