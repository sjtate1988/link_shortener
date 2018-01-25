// This file exports all of the http requests required by the application.
// We need to first obtain the secure database information from our .env file.
require('dotenv').config();
var mongoUser = process.env.MONGOUSER;
var mongoPw = process.env.MONGOPW;
// We require the body-parser module in order to interpret the json files from the MongoDB database.
var bodyParser = require('body-parser');

// We require the database connector mongoose.
var mongoose = require('mongoose');

// Connect to the database.
mongoose.connect('mongodb://'+mongoUser+':'+mongoPw+'@ds113586.mlab.com:13586/linkshortener')

// This variable gives the model for the mongoDB database.
var Linkshortener = require('../models/linkshortener.js');

var urlencodedParser = bodyParser.urlencoded({extended: false});

var info = [];


module.exports = function(app){
/* GET home page. */
app.get('/', urlencodedParser, function(req,res){
  info.push(req.body);
      res.render('index', {LinkShortener: info});
});
/* POST request - when asking for a shorter URL */
app.post('/', urlencodedParser, function(req,res){
      // Get data from the form and push it to mongoDB database.
      var newLinkShortener = Linkshortener(req.body).save(function(err,data){
        if (err) throw err;
        res.json(data);
      });
    });
app.get('/:shortURL', function(req,res){
  console.log(req.params.shortURL);
 Linkshortener.find({shorturl : 'localhost:3000/'+req.params.shortURL}, function(err,data){
   console.log(data);
   res.redirect(data[0].longurl);
 });

});

};
