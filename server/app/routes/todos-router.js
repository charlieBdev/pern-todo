const todosRouter = require('express').Router();

const {
	getToDo,
	getTodos,
	postTodo,
	putTodo,
	deleteTodo,
} = require('../controllers/todos.controller');

todosRouter.route('/').get(getTodos).post(postTodo);

todosRouter.route('/:id').get(getToDo).put(putTodo).delete(deleteTodo);

module.exports = todosRouter;
