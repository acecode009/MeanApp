var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

//create the application

var app = express();

//Middleware for REST APIs
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

//connect to mongoDB
mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open', function(){
    console.log("Listening on port 3000...");
    app.listen(3000)
})

