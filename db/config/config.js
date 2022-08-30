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
    "username": "root",
    "password": null,
    "database": "multi_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};
