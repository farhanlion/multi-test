'use strict';
const {
  Model, Sequelize
} = require('sequelize');
// const {UUIDV4} = require("sequelize/lib/data-types");

module.exports = (sequelize, DataTypes) => {
  class Credential extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Credential.init({
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    dateCreated: Sequelize.INTEGER,
    dateUpdated: Sequelize.INTEGER,
  }, {
    sequelize,
    modelName: 'credential',
    freezeTableName: true,
    timestamps: false
  });
  return Credential;
};
