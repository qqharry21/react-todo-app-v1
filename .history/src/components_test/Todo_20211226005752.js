/** @format */

import React, { useState } from 'react';
import { RiCloseCircleLine, RiEdit2Line, RiCheckboxCircleLine } from 'react-icons/ri';
import TodoForm from './TodoForm';
function Todo({ todos, completeTodo, updateTodo, deleteTodo }) {
  const [edit, setEdit] = useState({ id: null, value: '' });

  const submitUpdate = e => {};

  if (edit.id) {
    return <TodoForm onSubmit={updateTodo} />;
  }

  return todos.map((todo, index) => (
    <div key={index} className={todo.isComplete ? 'todo-row complete ' : 'todo-row'}>
      <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
      <div className='icons'>
        <RiCloseCircleLine onClick={deleteTodo} />
        <RiEdit2Line onClick={e => setEdit({ id: todo.id, value: e.target.value })} />
      </div>
    </div>
  ));
}

export default Todo;
