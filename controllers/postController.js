const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../models/');

exports.index = function(req, res) {
  db.Post.find({})
  .populate('author')
  .populate('city')
  .exec(function (err, posts) {
      if (err) { console.log(err) }
      res.json(posts)
    })
}

exports.show = function (req, res) {
  let id = req.params.id
  db.Post.findById(id, function (err, post) {
      res.json(post)
    })
}

exports.create = function (req, res) {
  db.Post.create(req.body, function (err, newPost) {
    if (err) { console.log(err) }
    res.json(newPost)
  })
}
