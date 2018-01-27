angular.module('factApp', [])
    .controller('factController', function($scope) {

     $scope.prod = 1;

        $scope.factorial = function() {
            var num = $scope.number;
            var i = 1;

            while(i <= num){
                prod *= i;
                i++;
            }
            return prod;
        };

    });
