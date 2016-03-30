'use strict';

// Declare app level module which depends on filters, and services

angular.module('learny', [
  'ngRoute',
  'ui.bootstrap',
  'learny.controllers',
  'learny.filters',
  'learny.services',
  'learny.directives'
])

  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/home',{
        templateUrl: 'views/home.html',
        controller: 'homeController'
      })
      .when('/about',{
        templateUrl: 'views/about.html',
        controller: 'aboutController'
      })
      .otherwise({
        redirectTo: '/home'
      });
  })