app.directive('dice', function(){
	return {
		restrict: 'E',
		scope: {
			listing: '='
		},
		templateUrl: 'js/directives/dice.html'
	};
});