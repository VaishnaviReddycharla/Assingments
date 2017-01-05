var app = angular.module("myApp" , [])

app.service('mainService' , function($http,$q){
	this.getJson = function(url){
		return $http.get(url).then(function(result){
			var data = result.data;
			return data;
			console.log(data)
		});
		
	};

});



app.controller('Ctrl' , function(mainService,$scope,$q){
   
    var promise1 = mainService.getJson("JS/l_PaymentTiming.json");
    var promise2 = mainService.getJson("JS/l_PaymentDueOn.json");
    var promise3 = mainService.getJson("JS/l_AccountingType.json");
    var promise4 = mainService.getJson("JS/l_PaymentDueDay.json");
    var promise5 = mainService.getJson("JS/c_paymentType.json");
    var promise6 = mainService.getJson("JS/c_frequecyType.json");

	$scope.data=[];
	
    $q.all([promise1,promise2,promise3,promise4,promise5,promise6]).then(function(result){ 
    		$scope.data=[];
    		$scope.paymentDuedata=[];
    		$scope.accountData=[];
    		$scope.paymentDueDay=[];
    		$scope.paymentTypeData=[];
    		$scope.frequencyTypeData=[];
    		$scope.data=result[0].result;
    		$scope.paymentDuedata=result[1].result;
    		$scope.accountData = result[2].result;
    		$scope.paymentDueDay =result[3].result;
    		$scope.paymentTypeData =result[4];
    		$scope.frequencyTypeData = result[5];
    		console.log($scope.frequencyTypeData)
 
    		
    	});
$scope.show = function(Myselect){
    console.log(Myselect);
    console.log($scope.Myselect);
	$scope.selectedItem = $scope.Myselect;
}
});