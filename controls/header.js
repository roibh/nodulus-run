var dal = require("../classes/dal.js");
module.exports.init = function(context, control, callback){
    this.control = control;
    dal.connect(function(err, db){        
        db.collection("Menu").find({}).toArray(function(err, data){            
            control.data = data;
            callback();            
        });        
    });    
}