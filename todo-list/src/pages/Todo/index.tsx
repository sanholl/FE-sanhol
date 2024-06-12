import { TodoHeader, Divider, TodoListArea, TodoList } from '../../widgets';
import { TodoInput, TodoListTools } from "../../features/todo/ui";
import { TodoProvider } from "../../features/todo/lib/context";

const Todo = () => {
  return (
    <TodoProvider>
      <TodoHeader />
      <TodoInput />
      <TodoListArea>
        <TodoListTools />
        <Divider />
        <TodoList />
      </TodoListArea>
    </TodoProvider>
  );
}

export default Todo;