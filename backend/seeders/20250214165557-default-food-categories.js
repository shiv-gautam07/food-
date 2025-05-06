'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('FoodCategories', [
      { name: 'Salad', imagePath: 'public/food-categories/1.png', status: 'Active', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Rolls', imagePath: 'public/food-categories/2.png', status: 'Active', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dessert', imagePath: 'public/food-categories/3.png', status: 'Active', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sandwich', imagePath: 'public/food-categories/4.png', status: 'Active', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cake', imagePath: 'public/food-categories/5.png', status: 'Active', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pasta', imagePath: 'public/food-categories/6.png', status: 'Active', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Noodles', imagePath: 'public/food-categories/7.png', status: 'Active', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Burgers', imagePath: 'public/food-categories/8.jpeg', status: 'Active', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Coffee', imagePath: 'public/food-categories/9.jpg', status: 'Active', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Juice', imagePath: 'public/food-categories/10.jpeg', status: 'Active', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Snacks', imagePath: 'public/food-categories/11.jpg', status: 'Active', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chinese', imagePath: 'public/food-categories/12.jpeg', status: 'Active', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Italian', imagePath: 'public/food-categories/13.jpeg', status: 'Active', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mexican', imagePath: 'public/food-categories/14.jpg', status: 'Active', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Indian', imagePath: 'public/food-categories/15.jpeg', status: 'Active', createdAt: new Date(), updatedAt: new Date() },
      { name: 'Thalis', imagePath: 'public/food-categories/16.avif', status: 'Active', createdAt: new Date(), updatedAt: new Date() },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('FoodCategories', null, {});
  }
};
