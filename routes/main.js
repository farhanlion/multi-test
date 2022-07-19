

module.exports = (params) => {

  const matches = require("../controllers/matchesController.js");
  var router = require("express").Router();


  router.route("/").get(matches.findAll(params))
  router.route("/search").get(matches.findAll(params))
  router.route("/login").get(function (req, res) {
    res.render("login.html");
  });
  router.route("/profile").get(function (req, res) {
    res.render("profile.html");
  });

  params.app.use('/', router)

}
