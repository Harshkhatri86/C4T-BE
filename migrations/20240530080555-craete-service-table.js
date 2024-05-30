'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("Services" , {
      id :{
        type : Sequelize.UUID , 
        defaultValue: Sequelize.UUIDV4 , 
        allowNull : false , 
        primaryKey : true
      } , 
      servicename :{
        type : Sequelize.STRING(255), 
        allowNull : false
      },
      type: {
        type: Sequelize.CHAR(10),
        allowNull: false,
      },
      priceOption: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        references :{
          model: {
            tableName: 'Categories'
          },
          key: 'id',
        }
      },
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("Services")
  }
};
