'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Matches.init({
    owner_id: DataTypes.INTEGER,
    game_tag_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'matches',
  });
  return Matches;
};
