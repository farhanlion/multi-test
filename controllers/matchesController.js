const db = require("../db/models");
const Matches = db.matches;
console.log(Matches)

// Create and Save a new Match
exports.create = function (params){
  return function(req, res, next) {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Match
  const match = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };
  // Save Match in the database
  Matches.create(match)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Match."
      });
    });
  }
};

// Retrieve all Matches from the database.
exports.findAll = function (params){
  return function(req, res, next) {
    Matches.findAll()
    .then(data => {
      res.render("pages/index.html", { cloudinary: params.cloudinary, matches: data})
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Matches."
      });
    });
  };
};

// Find a single Match with an id
exports.findOne = function (params){
  return function(req, res, next) {
    const id = req.query.id;
    var condition = id ? { id: id } : null;
    Match.findAll({ where: condition })
      .then(data => {
        res.send(data);
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
