import React, { useState } from 'react';
import './App.css';
import { Input } from './components/input/input';
import { List } from './components/list/list';

function App() {
  const [todos, changeTodos] = useState([{
    text: 'Premade todo!',
    status: 'false',
    id: 1,
  }]);

  const addTodo = (value) => {
    changeTodos([...todos, value])
  }

  const deleteTodo = (id) => {
    changeTodos(todos.filter((el, index) => index !== id))
  }

  return (
    <div className="App">
      <Input value={todos} changeValue={addTodo} />
      <List items={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
