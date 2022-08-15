require('dotenv').config()
const port = 8084;
const express = require("express");
const bodyParser = require('body-parser');
const passport = require('passport');
const login_controller = require('./controllers/loginController');
const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const app = express();

params = {}
params.app = app;
params.cloudinary = cloudinary;
require("./routes/main")(params, passport);
require("./routes/mview_display")(params.app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static('./node_modules/cloudinary-video-player/dist'))
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/public'));

app.set("views", [__dirname + "/views", __dirname + "/views/partials"]);
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);


//Passport Middleware
require('./authentication/local_strategy.passport')(passport, login_controller);

//connection to db
var mysql = require('mysql2/promise');
const db = require("./db/models");

//create connection to mysql
mysql.createConnection({
  user     : process.env.MYSQL_USERNAME,
  password : process.env.MYSQL_PASSW,
  multipleStatements: true
}).then((connection) => {
    //check all models and tables
    db.sequelize.sync({
      alter: true
    })
      .then(() => {
        console.log("Synced db.");
      })
      .catch((err) => {
        console.log("Failed to sync db: " + err.message);
      });
})

app.listen(port, () => console.log(`Multi listening on port ${port}!`));
