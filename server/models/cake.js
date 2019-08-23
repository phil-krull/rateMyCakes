const mongoose = require('mongoose');
const RatingSchema = require('./rating');

const CakeSchema = new mongoose.Schema({
  bakerName: {type: String, required: [true, 'Baker must have a name']},
  image: {type: String, required: [true, 'Must provide an image']},
  ratings: [RatingSchema]
}, {timestamps: true})

mongoose.model('Cake', CakeSchema)