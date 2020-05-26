const router = require('express').Router();
const { Op } = require('sequelize');
const Movimentacao = require('../models/Movimentacao');
const Categoria = require('../models/Categoria');

const ErrorBuilder = require('../utils/ErrorBuilder');

module.exports = middleware => {
  router.get('/meu-resumo', middleware, async (request, response) => {
    const conta = request.ContaAtiva;
    const movimentacoes = await Movimentacao.findAll({
      where: {
        conta_id: conta.id,
        data: {
          [Op.gt]: new Date(new Date() - 24 * 60 * 60 * 1000)
        }
      },
      include: ['categoria'],
      attributes: {
        exclude: ['categoria_id', 'conta_id']
      }
    });
    
    return response.json({ saldoTotal: conta.saldo, movimentacoes });
  });
  
  router.post('/movimentacoes', middleware, async (request, response) => {
    const { descricao, valor, categoria_id } = request.body;
    const tipo = valor > 0 ? 'Entrada' : 'Saída';

    if (!(await Categoria.findByPk(categoria_id))) {
      return response.status(400).json({ errors: {
        categoria_id: ['Categoria informada não existe.']
      }});
    }
  
    try {
      const conta = request.ContaAtiva;
      const movimentacao = await Movimentacao.create({ tipo, descricao, valor, categoria_id, conta_id: conta.id });
      conta.saldo += parseFloat(valor);
      conta.save();

      return response.status(201).json({id: movimentacao.id});
    } catch (err) {
      console.log(err);
      return response.status(400).json({ errors: ErrorBuilder.normalizarErroSequelize(err.errors) })
    }
  
  });

  return router;
}
