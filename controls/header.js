var dal = require("../classes/dal.js");
module.exports.init = function(context, controlContext, callback){
    this.control = controlContext.control;
    dal.connect(function(err, db){        
        db.collection("Menu").find({}).toArray(function(err, data){            
            controlContext.data = data;
            callback(controlContext);            
        });        
    });    
}