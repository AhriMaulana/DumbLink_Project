'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // link.hasMany(models.sosmed, {
      //   as: "sosmed",
      //   foreignKey: {
      //     name: "idlink",
      //   },
      // });
    }
  }
  link.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    titlefacebook: DataTypes.STRING,
    urlfacebook: DataTypes.STRING,
    titletwitter: DataTypes.STRING,
    urltwitter: DataTypes.STRING,
    titleinstagram: DataTypes.STRING,
    urlinstagram: DataTypes.STRING,
    titleyoutube: DataTypes.STRING,
    urlyoutube: DataTypes.STRING,
    titlewhatsapp: DataTypes.STRING,
    urlwhatsapp: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'link',
  });
  return link;
};