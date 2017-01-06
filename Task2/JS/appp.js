var app = angular.module("myApp" , ['ui.router']);



app.directive('page' , function(){
	return{
		restrict:'E',
		templateUrl:'Templates/page11.html'
	}

});

app.directive('modal' ,function(){
	return{
		restrict:'EA',
		templateUrl:'Templates/model11.html'
	}
});

app.directive('modal2' ,function(){
	return{
		restrict:'EA',
		templateUrl:'Templates/model12.html'
	}
});


app.service('myService', function($http, $q) {
    this.getJson = function(url) {
        var def = $q.defer();
        $http.get(url).success(def.resolve)
            .error(def.reject);
        return def.promise;

    }
});


app.controller('Ctrl', function($scope, myService) {
	$scope.frequencyarray=[];
	$scope.paymentarray=[];
	$scope.accountData = [];
	$scope.ChargeAmountvalues = [];
	$scope.data=[];
	$scope.paymentDuedata=[];
	$scope.paymentDueDay=[];
	$scope.GrowthTypeData=[];
	$scope.ChargeAmountBasis=[];
    myService.getJson('JS/c_frequecyType.json').then(function(data) {
        $scope.frequencyTypeData = data;
        for(var i=0;i< $scope.frequencyTypeData.length;i++){
        	var str=$scope.frequencyTypeData[i].path;
        	console.log(str);
        	var res = str.split("\\");
        	$scope.frequencyarray.push(res[2]);
        	console.log($scope.frequencyarray);

        }
        console.log($scope.frequencyTypeData);
    });
    frequencydata="";
    $scope.accountingType=function(input){
    	$scope.frequencydata=input;

    }
    myService.getJson('JS/c_paymentType.json').then(function(data) {
        $scope.paymentTypeData = data;
        for(var i=0;i< $scope.paymentTypeData.length;i++){
        	var str=$scope.paymentTypeData[i].path;
        	console.log(str);
        	var res = str.split("\\");
        	$scope.paymentarray.push(res[2]);
        	console.log($scope.paymentarray);
        }
        console.log($scope.paymentTypeData);
    });
    $scope.paymentdata="";

    $scope.paymentType=function(input){
    	$scope.paymentdata=input;
    	console.log($scope.paymentdata)

    }
    myService.getJson('JS/l_AccountingType.json').then(function(data) {
        $scope.account = data.result;
         for(var i=0;i< $scope.account.length;i++){
        	var str=$scope.account[i].value;
        	$scope.accountData.push(str);
        }
    });
    $scope.accountingType=function(input){
    	$scope.Accountingdata=input;

    }
    myService.getJson('JS/l_ChargeAmountBasis.json').then(function(data) {
        $scope.Charge = data.result;
         for(var i=0;i< $scope.Charge.length;i++){
        	var str=$scope.Charge[i].value;
        	$scope.ChargeAmountBasis.push(str);
        }
    });
	$scope.ChargeAmountinput=function(input){
    	$scope.ChargeAmountdata=input;
		

    }
    myService.getJson('JS/l_GrowthType.json').then(function(data) {
        $scope.Growthvalues = data.result;
        console.log($scope.Growthvalues);
        for(var i=0;i< $scope.Growthvalues.length;i++){
        	var str=$scope.Growthvalues[i].value;
        	$scope.GrowthTypeData.push(str);
        }
    });
	$scope.Growthinput=function(input){
    	$scope.Growthdata=input;

    }
    myService.getJson('JS/l_PaymentDueDay.json').then(function(data) {
        $scope.PaymentDueDayvalues = data.result;
         for(var i=0;i< $scope.PaymentDueDayvalues.length;i++){
        	var str=$scope.PaymentDueDayvalues[i].value;
        	$scope.paymentDueDay.push(str);
        }
        console.log($scope.PaymentDueDayvalues);
    });
    $scope.PaymentDueDayinput=function(input){
    	$scope.PaymentDueDaydata=input;

    }
    myService.getJson('JS/l_PaymentDueOn.json').then(function(data) {
        $scope.PaymentDueOnvalues = data.result;
        for(var i=0;i< $scope.PaymentDueOnvalues.length;i++){
        	var str=$scope.PaymentDueOnvalues[i].value;
        	$scope.paymentDuedata.push(str);
        }
        console.log($scope.PaymentDueOnvalues);
    });
    $scope.PaymentDueinput=function(input){
    	$scope.PaymentDuedata=input;

    }
   myService.getJson('JS/l_PaymentTiming.json').then(function(data) {
        $scope.dataTime = data.result;
        for(var i=0;i< $scope.dataTime.length;i++){
        	var str=$scope.dataTime[i].value;
        	$scope.data.push(str);
        }
        console.log($scope.PaymentTimingvalues);
    });
   $scope.PaymentTiminginput=function(input){
    	$scope.PaymentTimingdata=input;


    }
   
	$scope.totaldetails=[];
	$scope.savedata=function(){
		var getdetails={};
		getdetails.frequency=$scope.frequencydata;
		getdetails.payment=$scope.paymentdata;
		getdetails.date=$scope.date;
		getdetails.Accountingdata=$scope.Accountingdata;
		getdetails.ChargeAmountdata=$scope.ChargeAmountdata;
		getdetails.Growthdata=$scope.Growthdata;
		getdetails.PaymentDueDaydata=$scope.PaymentDueDaydata;
		getdetails.PaymentDuedata=$scope.PaymentDuedata;
		getdetails.PaymentTimingdata=$scope.PaymentTimingdata;
		$scope.totaldetails.push(getdetails);
		console.log($scope.totaldetails);
		
	}

});
/*app.service('mainService' , function($http,$q){
	this.getJson = function(url){
		return $http.get(url).then(function(result){
			var data = result.data;
			return data;
			console.log(data)
		});
		
	};

});



app.controller('Ctrl' , function(mainService,$scope,$q,$state){
    var promise1 = mainService.getJson("JS/l_PaymentTiming.json");
    var promise2 = mainService.getJson("JS/l_PaymentDueOn.json");
    var promise3 = mainService.getJson("JS/l_AccountingType.json");
    var promise4 = mainService.getJson("JS/l_PaymentDueDay.json");
    var promise5 = mainService.getJson("JS/c_paymentType.json");
    var promise6 = mainService.getJson("JS/c_frequecyType.json");
    var promise7 = mainService.getJson("JS/l_GrowthType.json");
    var promise8 = mainService.getJson("JS/l_ChargeAmountBasis.json");
    $scope.paymentarray=[];
    $scope.frequencyarray=[];
    $q.all([promise1,promise2,promise3,promise4,promise5,promise6,promise7,promise8]).then(function(result){ 
    		$scope.data=[];
    		$scope.paymentDuedata=[];
    		$scope.accountData=[];
    		$scope.paymentDueDay=[];
    		$scope.paymentTypeData=[];
    		$scope.frequencyTypeData=[];
            $scope.GrowthTypeData=[];
            $scope.ChargeAmountBasis=[];
    		$scope.data=result[0].result;
    		$scope.paymentDuedata=result[1].result;
    		$scope.accountData = result[2].result;
    		$scope.paymentDueDay =result[3].result;
    		$scope.paymentTypeData =result[4];
    		$scope.frequencyTypeData = result[5];
            $scope.GrowthTypeData = result[6].result;
            $scope.ChargeAmountBasis = result[7].result;
    		console.log($scope.frequencyTypeData)
    		for(var i=0;i< $scope.paymentTypeData.length;i++){
	        	var str=$scope.paymentTypeData[i].path;
	        	console.log(str);
	        	var res = str.split("\\");
	        	$scope.paymentarray.push(res[2]);
	        	console.log($scope.paymentarray);
       		 }
     
     for(var i=0;i< $scope.frequencyTypeData.length;i++){
	        	var str=$scope.frequencyTypeData[i].path;
	        	console.log(str);
	        	var res = str.split("\\");
	        	$scope.frequencyarray.push(res[2]);
	        	console.log($scope.frequencyarray);
       		 }
    	});

});*/