app.controller('AboutController', ['$scope', 'profile', function ($scope, profile) {
	profile.success(function (data) {
		$scope.profile = data;
		var badgeNum = data.badges.length
		var badges = [];
		for(var i=0;i<3;i++) {
			badges[i]=data.badges[badgeNum-1-i];
		}
		$scope.badges = badges;
	});
}]);