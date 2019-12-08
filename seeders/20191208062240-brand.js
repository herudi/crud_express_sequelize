'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('brands', [
        {
          "name": "Wings",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Wall's",
          "createdAt": new Date(),
          "updatedAt": new Date()
        },
        {
          "name": "Indofood",
          "createdAt": new Date(),
          "updatedAt": new Date()
        }
    ], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('brands');
  }
};
