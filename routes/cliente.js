const express = require('express');
const router = express.Router();

const pool = require('../config/db');
const bcrypt = require('bcrypt');

// ABRIR PÁGINA
router.get('/cadastro/cliente', (req, res) => {
  res.render('cadastro_cliente');
});

// CADASTRAR
router.post('/cadastro/cliente', async (req, res) => {
  const { nome, email, senha, confirmarSenha } = req.body;

  if (senha !== confirmarSenha) {
    return res.send('Senhas não coincidem');
  }

  try {
    const senhaHash = await bcrypt.hash(senha, 10);

    const usuario = await pool.query(
      'INSERT INTO usuarios (nome, email, senha, tipo) VALUES ($1, $2, $3, $4) RETURNING id',
      [nome, email, senhaHash, 'cliente']
    );

    await pool.query(
      'INSERT INTO clientes (usuario_id) VALUES ($1)',
      [usuario.rows[0].id]
    );

    res.redirect('/login');

  } catch (err) {
    console.error(err);
    res.send('Erro ao cadastrar cliente');
  }
});

module.exports = router;