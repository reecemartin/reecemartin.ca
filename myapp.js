angular.module('mainApp', ['factorialApp'])
    .controller('mainController', function($scope, $log) {
        $log.log("Hello");6
    });



angular.module('factorialApp', [])
    .controller('factController', function($scope, $log) {

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


angular.module('neuralNetApp', [])
    .controller('nnController', function($scope, $log) {
        $scope.data = {
            outputOptions: [
                {id: '1', name: 'AND'},
                {id: '2', name: 'OR'},
                {id: '3', name: 'XOR'},
                {id: '4', name: 'CUSTOM'}
            ],
            outputType: {id: 'and', name: 'AND'}
        };

        $scope.nnData = {
            input: {out: 0},

        };
    });
