'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("Categories" , {
      id :{
        type : Sequelize.UUID , 
        defaultValue: Sequelize.UUIDV4 , 
        allowNull : false , 
        primaryKey : true
      } , 
      name :{
        type : Sequelize.STRING(255), 
        allowNull : false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("Categories")
  }
};
