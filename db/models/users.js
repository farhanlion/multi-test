'use strict';
const {
  Model, Sequelize, DataTypes, fn
} = require('sequelize');

module.exports = (sequelize) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.users.hasMany(models.matches, {
        foreignKey: 'owner_id'
      })
    }
  }

  Users.init({
    id: {
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    user_icon: {
      type: DataTypes.STRING,
      defaultValue: "default_user_icon",
      allowNull: true
    },
  }, {
    sequelize,
    modelName: 'users',
  });
  return Users;
};
