var app = angular.module('myApp' , []);

app.service('jsonService', function($http) {
	this.getJsonData = function(callback) {
	    $http.get("JS/empJson.json").success(function(data){
	    	console.log(data)
	        callback(data);
	       
	    });
	 }
});

app.controller('jsonCtrl', function($scope, jsonService) {
	$scope.submitFunct = function(){
    jsonService.getJsonData(function(response) {
        $scope.data = response;
    	});
	}
});