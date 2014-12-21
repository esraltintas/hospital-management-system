hospital.controller("HomeController", function($scope, $http) {
    $scope.patientHistory = [];
    $scope.doctors = [];
    $scope.patients = [];

    $scope.newRecord = {};

    $http.get('/records').success(function(data) {
        $scope.patientHistory = data;
    });

    $http.get('/doctors').success(function(data) {
        $scope.doctors = data;
    });

    $http.get('/patients').success(function(data) {
        $scope.patients = data;
    });

    $scope.addNewRecord = function(record) {
        $http.post('/record', angular.toJson(record)).success(function(data) {
            $scope.patientHistory.push(data);
            $scope.newRecord= {};
        });
    };

    //Todo: Add delete request for record.
    $scope.deleteRecord = function(recordId) {
        $http.delete('/record/' + recordId).success(function(data) {
            $scope.patientHistory = data;
        });
    };
});
