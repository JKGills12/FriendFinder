//Dependencies
const express = require("express");
const path = require("path");
const bodyparser = require("body-parser");

//Initiate express
const app = express();

//Initialize server
const PORT = process.env.PORT || 8080;

// Sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


//Listener
app.listen(process.env.PORT || 8080, function() {
console.log("App listening on PORT: 8080");
});
