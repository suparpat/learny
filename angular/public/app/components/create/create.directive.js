angular.module('learny.components.create',['learny.services.create'])

.directive('create', function(){
  return {
    scope: {},
    replace: true,
    templateUrl: 'app/components/create/create.html',
    controller: function(){

    }
  }
})
