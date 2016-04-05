angular.module('learny.components.feedback',['learny.services.feedback'])

.directive('feedback', function(){
  return {
    scope: {},
    replace: true,
    templateUrl: 'app/pages/feedback/feedback.html',
    controller: function(){

    }
  }
})
