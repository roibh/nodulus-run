console.log(">>>>> starting application");
var core = require('@nodulus/core');
core.static('/', '/public');
module.exports = core;
