/** @format */

import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
function TodoList() {
  const [todos, setTodos] = useState([]);
  const addTodo = todo => {
    if (!todo.text || /^\s$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log('todos', todo, ...todos);
  };
  return (
    <div>
      <h1>What's the plan of today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo />
    </div>
  );
}

export default TodoList;
