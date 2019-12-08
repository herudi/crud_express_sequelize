'use strict';
module.exports = (sequelize, DataTypes) => {
  const brand = sequelize.define('brand', {
  	id:{
	   type:DataTypes.INTEGER,
	   autoIncrement: true,
       primaryKey: true
  	},
    name: DataTypes.STRING
  }, {
	tableName:"brands"
  });
  brand.associate = function(models) {
    brand.hasMany(models.item,{
    	as:'items',
    	foreignKey:'brand_id'
    });
  };
  return brand;
};