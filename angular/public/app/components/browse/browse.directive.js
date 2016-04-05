angular.module('learny.components.browse',['learny.services.browse'])

.directive('browse', function(Users){
  return {
    scope: {},
    replace: true,
    templateUrl: 'app/components/browse/browse.html',
    controller: function(){
      // Users.query(function(data){
      //   console.log(data);
      // })
    }
  }
})
