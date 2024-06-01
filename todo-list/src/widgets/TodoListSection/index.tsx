import { TodoItem } from "../../entities/ui";
import styles from "./TodoList.module.css";
import { useTodoState } from "../../features/todo/context/TodoProvider";


export const TodoList = () => {
  const todoState = useTodoState();

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
