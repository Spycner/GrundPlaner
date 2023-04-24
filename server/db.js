const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://myuser:mypassword@db:5432/mydb',
});

module.exports = pool;
