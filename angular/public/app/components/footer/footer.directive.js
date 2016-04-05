angular.module('learny.components.footer',[])
	.directive('myFooter', function(){
		return {
			scope: {

			},
			restrict: 'EA',
			replace: true,
			templateUrl: 'app/components/footer/footer.html'
		}
	})