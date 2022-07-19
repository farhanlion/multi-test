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
  params.app.get("/profile", function (req, res) {
    res.render("profile.html");
  });
  params.app.get("/homepage", function (req, res) {
    res.render("homepage.html");
  });
  params.app.get("/upload", function (req, res) {
    res.render("upload.html");
  });
  params.app.get("/video", function (req, res) {
    res.render("video.html");
  });
}
