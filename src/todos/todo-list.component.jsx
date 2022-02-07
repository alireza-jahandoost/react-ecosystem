import { useEffect } from "react";
import { connect } from "react-redux";
import { CompleteTodo } from "./actions";
import { loadTodos, removeTodoRequest, completeTodoRequest } from "./thunks";
import { getTodos, getTodosLoading } from "./selectors.js";
import TodoListItem from "./todo-list-item.component";
import NewTodoForm from "./new-todo-form.component";
import "./todo-list.styles.css";

const TodoList = ({
  todos = [],
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
      {todos.map((todo) => (
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
    <div className="list-wrapper">
      <NewTodoForm />
      {ui}
    </div>
  );

  return wrapper(isLoading ? loadingMessage : content);
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onMarkAsCompletePressed: (id) => dispatch(completeTodoRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
