'use strict';

const { v4: uuidv4 } = require ('uuid')

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      id: '4a561702-dd7f-4539-b974-e89d9e3a2a46',
      username: 'Batman',
      email: 'duo@gotham.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082177/multi/users/user1.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'e761917c-70e3-41c6-9a8b-55186d7876a3',
      username: 'Jupiter',
      email: 'ted@planet.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082270/multi/users/user3.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '7f789dc7-5a3d-4190-ab24-7301c9a658bf',
      username: 'Panda',
      email: 'panda@gmail.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082236/multi/users/user2.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'cc8e7359-f060-469c-b0f1-0f53f98c7bc3',
      username: 'Jaguar',
      email: 'red@mail.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082319/multi/users/user4.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '3772f1fe-b69e-4bbf-8510-5e42e81e69f5',
      username: 'Maui',
      email: 'tikka@mail.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082363/multi/users/user5.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '9b4576f2-f07f-4d8d-b7bb-3c9125b9f9e2',
      username: 'Lemon',
      email: 'yellow@mail.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082432/multi/users/user6.ico',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 'e8ee09cb-83d9-477c-bc20-c3778098ab17',
      username: 'Mick',
      email: 'mick@mail.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082495/multi/users/user7.png',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '71040f0b-c6bd-467f-8040-79f307291192',
      username: 'Mad Chef',
      email: 'chef@seafoodrestaurant.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082363/multi/users/user8.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: '6ffdcece-37d0-4d77-a9f4-7d0a1f39a9d0',
      username: 'Ebara',
      email: 'user@mail.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082610/multi/users/default_user_icon.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
