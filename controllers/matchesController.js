require('dotenv').config();
const db = require("../db/models");
const Gametags = db.gametags
const Matches = db.matches;
const Videos = db.videos;
const Users = db.users;
const {
  Op
} = require("sequelize");

// search.
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



// Create and Save a new Match
exports.creatematch = function (params) {
  return async function (req, res, next) {

    var thumbnail = null;


    if (req.body.videos.length == 0) {
      throw new Error('no videos');
    }

    // check user id
    if (!req.user.id) {
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
      var updatedlink;
      var new_public_id = null;
      var old_public_id = req.body.videos[i].public_id;
      var vidstart = req.body.videos[i].vidstart
      var vidstop = req.body.videos[i].vidstop
      var videosrc = req.body.videos[i].link;

      // generate new link for video
      var newlink = "https://res.cloudinary.com/dvapwslkg/video/upload/" + "eo_" + vidstop + ",so_" + vidstart + "/"

      // upload to cloudinary
      params.cloudinary.v2.uploader.upload_large(videosrc, {
        resource_type: "video",
        public_id: old_public_id,
        chunk_size: 6000000,
        eager: [{
          start_offset: vidstart,
          end_offset: vidstop
        }],
        eager_async: true,
        eager_notification_url: process.env.EAGER_URL
      }).then(function (result) {
        console.log(result)

        new_public_id = result.public_id;
        updatedlink = result.eager[0].secure_url;

        if (!thumbnail) {
          match.thumbnail = newlink + result.public_id + ".jpg";
          match.save();
          thumbnail = true;
        }

        Videos.create({
          link: updatedlink,
          public_id: new_public_id,
          match_id: match.id,
        }).then(
          console.log('video created')
        )

      }).catch(error => {
        console.log(error);
      })

    }

    res.json({
      message: "Match was created successfully!"
    });
  }
}


// Update a Match by the id in the request
exports.updatematch = function (params) {
  return async function (req, res, next) {

    var thumbnail = null;


    if (req.body.videos.length == 0) {
      throw new Error('no videos');
    }

    // check user id
    if (!req.user.id) {
      console.error('no user id')
    }

    var match = await Matches.findOne({
      where: {
        id: req.body.matchinfo.id
      },
      include: {
        model: Videos
      }
    });

    // remove all related videos
    if (match.videos.length > 0) {
      await Videos.destroy({
        where: {
          match_id: match.id
        },
      });
    }

    await match.set({
      title: req.body.matchinfo.title,
      description: req.body.matchinfo.description,
      owner_id: req.user.id,
      thumbnail: thumbnail,
      game_id: req.body.matchinfo.gametag_id
    });
    match.save();

    // save all videos to cloudinary
    for (var i = 0; i < req.body.videos.length; i++) {
      var updatedlink;
      var new_public_id = null;
      var old_public_id = req.body.videos[i].public_id;
      var vidstart = req.body.videos[i].vidstart
      var vidstop = req.body.videos[i].vidstop
      var videosrc = req.body.videos[i].link;

      // generate new link for video
      var newlink = "https://res.cloudinary.com/dvapwslkg/video/upload/" + "eo_" + vidstop + ",so_" + vidstart + "/"

      // upload to cloudinary
      params.cloudinary.v2.uploader.upload_large(videosrc, {
          resource_type: "video",
          public_id: old_public_id,
          chunk_size: 6000000,
          eager: [{
            start_offset: vidstart,
            end_offset: vidstop
          }],
          eager_async: true,
          eager_notification_url: process.env.EAGER_URL,
        }).then(function (result) {{
            console.log(result);

            new_public_id = result.public_id;
            updatedlink = result.eager[0].secure_url;

            if (!thumbnail) {
              match.thumbnail = newlink + result.public_id + ".jpg";
              match.save();
              thumbnail = true;
            }
            Videos.create({
              link: updatedlink,
              public_id: new_public_id,
              match_id: match.id,
            }).then(
              console.log('video created')
            )
          }
        });
    }
    res.json({
      message: "Match was updated successfully!"
    });
  }
}

// Delete a Match with the specified id in the request
exports.delete = function (params) {
  return async function (req, res, next) {
    const match = await Matches.findOne({
      where: {
        id: req.params.id
      }
    });
    await match.destroy();
    res.redirect('/profile');
  }
}
