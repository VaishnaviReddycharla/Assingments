var app = angular.module('myApp', ['ui.router'])


app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
 $urlRouterProvider.otherwise('/');
  $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'Templates/MyAbout.html'
        })
    
        .state('about.menu', {
        	url:'/menu',
        	templateUrl : 'Templates/MyMenu.html'
    
        })
         .state('gallery', {
        	url:'/gallery',
        	templateUrl : 'Templates/MyGallery.html'
    
        })

         .state('contact', {
            url:'/contact',
            templateUrl : 'Templates/MyContact.html'
    
        })

        
}]);


app.controller('aboutCntrl' , function(myService,$scope,$rootScope){
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

    $scope.getmenu = function(state,menu){
        //$scope.foodata=$rootScope.data1;
        //console.log(fooddata)
        $scope.state = state;
        console.log(state)
        $scope.menu = menu;
        console.log(menu);
    }

});
app.service('myService' , function($http , $q){
        var empdata = undefined;
        this.getData = function(){
            console.log("hello");
        if (!empdata) {
        var deferred = $q.defer();

        $http.get('JS/foodjson.json')
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


