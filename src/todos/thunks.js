import {
  LoadTodosInProgress,
  LoadTodosSuccess,
  LoadTodosFailure,
  CreateTodo,
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

export const addTodosRequest = (text) => async (dispatch, getState) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch("http://localhost:8080/todos", {
      method: "POST",
      body,
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    });
    const todo = await response.json();
    dispatch(CreateTodo(todo));
  } catch (e) {
    dispatch(displayAlert(e.message));
  }
};
