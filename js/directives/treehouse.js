app.directive('treehouse', function(){
	return {
		restrict: 'E',
		scope: {
			info: '=',
			badges: "="
		},
		templateUrl: 'js/directives/treehouse.html'
	};
});