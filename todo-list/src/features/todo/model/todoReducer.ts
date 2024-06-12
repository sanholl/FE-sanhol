import { TodoType } from "../../../entities/todo/model"
import { saveTodos } from "../lib/storage/todoStorage"

export type TodoStateType = {
  todos: TodoType[]
}

// add, remove, checked, allChecked, allRemove
export type TodoActionType = {
  type: 'add'
  payload: {
    text: string
  }
} | {
  type: 'remove'
  payload: {
    id: number
  }
} | {
  type: 'checked'
  payload: {
    id: number
  }
} | {
  type: 'allRemove'
} | {
  type: 'allChecked'
  payload: boolean
}


export const todoReducer = (state:TodoStateType, action:TodoActionType) => {
  switch (action.type) {
    case 'add': {
      const newTodos = state.todos.concat({
        id: Date.now(),
        text: action.payload.text,
        isChecked: false,
      })
      
      saveTodos(newTodos);

      return {
        todos: newTodos
      }
    }
    case 'remove': {
      const newTodos = state.todos.filter((todo) => {
        return todo.id !== action.payload.id;
      });

      saveTodos(newTodos);
    
      return {
        todos: newTodos
      }
    }
    case 'checked': {
      const newTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            isChecked: !todo.isChecked,
          };
        }
  
        return todo;
      });

      saveTodos(newTodos)
    
      return {
        todos: newTodos
      }
    }
    case 'allRemove': {
      saveTodos([]);

      return {
        todos: []
      }
    }
    case 'allChecked': {
      const newTodos = state.todos.map(todo => {
        return {
          ...todo,
          isChecked: !action.payload
        }
      });

      saveTodos(newTodos);
      
      return {
        todos: newTodos
      }
    }
  }
}