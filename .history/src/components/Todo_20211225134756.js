/** @format */

import React, { useState } from 'react';

function Todo({ todos }) {
  const [edit, setEdit] = useState({ id: null, value: '' });
  return todos.map((todo, index) => <div key={index} className={todo.isComplete ?'todo-row complete ':}></div>);
}

export default Todo;
