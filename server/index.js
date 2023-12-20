const cors = require('cors');
const express = require('express');
const app = express();
const pool = require('./db');
const port = 5000;

// middleware
app.use(cors());
app.use(express.json()); // req.body

app.get('/', (req, res) => {
	res.send('Hello, World!');
});

// ROUTES

// create a todo

app.post('/todos', async (req, res) => {
	try {
		const { description } = req.body;

		const newTodo = await pool.query(
			'INSERT INTO todo (description) VALUES ($1) RETURNING *;',
			[description]
		);

		res.json(newTodo.rows[0]);
	} catch (error) {
		console.error(error.message);
	}
});

// get all todos

app.get('/todos', async (_, res) => {
	try {
		const allTodos = await pool.query('SELECT * FROM todo;');
		res.json(allTodos.rows);
	} catch (err) {
		console.error(err.message);
	}
});

// get a todo

// update a todo

// delete a todo

app.listen(5000, () => {
	console.log(`Server is listening at http://localhost:${port}`);
});
