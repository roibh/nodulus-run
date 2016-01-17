var dal = require("../classes/dal.js");

module.exports.init = function (context, page, callback) {
    dal.connect(function (err, db) {        
        db.collection("Menu").find({"Path": context.req.originalUrl}).toArray(function (err, data) {            
            page.data = data[0];
            callback();            
        });        
    });
}