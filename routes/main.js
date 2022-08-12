const matches = require("../controllers/matchesController");
const credential = require("../controllers/loginController");
module.exports = (params) => {

  const matches = require("../controllers/matchesController.js");
  const credential = require("../controllers/loginController.js");
  var router = require("express").Router();
  var bodyParser = require('body-parser')

  // create application/json parser
  var jsonParser = bodyParser.json()

  // create application/x-www-form-urlencoded parser
  var urlencodedParser = bodyParser.urlencoded({ extended: false })

  router.route("/").get(matches.findAll(params))

  router.route("matches/show/:id").get(matches.findOne(params))
  router.route("/search").get(matches.findAll(params))

  router.route("/login").get(function (req, res) {
    res.render("pages/login.html");
  });

  router.post("/login/create",urlencodedParser, async function (req, res, next) {
    var result = credential.create(req.body)

    result.then((response) => {
      if(response.status === 200) {
        res.render("pages/profile.html");
        res.end();
      }
      else {
        console.log("error")
        res.redirect('/');
        res.end();
        //error
      }
    });
  });

  router.post("/login/access",urlencodedParser,async function (req, res, next) {
    result = credential.findOne(req.body);

    result.then((response) => {
      console.log(response)
      if (response.length > 0) {
        res.redirect('/profile');
        res.end();
      } else {
        //error
        console.log("error")
        res.redirect('/');
        res.end();
      }
    });
  });

  router.route("/profile").get(function (req, res) {
    res.render("pages/profile.html");
  });
  router.route("/upload").get(function (req, res) {
    res.render("pages/upload.html");
  });

  params.app.use('/', router)
}
