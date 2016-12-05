

var app = angular.module('myApp', ['ui.router'])


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise('/');
  $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'Templates/MyDirective.html'
        })
    
        .state('home.details', {
        	url:'/details',
        	templateUrl : 'Templates/MyDetails.html'
    
        })
         .state('home.edit', {
        	url:'/edit',
        	templateUrl : 'Templates/MyEdit.html'
    
        })
        
}]);


app.controller('MainCntrl' , function(myService,$scope,$rootScope){
	console.log("hello");
	var data = null;
	$scope.getJsonFunct = function(){
		console.log("hello");
		myService.getData()
		.then(function(empdata){
			console.log(empdata);
			var data = empdata;
			console.log(data);
			$rootScope.data1 = data;
			console.log($rootScope.data1 )
		},function(error){
			alert("error");
		
		});
		
	}

	$scope.fullDetailsFunct=function(name,lname,exp){
		$scope.FirstName = name;
		$scope.LastName = lname;
		$scope.Experience = exp;

	}
	
	
});


/*/app.controller('MainCntrl1' , function($scope){
	//$scope.fullDetailsFunct = function(){
		$scope.data = "hello"
	//}
});*/


app.service('myService' , function($http , $q){
		var empdata = undefined;
		this.getData = function(){
			console.log("hello");
     	if (!empdata) {
	    var deferred = $q.defer();

	    $http.get('JS/empJson.json')
	    	.then(function(result) {

	    empdata = result.data;

	        deferred.resolve(empdata);
	          }, function(error) {
	            empdata = error;
	            deferred.reject(error);
	          });
	        empdata = deferred.promise;
	      }
	      return $q.when(empdata);
	    };
 
 
});


app.directive('myDirective' , function(){
	return {
		//scope = {};
		//template:<h1>{{empdata.firstName}}</h1>
		templateUrl : 'Templates/MyUpload.html'
	}
});