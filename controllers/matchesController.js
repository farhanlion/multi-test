const db = require("../db/models");
const Gametags = db.gametags
const Matches = db.matches;
const Videos = db.videos;
const Users = db.users;
const {
  Op
} = require("sequelize");
// console.log(Matches)

// Create and Save a new Match
exports.creatematch = function (params) {
  return async function (req, res, next) {
    console.log('hi')
    // save the match

    debugger;
    if (req.body.matchinfo.thumbnail) {
      var thumbnail = "https://res.cloudinary.com/dvapwslkg/video/upload/"+req.body.matchinfo.thumbnail+'.jpg';
    } else {
      thumbnail = "https://res.cloudinary.com/dvapwslkg/image/upload/v1569098984/default_match_thumbnail.jpg";
    }
    if (!req.user.id){
      console.error('no user id')
    }
    var match = await Matches.create({
      title: req.body.matchinfo.title,
      description: req.body.matchinfo.description,
      owner_id: req.user.id,
      thumbnail: thumbnail,
      game_id: req.body.matchinfo.gametag_id
    });

    // save all videos to cloudinary
    for (var i = 0; i < req.body.videos.length; i++) {
      // get video data
      var public_id;
      var updatedlink;
      var vidstart = req.body.videos[i].vidstart
      var vidstop = req.body.videos[i].vidstop
      var videosrc = req.body.videos[i].link;

      // generate new link for video
      var newlink = "https://res.cloudinary.com/dvapwslkg/video/upload/" + "eo_" + vidstop + ",so_" + vidstart + "/"

      // upload to cloudinary
      params.cloudinary.v2.uploader.upload_large(videosrc, {
          resource_type: "video",
          public_id: "Vids/"+public_id,
          chunk_size: 6000000,
          eager: [{
            start_offset: vidstart,
            end_offset: vidstop
          }],
          eager_async: true,
        },
        async function (error, result) {
          if (error) {
            console.log(error);
          } else {
            debugger;
            console.log(result);
            public_id = result.public_id;
            updatedlink = newlink + result.public_id + "." + result.format;
            var video = await Videos.create({
              link: updatedlink,
              public_id: public_id,
              start_time: vidstart,
              stop_time: vidstop,
              match_id: match.id,
            })
            console.log(video.link)
          }
        });
    }
    res.json({
      message: "Match was created successfully!"
    });
  }
}

// Retrieve Matches from the search.
exports.findAll = function (params) {
  return async function (req, res, next) {
    const matches = await Matches.findAll({
      where: {
        title: {
          [Op.like]: '%' + req.query.keyword + '%'
        }
      },
      include: {
        model: Gametags
      }
    });
    if (req.user) {
      var user = await Users.findOne({
        where: {
          id: req.user.id
        }
      });
    }

    res.render("pages/search", {
      cloudinary: params.cloudinary,
      matches: matches,
      user: user
    })
  };
};



// Find a single Match with an id
exports.findOne = function (params) {
  return function (req, res) {
    const id = req.query.id;
    var condition = id ? {
      id: id
    } : null;
    Matches.findAll({
        where: condition
      })
      .then(data => {
        res.render("pages/display.html", {
          cloudinary: params.cloudinary,
          match: data
        })
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving Matches."
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
      where: {
        id: id
      }
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
