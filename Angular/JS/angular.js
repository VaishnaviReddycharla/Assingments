var app = angular.module("myApp" , [])
app.controller("DemoCntrl" , function($scope){
	console.log("hello");
	$scope.message = "Hello";
});
