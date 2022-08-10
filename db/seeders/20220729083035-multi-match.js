'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('matches', [{
      title: 'Valorant Five',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      owner_id: 1,
      game_id: 1,
      thumbnail: "https://res.cloudinary.com/dvapwslkg/video/upload/v1659079963/multi/game1.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Apex Four',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      thumbnail: "https://res.cloudinary.com/dvapwslkg/video/upload/v1659079963/multi/game2.jpg",
      owner_id: 2,
      game_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Fortnite Three',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      thumbnail: "https://res.cloudinary.com/dvapwslkg/video/upload/v1659079963/multi/game3.jpg",
      owner_id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Minecraft Two',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      thumbnail: "https://res.cloudinary.com/dvapwslkg/video/upload/v1659079963/multi/game4.jpg",
      owner_id: 4,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Call-Duty One',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      thumbnail: "https://res.cloudinary.com/dvapwslkg/video/upload/v1659079963/multi/game5.jpg",
      owner_id: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Counter-Strike Six',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      thumbnail: "https://res.cloudinary.com/dvapwslkg/video/upload/v1659079963/multi/game1.jpg",
      owner_id: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Video Six',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      thumbnail: "https://res.cloudinary.com/dvapwslkg/video/upload/v1659079963/multi/game2.jpg",
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
