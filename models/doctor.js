var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var doctorSchema = new Schema({
    name: String,
    surname: String,
    identityNumber: {type: String, index: { unique: true }},
    title: String,
    expertise: String,
    address: String
});

doctorSchema.statics.getById = function(id, callback) {
    this.findOne({_id: id})
        .exec(function(err, doctor) {
            if (err || !doctor) return callback(err, null);
            callback(err, doctor)
        })
};

doctorSchema.statics.editById = function(id, obj, callback) {
    delete obj._id;
    this.findOneAndUpdate({'_id': id}, obj, { new: true }, callback);
};

doctorSchema.statics.delById = function(id, callback) {
    this.findByIdAndRemove(id, callback);
};

module.exports = mongoose.model('Doctor', doctorSchema);
