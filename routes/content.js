
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
    
   
     
   
     
    // // //  
    // // //  //prepare the context object
    // // //  var uuid = contextIdGenerator.v4();
    // // //  req.requestId = uuid;
    // // //  global.contexts[uuid] = {
    // // //      res: res, 
    // // //      req:req,
    // // //      modelData: {},
    // // //      render: function(){
    // // //          var fileContent = fs.readFileSync("views/index.ejs", "utf-8");
    // // //        this.renderResult = ejs.render(fileContent, this.modelData);
    // // //          
    // // //         
    // // //          
    // // //          //this.res.render('index',this.modelData );             
    // // //      }
    // // //  }
    // // //  
    // // //  
    // // //  
    // // //  
    // // //  
    // // //  
    // // //  global.contexts[uuid].modelData = {"xxxx": 1,        
    // // //      header: function(){
    // // //      var fileContent = fs.readFileSync("views/controls/header.ejs", "utf-8");
    // // //      return ejs.render(fileContent , {
    // // //          init: function(){
    // // //          var instance = this;
    // // //          dal.connect(function(err,db){
    // // //             db.collection("users").find({}).toArray(function(err, resultData){
    // // //                 instance.headerText = "roi";         
    // // //                  emitter.emit("renderComplete", uuid);          
    // // //                // global.contexts[uuid].render();
    // // //             });                  
    // // //          });
    // // //      },
    // // //          headerText: "ffffffffffffffff"
    // // //          
    // // //      });
    // // //        
    // // //  }};
    // // //   global.contexts[uuid].render();
     
     // global.contexts[uuid].render('index',modelData );
      
      
 
     
 
});



emitter.addListener("renderComplete", function (contextId) {
    global.contexts[contextId].res.send(global.contexts[contextId].renderResult);
    
})

module.exports = router;



