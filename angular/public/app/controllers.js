'use strict';

/* Controllers */

angular.module('learny.controllers', ['learny.services'])

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

  .controller('aboutController', function ($scope) {

  });
