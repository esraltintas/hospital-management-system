hospital.controller("DoctorsController", function($scope, $http) {
    $scope.doctors = [];

    $scope.newDoctor= {};

    $http.get('/doctors').success(function(data) {
        $scope.doctors = data;
    });

    $scope.addNewDoctor = function(doctor) {   ///?
        $http.post('/doctor', angular.toJson(doctor)).success(function(data) {
            $scope.doctors.push(data);
            $scope.newDoctor= {};
        });
    };

    $scope.deleteDoctor = function(doctorId) {
        $http.delete('/doctor/' + doctorId).success(function(data) {
            $scope.doctors = data;
        });
    };
});
