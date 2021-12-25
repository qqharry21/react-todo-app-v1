/** @format */

import './App.css';
import TodoList from './components/TodoList';

import TodoForm from './components_test/TodoForm';

function App() {
  return (
    <div className='todo-app'>
      <h1>Todo App</h1>
      <TodoForm />
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
