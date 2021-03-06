//Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//Create Express App
var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Require Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Server Listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
