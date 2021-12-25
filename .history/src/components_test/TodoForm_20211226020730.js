/** @format */

import React, { useState, useEffect, useRef } from 'react';

function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.value : '');
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
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
      {edit ? (
        <>
          <input
            type='text'
            name='text'
            className='todo-input edit'
            value={input}
            onChange={handleInput}
            ref={inputRef}
          />
          <button className='todo-button'>Update</button>
        </>
      ) : (
        <>
          <input
            type='text'
            name='text'
            className='todo-input'
            value={input}
            onChange={handleInput}
            ref={inputRef}
          />
          <button className='todo-button'>Add</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
