var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var doctorSchema = new Schema({
    title: String,
    name: String,
    expertise: String,
    TC: String,
    address: String


});

mongoose.model('doctor', doctorSchema);