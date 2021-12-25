/** @format */

import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
function TodoList() {
  // All the todos are stored in the state
  const [todos, setTodos] = useState([]);

  // This function is called when the form is submitted
  const addTodo = todo => {
    // If the input is empty or no, do nothing
    if (!todo.text || /^\s$/.test(todo.text)) {
      return;
    }
    setTodos(prevState => [todo, ...prevState]);
  };

  // This function is called when the todo is marked as complete
  const completeTodo = id => {
    let updateTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodo);
  };

  const deleteTodo = id => {
    // Filter out the todo without the chosen id
    let restTodos = todos.filter(todo => todo.id !== id);
    setTodos(restTodos);
  };

  const updateTodo = (id, newValue) => {
    if (!newValue || /^\s$/.test(newValue)) {
      return;
    }
    setTodos(prevState => prevState.map(todo => (todo.id === id ? newValue : todo.text)));
  };

  return (
    <div>
      <h1>Add Some Todo Today</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} updateTodo={updateTodo} />
    </div>
  );
}

export default TodoList;
