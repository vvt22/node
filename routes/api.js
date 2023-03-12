const express = require("express");
const router = express.Router();
const Ninja = require("../models/ninja"); //as it is in different folder

// get a list of ninjas from the db
router.get("/ninjas", function (req, res) {
  res.send({ type: "GET" });
});

// add a new ninja to the db
router.post("/ninjas", function (req, res, next) {
  Ninja.create(req.body)
    .then(function (ninja) {
      //create=creating inst + saving the instance ...also it returns a promise
      res.send(ninja);
    })
    .catch(next); //to call the next middleware
});

// update a ninja in the db
router.put("/ninjas/:id", function (req, res, next) {
  Ninja.findByIdAndUpdate({ _id: req.params.id }, req.body)
    .then(function () {
      Ninja.findOne({ _id: req.params.id }).then(function (ninja) {
        res.send(ninja);
      });
    })
    .catch(next);
});
// Ninja.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}).then(function(ninja){
//   res.send(ninja);
// });
// even this works as substitute

// delete a ninja from the db
router.delete("/ninjas/:id", function (req, res, next) {
  Ninja.findByIdAndRemove({ _id: req.params.id })
    .then(function (ninja) {
      res.send(ninja);
    })
    .catch(next);
});

module.exports = router;
