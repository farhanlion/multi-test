

module.exports = (params) => {

  const matches = require("../controllers/matchesController.js");
  var router = require("express").Router();

  // params.app.get("/",  function (req, res) {
  //   res.render("index.html", { cloudinary: params.cloudinary })
  // });
//   console.log(matches)
//   params.app.get("/", (req, res)=>{
//     console.log(params);
//     res.send('all matches');
// });

  router.route("/").get(matches.findAll(params))



  params.app.use('/', router)
  // params.app.get("/search", function (req, res) {
  //   res.render("search.html");
  // });
  // params.app.get("/login", function (req, res) {
  //   res.render("login.html");
  // });
  // params.app.get("/profile", function (req, res) {
  //   res.render("profile.html");
  // });
}
