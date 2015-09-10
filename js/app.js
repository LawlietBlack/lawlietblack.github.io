var app = angular.module("projectsApp", ['ngRoute', 'ngSanitize']);

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
	}).when('/campernews', {
		controller: 'CamperNewsController',
		templateUrl:'views/camper-news.html'
	}).when('/wikisearch', {
		controller: 'WikiSearchController',
		templateUrl: 'views/wiki-search.html'
	}).when('/calculator', {
    controller: 'CalculatorController',
    templateUrl: 'views/calculator.html'
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

app.controller('CamperNewsController', ['$scope', 'news', function($scope, news) {
  $scope.news = [];
  news.success(function(data) {
    $scope.news = data;    
  });
}]);
app.factory('news', ['$http', function($http) {
  return $http.get('http://www.freecodecamp.com/news/hot?callback=JSON_CALLBACK?')
  .success(function(data) {
    return data;
  })
  .error(function(err) {
    return err;
  });
}]);

app.directive('camperStory', function() {
  return {
    restrict: 'E',
    scope: {
      story: '='
    },
    template: '<div class="story" ng-click="newsRedirect(story.link)"><div class="image-container" style="background: #666 url(\'{{story.image}}\') no-repeat center; background-size: cover"><img ng-src="{{story.author.picture}}" alt="" class="avatar-img"></div><h4 class="headline">{{story.headline}}</h4><div class="upvotes text-center"><p>+&nbsp;{{story.upVotes.length}}</p></div></div>',
    controller: function($scope) {
      if($scope.story.image.indexOf('http') < 0) {
        $scope.story.image = "https://pbs.twimg.com/profile_images/562385977390272512/AK29YaTf_reasonably_small.png";
      }
      $scope.newsRedirect = function(url) {
        window.location.href = url;
      }
    },
    link: function($scope, $element, $attrs) {
      $element.hover(function() {
        $element.addClass('animated pulse');
      }, function() {
        window.setTimeout( function(){
          $element.removeClass('animated pulse');
          }, 1000); 
      })
    }
  }
});

app.controller('WikiSearchController', ['$scope', 'wiki', function($scope, wiki ) {
    $scope.search = "";
    $scope.searchScope = this;
    $scope.pages = [];
    $scope.random = {};
    $scope.getWiki = function(query) {
      wiki.get(query).success(function(data) {
        $scope.pages = data.query.search;
        console.log($scope.pages)
      }).error(function(err) {
        console.log(err, err.message);
      })
    }
    $scope.$on('search-update', function(event, data) {
      $scope.search = data;
      $scope.getWiki(data);
    });
    $scope.random = function() {
      wiki.random().success(function(data) {
        $scope.random = data.query.random[0];
        var url = 'https://en.wikipedia.org/wiki/' + $scope.random.title;
        window.location.href = url;
      }).error(function(err) {
        console.log(err, err.message);
      })
    }
}]);


app.factory('wiki', ['$http', function($http) {
  return {
    get: function(query) {
      return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + encodeURI(query) + '&format=json&callback=JSON_CALLBACK')
      .success(function(data) {
        console.log(data)
        return data;
      })
      .error(function(err) {
        return err;
      });
    },
    random: function() {
      return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=random&rnlimit=10&rnnamespace=0&format=json&callback=JSON_CALLBACK')
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
    }
  }
}]);

app.directive('wikiStory', function() {
  return {
    restrict: 'E',
    scope: { page: '='},
    template: '<div class="page" ng-click="redirect(page.title)">  <h3>{{page.title}}</h3><p ng-bind-html="page.snippet"></p></div>',
    link: function($scope, $element, $attrs) {
      $scope.redirect = function(title) {
          var url = 'https://en.wikipedia.org/wiki/' + title
          window.location.href = url;
      };
    }
  }
});
app.directive('wikiAutocomplete', ['wiki', function(wiki) {
    return {
      restrict: 'A',
      scope: { info: '=' },
      require: 'ngModel', 
      link: function($scope, $element, $attrs) {
        $element.autocomplete({
          minLength: 2,
          source: function(request, response) {
            $.ajax({
              url: "http://en.wikipedia.org/w/api.php",
              dataType: "jsonp",
              data: {
                'action': "opensearch",
                'format': "json",
                'search': request.term
              },
              success: function(data) {
                response(data[1]);
                console.log(data)
              }
            });
          },
          select: function(event, ui) {
            $scope.$emit('search-update', ui.item.value);
          }
        }).appendTo('#search');
      }
    }
}]);

app.controller('CalculatorController', ['$scope', function($scope) {
  $scope.output = "";
  $scope.running = "";
  $scope.staged = false;
  $scope.evaluated = false;
  
  $scope.numClick = function(num) {
    $scope.evalCheck();
    $scope.clearCheck();
    $scope.output += num;
  };
  //
  $scope.decimalClick = function() {
    $scope.evalCheck();
    $scope.clearCheck();
    if($scope.output.indexOf(".") < 0 ) {
      $scope.zeroCheck();
      $scope.output += ".";

    }
  };
  //main function for + - / % * buttons. Staged variable tracks if the last button press was another operand
  $scope.mathClick = function(eval) {
    if($scope.staged) {
      $scope.running = $scope.running.slice(0,$scope.running.length-1) + eval;
    } else {
      $scope.zeroCheck();
      $scope.running += $scope.output + eval;
    }
    $scope.staged = true;
    $scope.evaluated = false;
  };

  //main evaluate function. checks for an empty input, evaluates the running total with the output, resets the running total, and sets evaluated to true and staged to false;
  $scope.evaluate = function() {
    if($scope.output === "") {
      return
    }
    $scope.output = math.eval($scope.running += $scope.output).toString();
    $scope.running = "";
    $scope.evaluated = true;
    $scope.staged = false;
  }
  $scope.clearEntry = function() {
    $scope.output = "";
    $scope.staged = true;
  };
  $scope.clearAll = function() {
    $scope.output = "";
    $scope.staged = false;
    $scope.running = "";
    $scope.evaluated = false;
  };
  //checks to see if the last button pressed was a math operator, and if so, clears and resets the boolean
  $scope.clearCheck = function() {
    if($scope.staged) {
      $scope.output = "";
      $scope.staged = false;
    }
  };
  //checks for an empty string and adds zero as appropriate
  $scope.zeroCheck = function() {
    if($scope.output === ""|| $scope.output.substr(-1) === ".") {
      $scope.output += "0"
    }
  };
  // checks if the output is a result of evaluation, and if so, clears before adding num
  $scope.evalCheck = function() {
    if($scope.evaluated) {
      $scope.clearAll();
      $scope.evaluated = false;
    }
  }
}]);