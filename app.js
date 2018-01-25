// Obtaining the secure information from the .env file.
require('dotenv').config();
// Setting up the express application.
var express = require('express');
var app = express();
// Require the controller.
var index = require('./controllers/index.js');
// Setting up the view engine.
app.set('view engine','ejs');
// Setting up the static files
app.use('/public', express.static('./public'));
// Fire the controller.
index(app);
// Listening on port 3000.
app.listen(3000);
console.log('listening on port 3000');
