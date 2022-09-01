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
      await queryInterface.createTable('matches', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        title: {
          type: DataTypes.STRING
        },
        description: {
          type: DataTypes.STRING
        },
        thumbnail: {
          type: DataTypes.STRING
        },
        owner_id: {
          type: DataTypes.UUID,
          references: { model: 'users', key: 'id' }
        },
        game_id: {
          type: DataTypes.INTEGER,
          references: { model: 'gametags', key: 'id' }
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
      await queryInterface.dropTable('matches')
    } catch (err) {
      console.log(err)
    }
  }
};
