"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.changeColumn("Services", "priceOption", {
      type: Sequelize.UUID,
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.changeColumn("Services", "priceOption", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
};
