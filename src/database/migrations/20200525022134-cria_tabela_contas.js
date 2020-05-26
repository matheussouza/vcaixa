'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => (
    queryInterface.createTable('contas', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true
      },
      senha: {
        type: Sequelize.STRING(64),
        allowNull: false
      },
      saldo: {
        type: Sequelize.DECIMAL(2),
        defaultValue: 0
      }
   })
  ),

  down: (queryInterface, Sequelize) => (
    queryInterface.dropTable('contas')
  )
};
