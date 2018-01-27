var factApp = angular.module('factApp', []);

// note: $scope is a service in angularjs, all services are annotated with a
// "$" prefix. Also worth noting that passing the scope service here is a good
// example of dependency injection, where we are passing scope in to our
// controller.
factApp.controller('factController', function($scope) {

$scope.result = function(){

    return $scope.number+1;
};
});
