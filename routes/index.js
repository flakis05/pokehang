var express = require('express');
var router = express.Router();
var request = require('request');
var randomNumber = require('../public/javascripts/pokehang.functions').randomNumber;

/* GET home page. */
router.get('/', function(req, res, next) {
  var num = randomNumber();
  request('http://pokeapi.co/api/v2/pokemon/' + num, function(err, resp, body) {
    body = JSON.parse(body);
    console.log(body.name);
    console.log(body.sprites.front_default);
    res.render('index', {pokemon: body.name});
  });
});

module.exports = router;
