require('dotenv').config();
const port = process.env.PORT || 8084;
const express = require("express");
const expressSession = require("express-session");
const bodyParser = require('body-parser');
const passport = require('passport');
const login_controller = require('./controllers/loginController');
const flash = require("connect-flash");
const cookieParser = require('cookie-parser');
var cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
  secure: true
});


const app = express();


params = {}
params.app = app;
params.cloudinary = cloudinary;
params.passport = passport

app.use(expressSession({
  secret: 'SECRET',
  //1 hour equivalent to 3600000 milliseconds
  cookie: {
    maxAge: 60 * 60 * 1000
  },
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

require("./routes/main")(params);
require("./routes/mview_display")(params.app);
app.use(cookieParser());
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static('./node_modules/cloudinary-video-player/dist'))
app.use(express.static('./node_modules/nouislider/dist/'))
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/public'));
app.use('/cloudinary-jquery-file-upload/', express.static(__dirname + '/node_modules/cloudinary-jquery-file-upload/'));
app.use('/blueimp-file-upload/', express.static(__dirname + '/node_modules/blueimp-file-upload'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.set("views", [__dirname + "/views", __dirname + "/views/partials"]);
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
require("./routes/main")(params);

//Passport Middleware
require('./authentication/local_strategy.passport')(passport, login_controller);

//connection to db
var mysql = require('mysql2/promise');
const db = require("./db/models");

//create connection to mysql
if (process.env.NODE_ENV === "production") {

  mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: "bd25355dd42010",
    password: "b8e302bb",
    database: "heroku_61c14e0186b3f04",
    multipleStatements: true
  }).then((connection) => {
    //check all models and tables
    console.log("connected");
  });
} else {
  mysql.createConnection({
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSW,
    multipleStatements: true
  }).then((connection) => {
    //check all models and tables
    db.sequelize.sync({
      force: true
     })
      .then(() => {
        console.log("Synced db.");
      })
      .catch((err) => {
        console.log("Failed to sync db: " + err);
      });
  })
}


app.listen(port, () => console.log(`Multi listening on port ${port}!`));
