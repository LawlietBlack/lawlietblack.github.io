angular.module('PortfolioApp', ['ngRoute', 'ngSanitize', 'ngMaterial'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    controller: 'MainController',
    templateUrl: 'views/portfolio.html'
  }).when('/algorithms', {
    controller: 'MainController',
    templateUrl: 'views/code.html'
  }).when('/logs', {
    controller: 'MainController', 
    templateUrl: 'views/logs.html'
  }).when('/resume', {
    controller: 'MainController', 
    templateUrl: 'views/resume.html'
  }).when('/about', {
    controller: 'MainController',
    templateUrl: 'views/about.html'
  }).when('/career-link', {
    controller: 'MainController',
    templateUrl: 'views/career.html'
  });
}])

.run(['$location', '$rootScope', '$profile', function($location, $rootScope, $profile) {
  $profile.loadProfileData();
  var pages = ['/', '/algorithms', '/logs', '/resume', '/about'];
  $rootScope.selectedNav = pages.indexOf($location.path());
}])

.controller('MainController', ['$scope', '$profile', function($scope, $profile) {
  // Load static data
  $scope.portfolio = $profile.portfolio;
  $scope.experience = $profile.experience;
  $scope.education = $profile.education;
  $scope.snippets = $profile.snippets;
  $scope.logs = $profile.logs;

  // Load calculated data, skills and snippet languages
  $scope.languages = $profile.languages;
  $scope.skills = $profile.skills;
  if($.isEmptyObject($scope.skills)) $profile.loadSkillData();
  if($.isEmptyObject($scope.languages)) $profile.loadLanguageData();

  // Skills Data
  $scope.skillList = [
    // JavaScript Skills
    'JavaScript', 'AngularJS', 'ReactJS', 'd3js', 'jQuery', 'Nodejs', 'Express', 'AJAX', 'Gulp', 'Keystone', 'Jasmine',
    // Python Skills
    'Python', 'Django',
    // Java Skills
    'Java', 'Jersey', 'Spring', 'Hibernate', 'Tomcat', 'Maven', 'Gradle', 'Thymeleaf',
    // Ruby Skills
    // 'Ruby',
    // Database Skills
    'MongoDB', 'H2', 'PostGreSQL', 'SQL',
    // Development Skills
    'oAuth', 'RESTApi', 'CMS',
    // Design Skills
    'HTML5', 'CSS3', 'Bootstrap', 'Sass', 'Responsive', 'Bourbon', 'Materialize'];
  $scope.currentSkill = 'all';
  
  // Snippet Data
  $scope.langList = ['JavaScript', 'Python', 'Ruby'];
  $scope.currentLang = 'all';

  // Portfolio Filter Buttons
  $scope.skillFilter = function(skill) {
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

  // Snippet Filter Buttons
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
  };

  // Listen for filter from Profile cards
  $scope.$on('skillfilter', function(event, skill) {
    $scope.skillFilter(skill);
  });

  // Use buttons as links
  $scope.link = function(linkurl) {
    window.open(linkurl);
  };

}])

.directive('portfolioCard', function() {
  return {
    restrict: 'E',
    templateUrl: 'views/portfolio-card.html',
    scope: {
      card: '='
    },
    link: function($scope, $element) {
      $scope.link = function(linkurl) {
        window.open(linkurl);
      };
      $scope.skillFilter = function(skill) {
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
    link:function(scope, elm){
      var tmp =  $interpolate(elm.find('code').text())(scope);
      $timeout(function() {                
        elm.find('code').html(hljs.highlightAuto(tmp).value);
      }, 0);
    }
  };
}])

.service('$profile', ['$http', '$sce', function($http, $sce) {
  var profile = this;
  profile.portfolio = [];
  profile.experience = [];
  profile.education = [];
  profile.snippets = [];
  profile.logs = [];
  profile.skills = {};
  profile.languages = {};

  this.loadProfileData = function() {
    $http.get('js/data.json').success(function(data) {
      profile.logs = data.logs.map(function(item) {
        item.log = $sce.trustAsHtml(item.log);
        return item;
      });
      profile.portfolio = data.portfolio;
      profile.experience = data.experience;
      profile.education = data.education;
      profile.snippets = data.snippets;
    });
  };

  this.loadSkillData = function() {
    var skillsData = profile.portfolio.reduce(function(a, b) {
      return a.concat(b.skills);
    }, []);
    for(var i=0; i<skillsData.length; i++) {
      if(profile.skills[skillsData[i]] === undefined) {
        profile.skills[skillsData[i]] = 1;
      } else {
        profile.skills[skillsData[i]] += 1;
      }
    }
  };

  this.loadLanguageData = function() {
    profile.snippets.map(function(snip) {
      if(profile.languages[snip.language] === undefined) {
        profile.languages[snip.language] = 1;
      } else {
        profile.languages[snip.language] += 1;
      }
      return snip;
    });
  }
}]);


//# sourceMappingURL=app.js.map
