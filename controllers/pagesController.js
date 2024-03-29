const db = require("../db/models");
const Gametags = db.gametags
const Matches = db.matches;
const Users = db.users;
const Videos = db.videos;
const {
  sequelize
} = require("../db/models")
const {
  QueryTypes
} = require("sequelize")

// navigates to the homepage
exports.home = function (params) {
  return async function (req, res, next) {
    try{
      const gametags = await Gametags.findAll({
        subQuery: false,
      });
      if (req.user) {
        var user = await Users.findOne({
          where: {
            id: req.user.id
          }
        });
      }

      const recentlyadded = await Matches.findAll({
        order: [
          ['updatedAt', 'DESC']
        ],
        limit: 10
      });

      const valorantmatches = await Matches.findAll({
        where: {
          game_id: 1
        },
        order: [
          ['updatedAt', 'DESC']
        ],
        limit: 10
      })
      const r6matches = await Matches.findAll({
        where: {
          game_id: 2
        },
        order: [
          ['updatedAt', 'DESC']
        ],
        limit: 10
      })
      const gtamatches = await Matches.findAll({
        where: {
          game_id: 3
        },
        order: [
          ['updatedAt', 'DESC']
        ],
        limit: 10
      })
      const overwatchmatches = await Matches.findAll({
        where: {
          game_id: 4
        },
        order: [
          ['updatedAt', 'DESC']
        ],
        limit: 10
      })

      const matches = {
        recentlyadded: recentlyadded,
        valorant: valorantmatches,
        r6: r6matches,
        gta: gtamatches,
        overwatch: overwatchmatches
      }

      res.render("pages/index", {
        cloudinary: params.cloudinary,
        matches: matches,
        gametags: gametags,
        user: user,
        page: 'home',
      })
    } catch (error) {
      console.log(error)
    }
  };
};

// navigates to the index page
exports.upload = function (params) {
  return async function (req, res, next) {
    const gametags = await Gametags.findAll();
    const match = await Matches.build({
      title: '',
      description: '',
      owner_id: req.user.id,
    });
    if (req.user) {
      var user = await Users.findOne({
        where: {
          id: req.user.id
        }
      });
    }

    res.render("pages/upload", {
      mode: 'new',
      cloudinary: params.cloudinary,
      gametags: gametags,
      match: match,
      user: user,
      page: 'upload',
    })
  };
};

exports.edit = function (params) {
  return async function (req, res, next) {
    const gametags = await Gametags.findAll();
    const match = await Matches.findOne({
      where: {
        id: req.query.match_id
      },
      include: [{
        model: Gametags
      }, {
        model: Videos
      }]
    });
    if (req.user) {
      var user = await Users.findOne({
        where: {
          id: req.user.id
        }
      });
    }

    res.render("pages/upload", {
      mode: 'edit',
      cloudinary: params.cloudinary,
      gametags: gametags,
      match: match,
      user: user
    })
  };
};


// navigates to the profile page
exports.profile = function (params) {
  return async function (req, res, next) {

    if (req.user) {
      var user = await Users.findOne({
        where: {
          id: req.user.id
        },
        include: {
          model: Matches
        }
      });
    }
    res.render("pages/profile", {
      cloudinary: params.cloudinary,
      user: user
    })
  };
};
