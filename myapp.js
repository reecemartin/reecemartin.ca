angular.module('mainApp', ['factorialApp'])
    .controller('mainController', function($scope) {

    });



angular.module('factorialApp', [])
    .controller('factController', function($scope) {

        $scope.number = 1;

        $scope.prod = 1;

        $scope.factorial = function() {
            var i = 1;
            $scope.prod = 1;
            console.log("hello");
            while(i <= $scope.number){
                $scope.prod *= i;
                i++;
            }

        };

    });
