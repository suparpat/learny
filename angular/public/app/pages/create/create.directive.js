angular.module('learny.components.create',['learny.services.create'])

.directive('create', function(){
  return {
    scope: {
      // dummyone: '=',
      // dummytwo: '&'
    },
    replace: true,
    templateUrl: 'app/pages/create/create.html',
    controller: function(){
      //Customize Quill


    },
    link: function(scope, elem){

    }
  }
})
