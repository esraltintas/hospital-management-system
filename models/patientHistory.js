var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientHistorySchema = new Schema({
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

mongoose.model('patientHistory', patientHistorySchema);