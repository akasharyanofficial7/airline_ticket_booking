"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("airplanes", [
      {
        modelNumber: "A2020H",
        capacity: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "A2020I",
        capacity: 1280,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "A2020J",
        capacity: 280,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "A2020K",
        capacity: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: "A2020L",
        capacity: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
