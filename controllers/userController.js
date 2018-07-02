const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../models/');

exports.index = function(req, res) {
  db.User.find({})
    .select('-password')
    .populate('posts')
    .exec(function (err, users) {
      if (err) { console.log(err) }
      res.json(users)
    })
}

exports.show = function (req, res) {
  let id = req.params.id
  db.User.findById(id)
    .select('-password')
    .populate('posts')
    .exec(function (err, user) {
      res.json(user)
    })
}
