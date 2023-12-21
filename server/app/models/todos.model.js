const db = require('../../db/connection');

exports.fetchTodos = async () => {
	try {
		const todos = await db.query(
			'SELECT * FROM todo ORDER BY date_created DESC;'
		);
		return todos.rows;
	} catch (error) {
		console.error('DB error fetching todos:', error.message);
	}
};

exports.fetchTodo = async (id) => {
	try {
		const todo = await db.query('SELECT * FROM todo WHERE todo_id = $1;', [id]);
		return todo.rows[0];
	} catch (error) {
		console.error('DB error fetching todo:', error.message);
	}
};

exports.addTodo = async (description) => {
	try {
		const todo = await db.query(
			'INSERT INTO todo (description) VALUES ($1) RETURNING *;',
			[description]
		);
		return todo.rows[0];
	} catch (error) {
		console.error('DB error adding todo:', error.message);
	}
};

exports.editTodo = async (id, description) => {
	try {
		await db.query('UPDATE todo SET description = $1 WHERE todo_id = $2;', [
			description,
			id,
		]);
	} catch (error) {
		console.error('DB error editing todo:', error.message);
	}
};

exports.eraseTodo = async (id) => {
	try {
		await db.query('DELETE FROM todo WHERE todo_id = $1;', [id]);
	} catch (error) {
		console.error('DB error erasing todo:', error.message);
	}
};
