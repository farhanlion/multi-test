const fs = require('fs');
require('dotenv').config();
module.exports = {
  development: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSW,
    database: process.env.MYSQL_DB,
    port: process.env.MYSQL_PORT,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "bd25355dd42010",
    "password": "b8e302bb",
    "database": "heroku_61c14e0186b3f04",
    "host": "us-cdbr-east-06.cleardb.net",
    "dialect": "mysql"
  }
};
