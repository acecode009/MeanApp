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


//CORS Support
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-headers', 'Content-Type');
    next();
    
});
app.use('/hello',function(req,res,next){
    res.send("Hello World!");
    next();
})


//connect to mongoDB
mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open', function(){
    
    //load models
    app.models = require("./models/index");
    
    //load routes
    var routes = require('./route');
    _.each(routes, function(controller,route){
        app.use(controller(app,route));
    });
    console.log("Listening on port 3000...");
    app.listen(3000)
})

