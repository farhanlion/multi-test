const db = require("../db/models");
const Videos = db.videos;



// navigates to the index page
exports.create = function (params){
  return async function(req, res, next) {
    console.log(req.body)
  };
};
