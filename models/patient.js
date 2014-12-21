var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema({
    name: String,
    surname: String,
    identityNumber: {type: String, index: { unique: true }},
    phoneNumber: String,
    address: String,
    birthPlace: String,
    birthDate: Date,
    fatherName: String
});

patientSchema.statics.getById = function(id, callback) {
    this.findOne({_id: id})
        .exec(function(err, patient) {
            if (err || !patient) return callback(err, null);
            callback(err, patient)
        })
};

patientSchema.statics.editById = function(id, obj, callback) {
    delete obj._id;
    this.findOneAndUpdate({'_id': id}, obj, { new: true }, callback);
};

patientSchema.statics.delById = function(id, callback) {
    this.findByIdAndRemove(id, callback);
};

module.exports = mongoose.model('Patient', patientSchema);
