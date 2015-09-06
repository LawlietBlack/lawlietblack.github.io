var app = angular.module("projectsApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'ProjectController', 
		templateUrl: 'views/home.html'
	}).when('/dice', {
		controller: 'ProjectController', 
		template: '<dice class="app"></dice>'
	}).when('/draw', {
		controller: 'ProjectController', 
		template: '<drawing class="app"></drawing>'
	}).when('/flickr', {
		controller: 'ProjectController', 
		template: '<flickr class="app"></flickr>'
	}).when('/quotes', {
		controller: 'ProjectController',
		templateUrl: 'views/quotes.html'
	}).when('/weather', {
		controller: 'ProjectController',
		templateUrl: 'views/weather.html'
	}).when('/pomodoro', {
		controller: 'ProjectController',
		templateUrl: 'views/pomodoro.html'
	}).when('/twitch', {
		controller: 'ProjectController',
		templateUrl: 'views/twitch.html'
	})
}]);

app.directive('dice', function(){
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'views/dice.html'
	};
});

app.directive('drawing', function(){
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'views/drawing.html'
	};
});
app.directive('flickr', function(){
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'views/flickr.html'
	};
});

app.directive('treehouse', function(){
	return {
		restrict: 'E',
		scope: {
			info: '=',
			badges: "="
		},
		templateUrl: 'views/treehouse.html'
	};
});

app.controller('ProjectController', ['$scope', '$routeParams', function($scope, $routeParams) {
}]);