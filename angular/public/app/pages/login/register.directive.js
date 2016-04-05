angular.module('learny.components.register',['learny.services.login'])

.directive('register', function(Users){
  return {
    scope: {},
    replace: true,
    templateUrl: 'app/pages/login/register.html',
    controller: function(){
      Users.query(function(data){
        console.log(data);
      })
    }
  }
})
