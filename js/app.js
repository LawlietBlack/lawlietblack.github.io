angular.module('PortfolioApp', ['ngRoute', 'ngSanitize'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'MainController',
		templateUrl: 'views/portfolio.html'
	}).when('/apps', {
		controller: 'MainController', 
		templateUrl: 'views/apps.html'
	}).when('/updates', {
		controller: 'MainController', 
		templateUrl: 'views/updates.html'
	}).when('/about', {
		controller: 'MainController',
		templateUrl: 'views/about.html'
	});
}])

.controller('MainController', ['$scope', function($scope) {
	$scope.portfolio = [{
      title: 'Persona 4 Golden Guide',
      img: 'img/projects/persona.png',
      skills: ['AngularJS', 'jQuery', 'JavaScript', 'HTML5', 'CSS3', 'Photoshop', 'Nodejs'],
      description: 'A website guide for Persona 4 Golden. I initially built this app using a node.js back end with express and swig, but down the line I realized that it would run much faster as an AngularJS single page application. The fullstack JavaScript version is saved as the \'node\' branch.',
      github: 'https://github.com/LawlietBlack/Persona-4-Golden-Guide',
      link: 'http://persona.lawlietblack.com'
    }, {
      title: 'Magic: the Gathering Deckbuilder',
      img: 'img/projects/mtg.png',
      skills: ['MongoDB', 'Expressjs', 'AngularJS', 'Nodejs', 'HTML5', 'CSS3', 'Yeoman', 'TDD'],
      description: 'Magic: the Gathering Deckbuilder that I built using MEAN stack.',
      github: 'https://github.com/LawlietBlack/magic-deckbuilder',
      link: 'http://magic-lawlietblack.herokuapp.com'
    }, {
      title: 'Civilization 5 Leaders Guide',
      img: 'img/projects/civ5.png',
      skills: [ 'JavaScript', 'jQuery', 'AngularJS','HTML5', 'CSS3', 'Responsive', 'Bootstrap'],
      description: 'A Reference Page for Civilization V with all of the available leaders in the base game and DLCs that shows each leader\'s unique ability, units, and buildings.',
      github: 'https://github.com/LawlietBlack/civ-leaders',
      link: 'http://git.lawlietblack.com/civ/index.html'
    }, {
      title: 'Vote',
      img: 'img/projects/vote.png',
      skills: [ 'AngularJS', 'MongoDB', 'Nodejs', 'Yeoman','JavaScript', 'oAuth', 'Expressjs', 'HTML5'],
      description: 'Voting app built using MEAN stack and oAuth that allows users to login, create polls, and share them with others.',
      github: 'https://github.com/LawlietBlack/vote',
      link: 'http://vote-lawlietblack.herokuapp.com'
    }, {
      title: 'Stocks',
      img: 'img/projects/stocks.png',
      skills: [ 'AngularJS', 'MongoDB', 'Nodejs', 'Yeoman','JavaScript', 'd3js', 'Expressjs', 'HTML5'],
      description: 'Single Page App that charts the stock market using data from the Markit on demand Market Data API. Chart updates for all users in real time whenever a stock is added or removed.',
      github: 'https://github.com/LawlietBlack/stocks',
      link: 'http://stocks-lawlietblack.herokuapp.com'
    }, {
      title: 'Nightlife Coordinator',
      img: 'img/projects/nightlife.png',
      skills: [ 'AngularJS', 'MongoDB', 'Nodejs', 'Yeoman','JavaScript', 'oAuth', 'Expressjs', 'HTML5'],
      description: 'Single Page App that allows the user to search for local bars or restraunts and shows locations and ratings using the Yelp API. Users can then mark where they are going that night so they can coordinate with their friends.',
      github: 'https://github.com/LawlietBlack/nightlife',
      link: 'http://nightlife-lawlietblack.herokuapp.com'
    }, {
      title: 'Book Trade',
      img: 'img/projects/booktrade.png',
      skills: ['AngularJS', 'MongoDB', 'Nodejs', 'Yeoman','JavaScript', 'oAuth', 'Expressjs', 'HTML5'],
      description: 'Prototype Book Trading site for a local club. Uses the Google Books API and a RESTful API to allow users to search, select, and trade books. Upon successful trade, enables contact info trading (limited). ',
      github: 'https://github.com/LawlietBlack/books',
      link: 'http://books-lawlietblack.herokuapp.com'
    }, {
      title: 'Pomodoro Timer',
      img: 'img/projects/pomodoro.png',
      skills: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap'],
      description: 'Pomodoro productivity timer. Alternates between adjustable work and break intervals to maximize productivity and creativity. Background fills as timer progresses. Hosted on Codepen.',
      github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-04',
      link: 'http://codepen.io/LawlietBlack/full/QjwLrd'
    }, {
      title: 'JavaScript Calculator',
      img: 'img/projects/calculator.png',
      skills: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap'],
      description: 'Basic calculator built using JavaScript. Add, Subtract, Divide, Multiply, and Modulo operations supported. Shows current equation string above like a scientific calculator. Hosted on Codepen.',
      github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-08',
      link: 'http://codepen.io/LawlietBlack/full/qOOdPV/'
    }, {
      title: 'Tic Tac Toe',
      img: 'img/projects/tictactoe.png',
      skills: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap'],
      description: 'Tic Tac Toe, recreated in HTML5 and JavaScript. Player win is impossible. Hosted on Codepen.',
      github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-09',
      link: 'http://codepen.io/LawlietBlack/full/pjjLee'
    }, {
      title: 'Simon',
      img: 'img/projects/simon.png',
      skills: ['JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap'],
      description: 'Simon game recreated in HTML and JavaScript. Supports normal and Strict mode, increases tempo at turn 5, 9, and 13. Player win at turn 20. Hosted on Codepen.',
      github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-10',
      link: 'http://codepen.io/LawlietBlack/full/RWWzLz'
    }, {
      title: 'Markdown Preview',
      img: 'img/projects/markdown.png',
      skills: ['ReactJS', 'Sass', 'HTML5', 'JavaScript'],
      description: 'Markdown preview app built with ReactJS and Sass. Hosted on Codepen.',
      github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-11',
      link: 'http://codepen.io/LawlietBlack/full/vLgmdm'
    }, {
      title: 'FreeCodeCamp Leaderboard',
      img: 'img/projects/fccleaders.png',
      skills: ['ReactJS', 'Sass', 'HTML5', 'JavaScript', 'AJAX', 'Responsive'],
      description: 'Leaderboard for FreeCodeCamp.com created with ReactJS and Sass. Utilizes an api endpoint made by a fellow student. Hosted on Codepen.',
      github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-12',
      link: 'http://codepen.io/LawlietBlack/full/rxjZEq'
    }, {
      title: 'Recipe Box',
      img: 'img/projects/recipebox.png',
      skills: ['ReactJS', 'Sass', 'HTML5', 'JavaScript'],
      description: 'Recipe box made with ReactJS and Sass. Recipes are saved locally using localStorage. Supports recipe creation, deleting, and editing. Hosted on Codepen.',
      github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-13',
      link: 'http://codepen.io/LawlietBlack/full/gPgqGR'
    }]

    // }, {
    //   title: '',
    //   img: '',
    //   skills: [],
    //   description: '',
    //   github: '',
    //   link: ''


    $scope.active = $scope.portfolio
    $scope.skills = {}
    var skillsData = $scope.portfolio.map(function(item) {
      return item.skills;
    }).reduce(function(a, b) {
      return a.concat(b);
    });
    for(var i=0; i<skillsData.length; i++) {
      if($scope.skills[skillsData[i]] === undefined) {
        $scope.skills[skillsData[i]] = 1;
      } else {
        $scope.skills[skillsData[i]] += 1;
      }
    }
    $scope.filterSkills = function(skill) {
      $scope.portfolio.filter(function(card, index) {
        if(card.skills.indexOf(skill) < 0) {
          $('portfolio-card').eq(index).hide()
        } else {
          $('portfolio-card').eq(index).show()
        }
        return true;
      })
      
    }
}])


.directive('portfolioCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/portfolio-card.html',
    scope: {
      card: '='
    },
    link: function($scope, $element, $attrs) {
      $scope.link = function(linkurl) {
        window.location.assign(linkurl)
      }
    }
  }
})