require('dotenv').config();

const express = require('express');
const path = require('path');
const session = require('express-session');

const app = express();

// =============================
// MIDDLEWARES
// =============================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'barberflow_secret',
  resave: false,
  saveUninitialized: false
}));

// =============================
// STATIC + EJS
// =============================
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// =============================
// ROTAS
// =============================
const authRoutes = require('./routes/auth');
const clienteRoutes = require('./routes/cliente');
const barbeiroRoutes = require('./routes/barbeiro');

app.use(authRoutes);
app.use(clienteRoutes);
app.use(barbeiroRoutes);

// =============================
// PÁGINAS PRINCIPAIS
// =============================
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/cadastro', (req, res) => {
  res.render('cadastro');
});

// =============================
// START SERVER
// =============================
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});