import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";
import { TodoInputActionType, TodoInputStateType, todoInputReducer } from "../model/todoInputReducer";
import { TodoActionType, TodoStateType, todoReducer } from "../model/todoReducer";
import { loadTodos } from "../storage/todoStorage";

interface TodoProviderProps {
  children: ReactNode;
}

const TodoStateContext = createContext<TodoStateType | null>(null);
const TodoDispatchContext = createContext<Dispatch<TodoActionType> | null>(null);
const InputTodoContext = createContext<TodoInputStateType | null>(null);
const InputTodoDispatchContext = createContext<Dispatch<TodoInputActionType> | null>(null);

export const TodoProvider = (props: TodoProviderProps) => {
  const [inputState, inputDispatch] = useReducer(todoInputReducer, { text: "" });
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: loadTodos() });

  return (
    <TodoStateContext.Provider value={todoState}>
      <TodoDispatchContext.Provider value={todoDispatch}>
        <InputTodoContext.Provider value={inputState}>
          <InputTodoDispatchContext.Provider value={inputDispatch}>
            {props.children}
          </InputTodoDispatchContext.Provider>
        </InputTodoContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const value = useContext(TodoStateContext);

  if(!value) {
    throw new Error('cannot find useTodoState');
  }

  return value;
}
export const useTodoDispatch = () => {
  const value = useContext(TodoDispatchContext);

  if(!value) {
    throw new Error('cannot find useTodoDispatch');
  }

  return value;
}
export const useInputTodoState = () => {
  const value = useContext(InputTodoContext);

  if(!value) {
    throw new Error('cannot find inputTodoContext');
  }

  return value;
}
export const useInputTodoDispatch = () => {
  const value = useContext(InputTodoDispatchContext);

  if(!value) {
    throw new Error('cannot find inputTodoDispatchContext');
  }

  return value;
}
