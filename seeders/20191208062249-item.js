'use strict';

module.exports = {
  up : function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('items', [
      {
        "name": "Magnum",
        "brand_id": 2,
        "price": 18000,
        "stock": 100,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Cornetto",
        "brand_id": 2,
        "price": 14000,
        "stock": 50,
        "createdAt": new Date(),
        "updatedAt": new Date()
      },
      {
        "name": "Dungdung",
        "brand_id": 2,
        "price": 10000,
        "stock": 50,
        "createdAt": new Date(),
        "updatedAt": new Date()
      }
    ], {});
  },

  down : function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('items');
  }
};
