const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../models/');

exports.index = function(req, res) {
  db.Post.find({}, function (err, posts) {
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
