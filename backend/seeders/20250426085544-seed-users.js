'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Sanya',
        lastName: 'Dilshad',
        email: 'sanyadilshad@gmail.com',
        password: '$2b$10$lkWFpnRQWjE//KG.vgViXuhxnfhZQsBYKOAL5pjapWR3gmcNs71Fi',
        createdAt: new Date('2025-02-14 11:42:30'),
        updatedAt: new Date('2025-02-14 11:42:30'),
        role: 'admin'
      },
      {
        firstName: 'Saumya',
        lastName: 'Jain',
        email: 'saumya@gmail.com',
        password: '$2b$10$WGg/Xx0G28RXCPIS6VfgTunpHvKZl6zaz7lKDGQ9xfPq7wlBbzXk2',
        createdAt: new Date('2025-02-17 19:33:38'),
        updatedAt: new Date('2025-02-17 19:33:38'),
        role: 'member'
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {
      email: ['sanyadilshad@gmail.com', 'saumya@gmail.com']
    }, {});
  }
};
