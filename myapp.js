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
    .controller('nnController', ['$scope', function($scope, $log) {
        $scope.data = {
            gateOptions: [
                {id: '1', name: 'AND'},
                {id: '2', name: 'OR'},
                {id: '3', name: 'XOR'},
                {id: '4', name: 'CUSTOM'}
            ],
            gateSelected: null
        };

        $scope.nnData = {
            threshold: 0.0001,
            learningRate: 0.5,
            momentum: 0.2
        };

        function Input(id, weight){
            this.id = id;
            this.weight = weight;
        };

        function Neuron(id, layerId, bias, inputs, weight){
            this.id = id;
            this.layerId = id;
            this.bias = bias;
            this.inputs = inputs;
            this.weight = weight;
        };
    }]);
