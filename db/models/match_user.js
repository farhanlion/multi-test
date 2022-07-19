'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Match_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Match_user.init({
    user_id: DataTypes.INTEGER,
    match_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'match_user',
  });
  return Match_user;
};
