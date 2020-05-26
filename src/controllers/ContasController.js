const router = require('express').Router();
const ErrorBuilder = require('../utils/ErrorBuilder');

const Conta = require('../models/Conta');

module.exports = () => {
  router.post('/contas', async (request, response) => {
    const { email, senha } = request.body;
  
    try {
      const conta = await Conta.create({ email, senha });
    
      return response.status(201).json({ id: conta.id });
    } catch (err) {
      return response.status(400).json({ errors: ErrorBuilder.normalizarErroSequelize(err.errors) })
    }
  });

  return router;
}
