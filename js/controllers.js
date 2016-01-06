var testing = angular.module('testing',['ngSanitize']);

testing.controller('MDListing', function MDListing($scope, $http){
	$http.get('data.json').success(function (data){
		$scope.mdItems = data;
	});
});