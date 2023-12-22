import React, { Fragment, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';

const InputTodo = () => {
	const [description, setDescription] = useState('');

	const handleSubmit = async (e) => {
		// stops page refresh
		e.preventDefault();

		if (description === '') {
			alert('Add a todo!');
			return;
		}

		try {
			const body = { description };

			// const response = await fetch('http://localhost:5000/api/todos', {
			const response = await fetch(
				'https://perntodo-k667.onrender.com/api/todos',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(body),
				}
			);

			if (!response.ok) {
				throw new Error('Failed to add todo');
			} else {
				setDescription('');
			}

			// not sure if needed
			window.location = '/';
		} catch (error) {
			console.error(error.message);
			alert('Failed to add todo');
		}
	};

	return (
		<Fragment>
			<h1 className='text-center mt-5'>PERN Todo List</h1>
			<form className='mt-3' onSubmit={handleSubmit}>
				<div className='input-group'>
					<input
						type='text'
						className='form-control'
						placeholder='Write a todo...'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
					<button type='submit' className='btn btn-outline-success'>
						<IoMdAdd />
					</button>
				</div>
			</form>
		</Fragment>
	);
};

export default InputTodo;
