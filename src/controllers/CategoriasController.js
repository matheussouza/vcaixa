const router = require('express').Router();
const ErrorBuilder = require('../utils/ErrorBuilder');

const Categoria = require('../models/Categoria');

module.exports = middleware => {
  
  router.get('/categorias', middleware, async (_request, response) => {
    const categorias = await Categoria.findAll();
    return response.json(categorias);
  });
  
  router.post('/categorias', middleware, async (request, response) => {
    const { nome } = request.body;
    try {
      const categoria = await Categoria.create({ nome });
    
      return response.status(201).json({ id: categoria.id });
    } catch (err) {
      return response.status(400).json({ errors: ErrorBuilder.normalizarErroSequelize(err.errors) })
    }
  });

  return router;
}
