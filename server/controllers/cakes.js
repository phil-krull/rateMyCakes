const mongoose = require('mongoose');
const Cake = mongoose.model('Cake')

module.exports = {
  index: (req, res) => {
    Cake.find()
    .then(cake => res.status(200).json(cake))
    .catch(err => res.status(500).json(err.errors))
  },
  create: (req, res) => {
    console.log(req.body);
    Cake.create(req.body)
    .then(cakeCreated => res.status(200).json(cakeCreated))
    .catch(err => res.status(500).json(err.errors))
  },
  show: (req, res) => {
    const {cakeId} = req.params;
    Cake.findById(cakeId)
    .then(cake => res.status(200).json(cake))
    .catch(err => res.status(500).json(err.errors))
  },
  update: (req, res) => {
    console.log(req.body)
    Cake.updateMany({}, {image: req.body.image}, {mulit: true})
    .then(response => res.send(true))
    .catch(response => res.send(false))
  }
}