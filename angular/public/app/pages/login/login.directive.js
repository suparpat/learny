angular.module('learny.components.login',['learny.services.login'])

.directive('login', function(){
  return {
    scope: {},
    replace: true,
    templateUrl: 'app/pages/login/login.html',
    controller: function(){

    }
  }
})
