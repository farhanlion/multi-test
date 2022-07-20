'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    //  Add seed commands here.

    // insert games
      await queryInterface.bulkInsert('gametags', [{
        name:'Valorant',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:'Rainbow Six Siege',
        createdAt: new Date(),
        updatedAt: new Date()
      }]);

    //insert matches
      await queryInterface.bulkInsert('matches', [{
       title: 'Valorant Match 1',
       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
       game_tag_id:'1',
       createdAt: new Date(),
       updatedAt: new Date()
     },{
       title: 'R6 Match 1',
       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
       game_tag_id:'2',
       createdAt: new Date(),
       updatedAt: new Date()
     }]);

  },

  async down (queryInterface, Sequelize) {

    //  Add commands to revert seed here.
    //  Example:
     await queryInterface.bulkDelete('matches', null, {});
     await queryInterface.bulkDelete('gametags', null, {});
  }
};
