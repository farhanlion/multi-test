'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    //  Add seed commands here.

    // insert games
      await queryInterface.bulkInsert('gametags', [{
        name:'Valorant',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660152407/gameicons/valorant.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:'Rainbow Six Siege',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660152407/gameicons/R6.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:'CS GO',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660152407/gameicons/CSgo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:'GTA V',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660152407/gameicons/GTA5.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:'OverWatch',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660152406/gameicons/overwatch.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:'Apex',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660202422/gameicons/apex.jpg',
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
