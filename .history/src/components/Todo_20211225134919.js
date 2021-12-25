/** @format */

import React, { useState } from 'react';

function Todo({ todos }) {
  const [edit, setEdit] = useState({ id: null, value: '' });
  return todos.map((todo, index) => (
    <div key={index} className={todo.isComplete ? 'todo-row complete ' : 'todo-row'}>
      <div key={todo.id}></div>
    </div>
  ));
}

export default Todo;
