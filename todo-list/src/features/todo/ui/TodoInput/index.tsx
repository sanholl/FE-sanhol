import { RiChatNewLine } from "react-icons/ri";
import styles from "./TodoInput.module.css";
import { ChangeEvent, FormEvent } from "react";
import { useInputTodoDispatch, useInputTodoState, useTodoDispatch } from "../../lib/context/TodoProvider";

export const TodoInput = () => {
  const todoDispatch = useTodoDispatch();
  const inputDispatch = useInputTodoDispatch();
  const inputState = useInputTodoState();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    inputDispatch({
      type: "change",
      payload: event.target.value,
    });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!inputState.text) return;

    todoDispatch({
      type: "add",
      payload: {
        text: inputState.text,
      },
    });

    inputDispatch({
      type: "clear",
    });
  };

  return (
    <section className={styles.container}>
      <form
        className={styles.formContainer}
        onSubmit={handleSubmit}
      >
        <input
          className={styles.input}
          placeholder={"해야할 Todo"}
          value={inputState.text}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className={styles.enter}
        >
          <RiChatNewLine />
        </button>
      </form>
    </section>
  );
};
