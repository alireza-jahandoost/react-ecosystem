import {
  getTodos,
  getTodosLoading,
  getIncompleteTodos,
  getCompletedTodos,
} from "../selectors";

const fakeState = {
  todos: {
    data: [
      {
        id: 1,
        createdAt: new Date(Date.now()),
        text: "initial todo",
        isCompleted: false,
      },
      {
        id: 2,
        createdAt: new Date(Date.now()),
        text: "second todo",
        isCompleted: true,
      },
      {
        id: 3,
        createdAt: new Date(Date.now()),
        text: "third todo",
        isCompleted: true,
      },
      {
        id: 4,
        createdAt: new Date(Date.now()),
        text: "fourth todo",
        isCompleted: false,
      },
    ],
    isLoading: false,
  },
};

test("check getTodos selector", () => {
  expect(getTodos(fakeState)).toEqual(fakeState.todos.data);
});

test("check getTodosLoading selector", () => {
  expect(getTodosLoading(fakeState)).toBe(fakeState.todos.isLoading);
});

test("check getIncompleteTodos selector", () => {
  const todos = fakeState.todos.data;
  const incompleteTodos = todos.filter((todo) => !todo.isCompleted);
  expect(getIncompleteTodos.resultFunc(todos)).toEqual(incompleteTodos);
});

test("check getCompletedTodos selector", () => {
  const todos = fakeState.todos.data;
  const completedTodos = todos.filter((todo) => todo.isCompleted);
  expect(getCompletedTodos.resultFunc(todos)).toEqual(completedTodos);
});
