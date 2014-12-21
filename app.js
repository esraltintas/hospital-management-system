var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var Doctor = require('./models/Doctor');
var Patient = require('./models/Patient');
var PatientHistory = require('./models/PatientHistory');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);



/* Doctor Requests */

// Get Doctors
app.get('/doctors', function(req, res){
    Doctor.find(function(err, doctors) {
        res.send(doctors);
    });
});

// Get a Doctor
app.get('/doctor/:id', function(req, res){
    Doctor.getById(req.params.id, function(err, doctor) {
        res.send(doctor);
    });
});

// Create New Doctor
app.post('/doctor', function(req, res) {
    Doctor.create(req.body, function(err, doctor) {
        res.send(doctor);
    });
});

// Update a Doctor
app.put('/doctor/:id', function(req, res) {
    Doctor.editById(req.params.id, req.body, function(err, doctor) {
        res.send(doctor);
    });
});

// Delete a Doctor
app.delete('/doctor/:id', function(req, res) {
    Doctor.delById(req.params.id, function(err, doctor) {
        Doctor.find(function(err, doctors) {
            res.send(doctors);
        });
    });
});



/* Patient Requests */

// Get All Patients
app.get('/patients', function(req, res){
    Patient.find(function(err, patients) {
        res.send(patients);
    });
});

//Todo: Complete all patient requests.

// Get a Patient
app.get('/patient/:id', function(req, res){
    Patient.getById(req.params.id, function(err, patients) {
        res.send(patients);
    });
});

// Create New Patient
app.post('/patient', function(req, res) {
    Patient.create(req.body, function(err, patient) {
        res.send(patient);
    });
});

// Update a Patient
app.put('/patient/:id', function(req, res) {
    Patient.editById(req.params.id, req.body, function(err, patient) {
        res.send(patient);
    });
});

// Delete a Patient
app.delete('/patient/:id', function(req, res) {
    Patient.delById(req.params.id, function(err, patient) {
        Patient.find(function(err, patient) {
            res.send(patient);
        });
    });
});



/* Records Requests */

// Get All Records
app.get('/records', function(req, res){
    PatientHistory.findAll(function(err, histories) {
        res.send(histories);
    });
});

// Get a Record
app.get('/record/:id', function(req, res){
    PatientHistory.getById(req.params.id, function(err, history) {
        res.send(history);
    });
});

// Create New Record
app.post('/record', function(req, res) {
    PatientHistory.create(req.body, function(err, record) {
        PatientHistory.getById(record._id, function(err, history) {
            res.send(history);
        });
    });
});

//Todo: Complete all record requests.

// Update a PatientHistory
app.put('/record/:id', function(req, res) {
    PatientHistory.editById(req.params.id, req.body, function(err, record) {
        res.send(record);
    });
});

// Delete a PatientHistory
app.delete('/record/:id', function(req, res) {
    PatientHistory.delById(req.params.id, function(err, record) {
        PatientHistory.find(function(err, record) {
            res.send(record);
        });
    });
});


module.exports = app;
