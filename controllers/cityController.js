const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('../models/')

module.exports = {
  index: (req, res) => {
    //get all debates
    db.City.find({})
      .populate('posts')
      .exec(err, cities) => {
        if (err) { console.log(err) }
        console.log(json.stringify(cities))
        res.json(cities)
      }
    }
  }
