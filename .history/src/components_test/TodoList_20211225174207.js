/** @format */

import React, { useState } from 'react';

function TodoList() {
  // All the todos are stored in the state
  const [todos, setTodos] = useState([]);

  // This function is called when the form is submitted
  const addTodo = todo => {
    // If the input is empty or no, do nothing
    if (!todo.text || /^\s$/.test(todo.text)) {
    }
  };

  return <div></div>;
}

export default TodoList;
