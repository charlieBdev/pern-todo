// require models

const {
	fetchTodos,
	fetchTodo,
	addTodo,
	editTodo,
	eraseTodo,
} = require('../models/todos.models');

exports.getTodos = async (_, res) => {
	try {
		const todos = await fetchTodos();
		res.json(todos);
	} catch (error) {
		console.error(error.message);
	}
};

exports.getToDo = async (req, res) => {
	try {
		const { id } = req.params;
		const todo = await fetchTodo(id);

		if (todo.length === 0) {
			return res.status(404).json({ message: 'Todo not found' });
		}

		res.json(todo);
	} catch (error) {
		console.error(error.message);
	}
};

exports.postTodo = async (req, res) => {
	try {
		const { description } = req.body;
		const todo = await addTodo(description);
		res.json(todo);
	} catch (error) {
		console.error(error.message);
	}
};

exports.putTodo = async (req, res) => {
	try {
		const { id } = req.params;
		const { description } = req.body;
		const todo = await editTodo(id, description);
		res.json('Todo was updated!');
	} catch (error) {
		console.error(error.message);
	}
};

exports.deleteTodo = async (req, res) => {
	try {
		const { id } = req.params;
		const todo = await eraseTodo(id);
		res.json('Todo was deleted!');
	} catch (error) {
		console.error(error.message);
	}
};
