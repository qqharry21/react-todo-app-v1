/** @format */

import React, { useState } from 'react';

function Todo({ todos }) {
  const [edit, setEdit] = useState({ id: null, value: '' });
  const completeTodo = id => {};
  return todos.map((todo, index) => (
    <div key={index} className={todo.isComplete ? 'todo-row complete ' : 'todo-row'}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'></div>
    </div>
  ));
}

export default Todo;
