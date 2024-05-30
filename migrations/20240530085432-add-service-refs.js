"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.removeColumn("Services", "priceOption");
  },

  async down(queryInterface, Sequelize) {
    queryInterface.addColumn("Services", "priceOption", {
      type: Sequelize.UUID,
      allowNull: false,
    });
  },
};
