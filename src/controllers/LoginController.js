const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = require('express').Router();

const appKey = require('../config/app').key;
const Conta = require('../models/Conta');

module.exports = () => {
  router.post('/login', async (request, response) => {
    const { email, senha } = request.body;
  
    const conta = await Conta.dadoEmail(email);
  
    console.log(conta.senha);
  
    if (!conta || !bcrypt.compareSync(senha, conta.senha)) {
      return response.status(400).json({ error: 'Usuário e/ou senha não cadastrado.' });
    }
  
    const token = jwt.sign({ id: conta.id }, appKey, { expiresIn: 86400 });
    
    return response.json({ token });
  });

  return router;
}
