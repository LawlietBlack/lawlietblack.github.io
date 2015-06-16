app.directive('flickr', function(){
	return {
		restrict: 'E',
		scope: {
			listing: '='
		},
		templateUrl: 'js/directives/flickr.html'
	};
});