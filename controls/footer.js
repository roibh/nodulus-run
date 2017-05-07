

var model = { "value": "xxxxxxxxxxxxxxx" }



module.exports.init = function (context, controlContext) {

    controlContext.data = model;
    return controlContext;

}