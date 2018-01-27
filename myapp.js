angular.module('factApp', [])
    .controller('factController', function($scope) {
        //$scope.prod = 1;

        $scope.factorial = function() {
            var i = 1;
            var prod = 1;
            console.log("hello");
            while(i <= $scope.number){
                prod *= i;
                i++;
            }
            return prod;
        };

    });
