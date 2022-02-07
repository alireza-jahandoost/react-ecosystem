export const CREATE_TODO = "CREATE_TODO";
export const CreateTodo = (todo) => ({
  type: CREATE_TODO,
  payload: { todo },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const RemoveTodo = (todo) => ({
  type: REMOVE_TODO,
  payload: { todo },
});

export const COMPLETE_TODO = "COMPLETE_TODO";
export const CompleteTodo = (todo) => ({
  type: COMPLETE_TODO,
  payload: { todo },
});

export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";
export const LoadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_SUCCESS";
export const LoadTodosSuccess = (todos) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos },
});

export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";
export const LoadTodosFailure = () => ({
  type: LOAD_TODOS_FAILURE,
});
