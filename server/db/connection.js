const { Pool } = require('pg');

const ENV = process.env.NODE_ENV || 'development';

const config = {};

// const db = new Pool({
// 	user: 'charlesbishop',
// 	password: 'password',
// 	host: 'localhost',
// 	port: 5432,
// 	database: 'perntodo',
// });

if (ENV === 'production') {
	config.connectionString = process.env.DATABASE_URL;
	config.max = 2;
}

const db = new Pool(config);

module.exports = db;
