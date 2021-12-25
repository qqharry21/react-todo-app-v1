/** @format */

import React, { useState } from 'react';

function TodoForm({ onSubmit }) {
  const [input, setInput] = useState('');
  const handleInput = e => {
    setInput(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ id: Math.floor(Math.random() * 100), text: input });
  };
  return (
    <form action='' className='todo-form' onSubmit={handleSubmit}>
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
