'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sosmed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sosmed.init({
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    idLink: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'sosmed',
  });
  return sosmed;
};