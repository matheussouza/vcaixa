'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('categorias', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      }
    })
  },

  down: (queryInterface, _Sequelize) => (
    queryInterface.dropTable('categorias')
  )
};
