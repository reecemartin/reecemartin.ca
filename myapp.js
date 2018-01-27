angular.module('rootApp', ['factorialApp', 'neuralNetApp'])
    .controller('rootController', function($scope, $log) {
    });



angular.module('factorialApp', [])
    .controller('factController', function($scope, $log) {

        $scope.number = 1;

        $scope.prod = 1;

        $scope.factorial = function() {
            var i = 1;
            $scope.prod = 1;
            while(i <= $scope.number){
                $scope.prod *= i;
                i++;
            }
        };

    });


angular.module('neuralNetApp', [])
    .controller('nnController', function($scope, $log) {
        $scope.data = {
            gateOptions: [
                {id: 'and', name: 'AND'},
                {id: 'or', name: 'OR'},
                {id: 'xor', name: 'XOR'},
                {id: 'custom', name: 'CUSTOM'}
            ],
            gateSelected: {id: 'and', name: 'AND'},
            inputNum: 2,
            outputNum: 1,
            hiddenLayers: [2],
            trainingValues: {
                or: [
                    {input: [1, 1], output: 1},
                    {input: [0, 1], output: 1},
                    {input: [1, 0], output: 1},
                    {input: [0, 0], output: 0}
                ],
                and: [
                    {input: [1, 1], output: 1},
                    {input: [0, 1], output: 0},
                    {input: [1, 0], output: 0},
                    {input: [0, 0], output: 0}
                ],
                xor: [
                    {input: [1, 1], output: 0},
                    {input: [0, 1], output: 1},
                    {input: [1, 0], output: 1},
                    {input: [0, 0], output: 0}
                ],
                custom: [
                    {input: [1, 1], output: 0},
                    {input: [0, 1], output: 0},
                    {input: [1, 0], output: 0},
                    {input: [0, 0], output: 0}
                ]
            }
        };

        $scope.trainingData = function(){
            data = $scope.data[trainingValues];
            selected = $scope.data[gateSelected];
            selectedId = selected[id];

            return data[selectedId];
        };

        function Input(id, value, outputs){
            this.id = id;
            this.value = value;
            this.outputs = outputs;
            this.setHigh = function(){
                this.value = 1;
            };
            this.setLow = function(){
                this.value = 0;
            };
        };

        function Neuron(id, layerId, bias, value, inputs, outputs){
            this.id = id;
            this.layerId = id;
            this.bias = bias;
            this.inputs = inputs;
            this.value = value;
            this.outputs = outputs;
        };

        function Weight(input, output, value){
            this.value = value;
            this.input = input;
            this.output = output;
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
            outputs: [],
            hiddenLayers: [],
            biases: []
        };

        function setDefaultData(data){
            data[threshold] = 0.0001;
            data[learningRate] = 0.5;
            data[momentum] = 0.2;

            for (i = 0; i < data[biases].length; i++){
                data[biases][i].setHigh();
            }
        };

        function setUpNetwork(dataList){
            // set up inputs
            for (i = 0; i < $scope.data[inputNum]; i++){
                dataList.inputs[i] = new Input(i, 0, []);
            }

            // set up biases
            for (i = 0; i < $scope.data[hiddenLayers].length + 1; i++){
                dataList.biases[i] = new Input(i, 0, []);
            }

            // set up hidden layer neurons & weights
            for (i = 0; i < $scope.data[hiddenLayers].length; i++){
                bias = dataList.biases[i];
                for (j = 0; j < $scope.data[hiddenLayers][i].length; j++){
                    neuron = new Neuron(j, i, null, 0, [], []);

                    // find input layer
                    input = [];
                    if(i == 0){
                        input = dataList[inputs];
                    }else{
                        input = dataList[hiddenLayers][i-1];
                    }

                    // set up input weights
                    for(k = 0; k < input.length; k++){
                        weight = new Weight(input[k], neuron, Math.random());
                        input[k].outputs.push(weight);
                        neuron.inputs.push(weight);
                    }

                    // set up bias weight
                    biasWeight = new Weight(bias, neuron, Math.random());
                    bias.outputs.push(biasWeight);
                    neuron.bias = biasWeight;

                    dataList.hiddenLayers[i][j] = neuron;
                }
            }

            // set up outputs
            for(i = 0; i < $scope.data.outputNum; i++){
                output = new Output(i, null, [], 0);

                // set up bias weight
                biasWeight = new Weight(dataList.biases[dataList.biases.length - 1],
                                        output, Math.random());
                output.bias = biasWeight;

                // set up input weights
                input = dataList[hiddenLayers][dataList[hiddenLayers]-1];
                for(k = 0; k < input.length; k++){
                    weight = new Weight(input[k], output, Math.random());
                    input[k].outputs.push(weight);
                    output.inputs.push(weight);
                }
            }
        };

        function trainNetwork(){};

        function backPropagation(){};

        function testNetwork(){};

        $scope.startNetwork = function(){
            console.log("Start network");
        };



    });
