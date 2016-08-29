var mongoose = require('mongoose');

var picSchema = mongoose.Schema({
  title: { type: String, required: true, index: { unique: true } },
  url: { type: String, required: true },
  rating: { type: Number, required: true}
});

var Pic = mongoose.model('Pic', picSchema);

module.exports = Pic;