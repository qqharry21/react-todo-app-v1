/** @format */

import React, { useState } from 'react';
import { RiCloseCircleLine, RiEdit2Line, RiCheckboxCircleLine } from 'react-icons/ri';
function Todo({ todos, completeTodo }) {
  return todos.map((todo, index) => (
    <div key={index} className={todo.isComplete ? 'todo-row complete ' : 'todo-row'}>
      <div>{todo.text}</div>
      <div className='icons'>
        <RiCloseCircleLine />
        <RiEdit2Line />
      </div>
    </div>
  ));
}

export default Todo;
