const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/project-wayfarer');

module.exports = {
  City: require('./city.js'),
  Post: require('./post.js'),
  User: require('./user.js')
};
