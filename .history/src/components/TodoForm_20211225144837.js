/** @format */

import React, { useState, useEffect, useRef } from 'react';

function TodoForm({ onSubmit }) {
  const [input, setInput] = useState('');

  const inputRef = useRef(null);

  useEffect(() => {
    effect;
    return () => {
      cleanup;
    };
  }, [input]);

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ id: Math.floor(Math.random() * 100), text: input, isComplete: false });
    setInput('');
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
        ref={inputRef}
      />
      <button className='todo-button'>Add todo</button>
    </form>
  );
}

export default TodoForm;
