import { waitFor } from "@testing-library/react";
import {
  displayAlert,
  loadTodos,
  addTodosRequest,
  removeTodoRequest,
  completeTodoRequest,
} from "../thunks";

import {
  LoadTodosInProgress,
  LoadTodosSuccess,
  LoadTodosFailure,
  CreateTodo,
  RemoveTodo,
  CompleteTodo,
} from "../actions";

describe("test displayAlert thunk", () => {
  test("alert function must be called with specified 'text'", () => {
    const spyAlert = jest.spyOn(window, "alert").mockImplementation(() => {});

    const text = "test string";

    displayAlert(text)();

    expect(spyAlert).toHaveBeenCalledWith(text);
    expect(spyAlert).toHaveBeenCalledTimes(1);
  });
});

describe("test loadTodos thunk", () => {
  test("LoadTodosInProgress and LoadTodosSuccess action creators must be dispatched and fetch must be called", async () => {
    const mockedDispatch = jest.fn();

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

    const mockedFetch = jest.spyOn(window, "fetch").mockImplementation(() => ({
      json() {
        return fakeTodos;
      },
    }));

    loadTodos()(mockedDispatch);

    await waitFor(() => expect(mockedDispatch).toHaveBeenCalledTimes(2));
    expect(mockedDispatch).toHaveBeenCalledWith(LoadTodosInProgress());
    expect(mockedDispatch).toHaveBeenCalledWith(LoadTodosSuccess(fakeTodos));
  });
});

describe("test addTodosRequest thunk", () => {
  test("request must be sent and then CreateTodo action creator must be dispatched", async () => {
    const mockedDispatch = jest.fn();

    const fakeTodo = {
      id: 1,
      createdAt: new Date(Date.now()),
      text: "initial todo",
      isCompleted: false,
    };

    const mockedFetch = jest.spyOn(window, "fetch").mockImplementation(() => ({
      json() {
        return fakeTodo;
      },
    }));

    const text = "random text";

    addTodosRequest(text)(mockedDispatch);

    expect(mockedFetch).toHaveBeenCalledWith("http://localhost:8080/todos", {
      method: "POST",
      body: JSON.stringify({ text }),
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
    });
    await waitFor(() =>
      expect(mockedDispatch).toHaveBeenCalledWith(CreateTodo(fakeTodo))
    );
  });
});

describe("test removeTodoRequest thunk", () => {
  test("request must be sent and then RemoveTodo action creator must be dispatched", async () => {
    const mockedDispatch = jest.fn();

    const fakeTodo = {
      id: 1,
      createdAt: new Date(Date.now()),
      text: "initial todo",
      isCompleted: false,
    };

    const mockedFetch = jest.spyOn(window, "fetch").mockImplementation(() => ({
      json() {
        return fakeTodo;
      },
    }));

    const id = 1;

    removeTodoRequest(id)(mockedDispatch);

    expect(mockedFetch).toHaveBeenCalledWith(
      `http://localhost:8080/todos/${id}`,
      {
        method: "DELETE",
      }
    );
    await waitFor(() =>
      expect(mockedDispatch).toHaveBeenCalledWith(RemoveTodo(fakeTodo))
    );
  });
});

describe("test completeTodoRequest thunk", () => {
  test("request must be sent and then CompleteTodo action creator must be dispatched", async () => {
    const mockedDispatch = jest.fn();

    const fakeTodo = {
      id: 1,
      createdAt: new Date(Date.now()),
      text: "initial todo",
      isCompleted: true,
    };

    const mockedFetch = jest.spyOn(window, "fetch").mockImplementation(() => ({
      json() {
        return fakeTodo;
      },
    }));

    const id = 1;

    completeTodoRequest(id)(mockedDispatch);

    expect(mockedFetch).toHaveBeenCalledWith(
      `http://localhost:8080/todos/${id}/completed`,
      {
        method: "POST",
      }
    );
    await waitFor(() =>
      expect(mockedDispatch).toHaveBeenCalledWith(CompleteTodo(fakeTodo))
    );
  });
});
