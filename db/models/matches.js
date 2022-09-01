'use strict';
const {
  Model, Sequelize, DataTypes,
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
      models.matches.belongsTo(models.gametags, {
        foreignKey: {name:'game_id'}
      })
      models.matches.belongsTo(models.users, {
        foreignKey: 'owner_id'
      })
      models.matches.hasMany(models.videos,{
        foreignKey: 'match_id'
      })
    }
  }
  Matches.init({
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },
    title:DataTypes.STRING,
    description:DataTypes.STRING,
    thumbnail: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'matches',
  });

  return Matches;
};
