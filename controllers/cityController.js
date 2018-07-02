const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../models/');

const index = (req, res) => {
  db.City.find({})
    .populate('posts')
    .exec(err, cities) => {
      if (err) { console.log(err) }
      console.log(json.stringify(cities))
      res.json(cities)
    }
  }

module.exports = index
