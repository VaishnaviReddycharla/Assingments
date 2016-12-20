var app= angular.module("myApp" , ['ui.router'])

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
$stateProvider
        .state('personalDetails', {
            url: '/personalDetails',
            templateUrl: 'Templates/personalDetails.html'       
        })
        .state('schooldetails', {
            url: '/schooldetails',
            templateUrl: 'Templates/schooldetails.html'       
        })
         .state('skillsdetails', {
            url: '/skillsdetails',
            templateUrl: 'Templates/skillsdetails.html'       
        })
}]);
app.factory("myservice" , function($rootScope){
	var continueService = {};
	
	continueService.broadcastmsg = function(objname){
		console.log(objname)
		this.obj1={};
		obj1 = objname;
		console.log(obj1)
		this.broadcastItem();
	};
	continueService.broadcastItem=function(){
		console.log("broad")
		console.log(obj1)
		$rootScope.$broadcast('handleBroadcast',obj1);
	};

	return continueService;

});

app.controller("mainCntrl" , ['$scope',function($scope){
$scope.goFunct = function(){
	console.log("main controller")
	alert("succesfully entered into the function")
}	
}]);

app.controller("loginCtrl" , ['$scope','myservice', function($scope,myservice){

	console.log("hello");
	$scope.obj = {};
	console.log($scope.obj);
	$scope.continue=function(objname){
	myservice.broadcastmsg(objname);
	};

	$scope.$on('handleBroadcast', function(event,args) {
		console.log(args)
		$scope.obj=args;
        console.log($scope.obj)
    });  
}]);

app.controller("schoolDetailsCtrl" , ['$scope','$rootScope','myservice','$timeout',function($scope,myservice,$rootScope,$timeout){
	console.log("hello")
	$scope.result=[];
	$timeout(function(){
		console.log( "hello")
		$scope.$on('handleBroadcast', function(args) {
		console.log("hello")
		console.log(args)
		$scope.obj=args;
        console.log($scope.obj) 
    }); },100);
}]);