// contains everything, myApp module
var myApp = angular.module('myApp', []); // normally put dependences in []

// create different controllers that will control different parts of my application
myApp.controller('MyController', function MyController($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.artists = data;
		$scope.artistOrder = 'name';
	});
	
});