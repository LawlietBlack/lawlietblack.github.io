angular.module('PortfolioApp', ['ngRoute'])

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
      skills: ['AngularJS', 'JavaScript', 'jQuery', 'AJAX', 'Nodejs', 'Expressjs', 'HTML5', 'CSS3'],
      description: 'A website guide for Persona 4 Golden. I initially built this app using a node.js back end with express and swig, but down the line I realized that it would run much faster as an AngularJS single page application. The fullstack JavaScript version is saved as the \'node\' branch.',
      github: 'https://github.com/LawlietBlack/Persona-4-Golden-Guide',
      link: 'http://persona.lawlietblack.com'
    }, {
      title: 'Magic: the Gathering Deckbuilder',
      img: 'img/projects/mtg.png',
      skills: ['AngularJS', 'Nodejs', 'Expressjs', 'RESTApi', 'MongoDB', 'Yeoman', 'Jasmine', 'TDD', 'HTML5', 'CSS3', 'JavaScript', 'AJAX'],
      description: 'Magic: the Gathering Deckbuilder that I built using MEAN stack.',
      github: 'https://github.com/LawlietBlack/magic-deckbuilder',
      link: 'http://magic-lawlietblack.herokuapp.com'
    }, {
      title: 'Pokedex',
      img: 'img/projects/pokemon.png',
      skills: ['AngularJS', 'JavaScript', 'AJAX', 'Jasmine', 'TDD', 'Sass', 'Bourbon', 'Responsive', 'HTML5'],
      description: 'Pokedex site with a working IV calculator. Built using AngularJS, Sass, Bourbon, and PokeApi.',
      github: 'https://github.com/LawlietBlack/pokedex',
      link: 'http://pokedex.lawlietblack.com'
    }, {
      title: 'Civilization 5 Leaders Guide',
      img: 'img/projects/civ5.png',
      skills: ['AngularJS','jQuery', 'JavaScript', 'HTML5', 'CSS3', 'Responsive', 'Bootstrap'],
      description: 'A Reference Page for Civilization V with all of the available leaders in the base game and DLCs that shows each leader\'s unique ability, units, and buildings.',
      github: 'https://github.com/LawlietBlack/civ-leaders',
      link: 'http://git.lawlietblack.com/civ/index.html'
    }, {
      title: 'Dungeon Game',
      img: 'img/projects/roguelike.png',
      skills: ['ReactJS', 'JavaScript', 'Gulp', 'JSX', 'Babel', 'Sass', 'HTML5'],
      description: 'Roguelike dungeon game. Players can explore the dungeon, find gear, fight monsters, gain experience, and level up. Defeat the boss to win. Hosted on CodePen.',
      github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-15',
      link: 'http://codepen.io/LawlietBlack/full/JGBazL'
    }, {
      title: 'Fallout Terminal Game',
      img: 'img/projects/fallout.png',
      skills: ['AngularJS', 'JavaScript', 'jQuery', 'HTML5', 'CSS3'],
      description: 'Recreation of the hacking minigame in Fallout 4. Hosted on Codepen.',
      github: 'https://github.com/LawlietBlack/fallout-terminal',
      link: 'http://codepen.io/LawlietBlack/full/eJOZjN'
    }, {
      title: 'Exoplanet Heat Map',
      img: 'img/projects/exoplanets.png',
      skills: ['AngularJS', 'JavaScript', 'd3js', 'AJAX', 'HTML5', 'Sass'],
      description: 'D3.js heat map comparing exoplanet radius, mass, and distance from Earth.',
      github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-18',
      link: 'http://codepen.io/LawlietBlack/full/wMEbBV/'
    }, {
      title: 'Conway\'s Game of Life',
      img: 'img/projects/life.png',
      skills: ['ReactJS', 'JavaScript', 'Sass', 'HTML5'],
      description: 'Conway\'s game of life with grid size, generation speed, pause/play, and randomize functionality. Hosted on Codepen.',
      github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-14',
      link: 'http://codepen.io/LawlietBlack/full/oboRwo/'
    }, {
      title: 'Camper News Force Map',
      img: 'img/projects/camperforce.png',
      skills: ['AngularJS', 'JavaScript', 'd3js', 'AJAX', 'HTML5', 'Sass'],
      description: 'FreeCodeCamp\'s news feed visualized using a d3 force map. Hosted on Codepen.',
      github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-19',
      link: 'http://codepen.io/LawlietBlack/full/YwJebb/'
    }, {
      title: 'US Gross National Product',
      img: 'img/projects/usgnp.png',
      skills: ['AngularJS', 'JavaScript', 'd3js', 'AJAX', 'HTML5', 'Sass'],
      description: 'D3.js chart of the United States Gross National Product from 1947 to present. Hosted on Codepen',
      github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-16',
      link: 'http://codepen.io/LawlietBlack/full/bExgVR/'
    }, {
      title: 'Recipe Box',
      img: 'img/projects/recipebox.png',
      skills: ['ReactJS', 'JavaScript', 'Sass', 'Responsive', 'HTML5'],
      description: 'Recipe box made with ReactJS and Sass. Recipes are saved locally using localStorage. Supports recipe creation, deleting, and editing. Hosted on Codepen.',
      github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-13',
      link: 'http://codepen.io/LawlietBlack/full/gPgqGR'
    }, {
      title: 'Vote',
      img: 'img/projects/vote.png',
      skills: [ 'AngularJS', 'Nodejs','Expressjs', 'JavaScript', 'MongoDB', 'RESTApi', 'Yeoman', 'oAuth',  'HTML5', 'AJAX', 'CSS3', 'Bootstrap'],
      description: 'Voting app built using MEAN stack and oAuth that allows users to login, create polls, and share them with others.',
      github: 'https://github.com/LawlietBlack/vote',
      link: 'http://vote-lawlietblack.herokuapp.com'
    }, {
      title: 'Markdown Preview',
      img: 'img/projects/markdown.png',
      skills: ['ReactJS', 'JavaScript', 'Sass', 'HTML5'],
      description: 'Markdown preview app built with ReactJS and Sass. Hosted on Codepen.',
      github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-11',
      link: 'http://codepen.io/LawlietBlack/full/vLgmdm'
    }, {
      title: 'FreeCodeCamp Leaderboard',
      img: 'img/projects/fccleaders.png',
      skills: ['ReactJS', 'JavaScript', 'AJAX', 'Sass', 'HTML5', 'Responsive'],
      description: 'Leaderboard for FreeCodeCamp.com created with ReactJS and Sass. Utilizes an api endpoint made by a fellow student. Hosted on Codepen.',
      github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-12',
      link: 'http://codepen.io/LawlietBlack/full/rxjZEq'
    }, {
      title: 'Stocks',
      img: 'img/projects/stocks.png',
      skills: [ 'AngularJS', 'Nodejs', 'd3js', 'Expressjs', 'MongoDB', 'RESTApi', 'Socketio', 'Yeoman', 'HTML5', 'AJAX', 'CSS3', 'Bootstrap', 'JavaScript'],
      description: 'Single Page App that charts the stock market using data from the Markit on demand Market Data API. Chart updates for all users in real time whenever a stock is added or removed.',
      github: 'https://github.com/LawlietBlack/stocks',
      link: 'http://stocks-lawlietblack.herokuapp.com'
    }, {
      title: 'Nightlife Coordinator',
      img: 'img/projects/nightlife.png',
      skills: ['AngularJS', 'Nodejs', 'JavaScript', 'Expressjs', 'MongoDB', 'RESTApi', 'Yeoman', 'oAuth', 'HTML5', 'AJAX', 'CSS3', 'Bootstrap'],
      description: 'Single Page App that allows the user to search for local bars or restraunts and shows locations and ratings using the Yelp API. Users can then mark where they are going that night so they can coordinate with their friends.',
      github: 'https://github.com/LawlietBlack/nightlife',
      link: 'http://nightlife-lawlietblack.herokuapp.com'
    }, {
      title: 'Book Trade',
      img: 'img/projects/booktrade.png',
      skills: ['AngularJS', 'Nodejs', 'JavaScript', 'Expressjs', 'MongoDB', 'RESTApi', 'Yeoman', 'oAuth', 'HTML5', 'AJAX', 'CSS3', 'Bootstrap'],
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
      skills: ['AngularJS', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap'],
      description: 'Tic Tac Toe, recreated in HTML5 and JavaScript. Player win is impossible. Hosted on Codepen.',
      github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-09',
      link: 'http://codepen.io/LawlietBlack/full/pjjLee'
    }, {
      title: 'Simon',
      img: 'img/projects/simon.png',
      skills: ['AngularJS', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap'],
      description: 'Simon game recreated in HTML and JavaScript. Supports normal and Strict mode, increases tempo at turn 5, 9, and 13. Player win at turn 20. Hosted on Codepen.',
      github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-10',
      link: 'http://codepen.io/LawlietBlack/full/RWWzLz'
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
    $scope.skillList = ["AngularJS", "JavaScript", "jQuery", "Nodejs", "Expressjs", "ReactJS", "d3js", "AJAX", "Gulp", "JSX", "MongoDB", "Yeoman", "oAuth", "Jasmine", "TDD", "RESTApi", "Babel", "HTML5", "CSS3", "Bootstrap", "Sass", "Responsive", "Bourbon"];
    for(var i=0; i<skillsData.length; i++) {
      if($scope.skills[skillsData[i]] === undefined) {
        $scope.skills[skillsData[i]] = 1;
      } else {
        $scope.skills[skillsData[i]] += 1;
      }
    }
    $scope.filterSkills = function(skill) {
      $scope.portfolio.filter(function(card, index) {
        if(skill === 'all') {
          $('portfolio-card').slideDown()
        } else if(card.skills.indexOf(skill) < 0) {
          $('portfolio-card').eq(index).hide()
        } else {
          $('portfolio-card').eq(index).slideDown()
        }
        return true;
      });
    };
    $scope.$on('skillfilter', function(event, skill) {
      $scope.filterSkills(skill);
    });
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
      $scope.filterSkills = function(skill) {
        $scope.$emit('skillfilter', skill);
      }
    }
  }
})