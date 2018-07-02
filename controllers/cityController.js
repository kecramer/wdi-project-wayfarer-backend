const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../models/');

exports.index = function (req, res) {
  db.City.find({})
  .populate('posts')
  .exec(function (err, cities) {
    if (err) { console.log(err) }
    res.json(cities)
  })
}

exports.show = function (req, res) {
  let id = req.params.id
  db.City.findById(id)
  .populate('posts')
  .exec(function (err, city) {
    if (err) {
      console.log(err)
      res.sendStatus(500)
    }
    res.json(city)
  })
}
