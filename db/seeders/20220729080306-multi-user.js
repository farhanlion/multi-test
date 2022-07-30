'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      user_name: 'Batman',
      user_email: 'duo@gotham.com',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082177/multi/users/user1.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_name: 'Jupiter',
      user_email: 'ted@planet.com',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082270/multi/users/user3.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_name: 'Panda',
      user_email: 'panda@gmail.com',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082236/multi/users/user2.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_name: 'Jaguar',
      user_email: 'red@mail.com',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082319/multi/users/user4.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_name: 'Maui',
      user_email: 'tikka@mail.com',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082363/multi/users/user5.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_name: 'Lemon',
      user_email: 'yellow@mail.com',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082432/multi/users/user6.ico',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_name: 'Mick',
      user_email: 'mick@mail.com',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082495/multi/users/user7.png',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_name: 'Mad Chef',
      user_email: 'chef@seafoodrestaurant.com',
      user_icon: 'https://res.cloudinary.com/dvapwslkg/image/upload/v1659082363/multi/users/user8.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_name: 'Ebara',
      user_email: 'user@mail.com',
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
