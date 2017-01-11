var app = angular.module("myApp" , []);



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

app.directive('modalDel' ,function(){
    return{
        restrict:'EA',
        templateUrl:'Templates/modal13.html'
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
    $scope.Frequency="";
    $scope.Payment="";
    $scope.Accountingdata="";

    myService.getJson('JS/c_frequecyType.json').then(function(data) {
        $scope.frequencyTypeData = data;
        for(var i=0;i< $scope.frequencyTypeData.length;i++){
        	var str=$scope.frequencyTypeData[i].path;
       
        	var res = str.split("\\");
        	$scope.frequencyarray.push(res[2]);
        }
    });
   

    myService.getJson('JS/c_paymentType.json').then(function(data) {
        $scope.paymentTypeData = data;
        for(var i=0;i< $scope.paymentTypeData.length;i++){
        	var str=$scope.paymentTypeData[i].path;
        
        	var res = str.split("\\");
        	$scope.paymentarray.push(res[2]);
        }
    });
  
 
    
    myService.getJson('JS/l_AccountingType.json').then(function(data) {
        $scope.account = data.result;
         for(var i=0;i< $scope.account.length;i++){
        	var str=$scope.account[i].value;
        	$scope.accountData.push(str);
        }
    });

  
    myService.getJson('JS/l_ChargeAmountBasis.json').then(function(data) {
        $scope.Charge = data.result;
         for(var i=0;i< $scope.Charge.length;i++){
        	var str=$scope.Charge[i].value;
        	$scope.ChargeAmountBasis.push(str);
        }
    });
	
    myService.getJson('JS/l_GrowthType.json').then(function(data) {
        $scope.Growthvalues = data.result;
     
        for(var i=0;i< $scope.Growthvalues.length;i++){
        	var str=$scope.Growthvalues[i].value;
        	$scope.GrowthTypeData.push(str);
        }
    });
	
    myService.getJson('JS/l_PaymentDueDay.json').then(function(data) {
       $scope.Pay= data.result;
       
        for(var i=0;i< $scope.Pay.length;i++){
            var str=$scope.Pay[i].value;
            $scope.paymentDueDay.push(str);
        }
    });
   
    myService.getJson('JS/l_PaymentDueOn.json').then(function(data) {
        $scope.PaymentDueOnvalues = data.result;
        for(var i=0;i< $scope.PaymentDueOnvalues.length;i++){
        	var str=$scope.PaymentDueOnvalues[i].value;
        	$scope.paymentDuedata.push(str);
        }
    });
    
   myService.getJson('JS/l_PaymentTiming.json').then(function(data) {
        $scope.dataTime = data.result;
        for(var i=0;i< $scope.dataTime.length;i++){
        	var str=$scope.dataTime[i].value;
        	$scope.data.push(str);
        }
    });
   $scope.PaymentTiming=function(selected){
    	$scope.Payment_Timing=selected;
    }
    $scope.date=function(selected){
        console.log(selected);
        $scope.startPeriod = selected;
        console.log($scope.startPeriod)
    }
   $scope.accounting = function(selected){
     $scope.Accounting_data=selected;
   }

    $scope.frequency = function(selected){
        $scope.frequency = selected;
        console.log($scope.Frequency);
    }

    $scope.paymentType = function(selected){
        $scope.Payment = selected;
        console.log($scope.Payment)
    }
      $scope.accountingType=function(selected){
        $scope.Accountingdata=selected;

    }
    $scope.ChargeAmountinput=function(input){
        $scope.ChargeAmountdata=input;  
    }

    $scope.Growthinput=function(input){
        $scope.Growthdata=input;
    }

     $scope.paymentDueDay=function(selected){
        $scope.PaymentDueDaydata=selected;
    }

    $scope.paymentDueOn=function(selected){
        $scope.PaymentDuedata=selected;
    }

    $scope.frequency="";
    $scope.Payment = "";
    $scope.accounting_type = "";
    $scope.startPeriod = "";
    $scope.accounting_type = "";
    $scope.payment_timing = "";
    $scope.payment_due_on = "";
    $scope.payment_due_day = "";


   $scope.validate = function(){
   /* if($scope.frequency == "" && $scope.Payment == "" &&  $scope.accounting_type == "" &&  $scope.startPeriod == "" &&   $scope.accounting_type == ""
        && $scope.payment_timing == "" &&   $scope.payment_due_on == "" &&   $scope.payment_due_day == "" ) {
        $scope.display="true";
    }*/

    $("#myModal").modal("hide");
}

$scope.warning = function(){
    $("#myModal").modal("show");
    $("#myModal4").modal("hide");
}

$scope.validate1 = function(){
    $("#myModal").modal("show");
    $("#myModal2").modal("hide");
}


	$scope.totaldetails=[];
    var getdetails={};
	$scope.savedata=function(){
		getdetails.frequency=$scope.frequency;
		getdetails.Payment=$scope.payment_type;
		getdetails.date=$scope.startPeriod;
		getdetails.Accountingdata=$scope.accounting_type;
        getdetails.Accounting_Cost_Center=$scope.accounting_cost_center;
		getdetails.Charge_Amount_Basis=$scope.charge_amount_basis;
		getdetails.Growthdata=$scope.Growthdata;
		getdetails.PaymentDueDaydata=$scope.payment_due_day;
		getdetails.Payment_Timing=$scope.payment_timing;
        getdetails.Payment_Due_On = $scope.payment_due_on;
        var get = angular.copy(getdetails);
        console.log(get)
		$scope.totaldetails.push(get);
		console.log($scope.totaldetails);
		
	}
    $scope.editData=true;
    $scope.edit=function(edit){
       $scope.display=true;
       $scope.saveright=true;
        $scope.frequency=edit.frequency;
        $scope.accounting_type=edit.Accountingdata;
        $scope.Payment=edit.Payment;
        $scope.startPeriod=edit.date;
        $scope.payment_timing=edit.Payment_Timing;
        $scope.payment_due_day=edit.PaymentDueDaydata;
        $scope.payment_due_on=edit.Payment_Due_On;
        $scope.accounting_cost_center=edit.Accounting_Cost_Center;
     
        $scope.modifyFunct = function(){
    
           for(var i=0; i<$scope.totaldetails.length; i++)
            {
                console.log($scope.totaldetails[i].Payment);
                console.log(edit.Payment);
                if($scope.totaldetails[i].Payment == edit.Payment)
                {
                    $scope.totaldetails[i].frequency =   $scope.frequency;
                    $scope.totaldetails[i].Payment =  $scope.Payment;
                    $scope.totaldetails[i].date =   $scope.startPeriod;
                    $scope.totaldetails[i].Accountingdata =  $scope.accounting_type;
                    $scope.totaldetails[i].Accounting_Cost_Center = $scope.accounting_cost_center;
                    $scope.totaldetails[i].Payment_Timing = $scope.payment_timing;
                    $scope.totaldetails[i].PaymentDueDaydata = $scope.payment_due_day;
                    $scope.totaldetails[i].Payment_Due_On = $scope.payment_due_on;

                }
            }
        }
    }

    $scope.delete=function(index){
     $scope.totaldetails.splice(index,1)
        $("#myModal3").modal("hide");
    }

});
