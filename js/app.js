angular.module('PortfolioApp', ['ngRoute', 'ngSanitize'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'MainController',
		templateUrl: 'views/portfolio.html'
	}).when('/apps', {
		controller: 'ProjectController', 
		templateUrl: 'views/apps.html'
	}).when('/updates', {
		controller: 'ProjectController', 
		templateUrl: 'views/updates.html'
	}).when('/about', {
		controller: 'MainController',
		templateUrl: 'views/about.html'
	}).when('/apps/dice', {
		controller: 'ProjectController', 
		template: '<div class="container-fluid" id="projects"><apps-nav></apps-nav><dice class="app"></dice></div>'
	}).when('/apps/draw', {
		controller: 'ProjectController', 
		template: '<div class="container-fluid" id="projects"><apps-nav></apps-nav><drawing class="app"></drawing></div>'
	}).when('/apps/flickr', {
		controller: 'ProjectController', 
		template: '<div class="container-fluid" id="projects"><apps-nav></apps-nav><flickr class="app"></flickr></div>'
	}).when('/apps/quotes', {
		controller: 'ProjectController',
		templateUrl: 'views/apps/quotes.html'
	}).when('/apps/weather', {
		controller: 'ProjectController',
		templateUrl: 'views/apps/weather.html'
	}).when('/apps/pomodoro', {
		controller: 'ProjectController',
		templateUrl: 'views/apps/pomodoro.html'
	}).when('/apps/twitch', {
		controller: 'ProjectController',
		templateUrl: 'views/apps/twitch.html'
	}).when('/apps/campernews', {
		controller: 'CamperNewsController',
		templateUrl:'views/apps/camper-news.html'
	}).when('/apps/wikisearch', {
		controller: 'WikiSearchController',
		templateUrl: 'views/apps/wiki-search.html'
	}).when('/apps/calculator', {
    controller: 'CalculatorController',
    templateUrl: 'views/apps/calculator.html'
  }).when('/apps/tictactoe', {
    controller: 'ProjectController',
    templateUrl: 'views/apps/t3.html'
  });
}])

.controller('MainController', ['$scope', function($scope) {
	
}])
.directive('appsNav', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/apps/apps-nav.html'
  };
})

.directive('dice', function(){
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'views/apps/dice.html'
	};
})

.directive('drawing', function(){
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'views/apps/drawing.html'
	};
})

.directive('flickr', function(){
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'views/apps/flickr.html'
	};
})

.directive('treehouse', function(){
	return {
		restrict: 'E',
		scope: {
			info: '=',
			badges: "="
		},
		templateUrl: 'views/apps/treehouse.html'
	};
})

.controller('ProjectController', ['$scope', '$routeParams', function($scope, $routeParams) {
}])

.controller('CamperNewsController', ['$scope', 'news', function($scope, news) {
  $scope.news = [];
  news.success(function(data) {
    $scope.news = data;    
  });
}])

.factory('news', ['$http', function($http) {
  return $http.get('http://www.freecodecamp.com/news/hot?callback=JSON_CALLBACK?')
  .success(function(data) {
    return data;
  })
  .error(function(err) {
    return err;
  });
}])

.directive('camperStory', function() {
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
      };
    },
    link: function($scope, $element, $attrs) {
      $element.hover(function() {
        $element.addClass('animated pulse');
      }, function() {
        window.setTimeout( function(){
          $element.removeClass('animated pulse');
          }, 1000); 
      });
    }
  };
})

.controller('WikiSearchController', ['$scope', 'wiki', function($scope, wiki ) {
    $scope.search = "";
    $scope.searchScope = this;
    $scope.pages = [];
    $scope.random = {};
    $scope.getWiki = function(query) {
      wiki.get(query).success(function(data) {
        $scope.pages = data.query.search;
        console.log($scope.pages);
      }).error(function(err) {
        console.log(err, err.message);
      });
    };
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
      });
    };
}])


.factory('wiki', ['$http', function($http) {
  return {
    get: function(query) {
      return $http.jsonp('https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=' + encodeURI(query) + '&format=json&callback=JSON_CALLBACK')
      .success(function(data) {
        console.log(data);
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
  };
}])

.directive('wikiStory', function() {
  return {
    restrict: 'E',
    scope: { page: '='},
    template: '<div class="page" ng-click="redirect(page.title)">  <h3>{{page.title}}</h3><p ng-bind-html="page.snippet"></p></div>',
    link: function($scope, $element, $attrs) {
      $scope.redirect = function(title) {
          var url = 'https://en.wikipedia.org/wiki/' + title;
          window.location.href = url;
      };
    }
  };
})

.directive('wikiAutocomplete', ['wiki', function(wiki) {
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
                console.log(data);
              }
            });
          },
          select: function(event, ui) {
            $scope.$emit('search-update', ui.item.value);
          }
        }).appendTo('#search');
      }
    };
}])

.controller('CalculatorController', ['$scope', function($scope) {
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
  $scope.mathClick = function(operation) {
    if($scope.staged) {
      $scope.running = $scope.running.slice(0,$scope.running.length-1) + operation;
    } else {
      $scope.zeroCheck();
      $scope.running += $scope.output + operation;
    }
    $scope.staged = true;
    $scope.evaluated = false;
  };

  //main evaluate function. checks for an empty input, evaluates the running total with the output, resets the running total, and sets evaluated to true and staged to false;
  $scope.evaluate = function() {
    if($scope.output === "") {
      return;
    }
    $scope.output = math.eval($scope.running += $scope.output).toString();
    $scope.running = "";
    $scope.evaluated = true;
    $scope.staged = false;
  };
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
      $scope.output += "0";
    }
  };
  // checks if the output is a result of evaluation, and if so, clears before adding num
  $scope.evalCheck = function() {
    if($scope.evaluated) {
      $scope.clearAll();
      $scope.evaluated = false;
    }
  };
}])

