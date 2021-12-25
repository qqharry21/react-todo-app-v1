/** @format */

import React, { useState } from 'react';

function TodoForm({ onSubmit }) {
  const [input, setInput] = useState('');
  const handleSubmit = () => {
    e.preventDefault();
    onSubmit({ id: Math.floor(Math.random() * 100), text: input, isComplete: false });
    console.log(input);
    // reset input
    setInput('');
  };
  const handleInput = e => {
    setInput(e.target.value);
  };
  return (
    <form action='' className='todo-form' onSubmit={handleSubmit}>
      <h1>Add Some Todo Today</h1>
      <input type='text' name='text' id='todo-input' value={input} onChange={handleInput} />
      <button id='input-button'>Add</button>
    </form>
  );
}

export default TodoForm;
