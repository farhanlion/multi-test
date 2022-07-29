'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('matches', [{
      title: 'Valorant Five',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      owner_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Apex Four',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      owner_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Fortnite Three',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      owner_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Minecraft Two',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      owner_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Call-Duty One',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      owner_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Counter-Strike Six',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      owner_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Video Six',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      owner_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    ])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('matches', null, {})
  }
};
