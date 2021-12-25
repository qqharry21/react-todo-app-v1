/** @format */

import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
function TodoList() {
  const [todos, setTodos] = useState([]);

  // 新增 todo
  const addTodo = todo => {
    if (!todo.text || /^\s$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log('todos', todo, ...todos);
  };

  // 更改 todo 狀態
  const completeTodo = id => {
    let updateTodo = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updateTodo);
  };

  // 移除 todo
  const removeTodo = id => {
    let removeArray = todos.filter(todo => todo.id !== id);
    setTodos(removeArray);
  };

  // 編輯 todo
  const editTodo = (id, newValue) => {
    if (!newValue || /^\s$/.test(newValue)) {
      return;
    }
    setTodos(prevState => prevState.map(todo => (todo.id === id ? newValue : todo.text)));
  };

  return (
    <div>
      <h1>What's the plan of today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} editTodo={editTodo} />
    </div>
  );
}

export default TodoList;
