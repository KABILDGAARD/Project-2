// Server.js - This file is the initial starting point for the Node/Express server.
// Dependencies
var express = require("express");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3306;

// Requiring our models for syncing
var db = require("./models");

// Static directory
app.use(express.static("public"));


// Set Handlebars.
var exphbs = require("express-handlebars");

//Telling express we want to use main handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
require("./routes/.js")(app);
require("./routes/.js")(app);
require("./routes/.js")(app);
require("./routes/.js")(app);



// Syncing our sequelize models and then starting our Express app
// For sync({}) put force: true to erase data from database every time we reload the server
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
});