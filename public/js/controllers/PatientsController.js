hospital.controller("PatientsController", function($scope, $http) {
    console.log('PatientsController...');
    $scope.patients = [];

    $scope.newPatient= {};

    $http.get('/patients').success(function(data) {
        $scope.patients = data;
    });

    $scope.addNewPatient = function(patient) {   ///?
        $http.post('/patient', angular.toJson(patient)).success(function(data) {
            $scope.patients.push(data);
            $scope.newPatient= {};
        });
    };

    //Todo: Add delete request for patient.


    $scope.deletePatient = function(patientId) {
        $http.delete('/patient/' + patientId).success(function(data) {
            $scope.patients = data;
        });
    };
});
