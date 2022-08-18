'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('matches', [{
      title: 'Valorant Five',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      owner_id: '4a561702-dd7f-4539-b974-e89d9e3a2a46',
      thumbnail: "https://res.cloudinary.com/dvapwslkg/video/upload/v1659079963/multi/game1.jpg",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Apex Four',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      thumbnail: "https://res.cloudinary.com/dvapwslkg/video/upload/v1659079963/multi/game2.jpg",
      owner_id: 'e761917c-70e3-41c6-9a8b-55186d7876a3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Fortnite Three',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      thumbnail: "https://res.cloudinary.com/dvapwslkg/video/upload/v1659079963/multi/game3.jpg",
      owner_id: '7f789dc7-5a3d-4190-ab24-7301c9a658bf',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Minecraft Two',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      thumbnail: "https://res.cloudinary.com/dvapwslkg/video/upload/v1659079963/multi/game4.jpg",
      owner_id: 'cc8e7359-f060-469c-b0f1-0f53f98c7bc3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Call-Duty One',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      thumbnail: "https://res.cloudinary.com/dvapwslkg/video/upload/v1659079963/multi/game5.jpg",
      owner_id: '3772f1fe-b69e-4bbf-8510-5e42e81e69f5',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Counter-Strike Six',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      thumbnail: "https://res.cloudinary.com/dvapwslkg/video/upload/v1659079963/multi/game1.jpg",
      owner_id: '9b4576f2-f07f-4d8d-b7bb-3c9125b9f9e2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Video Six',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit minus. Aliquid sed accusamus consectetur commodi voluptate, molestiae eos libero accusantium doloribus impedit, incidunt distinctio quibusdam in, velit aut laboriosam.',
      thumbnail: "https://res.cloudinary.com/dvapwslkg/video/upload/v1659079963/multi/game2.jpg",
      owner_id: '71040f0b-c6bd-467f-8040-79f307291192',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('matches', null, {})
  }
};
