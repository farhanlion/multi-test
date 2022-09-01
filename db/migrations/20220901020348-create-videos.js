'use strict';
const {
  Model,
  Sequelize,
  DataTypes,
  fn
} = require('sequelize');
module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.createTable('videos', {
        id:{
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
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
          type: DataTypes.INTEGER,
          references: { model: 'matches', key: 'id' }
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

  async down (queryInterface, Sequelize) {
    try {
      await queryInterface.dropTable('videos')
    } catch (err) {
      console.log(err)
    }
  }
};
