'use strict';

// Declare app level module which depends on filters, and services

angular.module('learny', [
  'ngRoute',
  'ui.bootstrap',
  'learny.controllers',
  'learny.filters',
  'learny.services',
  'learny.directives',
  'learny.components.menu',
  'learny.components.footer',
  'ngQuill'
])

  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/',{
        redirectTo: '/home'
      })
      .when('/home',{
        templateUrl: 'views/home.html',
        controller: 'homeController'
      })
      .when('/browse',{
        templateUrl: 'views/browse.html',
        controller: 'browseController'
      })
      .when('/create',{
        templateUrl: 'views/create.html',
        controller: 'createController'
      })

      .when('/about',{
        templateUrl: 'views/about.html',
        controller: 'aboutController'
      })
      .when('/login',{
        templateUrl: 'views/login.html',
        controller: 'loginController'
      })
      .when('/faqs',{
        templateUrl: 'views/faqs.html'
      })
      .when('/feedback',{
        templateUrl: 'views/feedback.html'
      })
      .otherwise({
        templateUrl: 'views/a-mysterious-place.html'
      });
  })

  .config(['ngQuillConfigProvider', function (ngQuillConfigProvider) {
      ngQuillConfigProvider.set([{
          alias: '10',
          size: '10px'
      }, {
          alias: '12',
          size: '12px'
      }, {
          alias: '14',
          size: '14px'
      }, {
          alias: '16',
          size: '16px'
      }, {
          alias: '18',
          size: '18px'
      }, {
          alias: '20',
          size: '20px'
      }, {
          alias: '22',
          size: '22px'
      }, {
          alias: '24',
          size: '24px'
      }], [{
          label: 'Arial',
          alias: 'Arial'
      }, {
          label: 'Sans Serif',
          alias: 'sans-serif'
      }, {
          label: 'Serif',
          alias: 'serif'
      }, {
          label: 'Monospace',
          alias: 'monospace'
      }, {
          label: 'Trebuchet MS',
          alias: '"Trebuchet MS"'
      }, {
          label: 'Verdana',
          alias: 'Verdana'
      }])
  }]);