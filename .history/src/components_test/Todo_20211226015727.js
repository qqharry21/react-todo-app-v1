/** @format */

import React, { useState } from 'react';
import { RiCloseCircleLine, RiEdit2Line, RiCheckboxCircleLine } from 'react-icons/ri';
import TodoForm from './TodoForm';
function Todo({ todos, completeTodo, updateTodo, deleteTodo }) {
  const [edit, setEdit] = useState({ id: null, value: '' });

  const submitUpdate = value => {
    updateTodo(edit.id, edit.value);
    // reset edit
    setEdit({ id: null, value: '' });
  };

  if (edit.id) {
    return <TodoForm onSubmit={submitUpdate} edit={edit} />;
  }

  return todos.map((todo, index) => (
    <div key={index} className={todo.isComplete ? 'todo-row complete ' : 'todo-row'}>
      <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
      <div className='icons'>
        <RiCloseCircleLine onClick={() => deleteTodo(todo.id)} />
        <RiEdit2Line onClick={e => setEdit({ id: todo.id, value: e.target.value })} />
      </div>
    </div>
  ));
}

export default Todo;
