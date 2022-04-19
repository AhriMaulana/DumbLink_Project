'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('links', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      titlefacebook: {
        type: Sequelize.STRING
      },
      urlfacebook: {
        type: Sequelize.STRING
      },
      titletwitter: {
        type: Sequelize.STRING
      },
      urltwitter: {
        type: Sequelize.STRING
      },
      titleinstagram: {
        type: Sequelize.STRING
      },
      urlinstagram: {
        type: Sequelize.STRING
      },
      titleyoutube: {
        type: Sequelize.STRING
      },
      urlyoutube: {
        type: Sequelize.STRING
      },
      titlewhatsapp: {
        type: Sequelize.STRING
      },
      urlwhatsapp: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('links');
  }
};