
const bodyParser = require("body-parser");

module.exports = (params) => {
  const pages = require("../controllers/pagesController.js");
  const matches = require("../controllers/matchesController.js");

  // videos controller
  const videos = require("../controllers/videosController.js");

  // users controller
  const credential = require("../controllers/loginController.js");

  var router = require("express").Router();
  var bodyParser = require('body-parser')

  //create application/json parser
  var jsonParser = bodyParser.json()

  // create application/x-www-form-urlencoded parser
  var urlencodedParser = bodyParser.urlencoded({ extended: false })

  //cloudinary config
  const cloudName = params.cloudinary.config().cloud_name;
  const apiKey = params.cloudinary.config().api_key;

  // route to homepage

  router.route("/").get(pages.home(params))

  // search route for homepage
  router.route("/search").get(matches.findAll(params))

  // route to login page
  router.get("/login",function (req, res) {
      const errors = req.flash('Error') || [];
      res.render("pages/login", { errors,user: null });
  });


  // create user
  router.post("/login/create", async function (req, res, next) {
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
          res.render('login.html',{
              error: true
          });
          req.toastr.error('Invalid credentials.');
          res.end();
        })
  });


  router.post("/login/access",urlencodedParser,
     params.passport.authenticate('local',{successRedirect:'/profile', failureRedirect: '/login', failureFlash: true})
  );

  const ensureAuthenticated = (req, res, next) => {
        if(req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
  }


  // route to profile page
  router.route("/profile").get(ensureAuthenticated,pages.profile(params))


  // route to upload page
  router.route("/upload").get(ensureAuthenticated,pages.upload(params))

  // route to edit page
  router.route("/editmatch").get(ensureAuthenticated,pages.edit(params))

  // route to create video
  router.route("/createvideo").post(jsonParser,videos.create(params))

  // route to create match
  router.route("/creatematch").post(jsonParser,matches.creatematch(params))




  params.app.use('/', router)
}
