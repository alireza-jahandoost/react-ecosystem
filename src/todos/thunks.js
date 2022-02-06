import {
  LoadTodosInProgress,
  LoadTodosSuccess,
  LoadTodosFailure,
} from "./actions";

export const displayAlert = (text) => () => {
  alert(text);
};

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(LoadTodosInProgress());
    const response = await fetch("http://localhost:8080/todos");
    const todos = await response.json();
    dispatch(LoadTodosSuccess(todos));
  } catch (e) {
    dispatch(LoadTodosFailure());
    dispatch(displayAlert(e.message));
  }
};
