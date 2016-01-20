var dal = require("../classes/dal.js");





module.exports.init = function (context, controlContext, callback) {

cache.get("PageControlsTypes", function (PageControlsTypes) {
    //cache.get("PlaceHolders", "Alias", function (PlaceHolders) {
      //  var placeHolderId = PlaceHolders[controlContext.attributes.alias]._id;
        dal.connect(function (err, db) {
            db.collection("PageControls").find({ "PlaceHolder": controlContext.attributes.alias }).toArray(function (err, data) {
                controlContext.data = { "controls": [] };              

                for (var i = 0; i < data.length; i++) {
                    var cdata = data[i];
                    var c = new global.nodulus.classes.Control("pagecontrols", PageControlsTypes[cdata.ControlType].Name);
                    c.data = cdata;
                    // c.attributes = attrBag;
                    controlContext.data.controls.push(c);
                }

                global.nodulus.runner.runChildren(context, controlContext.data.controls, function () {
                    callback(controlContext);
                });
            });
        });
    });




}