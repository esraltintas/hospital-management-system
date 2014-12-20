var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema({
    name: String,
    TC: String,
    address: String,
    birthplace: String,
    birtdate: Date,
    FatherName: String


});

mongoose.model('patient', patientSchema);