.directive('ticTacToe', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/apps/tictactoe.html',
    controller: ['$scope', function($scope) {
      $scope.winCon = [
        ["t1","t3","t2"],
        ["t5","t4","t6"],
        ["t7","t9","t8"],
        ["t1","t7","t4"],
        ["t5","t2","t8"],
        ["t3","t9","t6"],
        ["t5","t1","t9"],
        ["t5","t3","t7"]
      ];
      $scope.player = {
        symbol: "X",
        color: "green",
      };
      $scope.computer = {
        symbol: "O",
        color: "red"
      };
      $scope.score = function() {
        var scores = $scope.winCon.map(function(win) {
          var threatLevel = 0;
          for(var i=0;i<win.length;i++) {
            if($scope.board[win[i]] === $scope.player.symbol) {
              threatLevel += 1;
            } else if($scope.board[win[i]] === $scope.computer.symbol) {
              threatLevel -=2;
            }
          }
          return threatLevel;
        });
        console.log("scores:", scores);
        return scores;
      };
      $scope.playerMove = function(tile) {
        if($scope.board[tile] !== "" || $scope.gameOver) { return; }
        $scope.score();
        $scope.board[tile] = $scope.player.symbol;
        console.log("player chooses ", tile);
        $('#' + tile).html('<span style="color:' + $scope.player.color + '">' + $scope.player.symbol + '</span>');
        $scope.turn += 1;
        $scope.winCheck();
        if($scope.turn < 9) {
          $scope.compTurn();
        }
      };
      $scope.compTurn = function() {
        var tiles = ["t1","t2","t3","t4","t5","t6","t7","t8","t9"];
        var available = tiles.filter(function(tile) {return $scope.board[tile] === "";});
        var scores = $scope.score();
        var tile;
        if(available.indexOf("t5") > 0) {
          console.log("t5 gate");
          tile = "t5";
        } else if(scores.indexOf(-4) >= 0) {
          console.log("win gate");
          tile = $scope.winCon[scores.indexOf(-4)].filter(function(tile) {return $scope.board[tile] === "";});
        } else if(scores.indexOf(2) >= 0) {
          console.log("block gate");
          tile = $scope.winCon[scores.indexOf(2)].filter(function(tile) {return $scope.board[tile] === "";});
        } else if(scores.indexOf(-2) >=0) {
          console.log("progress gate");
          tile = $scope.winCon[scores.indexOf(-2)].filter(function(tile) {return $scope.board[tile] === "";})[0];
        } else if(available.indexOf("t7") >= 0) {
          console.log("t7 gate");
          tile = "t7";
        } else {
          console.log("random gate");
          tile = available[Math.floor(Math.random()*available.length)];
        }
        $scope.compPick(tile);
      };
      $scope.compPick = function(tile) {
        console.log("Computer chooses " + tile);
        $('#' + tile).html('<span style="color:' + $scope.computer.color + '">' + $scope.computer.symbol + '</span>');
        $scope.board[tile] = $scope.computer.symbol;
        $scope.turn +=1;
        $scope.winCheck();
      };
      $scope.winCheck = function() {
        var timeout;
        var board = $scope.board;
        for(var i=0;i<$scope.winCon.length;i++) {
          var win = $scope.winCon[i];
          if(board[win[0]] !== "" && board[win[0]] === board[win[1]] && board[win[1]]  === board[win[2]]) {
            var winnerSymbol = board[win[0]];
            if($scope.player.symbol === winnerSymbol) {
              $('#winnerBoard').html("Player Wins!");
              timeout = window.setTimeout($scope.reset, 2000);
              $scope.gameOver = true;
              return "Player Wins!";
            } else {
              $('#winnerBoard').html("Computer Wins!");
              timeout = window.setTimeout($scope.reset, 2000);
              $scope.gameOver = true;
              return "Computer Wins!";
            }
          } 
        }
        if($scope.turn === 9) {
          $('#winnerBoard').html("Game Tie!");
          timeout = window.setTimeout($scope.reset, 2000);
          $scope.gameOver = true;
          return "Game Tie!";
        }
      };
      $scope.reset = function() {
        $scope.board = { t1:"", t2:"", t3:"", t4:"", t5:"", t6:"", t7:"", t8:"", t9:""};
        $scope.turn = 0;
        $scope.gameOver = false;
        $('.tile').html("");
        $('#winnerBoard').html("");
        var coinflip = Math.floor(Math.random()*2);
        if(coinflip) {
          $scope.compTurn();
        }
      };
      $scope.changeSide = function(symbol) {      
        if(symbol === "X") {
          $scope.player.symbol = "X";
          $scope.computer.symbol = "O";
          $('#pickX').hide();
          $('#pickO').show();
        } else {
          $scope.player.symbol = "O";
          $scope.computer.symbol = "X";
          $('#pickO').hide();
          $('#pickX').show();
        }
        $scope.reset();
      };

      $('#pickX').hide();
      $scope.reset();
    }]
  };
});