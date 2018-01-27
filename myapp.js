var myApp = angular.module('factApp', []);

// note: $scope is a service in angularjs, all services are annotated with a
// "$" prefix. Also worth noting that passing the scope service here is a good
// example of dependency injection, where we are passing scope in to our
// controller.
myApp.controller('factController', function($scope) {

var result = function(){
    console.log($scope.number);
    if($scope.number == 0 || $scope.number == 1){
        return $scope.number;
    }
    else{
        return factorialCalculator($scope.number - 1) + factorialCalculator($scope.number - 2);
    }
}
});
