var dal = require("../classes/dal.js");

 



module.exports.init = function(context, control, callback){
    
    dal.connect(function(err, db){
        
        db.collection("PageControls").find({}).toArray(function(err, data){
            data.controls = [];
            control.data = data;
            
            for(var i=0;i< data.length;i++)
            {
                var cdata = data[i];
                var c = new global.nodulus.classes.Control("pagecontrols", cdata.ControlType.Name);
               // c.attributes = attrBag;
                data.controls.push(c);
            }
               global.nodulus.runner.runChildren(context, data.controls, function () {
                      callback();
               });
        });
        
    });
    
}