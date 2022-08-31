const db = require("../db/models");
const Videos = db.videos;
const Matches = db.matches;

// navigates to the index page
exports.create = function (params){
  return async function(req, res, next) {

    // create new videos
    const matchid = parseInt(req.body.matchinfo.match_id)
    const video = await Videos.create({
      link: "https://res.cloudinary.com/dvapwslkg/video/upload/v1661406394/"+req.body.videoinfo.public_id+req.body.videoinfo.format,
      match_id: matchid
    });
    video.save()
    res.json({ video_id: video.id })
  };
};

exports.eager = function (params){
  return function(req, res, next) {
    Videos.findOne({
      where: { public_id: req.body.public_id },
    }).then(video => {
      console.log(video)
      var vidstart = req.body.eager[0].transformation.split(",")[1].split("_")[1];
      var vidstop = req.body.eager[0].transformation.split(",")[0].split("_")[1];
      video.link = req.body.eager[0].secure_url
      video.start_time = vidstart
      video.stop_time = vidstop
      video.save();
      console.log("eager video saved")
    }).catch(error => {
      console.log(error);
    })
  }
}
