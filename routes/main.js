module.exports = function (params) {
  params.app.get("/", function (req, res) {
    res.render("index.html", { cloudinary: params.cloudinary })
  });
  params.app.get("/search", function (req, res) {
    res.render("search.html");
  });
  params.app.get("/login", function (req, res) {
    res.render("login.html");
  });
}
