'use strict';

// Declare app level module which depends on filters, and services

angular.module('learny', [
  'ngRoute',
  'ngAnimate',
  'ngTouch',
  'ui.bootstrap',
  'learny.filters',
  'learny.services',
  'learny.directives',
  'learny.config'
])



  .controller('LearnyController', function ($scope, $http) {

    // $http({
    //   method: 'GET',
    //   url: '/api/name'
    // }).
    // success(function (data, status, headers, config) {
    //   $scope.name = data.name;
    // }).
    // error(function (data, status, headers, config) {
    //   $scope.name = 'Error!';
    // });

  })
