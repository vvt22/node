const express = require("express");
const bodyParser = require("body-parser");
//install as:npm install body ....is needed otherwise body is undefined

// set up express app
const app = express();

// use body-parser middleware
app.use(bodyParser.json());

// initialize routes
app.use("/api", require("./routes/api"));

// listen for requests
app.listen(3000, function () {
  console.log("now listening for requests");
});
