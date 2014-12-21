var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientHistorySchema = new Schema({
    patient: { type: Schema.Types.ObjectId, ref: 'Patient' },
    doctor: { type: Schema.Types.ObjectId, ref: 'Doctor' },
    disease: String,
    date: {type: Date, default: new Date()}
});

patientHistorySchema.statics.getById = function(id, callback) {
    this.findOne({_id: id})
        .populate('patient')
        .populate('doctor')
        .exec(function(err, history) {
            if (err || !history) return callback(err, null);
            callback(err, history)
        })
};

patientHistorySchema.statics.findAll = function(callback) {
    this.find({})
        .populate('patient')
        .populate('doctor')
        .exec(function(err, history) {
            if (err || !history) return callback(err, null);
            callback(err, history)
        })
};
patientHistorySchema.statics.delById = function(id, callback) {
    this.findByIdAndRemove(id, callback);
};

module.exports = mongoose.model('PatientHistory', patientHistorySchema);
