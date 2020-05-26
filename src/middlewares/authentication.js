const jwt = require('jsonwebtoken');
const appKey = require('../config/app').key;

const Conta = require('../models/Conta');

const whitelist = [
  '/login', '/contas'
];

module.exports = (request, response, next) => {
  if (whitelist.includes(request.originalUrl))
    return next();
    
  const token = request.headers.authorization;

  jwt.verify(token, appKey, async (err, decoded) => {
    if (err) {
      return response.status(401).json({ error: 'Token inválido. Autenticação obrigatória.' });
    }

    const conta = await Conta.findByPk(decoded.id);

    if (!conta) {
      return response.status(401).json({ error: 'Token inválido. Autenticação obrigatória.' });
    }
    
    request.ContaAtiva = conta;
    return next();
  })
}