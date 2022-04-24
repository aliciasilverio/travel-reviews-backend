const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  image: {type: String, required: true},
  rating: {type: Number, default: 0, required: false},
  location: {type: String, required: true},
  experience: {type: String, required: true}
}, {timestamps: true});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;