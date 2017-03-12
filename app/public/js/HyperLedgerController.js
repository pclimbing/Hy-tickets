var myApp = angular.module('myApp',[]);
myApp.controller('HyperLedgerController', function($scope, $http) {
    $scope.numberOfTickets = 0;
    $scope.numberOfMovies = 0;

    $scope.getData = function(){
        $http({
            method: 'POST',
            url: 'http://127.0.0.1:7050/chaincode/',
            headers: {'Content-Type': 'application/json'},
            data: `{
                  "jsonrpc": "2.0",
                  "method": "query",
                  "params": {
                    "type": 1,
                    "chaincodeID": {
                      "name": "mystart"
                    },
                    "ctorMsg": {
                      "function": "read",
                      "args": [
                        "san"
                      ]
                    },
                    "secureContext": "admin"
                  },
                  "id": 2
                }`)
        }).success(function(response) {
            console.log("Success " + JSON.stringify(response));
            console.log("here now1")

        }).error(function(response) {
            console.log("Error " + JSON.stringify(response));
            console.log("here now2")
        });
    });
});