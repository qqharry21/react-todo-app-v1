/** @format */

import React, { useState } from 'react';

function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      id: Math.floor(Math.random() * 100),
      text: input,
      isComplete: false,
      timeLine: new Date(),
    });
    console.log(input);
    // reset input
    setInput('');
  };
  const handleInput = e => {
    setInput(e.target.value);
  };
  return (
    <form action='' className='todo-form' onSubmit={handleSubmit}>
      {edit.id ?<input type='text' name='text' className='todo-input' value={input} onChange={handleInput} />
      <button className='todo-button'>Add</button>:<input type='text' name='text' className='todo-input' value={input} onChange={handleInput} />
      <button className='todo-button'>Add</button>}

    </form>
  );
}

export default TodoForm;
