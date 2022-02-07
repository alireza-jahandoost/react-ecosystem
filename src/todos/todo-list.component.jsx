import { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { CompleteTodo } from "./actions";
import { loadTodos, removeTodoRequest, completeTodoRequest } from "./thunks";
import {
  getCompletedTodos,
  getIncompleteTodos,
  getTodosLoading,
} from "./selectors.js";
import TodoListItem from "./todo-list-item.component";
import NewTodoForm from "./new-todo-form.component";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const TodoList = ({
  completedTodos,
  incompleteTodos,
  onMarkAsCompletePressed,
  onRemovePressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <>
      <h3>Incomplete Todos:</h3>
      {incompleteTodos.map((todo) => (
        <TodoListItem
          onMarkAsCompletePressed={onMarkAsCompletePressed}
          onRemovePressed={onRemovePressed}
          key={todo.text}
          todo={todo}
        />
      ))}
      <h3>Completed Todos:</h3>
      {completedTodos.map((todo) => (
        <TodoListItem
          onMarkAsCompletePressed={onMarkAsCompletePressed}
          onRemovePressed={onRemovePressed}
          key={todo.text}
          todo={todo}
        />
      ))}
    </>
  );

  const wrapper = (ui) => (
    <ListWrapper>
      <NewTodoForm />
      {ui}
    </ListWrapper>
  );

  return wrapper(isLoading ? loadingMessage : content);
};

const mapStateToProps = (state) => ({
  incompleteTodos: getIncompleteTodos(state),
  completedTodos: getCompletedTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onMarkAsCompletePressed: (id) => dispatch(completeTodoRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
