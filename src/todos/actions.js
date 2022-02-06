export const CREATE_TODO = "CREATE_TODO";
export const CreateTodo = (text) => ({
  type: CREATE_TODO,
  payload: { text },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const RemoveTodo = (text) => ({
  type: REMOVE_TODO,
  payload: { text },
});
