'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Insert data into the 'OrderDishes' table
    await queryInterface.bulkInsert('OrderDishes', [
      { orderId: 3, dishId: 26, quantity: 1 },  // Adding an order-dish entry with orderId 3 and dishId 26
      { orderId: 4, dishId: 1, quantity: 1 },   // Adding an order-dish entry with orderId 4 and dishId 1
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    // Revert the insertion by deleting the specific rows
    await queryInterface.bulkDelete('OrderDishes', {
      orderId: {
        [Sequelize.Op.in]: [3, 4]  // Removing entries where orderId is 3 or 4
      }
    });
  }
};