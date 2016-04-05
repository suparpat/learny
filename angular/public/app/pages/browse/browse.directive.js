angular.module('learny.components.browse',['learny.services.browse'])

.directive('browse', function(Users){
  return {
    scope: {},
    replace: true,
    templateUrl: 'app/pages/browse/browse.html',
    controller: function(){
      // Users.query(function(data){
      //   console.log(data);
      // })
    }
  }
})
