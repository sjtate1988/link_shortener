// This file creates the basic schema of associating a longurl and shorturl saved as schemes to be used for the mongoose database in the application.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var URLTranslator = new Schema ({
    longurl : String,
    shorturl : String
});

var LinkShortenerModel = mongoose.model('LinkShortener', URLTranslator);


module.exports = LinkShortenerModel;
