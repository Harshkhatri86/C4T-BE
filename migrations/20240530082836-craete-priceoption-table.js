'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("PriceOptions" , {
      id :{
        type : Sequelize.UUID , 
        defaultValue: Sequelize.UUIDV4 , 
        allowNull : false , 
        primaryKey : true
      } , 
      duration :{
        type : Sequelize.STRING(255), 
        allowNull : false
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      type: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      serviceId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        references :{
          model: {
            tableName: 'Services'
          },
          key: 'id',
        }
      },
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("PriceOptions")
  }
};
