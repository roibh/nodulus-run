var dal = require("../classes/dal.js");
module.exports.init = function(context, controlContext, callback){
    
    
    if(controlContext.data === undefined)
    {
        controlContext.data = {"Title": "Default title", "Text": "default text"}
    }
    
    callback(controlContext);   
}