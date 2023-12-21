import React, { useEffect, useState, Fragment } from 'react';

const TodoCard = ({ todo }) => {
	return (
		<tr>
			<td>{todo.description}</td>
			<td className='text-center'>
				<button className='btn btn-outline-primary'>Edit</button>
			</td>
			<td className='text-center'>
				<button className='btn btn-outline-danger'>Delete</button>
			</td>
		</tr>
	);
};

const ListTodos = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const fetchTodos = async () => {
			try {
				const response = await fetch('http://localhost:5000/api/todos');
				const data = await response.json();
				console.log(data, '<<< data');
				setTodos(data);
			} catch (error) {
				console.error(error.message);
			}
		};
		fetchTodos();
	}, []);

	return (
		<Fragment>
			<table class='table table-hover mt-3'>
				<thead>
					<tr className='text-center'>
						<th>Description</th>
						<th>Edit</th>
						<th>Delete</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((todo, index) => (
						<TodoCard key={todo.todo_id} todo={todo} index={index} />
					))}
				</tbody>
			</table>
		</Fragment>
	);
};

export default ListTodos;
