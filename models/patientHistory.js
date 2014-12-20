var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema({
    patient: {
        type: Schema.ObjectId,
        ref: 'patient'
    },

    doctor: {
        type: Schema.ObjectId,
        ref: 'doctor'
    },

    disease: String,

    date: Date

});

mongoose.model('patient', patientSchema);