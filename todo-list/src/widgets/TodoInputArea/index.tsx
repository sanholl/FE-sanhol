import { ReactNode } from "react";
import { useTodoState } from "../../features/todo/lib/context/TodoProvider";

// HOC : High Order Component

interface TodoListAreaProps {
  children:ReactNode
}

export const TodoListArea = (props:TodoListAreaProps) => {
  const todoState = useTodoState();

  if(todoState.todos.length < 1) {
    return null;
  }
  
  return (
    <>
      {props.children}
    </>
  )
};