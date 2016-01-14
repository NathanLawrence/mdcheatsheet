var cheatsheet = angular.module('cheatsheet',['ngSanitize']);
var hasTyped = false;

cheatsheet.controller('MDListing', function MDListing($scope, $http){
	$http.get('data.json').success(function (data){
		$scope.mdItems = data;
		$scope.orderField = "type";
	});
	
	
	$scope.sendTyped = function() {
		if(hasTyped === false){
			console.log("Sending");
			ga('send', 'event', 'Search', 'type', 'Typed in Search');
			hasTyped = true;
		}
	};
});