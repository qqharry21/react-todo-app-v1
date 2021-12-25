/** @format */

import React, { useState } from 'react';
import { RiCloseCircleLine, RiEdit2Line } from 'react-icons/ri';
function Todo({ todos, completeTodo, removeTodo, editTodo }) {
  const [edit, setEdit] = useState({ id: null, value: '' });

  const submitEdit = value => {};
  return todos.map((todo, index) => (
    <div key={index} className={todo.isComplete ? 'todo-row complete ' : 'todo-row'}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
        <RiEdit2Line onClick={() => editTodo(todo.id)} />
      </div>
    </div>
  ));
}

export default Todo;
