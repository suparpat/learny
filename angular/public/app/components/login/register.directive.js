angular.module('learny.components.register',['learny.services.login'])

.directive('register', function(Users){
  return {
    scope: {},
    replace: true,
    templateUrl: 'app/components/login/register.html',
    controller: function(){
      Users.query(function(data){
        console.log(data);
      })
    }
  }
})
