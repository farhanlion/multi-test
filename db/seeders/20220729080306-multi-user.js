'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      username: 'Batman',
      email: 'duo@gotham.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082177/multi/users/user1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Jupiter',
      email: 'ted@planet.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082270/multi/users/user3.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Panda',
      email: 'panda@gmail.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082236/multi/users/user2.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Jaguar',
      email: 'red@mail.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082319/multi/users/user4.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Maui',
      email: 'tikka@mail.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082363/multi/users/user5.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Lemon',
      email: 'yellow@mail.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082432/multi/users/user6.ico',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Mick',
      email: 'mick@mail.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082495/multi/users/user7.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Mad Chef',
      email: 'chef@seafoodrestaurant.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082363/multi/users/user8.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'Ebara',
      email: 'user@mail.com',
      password: 'user',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082610/multi/users/default_user_icon.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
