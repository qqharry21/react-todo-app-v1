/** @format */

import React, { useState } from 'react';

function Todo({ todos }) {
  return todos.map((todo, index) => (
    <div key={index} className={todo.isComplete ? 'todo-row complete ' : 'todo-row'}>
      <div>{todo.text}</div>
    </div>
  ));
}

export default Todo;
