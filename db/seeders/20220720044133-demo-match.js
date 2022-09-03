'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    //  Add seed commands here.

    // insert games
      await queryInterface.bulkInsert('gametags', [{
        id:1,
        name:'Valorant',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660152407/gameicons/valorant.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id:2,
        name:'Rainbow Six Siege',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660152407/gameicons/R6.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id:3,
        name:'CS GO',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660152407/gameicons/CSgo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id:4,
        name:'GTA V',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660152407/gameicons/GTA5.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id:5,
        name:'OverWatch',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660152406/gameicons/overwatch.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id:6,
        name:'Apex',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660202422/gameicons/apex.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id:7,
        name:'BattleField 2042',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660574605/gameicons/Battlefield%202042.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id:8,
        name:'Call of Duty',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660576257/gameicons/COD.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id:9,
        name:'Splitgate',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660576361/gameicons/splitgate.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id:10,
        name:'Elden Ring',
        iconurl: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1660576494/gameicons/elden%20ring.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        id:11,
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
