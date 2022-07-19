require('dotenv').config()
const express = require("express");
var cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const app = express();
const port = 8084;

params = {}
params.app = app;
params.cloudinary = cloudinary;
require("./routes/main")(params);
require("./routes/mview_display")(params.app);
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static('./node_modules/cloudinary-video-player/dist'))
app.use(express.static(__dirname + '/assets'));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//connection to db
var mysql = require('mysql2/promise');
const db = require("./db/models");


mysql.createConnection({
  user     : process.env.MYSQL_USERNAME,
  password : process.env.MYSQL_PASSW,
  multipleStatements: true
}).then((connection) => {
    console.log('created database')
    db.sequelize.sync()
      .then(() => {
        console.log("Synced db.");
      })
      .catch((err) => {
        console.log("Failed to sync db: " + err.message);
      });
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`));
