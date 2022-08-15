module.exports = (params, passport) => {
    const matches = require("../controllers/matchesController");
    const credential = require("../controllers/loginController");

      var router = require("express").Router();
      var bodyParser = require('body-parser');

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
          }));

      router.route("/profile").get(function (req, res) {
        res.render("pages/profile.html");
      });

      params.app.use('/', router)
}
