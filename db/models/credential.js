'use strict';
const {
  Model
} = require('sequelize');
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
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    dateCreated: DataTypes.INTEGER,
    dateUpdated: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'credential',
  });
  return Credential;
};
