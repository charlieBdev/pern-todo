const { Pool } = require('pg');

const db = new Pool({
	user: 'charlesbishop',
	password: 'password',
	host: 'localhost',
	port: 5432,
	database: 'perntodo',
});

module.exports = db;
