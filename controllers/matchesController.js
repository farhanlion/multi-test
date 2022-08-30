const db = require("../db/models");
const Gametags = db.gametags
const Matches = db.matches;
const Videos = db.videos;
const Users = db.users;
const {
  Op
} = require("sequelize");

// Create and Save a new Match
exports.creatematch = function (params) {
  return async function (req, res, next) {

    thumbnail = null;

    // save the match
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
          public_id: "Vids/"+old_public_id,
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
            console.log(result);
            new_public_id = result.public_id;
            updatedlink = newlink + result.public_id + "." + result.format;
            if (!thumbnail) {
              match.thumbnail = newlink + result.public_id + ".jpg";
              await match.save();
              thumbnail = true;
            }
            var video = await Videos.create({
              link: updatedlink,
              public_id: new_public_id,
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


// Update a Match by the id in the request
exports.updatematch = function (params) {
  return async function (req, res, next) {
    // save the match
    if (req.body.videos.length == 0) {
      throw new Error('no videos');
    }

    var thumbnail = null;
    if (!req.user.id) {
      console.error('no user id')
    }
    var match = await Matches.findOne({
      where: {
        id: req.body.matchinfo.id
      }
    });
    match.set({
      title: req.body.matchinfo.title,
      description: req.body.matchinfo.description,
      owner_id: req.user.id,
      thumbnail: thumbnail,
      game_id: req.body.matchinfo.gametag_id
    });
    await match.save();

    // save all videos to cloudinary
    for (var i = 0; i < req.body.videos.length; i++) {
      // get video data
      if (req.body.videos[i].id) {
        var videoid = req.body.videos[i].id;
      }

      var updatedlink;
      var old_public_id = req.body.videos[i].public_id;
      var new_public_id = null;
      var vidstart = req.body.videos[i].vidstart
      var vidstop = req.body.videos[i].vidstop
      var videosrc = req.body.videos[i].link;

      // generate new link for video
      var newlink = "https://res.cloudinary.com/dvapwslkg/video/upload/" + "eo_" + vidstop + ",so_" + vidstart + "/"

      // upload to cloudinary
      params.cloudinary.v2.uploader.upload_large(videosrc, {
          resource_type: "video",
          public_id: "Vids/",
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
            public_id = result.public_id;
            var updatedlink = newlink + result.public_id + "." + result.format;
            if (!thumbnail) {
              match.thumbnail = newlink + result.public_id + ".jpg";
              await match.save();
              thumbnail = true;
            }
            if (videoid) {
              var video = await Videos.findOne({
                where: {
                  id: videoid
                }
              });
              video.set({
                link: updatedlink,
                public_id: public_id,
                start_time: vidstart,
                stop_time: vidstop,
                match_id: match.id,
              })
            } else {
              var video = await Videos.create({
                link: updatedlink,
                public_id: public_id,
                start_time: vidstart,
                stop_time: vidstop,
                match_id: match.id,
              })
            }
            await video.save();
            console.log(video.link)
          }
        });
      if (old_public_id) {
        params.cloudinary.v2.uploader.destroy(old_public_id, {
          resource_type: 'video'
        })
      }
    }
    res.json({
      message: "Match was created successfully!"
    });
  }
}


// };


// Delete a Match with the specified id in the request
exports.delete = function (params) {
  return async function (req, res, next) {
    const match = await Matches.findOne({
      where: {
        id: req.params.id
      }
    });
    await match.destroy();
    res.json({
      message: "Match was deleted successfully!"
    });
  }
}
