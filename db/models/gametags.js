'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gametags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.gametags.hasMany(models.matches, {
        foreignKey: 'game_tag_id'
      })
    }
  }
  Gametags.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'gametags',
  });
  return Gametags;
};
