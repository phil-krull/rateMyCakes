const fs = require('fs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cakeMyCakes', {useNewUrlParser: true});

const modelsPath = __dirname + '/../models';

fs.readdirSync(modelsPath).forEach(file => {
  if(file.indexOf('.js') >= 0) {
    require(modelsPath + '/' + file);
  }
})