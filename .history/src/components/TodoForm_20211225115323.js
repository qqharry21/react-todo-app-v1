/** @format */

import React, { useState } from 'react';

function TodoForm() {
  const [input, setInput] = useState('');

  return (
    <form action='' className='todo-form'>
      <input type='text' />
    </form>
  );
}

export default TodoForm;
