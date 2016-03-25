angular.module('PortfolioApp', ['ngRoute', 'ngSanitize'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'MainController',
    templateUrl: 'views/portfolio.html'
  }).when('/algorithms', {
    controller: 'MainController',
    templateUrl: 'views/code.html'
  }).when('/logs', {
    controller: 'LogController', 
    templateUrl: 'views/logs.html'
  }).when('/resume', {
    controller: 'MainController', 
    templateUrl: 'views/resume.html'
  }).when('/about', {
    controller: 'MainController',
    templateUrl: 'views/about.html'
  });
}])

.controller('MainController', ['$scope', '$location', function($scope, $location) {
  $('paper-tabs').prop('selected', function() {
    var pages = ['/', '/algorithms', '/logs', '/resume', '/about'];
    console.log(pages.indexOf($location.path()))
    return pages.indexOf($location.path());
  });
  $scope.portfolio = [{
    title: 'Persona 4 Golden Guide',
    img: 'img/projects/persona.png',
    skills: ['AngularJS', 'JavaScript', 'jQuery', 'AJAX', 'Nodejs', 'Expressjs', 'HTML5', 'CSS3'],
    description: 'A website guide for Persona 4 Golden. I initially built this app using a node.js back end with express and Swig, but down the line, I realized that it would run much faster as an AngularJS single page application. The full-stack JavaScript version is saved as the \'node\' branch.',
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
    title: 'DEFINITELY Real Quotes',
    img: 'img/projects/quotes.png',
    skills: ['AngularJS', 'Nodejs', 'Expressjs', 'RESTApi', 'oAuth', 'MongoDB', 'Yeoman', 'HTML5', 'Sass', 'Bourbon', 'JavaScript', 'AJAX'],
    description: 'Fake quote sharing site inspired by John Oliver’s segment on misappropriated quotes.',
    github: 'https://github.com/LawlietBlack/real-quotes',
    link: 'https://definitely-real-quotes.herokuapp.com/'
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
    title: 'Meteor Strike Map',
    img: 'img/projects/meteors.png',
    skills: ['AngularJS', 'JavaScript', 'd3js', 'AJAX', 'HTML5', 'Sass'],
    description: 'D3.js map showing meteor impact sites. The relative size of the point corresponds to the mass of the meteor and the color of the point represents the meteor class.',
    github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-20',
    link: 'http://codepen.io/LawlietBlack/full/VeRjXG/'
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
    description: 'Recipe box made with ReactJS and Sass. Recipes are saved locally using localStorage. Supports recipe creation, deletion, and editing. Hosted on Codepen.',
    github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-13',
    link: 'http://codepen.io/LawlietBlack/full/gPgqGR'
    }, {
    title: 'Vote',
    img: 'img/projects/vote.png',
    skills: [ 'AngularJS', 'Nodejs','Expressjs', 'JavaScript', 'MongoDB', 'RESTApi', 'Yeoman', 'oAuth',  'HTML5', 'AJAX', 'CSS3', 'Bootstrap'],
    description: 'Voting app built using MEAN stack and oAuth that allows users to log in, create polls and share them with others.',
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
    description: 'Leaderboard for FreeCodeCamp.com created with ReactJS and Sass. Utilizes an API endpoint made by a fellow student. Hosted on Codepen.',
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
    description: 'Single Page App that allows the user to search for local bars or restaurants and shows locations and ratings using the Yelp API. Users can then mark where they are going that night so they can coordinate with their friends.',
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
    description: 'Tic Tac Toe, recreated in HTML5 and JavaScript. Hosted on Codepen.',
    github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-09',
    link: 'http://codepen.io/LawlietBlack/full/pjjLee'
    }, {
    title: 'Simon',
    img: 'img/projects/simon.png',
    skills: ['AngularJS', 'JavaScript', 'jQuery', 'HTML5', 'CSS3', 'Bootstrap'],
    description: 'Simon game recreated in HTML and JavaScript. Supports normal and Strict mode and increases tempo at turn 5, 9, and 13. Player win is at turn 20. Hosted on Codepen.',
    github: 'https://github.com/LawlietBlack/FCC-Ziplines/tree/master/Zipline-10',
    link: 'http://codepen.io/LawlietBlack/full/RWWzLz'
  }];

  $scope.experience = [{
    title: 'Discovery Expert',
    employer: 'Stahancyk, Kent & Hook',
    duration: '2014-2015',
    description: 'Compiled, indexed and maintained discovery documentation. Spearheaded the transition to paperless discovery.'
    }, {
    title: 'Lab Assistant',
    employer: 'University of Oregon Physics Department',
    duration: '2010-2011',
    description: 'Maintained and analyzed data from the rooftop solar array.Machined parts for a specialized electron microscope.'
    }, {
    title: 'Student Intern',
    employer: 'Social Security Administration',
    duration: '2010',
    description: 'Reviewed cases using database programs such as CPMS and PACER. Managed dynamic priorities in a busy office environment.'
    }, {
    title: 'Resident Assistant',
    employer: 'University of Oregon',
    duration: '2007-2008',
    description: 'Worked as a leader and mentor for my hall. Administered and enforced housing protocol and dealt with emergency situations.'
  }];

  $scope.education = [{
    program: 'Code Oregon',
    completed: 'Front End Web Development, Full Stack JavaScript, Python Tracks',
    school: 'Treehouse, Portland OR',
    }, {
    program: 'Full Stack Web Development',
    completed: 'Front End Development, Data Visualization',
    school: 'FreeCodeCamp, Portland OR'
    }, {
    program: 'Bachelor of Science in Applied Physics',
    completed: 'Graduated',
    school: 'University of Oregon, Eugene OR'
  }];

  $scope.active = $scope.portfolio;
  $scope.skills = {};
  $scope.currentSkill = "all";
  var skillsData = $scope.portfolio.map(function(item) {
    return item.skills;
  }).reduce(function(a, b) {
    return a.concat(b);
  });
  $scope.skillList = ["AngularJS", "JavaScript", "jQuery", "Nodejs", "Expressjs", "ReactJS", "d3js", "AJAX", "Gulp", "JSX", "MongoDB", "Yeoman", "oAuth", "Jasmine", "TDD", "RESTApi", "Babel", "HTML5", "CSS3", "Bootstrap", "Sass", "Responsive", "Bourbon", "Python"];
  for(var i=0; i<skillsData.length; i++) {
    if($scope.skills[skillsData[i]] === undefined) {
      $scope.skills[skillsData[i]] = 1;
    } else {
      $scope.skills[skillsData[i]] += 1;
    }
  }
  $scope.filterSkills = function(skill) {
    $scope.currentSkill = skill;
    $scope.portfolio.filter(function(card, index) {
      if(skill === 'all') {
        $('portfolio-card').slideDown();
      } else if(card.skills.indexOf(skill) < 0) {
        $('portfolio-card').eq(index).hide();
      } else {
        $('portfolio-card').eq(index).slideDown();
      }
      return true;
    });
  };
  $scope.$on('skillfilter', function(event, skill) {
    $scope.filterSkills(skill);
  });
  $scope.link = function(linkurl) {
    window.open(linkurl);
  };
  $scope.snippetLanguages = ['JavaScript', 'Python'];
  $scope.snippets = [{
    name: 'Advanced Pig Latin',
    description: 'Pig latin is created by taking all the consonants before the first vowel of a word and moving them to the back of the word followed by the letters "ay". If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end. This problem is different from other variations in that it expects casing to remain the same as well as punctuation.',
    language: 'JavaScript',
    langCode: 'js',
    code: 'function translate(sentence) {\n  return sentence.replace(/[A-Za-z]+/gi, function(w) {\n    var cap = /[A-Z]/.test(w);\n    var word = /[aeiou]/i.test(w[0]) ? w + "way" : w.replace(/([^aeiou]+)(\w+)/i, "$2$1" + "ay");\n    return cap ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word.toLowerCase();\n  });\n};'
    }, {
    name: 'Word a10n (abbreviation)',
    description: 'The word i18n is a common abbreviation of internationalization the developer community use instead of typing the whole word and trying to spell it correctly. Similarly, a11y is an abbreviation of accessibility. This is a function that takes a string and turns any and all words within that string of length 4 or greater into an abbreviation following the same rules.',
    language: 'Python',
    langCode: 'py',
    code: "import re\n\n\ndef abbreviate(s):\n    key = re.sub(r'(\\w)(\\w*)(\\w)', r'\\1_\\2_\\3', s).split('_')\n    for part in range(1, len(key), 2):\n        if len(key[part]) > 1:\n            key[part] = str(len(key[part]))\n    return ''.join(key)"
    }, {
    name: 'Permutations',
    description: 'Get all unique permutations of a string.',
    language: 'JavaScript',
    langCode: 'js',
    code: 'function permutations(data) {\n  var perms = [];\n  if(typeof data === \'string\') data = data.slice().split("");\n  function _permute(item, mem){\n    if(item.length === 0) return perms.push(mem.join(""));\n    for(let i=0;i<item.length;i++) {\n      let x = item.splice(i,1);\n      mem.push(x);\n      _permute(item, mem);\n      mem.pop();\n      item.splice(i,0,x);\n    }\n  }\n  _permute(data, []);\n  return perms.filter((p, i) => perms.indexOf(p) === i);\n}'
    }, {
    name: 'Perfect Powers',
    description: 'Checks wheter a given integer is a perfect power (a positive integer that can be expressed as an integer power of another positive integer). If it is a perfect power, returns a pair m and k with m^k = n as a proof.',
    language: 'JavaScript',
    langCode: 'js',
    code: 'var isPerfectPower = function(n){\n  let factors = [];\n  for(let m=2; m*m<=n; m++) {\n    if(n % m == 0) factors.push(m);\n  }\n  for(let i=2; i<=Math.sqrt(n) + 1; i++) {\n    let result = factors.filter((num) => Math.pow(num, i) === n);\n    if(result.length) return result.concat(i);\n  }\n  return null;\n}'
    }, {
    name: 'Roman Numeral Converter',
    description: 'Convert a number into a roman numeral.',
    language: 'JavaScript',
    langCode: 'js',
    code: 'function convert(num) {\n  var romanKeys = [["M", 1000], ["CM", 900], ["D", 500], ["CD", 400], ["C", 100], ["XC", 90], ["L", 50], ["XL", 40], ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]];\n\n  return romanKeys.map(function(key) {\n    var letter = key[0];\n    var count = Math.floor(num / key[1]);\n    var roman = Array(count).fill(letter).join("");\n    num -= key[1] * count;\n    \n    return roman;\n  }).join("");\n}'
    }, {
    name: 'Permutation Count',
    description: 'Get the number of unique permutations of a string.',
    language: 'JavaScript',
    langCode: 'js',
    code: 'function factorial(num) {\n  return Array(num + 1).join(0).split("").map((n, i) => i + 1).reduce((a, b) => a * b);\n}\n\nfunction permCount(str) {\n  var dupes = str.slice().split("").sort().reduce((a, b) => a[a.length - 1] === b ? a + b : a + " " + b).split(" ");\n  var dupFactor = dupes.map((l) => factorial(l.length)).reduce((a, b) => a * b);\n  return factorial(str.length)/dupFactor;\n}'
    }, {
    name: 'Mutations',
    description: 'Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.',
    language: 'JavaScript',
    langCode: 'js',
    code: 'function mutation(arr) {\n  var str = arr[0].toLowerCase();\n  return arr[1].toLowerCase().split("").reduce(function(a, b) {\n    return (a === true || str.indexOf(a) >= 0) && str.indexOf(b) >= 0;\n  });\n}'
    }, {
    name: 'Chunky Monkey',
    description: 'Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.',
    language: 'JavaScript',
    langCode: 'js',
    code: 'function chunk(arr, size) {\n  return arr.filter(function(c, i) {\n    return i % size === 0;\n  }).map(function(c, i) {\n    return arr.slice(i * size, (i * size) + size);\n  });\n}'
    }, {
    name: 'Repeat a String',
    description: 'Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.',
    language: 'JavaScript',
    langCode: 'js',
    code: 'function repeat(str, num) {\n  return num < 0 ? "" : Array(num + 1).join(str);\n}'
    }, {
    name: 'Largest of Four',
    description: 'Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.',
    language: 'JavaScript',
    langCode: 'js',
    code: 'function largestOfFour(arr) {\n  return arr.map(function(ar) {\n    return ar.reduce(function(a, b) {\n      return a > b ? a : b;\n    });\n  });\n}'
    }, {
    name: 'Check for Palindrome',
    description: 'Return true if the given string is a palindrome. Otherwise, return false.',
    language: 'JavaScript',
    langCode: 'js',
    code: 'function palindrome(str) {\n  var s = str.toLowerCase().replace(/[^a-z0-9]/g,"");\n  return s === s.split("").reverse().join("");\n}'
    }, {
    name: 'Check for Palindrome',
    description: 'Return True if the given string is a palindrome. Otherwise, return false.',
    language: 'Python',
    langCode: 'py',
    code: "import re\n\n\ndef palindrome(string):\n    lis = re.sub(r'[^a-z0-9]', '', string.lower())\n    return lis == lis[::-1]"
    }, {
    name: 'Check if Prime',
    description: 'Return True if the given number is prime',
    language: 'Python',
    langCode: 'py',
    code: "def is_prime(num):\n    if num < 2:\n        return False\n    for i in range(2, num - 1):\n        if num % i == 0:\n            return False\n    return True"
  }];
  $scope.languages = {};
  $scope.currentLanguage = 'all';
  $scope.snippets.map(function(s) {
    if($scope.languages[s.language] === undefined) {
      $scope.languages[s.language] = 1;
    } else {
      $scope.languages[s.language] += 1;
    }
    return s;
  });
  $scope.snippetFilter = function(lang) {
    $scope.currentLanguage = lang;
    $scope.snippets.filter(function(snippet, index) {
      if(lang === 'all') {
        $('.snippet').slideDown();
      } else if(snippet.language === lang) {
        $('.snippet').eq(index).slideDown();
      } else {
        $('.snippet').eq(index).slideUp();
      }
      return true;
    });
  }
}])

