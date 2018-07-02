const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs')

const UserSchema = new Schema({
  email: {type: String, unique: true, lowercase: true},
  password: String,
  name: String,
  join_date: Date,
  profile_picture: String,
  posts: [{
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }],
  current_city: String
});

// On Save Hook, encrypt password

UserSchema.pre('save', function (next) {
  const user = this;
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    });

  });
});

UserSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
    if (err) {
      return callback(err);
    }
    callback(null, isMatch);
  });
}

const User = mongoose.model('User', UserSchema);

module.exports = User;
