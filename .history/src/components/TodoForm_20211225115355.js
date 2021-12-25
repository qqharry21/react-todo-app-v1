/** @format */

import React, { useState } from 'react';

function TodoForm() {
  const [input, setInput] = useState('');

  return (
    <form action='' className='todo-form'>
      <input type='text' placeholder='Add a todo' name='text' value={input} />
    </form>
  );
}

export default TodoForm;
