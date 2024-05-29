import React, { useState } from 'react';
import './App.css';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoListTools from './Tools/TodoListTools';
import Divider from './Divider/Divider';
import TodoList from './List/TodoList';

type TodoType = {
  id: number
  text: string
  isChecked: boolean
}

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const handleTextChange = (text:string) => {
    setText(text);
  }

  const handleSubmit = () => {
    console.log(text)
  }

  return (
    <main className="App">
      <TodoHeader/>
      <TodoInput text={text} onTextChange={handleTextChange} onSubmit={handleSubmit}/>
      <TodoListTools/>
      <Divider/>
      <TodoList/>
    </main>
  );
}

export default App;
