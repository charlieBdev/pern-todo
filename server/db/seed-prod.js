const db = require('./connection');

const seed = async () => {
	await db.query(`DROP TABLE IF EXISTS todo;`);
	await db.query(
		`CREATE TABLE todo (
        todo_id SERIAL PRIMARY KEY,
        description VARCHAR(250) NOT NULL,
        complete BOOLEAN DEFAULT false,
        date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        date_completed TIMESTAMP);`
	);
};

seed().then(() => db.end());

// export default seed;
