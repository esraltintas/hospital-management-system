var Doctor = require('./models/Doctor');
var Patient = require('./models/Patient');
var PatientHistory = require('./models/PatientHistory');
var mongoose = require('mongoose');
var mongoConnectionString = 'mongodb://localhost/hospital';

var doctor1 = {
    name: 'Hakan Yılmaz',
    identityNumber: '123456678865',
    title: 'Asistan',
    expertise: 'Kulak Burun Boğaz',
    address: 'Adres'
};

var doctor2 = {
    name: 'Ayse Kaplan',
    identityNumber: '1232323678865',
    title: 'Baş Hekim',
    expertise: 'Göz',
    address: 'Adres'
};

var patient1 = {
    name: 'Ali Tutar',
    identityNumber: '24345346543',
    phoneNumber: '12312312',
    address: 'Adres',
    birthPlace: 'Istanbul',
    birthDate: 1419039297526,
    fatherName: 'Kabak'
};

var patient2 = {
    name: 'Esra Altıntaş',
    identityNumber: '234523452345',
    phoneNumber: '12312312',
    address: 'Adres',
    birthPlace: 'Canakkale',
    birthDate: 1419039297526,
    fatherName: 'Kabak'
};

var startSetup = function() {
    mongoose.connect(mongoConnectionString);
    mongoose.connection.on('error', function(err) {
        console.log('MongoDB returned error.', err);
        process.exit(1);
    });

    mongoose.connection.once('open', function() {
        Doctor.create(doctor1, function(err, doctor) {
            console.log('doctor 1 created.');
            Patient.create(patient1, function(err, patient) {
                console.log('patient 1 created.');
                var patientHistory = {
                    patient: patient._id,
                    doctor: doctor._id,
                    disease: 'Kirik',
                    date: 1419039297526
                };

                PatientHistory.create(patientHistory, function(err, history) {
                    console.log('history 1 created.');
                });
            });
        });

        Doctor.create(doctor2, function(err, doctor) {
            console.log('doctor 2 created.');
            Patient.create(patient2, function(err, patient) {
                console.log('patient 2 created.');
                var patientHistory = {
                    patient: patient._id,
                    doctor: doctor._id,
                    disease: 'Cikik',
                    date: 1419039297526
                };

                PatientHistory.create(patientHistory, function(err, history) {
                    console.log('history 2 created.');
                });
            });
        });
    });

};

startSetup();
