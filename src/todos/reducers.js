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
      const { todo } = payload;

      return state.concat(todo);
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
    case LOAD_TODOS_SUCCESS: {
      const { todos } = payload;
      console.log(payload);

      return [...todos];
    }
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_FAILURE:
    default:
      return state;
  }
};
