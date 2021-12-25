/** @format */

import React, { useState } from 'react';
import TodoForm from './TodoForm';
function TodoList() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <h1>What's the plan of today?</h1>
      <TodoForm></TodoForm>
    </div>
  );
}

export default TodoList;