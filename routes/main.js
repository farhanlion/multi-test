module.exports = (params) => {

  const matches = require("../controllers/matchesController.js");
  var router = require("express").Router();

  router.route("/").get(matches.findAll(params))

  router.route("matches/show/:id").get(matches.findOne(params))
  router.route("/search").get(matches.findAll(params))

  router.route("/login").get(function (req, res) {
    res.render("pages/login.html");
  });
  router.route("/profile").get(function (req, res) {
    res.render("pages/profile.html");
  });
  router.route("/upload").get(function (req, res) {
    res.render("pages/upload.html");
  });

  params.app.use('/', router)
}
