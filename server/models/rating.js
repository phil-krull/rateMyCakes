const mongoose = require('mongoose');

const RatingSchema = new mongoose.Schema({
  rating: {type: Number, min: [1, 'Rating must be between 1 and 5'], max: [5, 'Rating must be between 1 and 5']},
  comment: {type: String, required: [true, 'Must provide a comment'], minlength: [5, 'Comment must be at least 5 characters long']}
}, {timestamps: true})

mongoose.model('Rating', RatingSchema);

module.exports = RatingSchema;