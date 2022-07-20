const fs = require('fs');
require('dotenv').config();
module.exports = {
  development: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSW,
    database: process.env.MYSQL_DB,
    host: 'localhost',
    port: process.env.MYSQL_PORT,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  }
};
