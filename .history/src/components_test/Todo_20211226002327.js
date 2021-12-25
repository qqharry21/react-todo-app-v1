/** @format */

import React, { useState } from 'react';
import { RiCloseCircleLine, RiEdit2Line, RiCheckboxCircleLine } from 'react-icons/ri';
function Todo({ todos, completeTodo, updateTodo, deleteTodo }) {
  return todos.map((todo, index) => (
    <div key={index} className={todo.isComplete ? 'todo-row complete ' : 'todo-row'}>
      <div onClick={() => completeTodo(todo.id)}>{todo.text}</div>
      <div className='icons'>
        <RiCloseCircleLine onClick={deleteTodo} />
        <RiEdit2Line onClick={updateTodo} />
      </div>
    </div>
  ));
}

export default Todo;
