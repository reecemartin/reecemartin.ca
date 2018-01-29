angular.module('rootApp', ['factorialApp', 'neuralNetApp', 'fibonacciApp'])
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

angular.module('fibonacciApp', [])
    .controller('fibController', function($scope, $log) {

        $scope.number = 1;

        $scope.prod = 1;

        $scope.fibonacci = function() {
            let i = 1;
            let f = 0;
            let s = 1;
            $scope.prod = 1;
            while(i <= $scope.number){
                    $scope.prod = f + s;
                    f = s;
                    s = $scope.prod;
                    i++;

            }
        };

    });


angular.module('neuralNetApp', [])
    .controller('nnController', function($scope, $log) {
        $scope.setup = false;
        $scope.data = {
            running: false,
            complete: false,
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
            biases: [],
            iterations: 0
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
                let inputs = $scope.results[resultNum]['inputs']
                let result = testNetwork(inputs);
                $scope.results[resultNum]['output'] = result;
                console.log(inputs + " = " + result);
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
            if(!$scope.setup){
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
                output = new Output(1, null, [], 0);
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
                $scope.setup = true;
            }
        };

        function trainNetwork(){
            var tData = $scope.trainingData();
            var data = $scope.nnData;

            while (getAverageError() > $scope.nnData['threshold']){
                let weightDeltas = [[[0, 0], [0, 0]]];
                let biasDeltas = [[0, 0]];
                let outputWeightDeltas = [0, 0];
                let outputBiasDelta = 0;

                for (let i = 0; i < 4; i++){

                    // gradient calculation
                    // output neuron
                    console.log("train network with " + tData[i]['inputs']);
                    let output = data['output'];
                    let outputValue = testNetwork(tData[i]['inputs']);
                    let outputError = outputValue - tData[i]['output'];
                    let outputSum = output.bias.value;
                    let outputGradients = [];
                    for(let outputInputNum = 0; outputInputNum < output.inputs.length; outputInputNum++){
                        input = output.inputs[outputInputNum];
                    	sum += input.input.value * input.value;
                    }
                    let outputDelta = activationFunctionDerivative(outputSum);

                    // TODO: improve this to accomodate multiple layers
                    for(let j = 0; j < output.inputs.length; j++){
                        let input = output.inputs[j];
                        let neuron = input.input;
                        let inputSum = neuron.bias.value;
                        for(let k = 0; k < neuron.inputs.length; k++){
                            let oInput = neuron.inputs[k];
                            oNeuron = oInput.input;
                            inputSum += oNeuron.value * oInput.value;
                        }
                        outputGradients.push(activationFunction(inputSum) * outputDelta);
                    }
                    let outputBiasGradient = outputDelta;


                    // hidden layer neurons
                    // TODO: improve this so that multiple layers can be accomodated
                    let hiddenLayerGradients = [[]];
                    let hiddenLayerBiasGradients = [[]];
                    layer = $scope.nnData['hiddenLayers'][0];
                    for(let j = 0; j < layer.length; j++){
                        let neuron = layer[j];
                        hiddenLayerGradients[0].push([]);
                        let sum = neuron.bias.value;
                        for(let k = 0; k < neuron.inputs.length; k++){
                            let input = neuron.inputs[k];
                            sum += input.input.value * input.value;
                        }
                        let delta = activationFunctionDerivative(sum) * neuron.outputs[0].value * outputDelta;
                        hiddenLayerBiasGradients[0].push(delta);

                        for (let k = 0; k < neuron.inputs.length; k++){
                            hiddenLayerGradients[0][j].push(
                                delta * neuron.inputs[k].input.value);
                        }
                    }

                    // backPropagation for all weights
                    // TODO: adapt to multiple layers
                    for(let i = 0; i < layer.length; i++){
                        let neuron = layer[i];
                        let neuronGradients = hiddenLayerGradients[0][i];
                        let biasGradient = hiddenLayerBiasGradients[0][i];
                        let neuronWeightDeltas = weightDeltas[0][i];
                        let neuronBiasDelta = biasDeltas[0][i];
                        for (let j = 0; j < neuron.inputs.length; j ++){
                            let newDelta = backPropagation(neuronGradients[j], neuronWeightDeltas[j]);
                            neuron.inputs[j].value += newDelta;
                            weightDeltas[0][i][j] = newDelta;
                        }
                        let newBiasDelta = backPropagation(biasGradient, neuronBiasDelta);
                        neuron.bias.value += newBiasDelta;
                        biasDeltas[0][i] = newBiasDelta;
                    }
                }
                $scope.nnData['iterations'] += 1;
            }
            $scope.data['complete'] = true;
        }

        function getAverageError(){
            let tData = $scope.trainingData();
            $scope.getResults();
            let error = 0;
            for (let i = 0; i < 4; i++){
                error += Math.pow(tData[i]['output'] - $scope.results[i]['output'], 2);
            }
            console.log(error/4);
            return error / 4;
        }

        function backPropagation(gradient, delta){
            return $scope.nnData['learningRate'] * gradient + $scope.nnData['momentum'] * delta;
        }

        function testNetwork(inputs){
            dataList = $scope.nnData;
            for (let inputNum = 0; inputNum < inputs.length; inputNum++){
                dataList['inputs'][inputNum].value = inputs[inputNum];
            }

            // calculate neurons in each layer
            for(let layerNum = 0; layerNum < dataList['hiddenLayers'].length; layerNum++){
                layer = dataList['hiddenLayers'][layerNum];
                for(let j = 0; j < layer.length; j++){
                    neuron = layer[j];
            		sum = neuron.bias.value;
            		for(let k = 0; k < neuron.inputs.length; k++){
                        input = neuron.inputs[k];
            			sum += input.input.value * input.value;
            		}
            		neuron.value = activationFunction(sum);
            	}
            }

            // calculate output
            output = dataList['output'];
            sum = output.bias.value;
            for(let outputInputNum = 0; outputInputNum < output.inputs.length; outputInputNum++){
                input = output.inputs[outputInputNum];
            	sum += input.input.value * input.value;
            }
            return activationFunction(sum);
        }

        function activationFunction(value){
            return 1 / (1 + Math.pow(Math.E, -value));
        }

        function activationFunctionDerivative(value){
            return (Math.pow(Math.E, -value)) / Math.pow((1 + Math.pow(Math.E, -value)), 2);
        }

        $scope.startNetwork = function(){
            $scope.data['running'] = true;
            trainNetwork();


            $scope.data['running'] = false;
        };



});
