const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../models/');

exports.index = (req, res) => {
  db.City.find({}, (err, cities) => {
    if (err) { console.log(err) }
    res.json(cities)
  })
}

exports.show = (req, res) => {
  let id = req.params.id
  db.City.findById(id, (err, city) => {
    res.json(city)
  })
}
