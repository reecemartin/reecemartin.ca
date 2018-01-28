angular.module('rootApp', ['factorialApp', 'neuralNetApp'])
    .controller('rootController', function($scope, $log) {
    });



angular.module('factorialApp', [])
    .controller('factController', function($scope, $log) {

        $scope.number = 1;

        $scope.prod = 1;

        $scope.factorial = function() {
            let i = 1;
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
            running: false,
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
                    {inputs: [1, 1], output: 1},
                    {inputs: [0, 1], output: 1},
                    {inputs: [1, 0], output: 1},
                    {inputs: [0, 0], output: 0}
                ],
                and: [
                    {inputs: [1, 1], output: 1},
                    {inputs: [0, 1], output: 0},
                    {inputs: [1, 0], output: 0},
                    {inputs: [0, 0], output: 0}
                ],
                xor: [
                    {inputs: [1, 1], output: 0},
                    {inputs: [0, 1], output: 1},
                    {inputs: [1, 0], output: 1},
                    {inputs: [0, 0], output: 0}
                ],
                custom: [
                    {inputs: [1, 1], output: 0},
                    {inputs: [0, 1], output: 0},
                    {inputs: [1, 0], output: 0},
                    {inputs: [0, 0], output: 0}
                ]
            }
        };


        $scope.nnData = {
            threshold: 0.0001,
            learningRate: 0.5,
            momentum: 0.2,
            inputs: [],
            output: null,
            hiddenLayers: [],
            biases: []
        };

        $scope.results = [
            {inputs: [1, 1], output: null},
            {inputs: [0, 1], output: null},
            {inputs: [1, 0], output: null},
            {inputs: [0, 0], output: null}
        ];

        $scope.trainingData = function(){
            data = ($scope.data)['trainingValues'];
            selected = ($scope.data)['gateSelected'];
            selectedId = selected['id'];

            return data[selectedId];
        };

        $scope.getResults = function(){
            let resultNum = 0;
            while(resultNum < 4){
                console.log("results: " + resultNum);
                $scope.results[resultNum]['output'] = testNetwork($scope.results[resultNum]['inputs']);
                resultNum += 1;
            }
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
        }

        function Neuron(id, layerId, bias, value, inputs, outputs){
            this.id = id;
            this.layerId = layerId;
            this.bias = bias;
            this.inputs = inputs;
            this.value = value;
            this.outputs = outputs;
        }

        function Weight(input, output, value){
            this.value = value;
            this.input = input;
            this.output = output;
        }

        function Output(id, bias, inputs, value){
            this.id = id;
            this.bias = bias;
            this.inputs = inputs;
        }

        function setDefaultData(){
            data = $scope.nnData;
            data['threshold'] = 0.0001;
            data['learningRate'] = 0.5;
            data['momentum'] = 0.2;

            for (let l = 0; l < data['biases'].length; l++){
                data['biases'][l].setHigh();
            }
        }

        $scope.setUpNetwork = function(){
            dataList = $scope.nnData;
            // set up inputs
            for (let i = 0; i < $scope.data['inputNum']; i++){
                dataList['inputs'][i] = new Input(i, 0, []);
            }

            // set up biases
            for (let i = 0; i < $scope.data['hiddenLayers'].length + 1; i++){
                dataList['biases'][i] = new Input(i, 1, []);
            }

            // set up hidden layer neurons & weights
            for (let i = 0; i < $scope.data['hiddenLayers'].length; i++){
                bias = dataList['biases'][i];
                dataList['hiddenLayers'][i] = [];
                for (let j = 0; j < $scope.data['hiddenLayers'][i]; j++){
                    neuron = new Neuron(j, i, null, 0, [], []);

                    // find input layer
                    inputs = [];
                    if(i == 0){
                        inputs = dataList['inputs'];
                    }else{
                        inputs = dataList['hiddenLayers'][i-1];
                    }

                    // set up input weights
                    for(let k = 0; k < inputs.length; k++){
                        weight = new Weight(inputs[k], neuron, Math.random());
                        inputs[k].outputs.push(weight);
                        neuron.inputs.push(weight);
                    }

                    // set up bias weight
                    biasWeight = new Weight(bias, neuron, Math.random());
                    bias.outputs.push(biasWeight);
                    neuron.bias = biasWeight;

                    dataList['hiddenLayers'][i][j] = neuron;
                }
            }

            // set up output
            output = new Output(i, null, [], 0);
            bias = dataList['biases'][dataList['biases'].length - 1];

            // set up bias weight
            biasWeight = new Weight(bias, output, Math.random());
            output.bias = biasWeight;
            bias.outputs.push(biasWeight);


            // set up input weights
            inputs = dataList['hiddenLayers'][dataList['hiddenLayers'].length- 1];
            for(let k = 0; k < inputs.length; k++){
                weight = new Weight(inputs[k], output, Math.random());
                inputs[k].outputs.push(weight);
                output.inputs.push(weight);
            }
            dataList['output'] = output;

            // initial test
            $scope.getResults();
        };

        function trainNetwork(){

        }

        function backPropagation(){}

        function testNetwork(inputs){
            console.log("test network: " + inputs);
            dataList = $scope.nnData;
            for (let inputNum = 0; inputNum < inputs.length; inputNum++){
                dataList['inputs'][inputNum].value = inputs[inputNum];
            }

            // calculate neurons in each layer
            for(let layerNum = 0; layerNum < dataList['hiddenLayers'].length; layerNum++){
                console.log("layer " + layerNum);
                layer = dataList['hiddenLayers'][layerNum];
                for(j = 0; j < layer.length; j++){
                    console.log("neuron " + j);
                    neuron = layer[j];
            		sum = neuron.bias.value;
            		for(k = 0; k < neuron.inputs.length; k++){
                        console.log("neuron input" + k);
                        input = neuron.inputs[k];
            			sum += input.input.value * input.value;
            		}
            		neuron.value = activationFunction(sum);
            	}
            }

            // calculate output
            output = dataList['output'];
            sum = output.bias.value;
            console.log("calculate output");
            for(let outputInputNum = 0; outputInputNum < output.inputs.length; outputInputNum++){
                console.log("output input " + outputInputNum);
                input = output.inputs[outputInputNum];
            	sum += input.input.value * input.value;
            }
            return activationFunction(sum);
        }

        function activationFunction(value){
            return 1 / (1 + Math.pow(Math.E, -value));
        }

        $scope.startNetwork = function(){
            $scope.data['running'] = true;



            $scope.data['running'] = false;
        };



    });
