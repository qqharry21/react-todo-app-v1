/** @format */

import React from 'react';

function TodoForm() {
  return (
    <form action='' className='todo-form'>
      <h1>Add Some Todo Today</h1>
      <input type='text' name='text' id='todo-input' />
      <button id='input-button'></button>
    </form>
  );
}

export default TodoForm;
