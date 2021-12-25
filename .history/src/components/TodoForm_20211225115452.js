/** @format */

import React, { useState } from 'react';

function TodoForm() {
  const [input, setInput] = useState('');

  return (
    <form action='' className='todo-form'>
      <input
        type='text'
        className='todo-input'
        placeholder='Add a todo'
        name='text'
        value={input}
      />
      <button></button>
    </form>
  );
}

export default TodoForm;
