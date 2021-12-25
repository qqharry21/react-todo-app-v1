/** @format */

import React, { useState } from 'react';

function TodoForm() {
  const [input, setInput] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    console.log(input);
    setInput('');
  };
  const handleInput
  return (
    <form action='' className='todo-form' onSubmit={handleSubmit}>
      <h1>Add Some Todo Today</h1>
      <input type='text' name='text' id='todo-input' value={input} onChange={handleInput} />
      <button id='input-button'>Add</button>
    </form>
  );
}

export default TodoForm;
