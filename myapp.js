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

        function Input(id, value, weight){
            this.id = id;
            this.value = value;
            this.weight = weight;
            this.setHigh = function(){
                this.value = 1;
            }
            this.setLow = function(){
                this.value = 0;
            }
            this.setWeight = function(weight){
                this.weight = weight;
            }
        };

        function Neuron(id, layerId, bias, inputs, value, weight){
            this.id = id;
            this.layerId = id;
            this.bias = bias;
            this.inputs = inputs;
            this.value = value;
            this.weight = weight;
            this.setValue = function(value){
                this.value = value;
            }
            this.setWeight = function(weight){
                this.weight = weight;
            }
        };

        function Output(id, bias, inputs, value){
            this.id = id;
            this.bias = bias;
            this.inputs = inputs;
            this.value = value;
        };

        $scope.nnData = {
            threshold: 0.0001,
            learningRate: 0.5,
            momentum: 0.2,
            inputs: [],
            output: null,
            hiddenLayers: []
            biases: []
        };

        function setDefaultData(data){
            data[threshold] = 0.0001;
            data[learningRate] = 0.5;
            data[momentum] = 0.2;

            for (i = 0; i < data[biases].length; i++){
                data[biases][i].setHigh();
            }
        }

        function setUpNetwork(data){
            data.inputs[0] = new Input(0, 0, );
            data.inputs[1] = new Input(1, 0);

            data.biases[0] = new Input(0, 1);
            data.biases[1] = new Input(0, 1);


        }


    }]);
