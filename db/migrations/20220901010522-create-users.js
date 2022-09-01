'use strict';
const {
  Model,
  Sequelize,
  DataTypes,
  fn
} = require('sequelize');
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('users', {
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
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
      })
    } catch (err) {
      console.log(err)
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.dropTable('users')
    } catch (err) {
      console.log(err)
    }
  }
};
