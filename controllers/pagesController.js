const db = require("../db/models");
const Gametags = db.gametags
const Matches = db.matches;

// navigates to the index page
exports.home = function (params){
  return async function(req, res, next) {
    const gametags = await Gametags.findAll({ include: {model: Matches} });
    res.render("pages/index", { cloudinary: params.cloudinary, gametags: gametags})
  };
};

// navigates to the index page
exports.upload = function (params){
  return async function(req, res, next) {
    //check logged in
    // if(!req.user){
    //   res.redirect("/login");
    // }
    const match = await Matches.create({
      title: '',
      description: ''
    });
    res.render("pages/upload", { cloudinary: params.cloudinary, match: match})
  };
};
