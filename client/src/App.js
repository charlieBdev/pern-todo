import { Fragment } from 'react';
import './App.css';
import { InputTodo } from './components';
import { ListTodos } from './components';
import { EditTodo } from './components';

function App() {
	return (
		<Fragment>
			<div className='container'>
				<InputTodo />
				<ListTodos />
				<EditTodo />
			</div>
		</Fragment>
	);
}

export default App;
