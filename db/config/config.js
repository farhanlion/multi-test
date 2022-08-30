const fs = require('fs');
require('dotenv').config();
module.exports = {
  development: {
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSW,
    database: 'multi',
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
    "username": process.env.PROD_DB_USER,
    "password": process.env.PROD_DB_PASSWORD,
    "database": process.env.PROD_DB_DB,
    "host": process.env.PROD_DB_HOST,
    "dialect": "mysql"
  },
  // "production": {
  //   "username": "bd25355dd42010",
  //   "password": "b8e302bb",
  //   "database": "heroku_61c14e0186b3f04",
  //   "host": "us-cdbr-east-06.cleardb.net",
  //   "dialect": "mysql"
  // }
};
