angular.module('learny.components.home',['learny.services.home'])

.directive('home', function(Users){
  return {
    scope: {},
    replace: true,
    templateUrl: 'app/components/home/home.html',
    controller: function(){
      // Users.query(function(data){
      //   console.log(data);
      // })
    }
  }
})
