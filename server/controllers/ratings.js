const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');
const Rating = mongoose.model('Rating');

module.exports = {
  create: (req, res) => {
    const { cakeId } = req.params;
    console.log('rating in create', req.body);
    Rating.create(req.body)
    .then(ratingCreated => {
      console.log(1);
      return Cake.findById(cakeId)
      .then(cake => {
        cake.ratings.push(ratingCreated)
        return cake.save();
      })
    })
    .then(result => {
      console.log(2);
      console.log('result in 2nd then', result);
      res.status(200).json(result);
    })
    .catch(err => res.status(500).json(err.errors))
  }
}