.controller('LogController', ['$scope', '$http', '$sce', '$location', function($scope, $http, $sce, $location) {
  $('paper-tabs').prop('selected', function() {
    var pages = ['/', '/algorithms', '/logs', '/resume', '/about'];
    console.log(pages.indexOf($location.path()))
    return pages.indexOf($location.path());
  });
  $scope.SkipValidation = function(value) {
    return $sce.trustAsHtml(value);
  };
  $http.get('js/logs.json').success(function(data) {
    $scope.logs = data.map(function(item) {
      item.log = $sce.trustAsHtml(item.log);
      return item;
    });
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
        window.open(linkurl);
      };
      $scope.filterSkills = function(skill) {
        $scope.$emit('skillfilter', skill);
      };
      $scope.showMore = function() {
        $element.find('.extras').slideToggle();
      };
    }
  };
})

.directive('snippet', ['$timeout', '$interpolate', function($timeout, $interpolate) {
  return {
    restrict: 'E',
    template:'<pre><code ng-transclude></code></pre>',
    replace:true,
    transclude:true,
    link:function(scope, elm, attrs){             
      var tmp =  $interpolate(elm.find('code').text())(scope);
      $timeout(function() {                
        elm.find('code').html(hljs.highlightAuto(tmp).value);
      }, 0);
    }
  };
}]);