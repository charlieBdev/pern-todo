import { Fragment } from 'react';
import './App.css';
import { InputTodo } from './components';
import { ListTodos } from './components';

function App() {
	return (
		<Fragment>
			<div className='container'>
				<InputTodo />
				<ListTodos />
			</div>
		</Fragment>
	);
}

export default App;
