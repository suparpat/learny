'use strict';

// angular.module('learny.config',[])
angular.module('learny.config', [
  'learny.components.home',
  'learny.components.menu',
  'learny.components.browse',
  'learny.components.create',
  'learny.components.login',
  'learny.components.register',
  'learny.components.footer',
  'learny.components.feedback'
])
.config(function($routeProvider, $locationProvider){
  $routeProvider
    .when('/',{
      redirectTo: '/home'
    })

    .when('/home',{
      template: '<home></home>'
    })

    .when('/browse',{
      template: '<browse></browse>'
    })

    .when('/create',{
      template: '<create></create>'
    })

    .when('/about',{
      templateUrl: 'app/pages/about.html'
    })

    .when('/login',{
      template: '<login></login>'
    })

    .when('/register',{
      template: '<register></register>'
    })

    .when('/faqs',{
      templateUrl: 'app/pages/faqs.html'
    })

    .when('/feedback',{
      template: '<feedback></feedback>'
    })
    
    .otherwise({
      templateUrl: 'app/pages/a-mysterious-place.html'
    });
})

.config(['ngQuillConfigProvider', function (ngQuillConfigProvider) {
    // ngQuillConfigProvider.set([{
    //     alias: '10',
    //     size: '10px'
    // }, {
    //     alias: '12',
    //     size: '12px'
    // }, {
    //     alias: '14',
    //     size: '14px'
    // }, {
    //     alias: '16',
    //     size: '16px'
    // }, {
    //     alias: '18',
    //     size: '18px'
    // }, {
    //     alias: '20',
    //     size: '20px'
    // }, {
    //     alias: '22',
    //     size: '22px'
    // }, {
    //     alias: '24',
    //     size: '24px'
    // }], [{
    //     label: 'Arial',
    //     alias: 'Arial'
    // }, {
    //     label: 'Sans Serif',
    //     alias: 'sans-serif'
    // }, {
    //     label: 'Serif',
    //     alias: 'serif'
    // }, {
    //     label: 'Monospace',
    //     alias: 'monospace'
    // }, {
    //     label: 'Trebuchet MS',
    //     alias: '"Trebuchet MS"'
    // }, {
    //     label: 'Verdana',
    //     alias: 'Verdana'
    // }])
}]);
