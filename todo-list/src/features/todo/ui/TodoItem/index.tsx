import styles from "./TodoItem.module.css";
import { BsCheckCircle } from "react-icons/bs";
import { IoIosRemoveCircleOutline } from "react-icons/io";
// import { useCombinedContext } from "../../lib/context";
import { useTodoDispatch } from "../../lib/context/TodoProvider";

interface TodoItemProps {
  id: number;
  text: string;
  isChecked: boolean;
}

export const TodoItem = (props: TodoItemProps) => {
  const todoDispatch = useTodoDispatch();
  // const {todoDispatch} = useCombinedContext();

  const handleToggleClick = () => {
    todoDispatch({
      type: "checked",
      payload: {
        id: props.id,
      },
    });
  };

  const handleRemoveClick = () => {
    todoDispatch({
      type: "remove",
      payload: {
        id: props.id,
      },
    });
  };

  return (
    <li className={styles.container}>
      <BsCheckCircle
        className={[
          styles.checkIcon,
          `${props.isChecked ? styles.checkedCircleItem : styles.unCheckedCircleItem}`,
        ].join(" ")}
        onClick={handleToggleClick}
      />
      <span className={props.isChecked ? styles.lineThrough : ""}>{props.text}</span>
      <IoIosRemoveCircleOutline
        className={styles.removeIcon}
        onClick={handleRemoveClick}
      />
    </li>
  );
};
