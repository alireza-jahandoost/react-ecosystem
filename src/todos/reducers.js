import {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
} from "./actions.js";

export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true;
    case LOAD_TODOS_FAILURE:
    case LOAD_TODOS_SUCCESS:
      return false;
    default:
      return false;
  }
};

export const todos = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;

      const newTodo = {
        text,
        isCompleted: false,
      };

      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;

      return state.filter((todo) => todo.text !== text);
    }
    case COMPLETE_TODO: {
      const { text } = payload;

      return state.map((todo) =>
        todo.text === text ? { ...todo, isCompleted: true } : todo
      );
    }
    default:
      return state;
  }
};
