var testing = angular.module('testing',[]);

testing.controller('MDListing', function MDListing($scope){

	$scope.entry = {
		"type" : "Code",
		"md" : "`var f = new function()`",
		"html" : "<code>var f = new function()</code>"
	}

});