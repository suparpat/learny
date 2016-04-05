angular.module('learny.components.menu',[])
	.directive('navBar', function(){
		return {
			scope: {

			},
			restrict: 'EA',
			replace: true,
			templateUrl: 'app/components/menu/menu.html'
		}
	})