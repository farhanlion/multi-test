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
      },{
        name:'BattleField 2042',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660574605/gameicons/Battlefield%202042.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:'Call of Duty',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660576257/gameicons/COD.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:'Splitgate',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660576361/gameicons/splitgate.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:'Elden Ring',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660576494/gameicons/elden%20ring.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name:'Genshin Impact',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660576518/gameicons/genshin%20impact.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
    ]);

  },

  async down (queryInterface, Sequelize) {

    //  Add commands to revert seed here.
    //  Example:
     await queryInterface.bulkDelete('matches', null, {});
     await queryInterface.bulkDelete('gametags', null, {});
  }
};
