var express = require('express');
var router = express.Router();
const EventEmitter = require("events").EventEmitter;
const emitter = new EventEmitter();

var Runner = require('../run/runner.js');
global.contexts = {};
var contextIdGenerator = require('node-uuid');
router.get('/xxxxxxxxxxxxxxxxxxxxxx*', function (req, res) {     
     var context = new Context(req,res);
     Runner.run(context); 
});

emitter.addListener("renderComplete", function (contextId) {
    global.contexts[contextId].res.send(global.contexts[contextId].renderResult);    
});

module.exports = router;



