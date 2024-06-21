// import { useCombinedContext } from "../../features/todo/lib/context";
import { TodoItem } from "../../features/todo/ui";
import styles from "./TodoList.module.css";
import { useTodoState } from "../../features/todo/lib/context/TodoProvider";


export const TodoList = () => {
  const todoState = useTodoState();
  // const {todoState} = useCombinedContext();

  return (
    <section>
      <ol className={styles.olContainer}>
        {todoState.todos.map((todo, index) => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              isChecked={todo.isChecked}
            />
          );
        })}
      </ol>
    </section>
  );
};
