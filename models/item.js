'use strict';
module.exports = (sequelize, DataTypes) => {
  const item = sequelize.define('item', {
    id:{
      type:DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },    
    name: DataTypes.STRING,
    brand_id: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER
  }, {
    tableName:"items"
  });
  item.associate = function(models) {
      item.belongsTo(models.brand,{
          as:"brand",
          foreignKey:"brand_id"
      });
  };
  return item;
};