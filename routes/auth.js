const express = require('express');
const router = express.Router();

const pool = require('../config/db');
const bcrypt = require('bcrypt');

// PÁGINA LOGIN

router.get('/login', (req, res) => {
  res.render('login');
});

// LOGIN 

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    if (!email || !senha) {
      return res.send('Preencha todos os campos');
    }

    const result = await pool.query(
      'SELECT * FROM usuarios WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      return res.send('Usuário não encontrado');
    }

    const user = result.rows[0];

    const senhaValida = await bcrypt.compare(senha, user.senha);

    if (!senhaValida) {
      return res.send('Senha incorreta');
    }

    req.session.user = {
      id: user.id,
      nome: user.nome,
      tipo: user.tipo
    };

    if (user.tipo === 'cliente') {
      return res.redirect('/cliente/dashboard');
    }

    if (user.tipo === 'barbeiro') {
      return res.redirect('/barbeiro/dashboard_barb');
    }

    return res.redirect('/');

  } catch (err) {
    console.error('Erro no login:', err);
    return res.send('Erro interno no servidor');
  }
});

module.exports = router;