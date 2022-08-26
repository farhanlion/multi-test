const db = require("../db/models");
const Videos = db.videos;
const Matches = db.matches;

// navigates to the index page
exports.create = function (params){
  return async function(req, res, next) {

    // create new videos
    const matchid = parseInt(req.body.matchinfo.match_id)
    await Videos.create({
      link: "https://res.cloudinary.com/dvapwslkg/video/upload/v1661406394/"+req.body.videoinfo.public_id+req.body.videoinfo.format,
      match_id: matchid
    });
  };
};
