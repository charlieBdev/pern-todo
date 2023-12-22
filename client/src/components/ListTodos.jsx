import React, { useEffect, useState, Fragment } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { formatTimestamp } from '../utils';
import EditTodo from './EditTodo';

const TodoCard = ({ todo, todos, setTodos }) => {
	const formattedDate = formatTimestamp(todo.date_created);

	const handleDelete = async (id) => {
		const confirmDeletion = window.confirm(
			'Are you sure you want to delete this todo?'
		);

		if (!confirmDeletion) {
			return;
		}

		try {
			// const response = await fetch(`http://localhost:5000/api/todos/${id}`, {
			const response = await fetch(
				`https://perntodo-k667.onrender.com/api/todos/${id}`,
				{
					method: 'DELETE',
				}
			);
			if (response.ok) {
				setTodos(todos.filter((todo) => todo.todo_id !== id));
			}
		} catch (error) {
			console.error(error.message);
			alert('Failed to delete todo');
		}
	};

	return (
		<tr>
			<td>{todo.description}</td>
			<td>{formattedDate}</td>
			<td className='text-center'>
				<EditTodo todo={todo} />
			</td>
			<td className='text-center'>
				<button
					className='btn btn-outline-danger'
					onClick={() => handleDelete(todo.todo_id)}
				>
					<AiOutlineDelete />
				</button>
			</td>
		</tr>
	);
};

const ListTodos = () => {
	const [todos, setTodos] = useState([]);
	const [loading, setLoading] = useState(true);

	const getTodos = async () => {
		try {
			// const response = await fetch('http://localhost:5000/api/todos');
			const response = await fetch(
				'https://perntodo-k667.onrender.com/api/todos'
			);
			const data = await response.json();
			setTodos(data);
		} catch (error) {
			console.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getTodos();
	}, []);

	return (
		<Fragment>
			{loading ? (
				<p>Loading todos...</p>
			) : (
				<table className='table table-hover mt-3'>
					<thead>
						<tr className=''>
							<th>Todo</th>
							<th>Created</th>
							<th className='text-center'>Edit</th>
							<th className='text-center'>Delete</th>
						</tr>
					</thead>
					<tbody>
						{todos.map((todo) => (
							<TodoCard
								key={todo.todo_id}
								todo={todo}
								todos={todos}
								setTodos={setTodos}
							/>
						))}
					</tbody>
				</table>
			)}
		</Fragment>
	);
};

export default ListTodos;
