angular.module('learny.components.login',['learny.services.login'])

.directive('login', function(){
  return {
    scope: {},
    replace: true,
    templateUrl: 'app/components/login/login.html',
    controller: function(){

    }
  }
})
