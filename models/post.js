const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  body: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'userSchema'
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: 'citySchema'
  },
  created: Date,
})

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
