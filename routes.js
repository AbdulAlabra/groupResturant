var express = require("express"); 
var fs = require("fs"); 
var bodyParser = require("body-parser");
var app = express(); 
var PORT = 3000; 

app.get("/", function(req, res){
    //res.sendFile(path.join(__dirname, "xxx.hmtl"));
    console.log("home page");  
    var html = "<html><title>routes</title><body><h1>home page</h1></body></html>"
})

app.get("/reserve", function(req, res) {
    //res.sendFile(path.join(__dirname, "xxxx.html"));
    console.log("reserve page");
  });
  
  app.get("/table", function(req, res) {
    //res.sendFile(path.join(__dirname, "xxx.html"))
    console.log("table page");
  });
  

//   app.post("/reserve", function(req, res) {
    
//     var newReserve = req.body;
  
   
//     newReserve.routeName = newReserve.name.replace(/\s+/g, "").toLowerCase();
  
//     console.log(newReserve);

//     reservation.push(newReserve);
  
//     res.json(newReserve);
//   });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
 