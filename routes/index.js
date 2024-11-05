var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  console.log("usernames will be logged here - wip");
});

router.get("/new", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/new", function (req, res, next) {
  console.log("username to be saved: ", req.body.username);
});

module.exports = router;
