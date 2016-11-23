var app = angular.module("myApp" , [])
app.controller("Cntrl" , function($scope){
	console.log("hello");
	$scope.message = "Hello";
});