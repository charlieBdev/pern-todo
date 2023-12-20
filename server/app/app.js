const cors = require('cors');
const express = require('express');
const app = express();
const router = require('./routes/router');

// middleware
app.use(cors());
app.use(express.json()); // req.body

app.get('/', (req, res) => {
	res.send('Hello, World!');
});

app.use('/api', router);

// ROUTES

// delete a todo
// app.delete('/todos/:id', async (req, res) => {
// 	const { id } = req.params;

// 	try {
// 		await pool.query('DELETE FROM todo WHERE todo_id = $1;', [id]);
// 		res.json('Todo was deleted!');
// 	} catch (error) {
// 		console.error(error.message);
// 	}
// });

module.exports = app;
