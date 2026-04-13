const express = require('express');
const router = express.Router();

const pool = require('../config/db');
const bcrypt = require('bcrypt');

// ABRIR PÁGINA DE CADASTRO
router.get('/cadastro/barbeiro', (req, res) => {
  res.render('cadastro_barbeiro');
});

// CADASTRAR
router.post('/cadastro/barbeiro', async (req, res) => {
  console.log('Dados recebidos:', req.body);
  const { nome, barbearia, endereco, email, senha, confirmarSenha } = req.body;

  if (senha !== confirmarSenha) {
    return res.send('Senhas não coincidem');
  }

  try {
    const senhaHash = await bcrypt.hash(senha, 10);

    const usuario = await pool.query(
      'INSERT INTO usuarios (nome, email, senha, tipo) VALUES ($1, $2, $3, $4) RETURNING id',
      [nome, email, senhaHash, 'barbeiro']
    );

    await pool.query(
      'INSERT INTO barbeiros (usuario_id, barbearia, endereco) VALUES ($1, $2, $3)',
      [usuario.rows[0].id, barbearia, endereco]
    );

    res.redirect('/login');

  } catch (err) {
    console.error(err);
    res.send('Erro ao cadastrar barbeiro');
  }
});

// DASHBOARD
router.get('/barbeiro/dashboard_barb', (req, res) => {
  res.render('barbeiro/dashboard_barb');
});

// AGENDA
router.get('/barbeiro/agenda', (req, res) => {
  res.render('barbeiro/agenda');
});

// SERVIÇOS
router.get('/barbeiro/servicos', (req, res) => {
  res.render('barbeiro/servicos');
});

module.exports = router;