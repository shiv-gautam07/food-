'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        userId: 2,
        totalAmount: 152.0,
        shippingDetails: JSON.stringify({
          city: "chandigarh",
          email: "saumya@gmail.com",
          notes: "",
          phone: "9999999999",
          state: "chandigarh",
          street: "nehru",
          country: "India",
          zipcode: "123456",
          lastName: "Jain",
          firstName: "Saumya"
        }),
        status: "Pending",
        tax: 2.0,
        discount: 0.0,
        paymentStatus: "Success",
        createdAt: new Date('2025-04-15 06:25:03'),
        updatedAt: new Date('2025-04-15 06:27:13'),
        orderId: "18458209-b45c-4a20-a659-8ae397ea5d61"
      },
      {
        userId: 2,
        totalAmount: 252.0,
        shippingDetails: JSON.stringify({
          city: "chandigarh",
          email: "saumya@gmail.com",
          notes: "",
          phone: "9999999999",
          state: "chandigarh",
          street: "nehru",
          country: "India",
          zipcode: "123456",
          lastName: "Jain",
          firstName: "Saumya"
        }),
        status: "Pending",
        tax: 2.0,
        discount: 0.0,
        paymentStatus: "Success",
        createdAt: new Date('2025-04-15 06:38:07'),
        updatedAt: new Date('2025-04-15 06:38:53'),
        orderId: "6ed2e567-1bc4-48fc-8119-9670a71fbc1c"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', {
      orderId: [
        "18458209-b45c-4a20-a659-8ae397ea5d61",
        "6ed2e567-1bc4-48fc-8119-9670a71fbc1c"
      ]
    }, {});
  }
};
