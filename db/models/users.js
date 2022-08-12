'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.users.hasOne(models.matches, {
        foreignKey: 'owner_id'
      })
    }
  }

  Users.init({
    user_name: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    user_icon: {type: DataTypes.STRING, defaultValue: "default_user_icon"},
    dateCreated: DataTypes.INTEGER,
    dateUpdated: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'users',
  });
  return Users;
};
