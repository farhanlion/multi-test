const bodyParser = require("body-parser");
module.exports = (params, passport) => {

  const pages = require("../controllers/pagesController.js");
  const matches = require("../controllers/matchesController.js");
  const credential = require("../controllers/loginController.js");

  var router = require("express").Router();
  var bodyParser = require('body-parser')

  //create application/json parser
  var jsonParser = bodyParser.json()

  // create application/x-www-form-urlencoded parser
  var urlencodedParser = bodyParser.urlencoded({ extended: false })

  // route to homepage
  router.route("/").get(pages.home(params))

  // search route for homepage
  router.route("/search").get(matches.findAll(params))

  // route to display page
  router.route("matches/show/:id").get(matches.findOne(params))

  // route to login page
  router.route("/login").get(function (req, res) {
    res.render("pages/login.html");
  });

  // create user
  router.post("/login/create",urlencodedParser, async function (req, res, next) {
    var result = credential.create(req.body)
    result
        .then((response) => {
          req.toastr.success('Successfully logged in.', "You're in!");
          res.render("profile.html", {req: req});
          res.end();
        })
        .catch(err =>{
          //error
          console.log(err)
          res.render('login.html', { req: req });
          req.toastr.error('Invalid credentials.');
          res.end();
        })
  });


  router.post(
      "/login/access",
      urlencodedParser,
      passport.authenticate('local',{
        successRedirect: '/profile',
        failureRedirect: '/login',
        session: false
      })
  );

  // route to profile page
  router.route("/profile").get(function (req, res) {
    res.render("pages/profile.html");
  });

  params.app.use('/', router)
}
