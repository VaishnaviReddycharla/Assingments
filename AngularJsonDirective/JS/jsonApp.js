var app = angular.module('myApp' , []);

app.service('jsonEmpService', function($http) {
	this.getJsonData = function(callback) {
	    $http.get("JS/empJson.json").success(function(data){
	    	console.log(data)
	        callback(data);
	       
	    });
	 }

	 this.getJsonsalData = function(callback) {
	    $http.get("JS/salJson.json").success(function(data){
	    	console.log(data)
	        callback(data);
	       
	    });
	 }

});

app.controller('jsonEmpCtrl', function($scope, jsonEmpService) {
	//$scope.submitFunct = function(){
    jsonEmpService.getJsonData(function(response) {
        $scope.data = response;
    	});
	//}

	$scope.delFunct = function(name){
		  console.log($scope.data);
		    console.log(name);
			$scope.data.employees.splice(name, 1);
	}
	
});



app.controller('jsonSalCtrl', function($scope, jsonEmpService) {
	//$scope.submitsalFunct = function(){
    jsonEmpService.getJsonsalData(function(response) {
        $scope.data = response;
    	});
	//}
	$scope.delFunct = function(name){
		  console.log($scope.data);
		    console.log(name);
			$scope.data.employees.splice(name, 1);
	}
	
});


app.directive("empDirective",function(){
	return{
		scope:{
			json:'=',
			delete:'&'
		},
		templateUrl:'Templates/jsonDirective.html'
	}
		
});