var app = angular.module("myApp",[])

app.service('mainService' , function($http,$q){
	this.getJson = function(url){
		return $http.get(url).then(function(result){
			var data = result.data;
			return data;
			console.log(data)
		});
		
	};

});



app.controller('promisecntrl' , function(mainService,$scope,$q){
   
    var promise1 = mainService.getJson("JS/empJson.json");
    var promise2 = mainService.getJson("JS/foodJson.json");
    $q.all([promise1,promise2]).then(function(result){ 
    		$scope.data=[];
    		$scope.fooddata=[];
    		$scope.data=result[0];
    		console.log($scope.data)
    		$scope.fooddata=result[1];
    		console.log($scope.fooddata);
    	});
});
    		