var cheatsheet = angular.module('cheatsheet',['ngSanitize']);

cheatsheet.controller('MDListing', function MDListing($scope, $http){
	$http.get('data.json').success(function (data){
		$scope.mdItems = data;
		$scope.orderField = "type";
	});
});