const cakes = require('./../controllers/cakes');
const ratings = require('./../controllers/ratings');

module.exports = (app) => {
  app.get('/cakes', cakes.index),
  app.post('/cakes', cakes.create),
  app.get('/cakes/:cakeId', cakes.show),
  app.post('/ratings/:cakeId', ratings.create)
  app.put('/cakes', cakes.update)
}




