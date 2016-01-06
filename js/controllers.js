var testing = angular.module('testing',['ngSanitize']);

testing.controller('MDListing', function MDListing($scope){

	$scope.entry = {
		"type" : "Code",
		"md" : "`var f = new function()`",
		"html" : "<code>var f = new function()</code>"
	}
	$scope.mdItems = [{
		"type" : "Code",
		"md" : "`var f = new function()`",
		"html" : "<code>var f = new function()</code>"
	},
	{
		"type" : "H1",
		"md" : "# This is a Header 1",
		"html" : "<h1>This is a Header 1</h1>"
	}]

});