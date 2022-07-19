'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Videos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.videos.hasOne(models.matches, {
        foreignKey: 'match_id'
      })
    }
  }
  Videos.init({
    link: DataTypes.STRING,
    start_time: DataTypes.TIME,
    stop_time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'videos',
  });
  return Videos;
};
