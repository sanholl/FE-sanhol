import React, { useState } from "react";
import "./App.css";
import TodoHeader from "./Header/TodoHeader";
import TodoInput from "./Input/TodoInput";
import TodoListTools from "./Tools/TodoListTools";
import Divider from "./Divider/Divider";
import TodoList from "./List/TodoList";
import TodoListArea from "./List/TodoListArea";

export type TodoType = {
  id: number;
  text: string;
  isChecked: boolean;
};

function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleTextChange = (text: string) => {
    setText(text);
  };

  const handleSubmit = () => {
    if(!text) return;

    const newTodos = todos.concat({
      id: Date.now(),
      text: text,
      isChecked: false,
    });

    setTodos(newTodos);
    setText("");
  };

  const handleRemove = (id: number) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  };
  const handleToggle = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isChecked: !todo.isChecked,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const isTodoAllChecked = () => {
    return todos.every(todo => todo.isChecked);
  }

  const handleToggleAllClick = () => {
    const isAllChecked = isTodoAllChecked();
    const newTodos = todos.map(todo => {
      return {
        ...todo,
        isChecked: !isAllChecked
      }
    })

    setTodos(newTodos);
  };

  const handleRemoveAllClick = () => {
    setTodos([]);
  };

  return (
    <main className="App">
      <TodoHeader count={todos.filter((todo) => !todo.isChecked).length} />
      <TodoInput
        text={text}
        onTextChange={handleTextChange}
        onSubmit={handleSubmit}
      />
      <TodoListArea todoCount={todos.length}>
        <TodoListTools
          isTodoAllChecked={isTodoAllChecked()}
          onToggleAllClick={handleToggleAllClick}
          onRemoveAllClick={handleRemoveAllClick}
        />
        <Divider />
        <TodoList
          todos={todos}
          onRemoveClick={handleRemove}
          onToggleClick={handleToggle}
        />
      </TodoListArea>
    </main>
  );
}

export default App;
