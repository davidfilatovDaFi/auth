const { Pool } = require('pg')

const pool = new Pool({
  user: 'postgres',
  password: 'dafi',
  host: 'localhost',
  port: 5000,
  database: 'auth',
})

module.exports = pool

