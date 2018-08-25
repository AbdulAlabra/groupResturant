// Dependencies
// =============================================================

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Form Data (DATA)
// =============================================================
var booking = [{
        routeName: "reservations",
        id: 1,
        name: "Allen",
        email: "sss@email.com",
        phone: 9165603230
    },
    {
        routeName: "waitinglist",
        id: 0,
        name: "",
        email: "jjj@nomail.com",
        phone: 9165555555
    }
];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "hot-express.html"));
});

// Displays all characters
app.get("/api/booking", function(req, res) {
    return res.json(booking);
});

// ====================================================================

// // Displays a single character, or returns false


// app.get("/api/characters/:character", function(req, res) {
//     var chosen = req.params.character;

//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//         if (chosen === characters[i].routeName) {
//             return res.json(characters[i]);
//         }
//     }

//     return res.json(false);
// });

//  ==================================================================

// // Create New Characters - takes in JSON input
// app.post("/api/characters", function(req, res) {
//     // req.body hosts is equal to the JSON post sent from the user
//     // This works because of our body-parser middleware
//     var newcharacter = req.body;

//     console.log(newcharacter);

//  ===================================================================

//     // We then add the json the user sent to the character array
//     characters.push(newcharacter);

//     // We then display the JSON to the users
//     res.json(newcharacter);
// });

// Starts the server to begin listening
// =======================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});