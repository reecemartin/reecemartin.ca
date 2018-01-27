angular.module('factApp', [])
    .controller('factController', function($scope) {
        $scope.result = function() {
            return $scope.number;
        };
    });
