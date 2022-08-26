const db = require("../db/models");
const Gametags = db.gametags
const Matches = db.matches;
const { Op } = require("sequelize");
// console.log(Matches)

// Create and Save a new Match
exports.create = function (params){
  return async function(req, res, next) {
    console.log(req.body)
    var match = await Matches.findOne({ where: { id: req.body.matchinfo.match_id } });
    match.title = req.body.title;
    match.description = req.body.description;
    match.save();
    res.redirect("/");
  }
}

// Retrieve Matches from the search.
exports.findAll = function (params){
  return async function(req, res, next) {
    const matches = await Matches.findAll({ where: {title : {[Op.like]: '%' + req.query.keyword + '%'}}, include: {model: Gametags} });
    res.render("pages/search", { cloudinary: params.cloudinary, matches: matches})
  };
};



// Find a single Match with an id
exports.findOne = function (params){
  return function(req, res) {
    const id = req.query.id;
    var condition = id ? { id: id } : null;
    Matches.findAll({ where: condition })
      .then(data => {
        res.render("pages/display.html", { cloudinary: params.cloudinary, match: data})
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Matches."
        });
      });
  }
};

// Update a Match by the id in the request
// exports.update = (req, res) => {

// };


// Delete a Match with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Matches.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Match was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Match with id=${id}. Maybe Match was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Match with id=" + id
      });
    });
};
