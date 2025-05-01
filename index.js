const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: isProduction ? { rejectUnauthorized: false } : false
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.send(`Hola desde Render! Hora actual según PostgreSQL: ${result.rows[0].now}`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
