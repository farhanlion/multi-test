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
      // models.videos.hasOne(models.matches, {
      //   foreignKey: 'match_id'
      // })
      models.videos.belongsTo(models.matches, {
        foreignKey: 'match_id'
      })
    }
  }
  Videos.init({
    link: {
      type: DataTypes.STRING
    },
    start_time: {
      type: DataTypes.DOUBLE,
      defaultValue: 0
    },
    stop_time: {
      type: DataTypes.DOUBLE,
    },
    public_id: {
      type: DataTypes.STRING
    },
    match_id: {
      type: DataTypes.INTEGER
    },
  }, {
    sequelize,
    modelName: 'videos',
  });
  return Videos;
};
