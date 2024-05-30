"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addColumn("Services", "priceOptions", {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        references: {
          model: {
            tableName: "PriceOptions",
          },
          key: "id",
        },
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeColumn("Services" , "priceOptions")
  },
};
