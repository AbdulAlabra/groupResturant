var express = require("express");
var fs = require("fs");
var bodyParser = require("body-parser");
var app = express();
var path = require("path");
var PORT = 3000;

var reservation = []; 


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "hot-express.html"));
    console.log("home page");
    //var html = "<html><title>routes</title><body><h1>home page</h1></body></html>"

})


app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "Reservation.html"));
    console.log("reserve page");
});

app.get("/view-tables", function (req, res) {
    res.sendFile(path.join(__dirname, "view-tables.html"))
    console.log("table page");
});


app.post("/reserve", function (req, res) {

    var newReserve = req.body;


    newReserve.routeName = newReserve.name.replace(/\s+/g, "").toLowerCase();

    console.log(newReserve);

    reservation.push(newReserve);

    res.json(newReserve);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
