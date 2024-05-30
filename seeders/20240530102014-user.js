// import bcrypt from 'bcrypt' ;
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const password ="Admin123!@#" ; 
    // const hashedPassord = bcrypt.hash(passord , 10) ; 
    return queryInterface.bulkInsert('User', [
      {
        email: 'admin@codesfortomorrow.com',
        password , 
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
