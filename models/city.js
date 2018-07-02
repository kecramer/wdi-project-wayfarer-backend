const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: String,
  thumbnail: String,
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'postSchema'
  }]
})

const City = mongoose.model('City', CitySchema);

module.exports = City;
