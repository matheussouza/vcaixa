'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => (
    queryInterface.createTable('movimentacoes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      data: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      tipo: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      valor: {
        type: Sequelize.DECIMAL(2),
        allowNull: false
      },
      descricao: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categorias',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      conta_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'contas',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
    })
  ),

  down: (queryInterface, Sequelize) => (
    queryInterface.dropTable('movimentacoes')
  )
};
