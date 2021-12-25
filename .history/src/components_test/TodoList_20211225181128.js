/** @format */

import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
function TodoList() {
  // All the todos are stored in the state
  const [todos, setTodos] = useState([]);

  // This function is called when the form is submitted
  const addTodo = todo => {
    // If the input is empty or no, do nothing
    if (!todo.text || /^\s$/.test(todo.text)) {
      return;
    }
    setTodos(prevState => [todo, ...prevState]);
  };

  return (
    <div>
      <h1>Add Some Todo Today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} />
    </div>
  );
}

export default TodoList;
