const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja"); //as it is in different folder

// get a list of ninjas from the db
router.get("/ninjas", function (req, res) {
  res.send({ type: "GET" });
});

// add a new ninja to the db
router.post("/ninjas", function (req, res) {
  Ninja.create(req.body).then(function (ninja) {
    //create=creating inst + saving the instance ...also it returns a promise
    res.send(ninja);
  });
});

// update a ninja in the db
router.put("/ninjas/:id", function (req, res) {
  res.send({ type: "PUT" });
});

// delete a ninja from the db
router.delete("/ninjas/:id", function (req, res) {
  res.send({ type: "DELETE" });
});

module.exports = router;
