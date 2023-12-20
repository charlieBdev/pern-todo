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
app.get('/todos/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1;', [
			id,
		]);

		if (todo.rows.length === 0) {
			return res.status(404).json({ message: 'Todo not found' });
		}

		res.json(todo.rows[0]);
	} catch (error) {
		console.error(error.message);
	}
});

// update a todo
app.put('/todos/:id', async (req, res) => {
	const { id } = req.params;
	const { description } = req.body;

	try {
		await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2;', [
			description,
			id,
		]);
		res.json('Todo was updated!');
	} catch (error) {
		console.error(error.message);
	}
});

// delete a todo
app.delete('/todos/:id', async (req, res) => {
	const { id } = req.params;

	try {
		await pool.query('DELETE FROM todo WHERE todo_id = $1;', [id]);
		res.json('Todo was deleted!');
	} catch (error) {
		console.error(error.message);
	}
});

app.listen(5000, () => {
	console.log(`Server is listening at http://localhost:${port}`);
});
