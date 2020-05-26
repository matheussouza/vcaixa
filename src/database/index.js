const Sequelize = require('sequelize');
const config = require('../config/database');

const Categoria = require('../models/Categoria');
const Conta = require('../models/Conta');
const Movimentacao = require('../models/Movimentacao');

const connection = new Sequelize(config);

Categoria.init(connection);
Conta.init(connection);
Movimentacao.init(connection);

Movimentacao.belongsTo(Categoria, {
  foreignKey: 'categoria_id',
  as: 'categoria'
});

Movimentacao.belongsTo(Conta, {
  foreignKey: 'conta_id',
  as: 'conta'
});

module.exports = connection;
