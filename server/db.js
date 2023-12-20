const { Pool } = require('pg');

const pool = new Pool({
	user: 'charlesbishop',
	password: 'password',
	host: 'localhost',
	port: 5432,
	database: 'perntodo',
});

module.exports = pool;
