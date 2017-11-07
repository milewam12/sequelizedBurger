var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App

var app = express();
var port = process.env.PORT || 8080;


// Requiring our models for syncing
var db = require("./models");


app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes 
var routes = require("./routes/api-routes.js");
app.use(app.router);
routes.initialize(app);

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  