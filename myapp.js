angular.module('factApp', [])
    .controller('factController', function($scope) {

        $scope.factorial = function() {
            var i = 1;
            var prod = 1;

            while(i <= $scope.number}
                prod *= i;
                i++;
            }
            return prod;
        };

    });
