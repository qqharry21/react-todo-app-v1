/** @format */

import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  return (
    <div>
      <h1>What's the plan of today?</h1>
    </div>
  );
}

export default TodoList;
