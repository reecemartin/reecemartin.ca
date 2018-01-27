var myApp = angular.module('factApp', []);

// note: $scope is a service in angularjs, all services are annotated with a
// "$" prefix. Also worth noting that passing the scope service here is a good
// example of dependency injection, where we are passing scope in to our
// controller.
myApp.controller('factController', function($scope) {

var result = function(){
    console.log(number);
    if(number == 0 || number == 1){
        return number;
    }
    else{
        return factorialCalculator(number - 1) + factorialCalculator(number - 2);
    }
}
});
