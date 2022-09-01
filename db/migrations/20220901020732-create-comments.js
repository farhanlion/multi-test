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
      await queryInterface.createTable('comments', {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        comment: {
          type: DataTypes.STRING,
        },
        // user_id: {
        //   type: DataTypes.UUID,
        //   references: { model: 'users', key: 'id' }
        // },
        // match_id: {
        //   type: DataTypes.INTEGER,
        //   references: { model: 'matches', key: 'id' }
        // },
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
      await queryInterface.dropTable('comments')
    } catch (err) {
      console.log(err)
    }
  }
};
