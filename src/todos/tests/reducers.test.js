import {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  LOAD_TODOS_SUCCESS,
  LOAD_TODOS_FAILURE,
  LOAD_TODOS_IN_PROGRESS,
} from "../actions.js";
import { todos } from "../reducers";

describe("test todos reducer", () => {
  test("check CREATE_TODO action", () => {
    const initialState = {
      data: [
        {
          id: 1,
          createdAt: new Date(Date.now()),
          text: "initial todo",
          isCompleted: true,
        },
      ],
      isLoading: false,
    };

    const fakeTodo = { text: "fake todo" };

    const fakeAction = { type: CREATE_TODO, payload: { todo: fakeTodo } };

    expect(todos(initialState, fakeAction)).toEqual({
      data: [...initialState.data, fakeTodo],
      isLoading: initialState.isLoading,
    });
  });

  test("check REMOVE_TODO action", () => {
    const initialState = {
      data: [
        {
          id: 1,
          createdAt: new Date(Date.now()),
          text: "initial todo",
          isCompleted: true,
        },
      ],
      isLoading: false,
    };

    const fakeTodo = {
      id: 1,
      createdAt: new Date(Date.now()),
      text: "initial todo",
      isCompleted: true,
    };

    const fakeAction = { type: REMOVE_TODO, payload: { todo: fakeTodo } };

    expect(todos(initialState, fakeAction)).toEqual({
      data: [],
      isLoading: initialState.isLoading,
    });
  });

  test("check COMPLETE_TODO action", () => {
    const initialState = {
      data: [
        {
          id: 1,
          createdAt: new Date(Date.now()),
          text: "initial todo",
          isCompleted: false,
        },
      ],
      isLoading: false,
    };

    const fakeTodo = {
      id: 1,
      createdAt: new Date(Date.now()),
      text: "initial todo",
      isCompleted: true,
    };

    const fakeAction = { type: COMPLETE_TODO, payload: { todo: fakeTodo } };

    expect(todos(initialState, fakeAction)).toEqual({
      data: [{ ...initialState.data[0], isCompleted: true }],
      isLoading: initialState.isLoading,
    });
  });

  test("check LOAD_TODOS_SUCCESS action", () => {
    const initialState = {
      data: [],
      isLoading: true,
    };

    const fakeTodos = [
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
    ];

    const fakeAction = {
      type: LOAD_TODOS_SUCCESS,
      payload: { todos: fakeTodos },
    };

    expect(todos(initialState, fakeAction)).toEqual({
      data: fakeTodos,
      isLoading: false,
    });
  });

  test("check LOAD_TODOS_IN_PROGRESS action", () => {
    const initialState = {
      data: [],
      isLoading: false,
    };

    const fakeAction = {
      type: LOAD_TODOS_IN_PROGRESS,
    };

    expect(todos(initialState, fakeAction)).toEqual({
      data: [],
      isLoading: true,
    });
  });

  test("check LOAD_TODOS_FAILURE action", () => {
    const initialState = {
      data: [],
      isLoading: false,
    };

    const fakeAction = {
      type: LOAD_TODOS_FAILURE,
    };

    expect(todos(initialState, fakeAction)).toEqual({
      data: [],
      isLoading: false,
    });
  });

  test("check LOAD_TODOS_SUCCESS action", () => {
    const initialState = {
      data: [],
      isLoading: true,
    };

    const fakeTodos = [
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
    ];

    const fakeAction = {
      type: LOAD_TODOS_SUCCESS,
      payload: { todos: fakeTodos },
    };

    expect(todos(initialState, fakeAction)).toEqual({
      data: fakeTodos,
      isLoading: false,
    });
  });
});
