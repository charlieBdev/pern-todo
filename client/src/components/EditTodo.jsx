import React, { Fragment, useState } from 'react';
import { CiEdit } from 'react-icons/ci';

const EditTodo = ({ todo }) => {
	const [description, setDescription] = useState(todo.description);

	const handleEdit = async (e) => {
		e.preventDefault();
		if (description === '') {
			alert('Enter your edited todo');
			return;
		} else if (description !== todo.description) {
			try {
				const body = { description };
				const response = await fetch(
					`http://localhost:5000/api/todos/${todo.todo_id}`,
					{
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(body),
					}
				);
				if (!response.ok) {
					throw new Error('Failed to edit todo');
				} else {
					setDescription('');
					window.location = '/';
				}
			} catch (error) {
				console.error(error.message);
				alert('Failed to edit todo');
			}
		} else {
			alert('No edits made');
		}
	};

	return (
		<Fragment>
			{/* <!-- Button to Open the Modal --> */}
			<button
				type='button'
				className='btn btn-outline-primary'
				data-bs-toggle='modal'
				data-bs-target={`#id${todo.todo_id}`}
			>
				<CiEdit />
			</button>

			{/* <!-- The Modal --> */}
			<div
				className='modal fade'
				id={`id${todo.todo_id}`}
				onClick={() => {
					setDescription(todo.description);
				}}
			>
				<div className='modal-dialog'>
					<div className='modal-content'>
						{/* <!-- Modal Header --> */}
						<div className='modal-header'>
							<h4 className='modal-title'>Edit Todo</h4>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								onClick={() => {
									setDescription(todo.description);
								}}
							></button>
						</div>

						{/* <!-- Modal body --> */}
						<div className='modal-body'>
							<input
								type='text'
								className='form-control'
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</div>

						{/* <!-- Modal footer --> */}
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-outline-success'
								data-bs-dismiss='modal'
								onClick={(e) => handleEdit(e)}
							>
								Save
							</button>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default EditTodo;
