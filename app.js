const express = require("express");
const bodyParser = require("body-parser");
//install as:npm install body ....is needed otherwise body is undefined
const mongoose = require("mongoose");

// set up express app
const app = express();
//connect to db
mongoose.connect("mongodb://0.0.0.0:27017/ninjadb"); //connection to local storage

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use("/api", require("./routes/api"));

//error handling middleware
app.use(function (err, req, res, next) {
  res.status(422).send({ error: err.message }); //set the status
});

// listen for requests
app.listen(3000, function () {
  console.log("now listening for requests");
});
