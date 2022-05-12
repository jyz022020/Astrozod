const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class chineseZodiac extends Model {}

chineseZodiac.init(
  {
    animalName: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    luckyNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    luckyColor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    luckyFlowers: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'chineseZodiac',
  }
);

module.exports = chineseZodiac;