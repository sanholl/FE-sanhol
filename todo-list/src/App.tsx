import "./App.css";
import TodoHeader from "./Header/TodoHeader";
import TodoInput from "./Input/TodoInput";
import TodoListTools from "./Tools/TodoListTools";
import Divider from "./Divider/Divider";
import TodoList from "./List/TodoList";
import TodoListArea from "./List/TodoListArea";
import TodoProvider from "./Todo/TodoProvider";

function App() {
  return (
    <main className="App">
      <TodoProvider>
        <TodoHeader />
        <TodoInput />
        <TodoListArea>
          <TodoListTools />
          <Divider />
          <TodoList/>
        </TodoListArea>
      </TodoProvider>
    </main>
  );
}

export default App;
