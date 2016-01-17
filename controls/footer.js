var dal = require("../classes/dal.js");

var model = {"value": "xxxxxxxxxxxxxxx"}



module.exports.init = function(context, control, callback){
    
    dal.connect(function(err, db){
        
        db.collection("users").find({}).toArray(function(err, data){
            
            control.data = data;
            callback();
            
        });
        
    });
    
}