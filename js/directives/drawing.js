app.directive('drawing', function(){
	return {
		restrict: 'E',
		scope: {
			listing: '='
		},
		templateUrl: 'js/directives/drawing.html'
	};
});