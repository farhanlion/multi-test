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
      models.matches.belongsTo(models.matches, {
        foreignKey: 'match_id'
      })
      models.matches.belongsTo(models.users, {
        foreignKey: 'user_id'
      })
    }
  }
  Match_user.init({
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: DataTypes.UUID,
    match_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'match_user',
  });
  return Match_user;
};
