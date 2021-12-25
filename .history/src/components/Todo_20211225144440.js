/** @format */

import React, { useState } from 'react';
import { RiCloseCircleLine, RiEdit2Line } from 'react-icons/ri';
import TodoForm from './TodoForm';
function Todo({ todos, completeTodo, removeTodo, editTodo }) {
  const [edit, setEdit] = useState({ id: null, value: '' });

  // 編輯 todo
  const submitEdit = value => {
    editTodo(edit.id, value);
    // 清空編輯狀態
    setEdit({ id: null, value: '' });
  };

  if (edit.id) {
    return <TodoForm onSubmit={submitEdit} />;
  }

  return todos.map((todo, index) => (
    <div key={index} className={todo.isComplete ? 'todo-row complete ' : 'todo-row'}>
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine onClick={() => removeTodo(todo.id)} />
        <RiEdit2Line onClick={() => } />
      </div>
    </div>
  ));
}

export default Todo;
