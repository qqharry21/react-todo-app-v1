/** @format */

import React, { useState } from 'react';

function TodoForm() {
  const [input, setInput] = useState('');
  const handleInput = e => {
    setInput(e.target.value);
  };
  return (
    <form action='' className='todo-form'>
      <input
        type='text'
        className='todo-input'
        placeholder='Add a todo'
        name='text'
        value={input}
        onChange={handleInput}
      />
      <button className='todo-button'>Add todo</button>
    </form>
  );
}

export default TodoForm;
