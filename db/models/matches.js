'use strict';
const {
  Model, DataTypes
} = require('sequelize');
module.exports = (sequelize) => {
  class Matches extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.matches.belongsTo(models.gametags, {
        foreignKey: 'game_tag_id'
      })
      models.matches.hasMany(models.comments, {
        foreignKey: 'match_id'
      })
      models.matches.hasMany(models.videos, {
        foreignKey: 'match_id'
      })
    }
  }
  Matches.init({
    title:DataTypes.STRING,
    description:DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    owner_id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'matches',
  });

  return Matches;
};
