var restful = require('node-restful');

module.exports = function(app,route){
    
    //setup the controller
    var rest = resful.model(
        'movie',
        app.models.movie
    ).methods(['get','put','post','delete']);


    //Register endpoint with app
    rest.register(app,route);
    
    //return Middleware
    return function(req,res,next){
        next();
    }
}