/** @format */

import React, { useState } from 'react';
import { RiCloseCircleLine, RiEdit2Line } from 'react-icons/ri';
function Todo({ todos, completeTodo }) {
  const [edit, setEdit] = useState({ id: null, value: '' });

  return todos.map((todo, index) => (
    <div key={index} className={todo.isComplete ? 'todo-row complete ' : 'todo-row'}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine />
        <RiEdit2Line />
      </div>
    </div>
  ));
}

export default Todo;
