angular.module('factApp', [])
    .controller('factController', function($scope) {
        $scope.factorial = function() {
            var num = $scope.number;
            var i = 1;
            var prod = 1;
            while(i <= num){
                prod *= i;
                i++;
            }
            $scope.number = prod;
            return $scope.number;
        };
    });
