var express = require('express');
var mongoose = require('mongoose');
var request = require('request');

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({
  extended: false
});

var parkinglot = require('../models/parkinglot');


var router = express.Router();

 //==================================GoogleMap API==================================


router.route('/googlemap/:parkinglot_id')

  .get(function(req, res) {
console.log(req.params.parkinglot_id);
    parkinglot.findOne({
      //park_area: req.params.parkinglot_id
     park_name: req.params.parkinglot_id
    }).exec(function(err, result) {
      res.send(result);
     })
    })

module.exports = router;
