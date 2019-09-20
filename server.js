const express = require("express");

const app = express();

var bodyParser = require("body-parser");

const Port = process.env.PORT || 8080;

// Requiring our models for syncing
// var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Static directory
// app.use(express.static('public'));

// Routes
// =============================================================
const apiRoutes = require("./routes/index.js");
app.use(apiRoutes);

//connects all routes
// app.use(apiRoutes);

app.listen(Port, () => console.log(`Server started on port ${Port}`));
