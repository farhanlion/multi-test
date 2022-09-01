'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    try {
      await queryInterface.createTable('gametags', {
        id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        iconurl: {
          type: Sequelize.STRING,
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
      await queryInterface.dropTable('gametags')
    } catch (err) {
      console.log(err)
    }
  }
};
