var dal = require("../classes/dal.js");

module.exports.init = function(context,page, callback){
    
    
    
     dal.connect(function(err, db){
        
        db.collection("users").find({}).toArray(function(err, data){
            
             page.data = data;
            callback();
            
        });
        
    });
    
    
    
}