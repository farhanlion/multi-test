module.exports = (params) => {

  var router = require("express").Router();
  var bodyParser = require('body-parser')

  // pages controller
  const pages = require("../controllers/pagesController.js");

  // matches controller
  const matches = require("../controllers/matchesController.js");

  // users controller
  const credential = require("../controllers/loginController.js");

  // create application/json parser
  var jsonParser = bodyParser.json()

  // create application/x-www-form-urlencoded parser
  var urlencodedParser = bodyParser.urlencoded({ extended: false })


  // route to homepage
  router.route("/").get(pages.home(params))

  // search route for homepage
  // router.route("/search").get(matches.findAll(params))

  // route to display page
  router.route("matches/show/:id").get(matches.findOne(params))

  // route to login page
  router.route("/login").get(function (req, res) {
    res.render("pages/login.html");
  });

  // create user
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

  // route to profile page
  router.route("/profile").get(function (req, res) {
    res.render("pages/profile.html");
  });

  params.app.use('/', router)
}
