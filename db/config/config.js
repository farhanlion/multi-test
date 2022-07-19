const fs = require('fs');
require('dotenv').config();
module.exports = {
  development: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSW,
    database: 'multi',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  }
};
