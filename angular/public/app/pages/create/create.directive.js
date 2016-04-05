angular.module('learny.components.create',['learny.services.create'])

.directive('create', function(){
  return {
    scope: {},
    replace: true,
    templateUrl: 'app/pages/create/create.html',
    controller: function(){

    }
  }
})
