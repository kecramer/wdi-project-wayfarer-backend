const passportService = require('./services/passport');
const passport = require('passport');
const controller = require('./controllers')


const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignIn = passport.authenticate('local', {session: false});

module.exports = function (app) {
  app.get('/', requireAuth, function (req, res) {
    res.send({message: 'S3CR3T M3SS4G3'});
  });
  app.post('/signup', controller.auth.signup);
  app.post('/signin', requireSignIn, controller.auth.signin);
  app.get('/city', controller.city.index );
  app.get('/city/:id', controller.city.show);
  app.post('/city', controller.city.create);
  app.get('/user', controller.user.index);
  app.get('/user/:id', controller.user.show);
  app.get('/post', controller.post.index);
  app.get('/post/:id', controller.post.show);
  app.post('/post', controller.post.create);
}
