'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.createTable("User" , {
      id :{
        type : Sequelize.UUID , 
        defaultValue: Sequelize.UUIDV4 , 
        allowNull : false , 
        primaryKey : true
      } , 
      email :{
        type : Sequelize.STRING(255), 
        allowNull : false, 
        unique : true
      }, 
      password :{
        type : Sequelize.STRING, 
        allowNull : false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable("Users")
  }
};
