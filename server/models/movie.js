var mongoose = require('mongoose')

//create schema for movie
var movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

//export schema
module.exports = movieSchema;
