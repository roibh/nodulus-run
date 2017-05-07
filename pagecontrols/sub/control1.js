
module.exports.init = function (context, controlContext) {

    if (controlContext.data === undefined) {
        controlContext.data = { "Title": "Default title", "Text": "default text" }
    }
    return controlContext;

    // this.control = controlContext.control;
    // dal.connect(function(err, db){        
    //     db.collection("Menu").find({}).toArray(function(err, data){            
    //         controlContext.data = data;
    //         callback(controlContext);            
    //     });        
    // });    
}